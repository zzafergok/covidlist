import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import DetailModal from '../components/DetailModal';

//TODO: datas içinde datas var bunu halledelim. Zaferciğim!
interface Summaries {
  datas: {
    Country: string;
    Date: string;
    ID: string;
    NewConfirmed: number;
    NewDeaths: number;
    TotalConfirmed: number;
    TotalDeaths: number;
  }[];
}

const SummaryCard: React.FC<Summaries> = ({ ...datas }) => {
  return (
    <>
      <div className='w-100'>
        {datas.datas.map((item: any) => {
          return (
            <Card className='card mb-3' key={item.ID}>
              <Card.Body>
                <Row className='card-position'>
                  <Col>
                    <Card.Title className='card-title'>
                      {item.Country}
                    </Card.Title>
                  </Col>

                  <Col>
                    <Card.Text className='position-relative top-5 '>
                      {item.Date.substr(0, 10)}
                    </Card.Text>
                  </Col>
                  <Col>
                    <DetailModal
                      itemCounty={item.Country}
                      itemNewConfirmed={item.NewConfirmed}
                      itemTotalConfirmed={item.TotalConfirmed}
                      itemNewDeaths={item.NewDeaths}
                      itemTotalDeaths={item.TotalDeaths}
                    />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          );
        })}

        {/* {JSON.stringify(datas.datas)} */}
      </div>
    </>
  );
};

export default SummaryCard;
