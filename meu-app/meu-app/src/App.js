import React from "react";
import Header from "./Header";
import "./App.css";

function App() {
    return (
        <div>
            <Header name="Phil" links={["Inicial", "Galeria", "Imagens", "Telefones", "Geladeira"]}></Header>
        </div>
    );
}

export default App;
