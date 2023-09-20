import { useState, ChangeEvent } from "react";
import Head from "next/head";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const history = () => {
  const { numbers } = useSelector((state: RootState) => state.numbers);
  const [displayedNumbers, setDisplayedNumbers] = useState(numbers);

  const sortByNumberHandler = () => {
    setDisplayedNumbers(
      displayedNumbers.toSorted((a, b) => {
        return a.value - b.value;
      })
    );
  };

  const sortByDateHandler = () => {
    setDisplayedNumbers(
      displayedNumbers.toSorted((a, b) => {
        return a.timestamp - b.timestamp;
      })
    );
  };

  const searchHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const matches = [];
    for (const numberObj of numbers) {
      const numberString = numberObj.value.toString();
      if (numberString.includes(event.target.value)) {
        matches.push(numberObj);
      }
    }
    setDisplayedNumbers(matches);
  };

  return (
    <>
      <Head>
        <title>History | Numbers App</title>
      </Head>
      <Container className="py-5 text-center">
        <h1>History</h1>
        <Row className="justify-content-center">
          <Col xl={6}>
            <input
              type="text"
              name="search"
              onChange={searchHandler}
              placeholder="Search..."
              className="my-2"
            />
            {numbers.length === 0 ? (
              <p>No data. Start Generator.</p>
            ) : (
              <Table striped bordered className="mt-2">
                <thead>
                  <tr>
                    <th>
                      <Button variant="link" onClick={sortByDateHandler}>
                        Date
                      </Button>
                    </th>
                    <th>
                      <Button variant="link" onClick={sortByNumberHandler}>
                        Number
                      </Button>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {displayedNumbers.map((oneNumber, index) => {
                    const date = new Date(oneNumber.timestamp);
                    return (
                      <tr key={index}>
                        <td>{date.toLocaleString()}</td>
                        <td>{oneNumber.value}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default history;
