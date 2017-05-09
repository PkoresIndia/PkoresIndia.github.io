import NavBar from './components/Navbar'
import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import CollapsibleComponent from './components/CollapsibleComponent'
import CollectionComponent from './components/CollectionComponent'
class OurBusinessComponent extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const miningParagraphs = ['Exploration of prospective blocks and preparation of geological report.','Post mine allocation activities like mine plan preparation, applications and statutory clearances from different statutory authorities.','Assisting in land acquisition and R & R activities by maintaining longstanding relations with the local populace. We aim to bring about a win-win situation.','Complete mining operation covering drilling, blasting, excavation haulage and ancilliary activities with delivery of material at designated points.','With our strong fleet of HEMMS, we have well placed ourselves in carrying out mining operations for both the public and the private sector.']
        const miningCollection = <CollectionComponent className="white black-text" collections={miningParagraphs}/>
        const miningCollapsible = <CollapsibleComponent collapsibles={[{header:'Mining',text:miningCollection}]}/>
        const logisticParagraphs = ['Due to our long standing relation and infrastructure in different mining sector, we are capable to offer critical logistic support','Effective rail and tipper handling solution keeping focus on quality and quantity management.','Delivery of mineral from mine pit to the plant by  means of rails and roads.','Stockyard management in mines and railway siding.']
        const logisticCollection  = <CollectionComponent className="white black-text" collections={logisticParagraphs}/>
        const logisticCollapsible = <CollapsibleComponent collapsibles={[{header:'Logistics',text:logisticCollection}]}/>
        const pkInfraParagraphs = ['We are engaged in aquaculture business designed to raise and produce fresh water prawn/shrimps','Some powerline projects are in pipeline']
        const pkInfraCollection  = <CollectionComponent className="white black-text" collections={pkInfraParagraphs}/>
        const pkInfraCollapsible = <CollapsibleComponent collapsibles={[{header:'PK Infra and Power Co. Pvt. limited',text:pkInfraCollection}]}/>
        const softParagraphs = ['Recently we have diversified to software application. We are empanelled vendor of IDCOL Software Ltd. a govt. of Odisha PSU who is the nodal agency of Government of Odisha to provide software solution to different Government Agencies. ','We are partner of Bob and Procure, Bangalore a leading software solution provider who are pioneer in providing  e-procurement solution.','Partnered with Sakura geoinformation Software research private limited who are a leading software solution provider by using UAV/Drone. Some projects for application of drone technology are in pipeline.']
        const softCollection  = <CollectionComponent className="white black-text" collections={softParagraphs}/>
        const softCollapsible = <CollapsibleComponent collapsibles={[{header:'Software Solutions',text:softCollection}]}/>
        const businessCollection = <CollectionComponent collections={[miningCollapsible,logisticCollapsible,pkInfraCollapsible,softCollapsible]}/>
        return (<div>
                  <NavBar/>
                  <CollapsibleComponent collapsibles={[{header:'Our Business',text:businessCollection}]}/>
                </div>)
    }
}
ReactDOM.render(<OurBusinessComponent/>,document.getElementById('main'))
