import React, { useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";

interface IProps {
  itemCounty: string;
  itemNewConfirmed: number;
  itemTotalConfirmed: number;
  itemNewDeaths: number;
  itemTotalDeaths: number;
}

const DetailModal: React.FC<IProps> = ({
  itemCounty,
  itemNewConfirmed,
  itemTotalConfirmed,
  itemTotalDeaths,
  itemNewDeaths,
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Country Detail
      </Button>

      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header>
          <Modal.Title>{itemCounty}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table responsive="sm">
            <thead>
              <tr>
                <th>New Confirmed</th>
                <th>New Deaths</th>
                <th>Total Confirmed</th>
                <th>Total Deaths</th>
              </tr>
            </thead>
            <tbody>
              <td style={{ paddingLeft: "3rem" }}>{itemNewConfirmed}</td>
              <td style={{ paddingLeft: "3rem" }}>{itemNewDeaths}</td>
              <td style={{ paddingLeft: "3rem" }}>{itemTotalConfirmed}</td>
              <td style={{ paddingLeft: "3rem" }}>{itemTotalDeaths}</td>
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DetailModal;
