import NavBar from './components/Navbar'
import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import CollapsibleComponent from './components/CollapsibleComponent'
import CollectionComponent from './components/CollectionComponent'
class ServicesComponent extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const logisticsComponent = <CollectionComponent className='white' collections={['At PK Ores Pvt Ltd, it is well understood that in order to make a significant progress in any mineral industry, it is important to have control over the logistics involved in transport of bulk commodity like iron ores etc. It has in its control a fleet of trucks such as to be able to move about 100000 MT of ores each month. It has developed a very good relation with Indian Railways and dispatches around 50000 MT/ Month by rail to its various customers.','As a step in the direction of control over logistics, PK Ores has been able to secure a license from the government of India and is now developing its own captive Railway siding involving a cost of Rs, 12.00 Crores. The siding is situated at Bada Bandh, 7 kms from the Paradip Port.']}/>
        const miningComponent = <CollectionComponent className='white' collections={['We are involved in mining of iron ores in the state of Orissa. From a modest beginning, today it has achieved a production level of 0.80 Million MT / Annum. The activity of mining includes exploration of mineral deposit, development of infrastructure for mining, over burden removal, production of ore in its raw form and processing of the ore produced in crushing and sizing units.','It is a measure of its success in mining that PK Ores Pvt Ltd with its associates today enjoys the monopoly right of production of ores from 2 large iron ore mines namely, : Joururi mines spread over an area of 170 hectres in Keonjhar district of Orissa and Udalbadi Iron Mines spread over 123 hectres in Sundergarh district of Orissa.','The mining operations are taken up with extensive use of modern machinery. PK Ores uses large earth moving machinery including, Excavators (0.9CuM to 2.5 CuM bucket sizes; of Komatsu and Caterpillar make), High Volume Mining Dumpers ( HM1025, VOLVO FM 9), Automatic Crushing Units (Terex Make), Deep Hole Drilling Equipment (ATLAS COPCO).']}/>
        const collapsibleObjects = [{header:'Mining',text:miningComponent},{header:'Trading',text:'PK Ores Pvt. Ltd is actively involved in taking advantage in the spurt of demand for minerals worldwide. It is involved in dispatches in excess of 1.4 million MT/ Annum of iron ores. The trading activity includes supplying of ores to domestic Indian Steel producers as well as being involved in export of ores to China. The ability of PK Ores Pvt Ltd in trading of major minerals has led to a significant in crease in its turnover. It has now achieved an annualized turnover of Rs. 30 Crores (USD 25…..Million) from sales of ores.'},{header:'Logistics',text:logisticsComponent},{header:'Stevedoring',text:'A significant achievement of PK Ores Pvt Ltd is reorganization by the government of India of its experience in logistics and thus issue it a license for stevedoring. This additional activity will ensure the PK Ores Pvt Ltd in all the activities involved in mining industry, i.e. from exploration, development, production, sales, dispatches and vessel loading.'}]
        const collapsibles = <CollapsibleComponent collapsibles={collapsibleObjects}/>
        return (<div>
                  <NavBar/>
                  {collapsibles}
                </div>)
    }
}
ReactDOM.render(<ServicesComponent/>,document.getElementById('main'))
