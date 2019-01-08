import React ,{Component}from 'react'
import './index.css'

import FruitItems from './FruitItems'

class Fruits extends Component{
    render(){
        return(
            <div className="clothes">
                <div className="clothes-title">
                    <h4>Fruits</h4>
                </div>
            <FruitItems/>
            </div>
        )
    }
}
export default Fruits;