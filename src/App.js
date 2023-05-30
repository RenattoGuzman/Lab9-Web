import "./styles.css";
import React, { useEffect, useState } from 'react';
import Screen from "./components/Screen";
import Teclado from "./components/Teclado";
import Boton from "./components/Boton";
import ContextoProv from "./contexto/Contexto";


const btnValues = [
    ["C", "+/-", "%", "/"],
    [7, 8, 9, "x"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
];

function App() {


    return (
        <ContextoProv>
            <h1>Calculadora</h1>
            <div className="container">
                <Screen />
                <Teclado>
                    {btnValues.flat().map((btn, i) => (
                        <Boton
                            value={btn}
                            key={i} />
                    )
                    )}
                </Teclado>
            </div></ContextoProv>


    )
};

export default App;
