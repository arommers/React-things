import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(1);
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <Stepper step={step} setStep={setStep} />
      <Counter step={step} counter={counter} setCounter={setCounter} />
      <Message counter={counter} />
    </div>
  );
}

function Stepper({ step, setStep }) {
  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 10) setStep((s) => s + 1);
  }

  return (
    <div className="Stepper">
      <button onClick={handlePrevious}>-</button>
      <p>Step: {step}</p>
      <button onClick={handleNext}>+</button>
    </div>
  );
}

function Counter({ step, counter, setCounter }) {
  function handlePrevious() {
    if (counter > 0) setCounter((s) => s - step);
  }

  function handleNext() {
    if (counter < 10) setCounter((s) => s + step);
  }

  return (
    <div className="Stepper">
      <button onClick={handlePrevious}>-</button>
      <p>Count: {counter}</p>
      <button onClick={handleNext}>+</button>
    </div>
  );
}

function Message({ counter }) {
  const today = new Date();
  today.setDate(today.getDate() + counter);

  const formattedDate = today.toDateString();

  return <p> {`${counter} days from today is ${formattedDate}`}</p>;
}
