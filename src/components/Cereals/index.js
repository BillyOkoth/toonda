import React ,{Component}from 'react'
import './index.css'

import CerealItems from './CerealItems'

class Cereal extends Component{
    render(){
        return(
            <div className="mens-product">
                <div className="mens-title">
                    <h4>Cereal List</h4>
                </div>
            <CerealItems/>
            </div>
        )
    }
}
export default Cereal;