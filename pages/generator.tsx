import { useEffect, useState } from "react";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { numbersAction } from "@/store/numbersSlice";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const Generator = () => {
  const { numbers } = useSelector((state: RootState) => state.numbers);
  const dispatch = useDispatch();
  const [timerIsRunning, setTimerIsRunning] = useState(true);

  const generateAndPushNumber = () => {
    dispatch(
      numbersAction.pushNumber({
        timestamp: Date.now(),
        value: parseFloat((Math.random() * 100).toFixed(2)),
      })
    );
  };

  const timerHandler = () => {
    if (timerIsRunning) {
      setTimerIsRunning(false);
    } else {
      setTimerIsRunning(true);
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timerIsRunning) {
      generateAndPushNumber();
      interval = setInterval(() => {
        generateAndPushNumber();
      }, 15000);
    }
    return () => clearInterval(interval);
  }, [timerIsRunning]);

  return (
    <>
      <Head>
        <title>Generator | Numbers App</title>
      </Head>
      <Container className="text-center p-5">
        <h1>
          {(numbers.length > 0 && numbers[numbers.length - 1].value) || ""}
        </h1>
        <Button
          className="mt-2"
          variant={timerIsRunning ? "danger" : "success"}
          onClick={timerHandler}
        >
          {timerIsRunning ? "Stop Timer" : "Start Timer"}
        </Button>
      </Container>
    </>
  );
};

export default Generator;
