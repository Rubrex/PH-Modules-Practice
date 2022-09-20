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
    margin: "0 auto",
    marginTop: "40px",
  };
  // styles for card
  const card = {
    border: "2px solid white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    desc: {
      padding: "10px",
    },
  };

  const Card = () => {
    return (
      <div style={card}>
        <div>
          <img src={logo} alt="" width="300px" />
        </div>
        <div style={card.desc}>
          <h2>A card section</h2>
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
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
