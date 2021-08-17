import React from "react";
import Header from "./Header";
import Counter from "./Counter";
import "./App.css";

function App() {
    return (
        <div>
            <Header name="Phil" links={["Inicial", "Galeria", "Imagens", "Telefones", "Geladeira"]}></Header>
            <Counter count={3}></Counter>
        </div>
    );
}

export default App;
