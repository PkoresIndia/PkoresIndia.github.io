import React,{Component} from 'react'
import CollapsibleComponent from './components/CollapsibleComponent'
import CollectionComponent from './components/CollectionComponent'
import Navbar from './components/Navbar'
import ReactDOM from 'react-dom'
class PartnersComponent extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const partnersHtml = <p>For exploration of minerals, PK Ores Pvt. Ltd has tied up with the most leading organization like <a href="http://www.geomin.com">Geomin Group</a>. With this venture we are exploring the mineral resources in the whole world. For the best technology used for mining, who else is better then <a href="http://thriveni.com/">Thriveni earth movers (p) ltd. </a>no one in India. We have tied of with them to encase the opportunity of best technology used for mining to have better production.</p>
        const partnersArray = ['We are associated with lot of companies in form of exploration and technology used for mining.',partnersHtml]
        const partnersCollectionComponent = <CollectionComponent className="blue darken-4" collections={partnersArray}/>
        const collapsibleObject = [{header:'Our Partners',text:partnersCollectionComponent}]
        return (<div>
                  <Navbar/>
                  <CollapsibleComponent collapsibles={collapsibleObject}/>
              </div>)
    }
}
ReactDOM.render(<PartnersComponent/>,document.getElementById('main'))
