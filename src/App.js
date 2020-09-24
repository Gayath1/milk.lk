import React from 'react';
import logo from './logo.svg';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import './App.css';
import './index.css'
import data from "./data";
import HomeScreen from "./Screen/HomeScreen";
import ProductScreen from "./Screen/ProductScreen";



function App() {

    const openmenu =() =>{
        document.querySelector(".sidebar").classList.add("open");
    }
    const closemenu = () =>{
        document.querySelector(".sidebar").classList.remove("open");
    }
  return (
      <BrowserRouter>
    <div className="grid-container">
      <header className="header">
          <div className="brand">
              <button onClick={openmenu}>
                  &#9776;
              </button>
              <Link to-="/HomeScreen">Milk.lk</Link>
          </div>
          <div className="header-links">
              <a href="singin" >sign in </a>

              <a href="cart">cart</a>
          </div>
      </header>
      <aside className="sidebar">
          <h3>Product Categories</h3>
          <button className="sidebar-close-button" onClick={closemenu}>x</button>
          <ul>
              <li>
                  <a href="null">Milk</a>
              </li>
              <li>
                  <a href="null">Butters</a>
              </li>
          </ul>

      </aside>
        <main className="main">
            <div className="content">
                <Route path="/products/:id" component={ProductScreen}/>
                <Route path="/" exact={true} component={HomeScreen}/>

            </div>
        </main>
        <footer className="footer">
            All right reserved!
        </footer>
    </div>
      </BrowserRouter>
  );
}

export default App;
