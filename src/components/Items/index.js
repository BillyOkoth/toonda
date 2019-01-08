import React ,{Component} from 'react'

import AllItems from './AllItems'
import SearchBox from './searchbox'
import './index.css'

class Products extends Component {
    render(){
        return(
            <div className="items-wrapper">
            <div className="items-title">
            <SearchBox/>  
            <h4>Toonda Store</h4>      
              
            </div>
            <AllItems/>
            </div>
        );
    }
}

export default Products;