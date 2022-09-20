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
    console.log(props);
    return (
      <div style={card}>
        <div>
          <img src={logo} alt="" width="300px" />
        </div>
        <div style={card.desc}>
          <h2>{props.name}</h2>
          <p>
            This is a simple card description that doesn't contain any major
            information.
          </p>
        </div>
      </div>
    );
  };
  return (
    <div className="App">
      <div style={cards}>
        <Card name="Jeff Bezos" />
        <Card name="Elon Musk" />
        <Card name="Vladimir Putin" />
        <Card name="Zelensky" />
      </div>
    </div>
  );
}

export default App;
