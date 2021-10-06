import React from 'react'
import './Product.css'
function Product({photo,cname,caddress,mnumber}) {
    return (
        <div className="product">
            <div className="product__Containerleft">
                 <img src="https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=480" alt="" />
                 <h2>{cname}</h2>
            </div>
            <div className="product__Containermiddle">
                 <h2>{caddress}</h2>
            </div>
            <div className="product__Containerright">
                 <h2>{mnumber}</h2>
            </div>
        </div>
    )
}

export default Product
