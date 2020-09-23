import React from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css'
import data from "./data";


function App() {

    const openmenu =() =>{
        document.querySelector(".sidebar").classList.add("open");
    }
    const closemenu = () =>{
        document.querySelector(".sidebar").classList.remove("open");
    }
  return (
    <div className="grid-container">
      <header className="header">
          <div className="brand">
              <button onClick={openmenu}>
                  &#9776;
              </button>
              <a href="index.js">Milk.lk</a>
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
                <ul className="products">
                    {
                        data.products.map(products =>
                            <li>

                                <div className="product">
                                    <img className="product-img" src={products.image} alt="Product"/>
                                    <div className="product-name">
                                        <a href="product.html">{products.name}</a>
                                    </div>
                                    <div className="Product-brand">{products.brand}</div>
                                    <div className="price">${products.price}</div>

                                </div>

                            </li>)
                    }


            </ul>
            </div>
        </main>
        <footer className="footer">
            All right reserved!
        </footer>
    </div>
  );
}

export default App;
