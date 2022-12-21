import React from "react";
import { useState, useEffect } from "react";
import {Header} from "./Components/Header";
import {Body} from "./Components/Body";
import './App.css';

export default function App() {
    const [items, setItems] = useState([]);

    const fetchData = async () => {
      fetch("https://fakestoreapi.com/products")
          .then((res) => res.json())
          .then((data) => setItems(data));
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="app">
          <div className="header-container">
              <Header/>
          </div>
          <div>
            <Body items={items}/>
          </div>
        </div>
    );
}


