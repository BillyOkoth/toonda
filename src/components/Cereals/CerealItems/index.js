import React from 'react'
import {Icon} from 'react-materialize'
import {Link} from 'react-router-dom'

import PRODUCTS from '../../Data'

const CerealItems = () =>(    
    <div className="items">    
        {PRODUCTS.map((product)=>{               
            if (product.category==="cereals"){
                return(
                    <div className="item">
                        <Link to={`/product/${product.id}`}>
                        <div className="product-img">
                            <img alt={product.name} src={product.img}/>
                        </div>
                        <div className="product-details">
                            <h1 id="product-name">{product.name}</h1>
                            <h4 id="product-description">{product.description}</h4>
                        </div>
                        </Link>
                        <div className="price-add">
                            <h5 id="product-price">${product.price}</h5>
                            <Icon small OnClick={()=> this.addProduct(product)} id="add-icon">add_shoppinng_cart</Icon>
                        </div>
                    </div>
                )
            }else {
                return ("Error")
            }
           
        })
        }
    </div>

)
export default CerealItems;