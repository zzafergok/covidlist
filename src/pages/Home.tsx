import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import CovidSummary from '../components/CovidSummary';
import CovidGlobal from '../components/CovidGlobal';
import ScrollToTop from 'react-scroll-to-top';

import { AxiosResponse } from 'axios';
import { ISummariesData } from '../types/summary.type';
import SummariesDataService from '../services/summary.services';

const App = () => {
  const [summariesData, setSummariesData] = useState<ISummariesData>();

  useEffect(() => {
    SummariesDataService.getAll().then(
      (response: AxiosResponse<ISummariesData>) => {
        setSummariesData(response.data);
      }
    );
  }, []);
  return (
    <Layout>
      {summariesData ? (
        <>
          <CovidGlobal summariesData={summariesData} />
          <CovidSummary summariesData={summariesData} />
        </>
      ) : (
        'loading...'
      )}
      <ScrollToTop smooth top={5} color='#6f00ff' />
    </Layout>
  );
};

export default App;
