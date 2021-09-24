import React, { useEffect, useState } from "react";
import { Container, Card } from "react-bootstrap";
import { Table } from "evergreen-ui";
import axios from "axios";

interface ICovidCountries {
  NewConfirmed: number;
  TotalConfirmed: number;
  NewDeaths: number;
  TotalDeaths: number;
  Date: string;
  Global: any[];
}

const CovidSummary: React.FC<{}> = (props) => {
  const [global, setGlobal] = useState<any>();

  useEffect(() => {
    axios
      .get<ICovidCountries>("https://api.covid19api.com/summary")
      .then((result) => {
        console.log(result.data.Global);
        setGlobal(result.data.Global);
      })
      .catch((err) => {});
  }, []);

  return (
    <>
      <Container className="mt-3">
        <Card
          body
          className="mb-3"
          style={{
            fontSize: 24,
            display: "flex",
            alignItems: "center",
            color: "lightyellow",
          }}
        >
          {global && global.Date.substr(0, 10)}
        </Card>
        <Table.Body>
          <Table.Head>
            <Table.TextCell>New Confirmed</Table.TextCell>
            <Table.TextCell>New Deaths</Table.TextCell>
            <Table.TextCell>Total Confirmed</Table.TextCell>
            <Table.TextCell>Total Deaths</Table.TextCell>
          </Table.Head>
          <Table.Body>
            <Table.Row>
              <Table.TextCell> {global && global.NewConfirmed} </Table.TextCell>
              <Table.TextCell> {global && global.NewDeaths} </Table.TextCell>
              <Table.TextCell>{global && global.TotalConfirmed}</Table.TextCell>
              <Table.TextCell> {global && global.TotalDeaths} </Table.TextCell>
            </Table.Row>
          </Table.Body>
        </Table.Body>
      </Container>
    </>
  );
};

export default CovidSummary;
