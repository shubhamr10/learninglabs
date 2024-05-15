import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <br />
      <br />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1
      // style={{ color: "red", fontSize: "50px", textTransform: "uppercase" }}
      >
        Pizza Palace Co.
      </h1>
    </header>
  );
}
function Menu() {
  return (
    <main className="menu">
      <h2>Menu</h2>
      <Pizza
        name="Pizza asasas"
        ingredients="Tomato, "
        photoName="pizzas/spinaci.jpg"
        price={12}
      />
    </main>
  );
}

function Pizza(props) {
  return (
    <div className="pizza">
      <img src={props.photoName} alt="Pizaa check " />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price + 3}</span>
      </div>
    </div>
  );
}
const Footer = () => {
  const hours = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hours >= openHour && hours < closeHour;
  const message = isOpen ? "We are open" : "We are closed";
  console.log(message);
  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}@Pizza Palace Co. 2021
    </footer>
  );
  //   return React.createElement("footer", null, "@Pizza Palace Co. 2021");
};

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// StictMode is a tool for highlighting potential problems in an application.
// Like Fragment, StrictMode does not render any visible UI.
// It activates additional checks and warnings for its descendants.
// StrictMode renders components twice, first time to check for side-effects
// and second time to render the actual UI.
// This helps in identifying potential issues in the application.

// Before React v18
// ReactDOM.render(<App />);
