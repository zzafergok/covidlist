import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col, FormControl, Image } from "react-bootstrap";
import DetailModal from "../components/DetailModal";
import axios from "axios";
import covid from "../home_page_image_2.jpg";

interface ICovidCountries {
  Country: string;
  CountryCode: string;
  Date: string;
  ID: string;
  NewConfirmed: number;
  NewDeaths: number;
  NewRecovered: number;
  Premium: object;
  Slug: string;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
  Countries: any[];
}

const CovidSummary: React.FC<{}> = (props) => {
  const [covidCountries, setCovidCountries] = useState<ICovidCountries[]>([]);
  const [filteredData, setFilteredData] = useState<[]>([]);

  useEffect(() => {
    axios
      .get<ICovidCountries>("https://api.covid19api.com/summary")
      .then((result) => {
        setCovidCountries(result.data.Countries);
      })
      .catch((err) => {});
  }, []);

  const findCountry = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchWord: string = event.target.value;

    const newFilter: any = covidCountries.filter((value) => {
      return value.Country.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };
  return (
    <>
      <Container>
        <Row style={{ margin: "12px" }}>
          <Col style={{ display: "contents" }}>
            <FormControl
              className="mt-2 mb-5"
              placeholder="Search Country"
              onChange={findCountry}
            />

            {filteredData.length === 0 ? (
              <div>
                <Image src={covid} className="home-image" />
              </div>
            ) : (
              <div style={{ width: "100%" }}>
                {filteredData.map((item: any) => {
                  return (
                    <Card
                      className="card"
                      style={{ marginBottom: 12 }}
                      key={item.ID}
                    >
                      <Card.Body>
                        <Row>
                          <Col>
                            <Card.Title className="card-title">
                              {item.Country}
                            </Card.Title>
                          </Col>

                          <Col>
                            <Card.Text style={{ position: "relative", top: 5 }}>
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
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CovidSummary;
