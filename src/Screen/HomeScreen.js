import React from "react";
import data from "../data";
import {Link} from "react-router-dom";

function HomeScreen(props) {
    return <ul className="products">
        {
            data.products.map(products =>
                <li>

                    <div className="product">
                        <Link to={'/products/' + products._id}>
                            <img className="product-img" src={products.image} alt="Product"></img>
                        </Link>
                        <div className="product-name">
                            <Link to={'/products/' + products._id}>{products.name}</Link>
                        </div>
                        <div className="Product-brand">{products.brand}</div>
                        <div className="price">${products.price}</div>

                    </div>

                </li>)
        }


    </ul>
}
export default HomeScreen;
