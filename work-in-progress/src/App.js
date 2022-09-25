import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

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
  let [users, setUsers] = useState([]);
  // Event Handlers
  let handleButton = (isIncrease = true) => {
    isIncrease ? setCount((count = count + 1)) : setCount((count = count - 1));
  };

  // useEffect for API calls
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);
  // console.log(users);
  const PersonsList = users.map((user) => {
    return (
      <div className="col">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{user.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{user.email}</h6>
            <p className="card-text">Username: {user.username}</p>
            <p className="card-text">Phone: {user.phone}</p>
            <p className="card-text">Website: {user.website}</p>
            <p className="card-text">City: {user.address.city}</p>
            <p className="card-text">Street: {user.address.street}</p>
            <p className="card-text">Zip: {user.address.zipcode}</p>
          </div>
        </div>
      </div>
    );
  });
  const Card = (props) => {
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
      <div style={cards}>{Person}</div>
      {/* Click Counter */}
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
      {/* Click Counter ends */}
      {/* Persons Container from API call */}

      <div className="container my-4">
        <h2>List of Persons from API call + useEffect</h2>
        <div className="row row-cols-1 row-cols-md-3 g-3">{PersonsList}</div>
      </div>
      {/* Persons Container from API call ends*/}
    </div>
  );
}

export default App;
