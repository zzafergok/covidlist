import React from 'react';
import { Container, Card } from 'react-bootstrap';
import { Table } from 'evergreen-ui';
import { ISummariesData } from '../types/summary.type';
// import axios from 'axios';

interface IProps {
  summariesData?: ISummariesData;
}

const CovidSummary: React.FC<IProps> = ({ summariesData }) => {
  const tableRowName: string[] = [
    'New Confirmed',
    'New Deaths',
    'Total Confirmed',
    'Total Deaths',
  ];

  return (
    <>
      <Container className='mt-3'>
        <Card
          body
          className='mb-3 d-flex align-items-center'
          style={{
            fontSize: 24,
            color: 'lightyellow',
          }}
        >
          {summariesData && summariesData.Global.Date.substr(0, 10)}
        </Card>
        <Table.Body>
          <Table.Head>
            {tableRowName.map((item: string, index: number) => (
              <Table.TextCell key={index}>{item}</Table.TextCell>
            ))}
          </Table.Head>
          <Table.Body>
            <Table.Row>
              {summariesData && (
                <>
                  <Table.TextCell>
                    {summariesData.Global.NewConfirmed}
                  </Table.TextCell>
                  <Table.TextCell>
                    {summariesData.Global.NewDeaths}
                  </Table.TextCell>
                  <Table.TextCell>
                    {summariesData.Global.TotalConfirmed}
                  </Table.TextCell>
                  <Table.TextCell>
                    {' '}
                    {summariesData.Global.TotalDeaths}
                  </Table.TextCell>
                </>
              )}
            </Table.Row>
          </Table.Body>
        </Table.Body>
      </Container>
    </>
  );
};

export default CovidSummary;
