import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  // styles for cards
  const cards = {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    justifyItems: "center",
    gap: "10px",
    maxWidth: "1169px",
    margin: "40px auto",
  };
  // styles for card
  const card = {
    border: "2px solid white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: "10px",
    desc: {
      padding: "10px 20px",
    },
  };
  // States
  let [count, setCount] = useState(0);
  let handleButton = (isIncrease = true) => {
    isIncrease ? setCount((count = count + 1)) : setCount((count = count - 1));
    console.log(count);
  };

  const Card = (props) => {
    // console.log(props);
    return (
      <div style={card}>
        <div>
          <img src={logo} alt="" width="300px" />
        </div>
        <div style={card.desc}>
          <h2>
            {props.name} <span>({props.field})</span>
          </h2>
          <p>
            This is a simple card description that doesn't contain any major
            information.
          </p>
        </div>
      </div>
    );
  };
  // Bises Bektigons
  const powerfulPersons = [
    { name: "Jeff Bezos", field: "Rocket Industry, Amazon" },
    { name: "Elon Musk", field: "SpaceX, Tesla, BoringTunnel" },
    { name: "Vladimir Putin", field: "Politician" },
    { name: "Zelensky", field: "Politician" },
  ];

  const Person = powerfulPersons.map((person) => (
    <Card name={person.name} field={person.field}></Card>
  ));
  // console.log(Person);
  return (
    <div className="App">
      <div style={cards}>
        {Person}

        {/* <Card name="Jeff Bezos" />
        <Card name="Elon Musk" />
        <Card name="Vladimir Putin" />
        <Card name="Zelensky" /> */}
      </div>
      <div className="border d-flex flex-column align-items-center py-4">
        <div className="py-1 bg-secondary fs-2 w-25 d-flex justify-content-center text-white rounded">
          {count}
        </div>
        <div className="my-3">
          <div className="btn-group ">
            <div
              className="btn btn-warning"
              onClick={() => handleButton(false)}
            >
              Decrease
            </div>
            <div
              className="btn btn-primary fw-semibold"
              onClick={() => handleButton(true)}
            >
              Increase
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
