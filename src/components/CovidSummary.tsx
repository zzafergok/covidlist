import React, { useState } from 'react';
import { Container, Row, Col, FormControl, Image } from 'react-bootstrap';
import SummaryCard from '../components/SummaryCard';
import covid from '../assets/images/home_page_image_2.jpg';
import { ISummariesData } from '../types/summary.type';

interface IProps {
  summariesData?: ISummariesData;
}

const CovidSummary: React.FC<IProps> = ({ ...summariesData }) => {
  const [filteredData, setFilteredData] = useState<[]>([]);

  const findCountry = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchWord: string = event.target.value;

    const joinSummariesData: any = summariesData.summariesData;
    const newFilter: any = joinSummariesData.Countries.filter((value: any) => {
      return value.Country.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === '') {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };
  return (
    <>
      <Container>
        <Row className='m-3'>
          <Col className='d-contents'>
            <FormControl
              className='mt-2 mb-5'
              placeholder='Search Country'
              onChange={findCountry}
            />

            {filteredData.length === 0 ? (
              <Image src={covid} className='home-image' />
            ) : (
              <SummaryCard datas={filteredData} />
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CovidSummary;
