import logo from "./logo.svg";
import "./App.css";

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
  console.log(Person);
  return (
    <div className="App">
      <div style={cards}>
        {Person}

        {/* <Card name="Jeff Bezos" />
        <Card name="Elon Musk" />
        <Card name="Vladimir Putin" />
        <Card name="Zelensky" /> */}
      </div>
    </div>
  );
}

export default App;
