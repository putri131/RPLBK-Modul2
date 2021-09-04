import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import CardList from "./components/CardList";
import Quotes from "./components/Quotes";
import Gambar from "./assets/images/akabane-karma.jpg";
import Q from "q";

const quotes = "Jangan Terlalu Berharap Pada Manusia";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <CardList 
    name="Putri R" 
    nim="21120118120026" 
    kelompok="26" 
    isNameBold 
    image={Gambar}
    />

    <Quotes author="PR" quotes={quotes} />
    
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

