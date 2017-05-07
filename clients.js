import CollectionComponent from './components/CollectionComponent'
import CollapsibleComponent from './components/CollapsibleComponent'
import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import Navbar from './components/Navbar'
class ClientComponent extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const clientListComponent = <CollectionComponent className="blue darken-4" collections={['Sps group of companies','Nova ispat','Api ispat','Monet ispat','Nobel group of companies','Welspun steel and power','Milan developers','Nkb Industries.']}/>
        const clientListCollapsible = <CollapsibleComponent collapsibles={[{header:'Following is a partial list of our client Lists',text:clientListComponent}]}/>
        const clientArray = ['Our Clients includes large and small companies both in manufacturing and service sector, providing clients the best value for money has made PK Ores Pvt. Ltd, one of the fastest growing and most respected firms in orissa as well as in Indian mining industry.',clientListCollapsible]
        const clientCollectionComponent = <CollectionComponent className="blue darken-4" collections={clientArray}/>
        return  <div>
                    <Navbar/>
                    <CollapsibleComponent collapsibles={[{header:'Our Clients',text:clientCollectionComponent}]}/>
                </div>
    }
}
ReactDOM.render(<ClientComponent/>,document.getElementById('main'))
