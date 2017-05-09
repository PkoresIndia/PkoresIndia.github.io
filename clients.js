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
        const clientListComponent = <CollectionComponent className="white" collections={['ODISHA MINING CORPORATION LIMITED','INDUSTRIAL CORPORATION OF ODISHA LIMITED','MAHARASHTRA MINING CORPORATION','KJS AHLUWALIA LIMITED','DR. SAROJINI PRADHAN','PK AHLUWALIA','PK ENTERPRISES']}/>
        const clientListCollapsible = <CollapsibleComponent collapsibles={[{header:'Following is a partial list of our client Lists',text:clientListComponent}]}/>
        const clientArray = ['Our Clients includes large and small companies both in manufacturing and service sector, providing clients the best value for money has made PK Ores Pvt. Ltd, one of the fastest growing and most respected firms in orissa as well as in Indian mining industry.',clientListCollapsible]
        const clientCollectionComponent = <CollectionComponent className="white" collections={clientArray}/>
        return  <div>
                    <Navbar/>
                    <CollapsibleComponent collapsibles={[{header:'Our Clients',text:clientCollectionComponent}]}/>
                </div>
    }
}
ReactDOM.render(<ClientComponent/>,document.getElementById('main'))
