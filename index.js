import NavBar from './components/Navbar'
import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import Carousel from './components/Carousel'
import {Collapsible,CollapsibleItem,Collection,CollectionItem} from 'react-materialize'
import CollapsibleComponent from './components/CollapsibleComponent'
import CollectionComponent from './components/CollectionComponent'
import MultiCollapsibles from './components/MultiCollapsibles'
import ProcessComponent from './components/ProcessComponent'
class IndexComponent extends Component {
    constructor(props) {
        super(props)
    }
    render() {

        const missionText = 'Our mission  is to have significant presence in all the activities related to mining industry, to be one of the leading players in its chosen field of operation, to give top priority to the satisfaction / delight of all stakeholders involved with the company and above all to ensure that none of its activities bring any damage to the environment is given top priority'
        const visionComp = (<CollectionComponent className='white' collections={['To be the leading mining company in terms of production and dispatches.','To strive and bring as much value addition to the minerals produced as possible.','To expand the activities beyond India and be a world player.']}/>)
        const collapsibles = [{header:'Our Mission',text:missionText},{header:'Our Vision',text:visionComp}]
        const carouselTitle = "PK Ores Pvt. Ltd"
        const carouselSubtitle = "Mining ahead of times..."
        // const carouselText = "Is one of the leading players in the mining industry in the mineral rich states of Orissa and Jharkhand in India. The company, established in the year 2000 by young and technically qualified entrepreneurs, in a short span of time, achieved premier status in the entire gamut of activities associated with mining from exploration, mines development, ore production, beneficiation, logistics and to stevedoring. The major minerals handled by P.K. Ores are Iron Ores, Manganese Ores, Bauxite, Chrome and Granite"
        const companyOverviewArray = ['P.K. ores Pvt. Ltd., a leading player in the mining sector in the minreal rich states of Odisha and Jharkhand. The group was established in the year 2000 by young entrepreneurs with technical background.','The company specializes in mining, handling, transportation and export of materials like Iron ore, Manganese, Limestomne and other minerals.','Since its inception the company went strength to strength and it was inevitable to diversify its activities to infrastructure and software.']
        const companyOverviewCollection = <CollectionComponent collections={companyOverviewArray}/>
        const companyOverviewCollapsible = <CollapsibleComponent className='white black-text' collapsibles={[{header:'Company Overview',text:companyOverviewCollection}]}/>
        const carousels = [{src:'img/img1.jpg',text:carouselSubtitle,title:carouselTitle},{src:'img/img2.jpg',text:'image 2',text:carouselSubtitle,title:carouselTitle}]
        const newsObjs = ['We have already Started Our Overseas Expansion in West Africa','We are starting steward oring soon.']
        const newsComponent = <CollectionComponent className='white black-text' collections={newsObjs}/>
        const newsCollapsible = <CollapsibleComponent collapsibles = {[{header:'Company News',text:newsComponent}]}/>
        const mininingDevelopmentArray = ['Geographical Prospecting','Mine Planning','Statutary Clearance','Infrastructure setup','Mining operation','Corporate Social Responsibility (CSR)']
        const miningCostArray = ['Equipment Procurement','Ore handling','OB removal','Excavation of Ore','Corporate Social Responsibility (CSR)']
        const miningProcessingArray = ['Marketing','Logistics','Exports']
        const businessModelObject = {title:'Business Model',collapsibles:[{title:'Mining Development',items:mininingDevelopmentArray},{title:'Mining Contracting',items:miningCostArray},{title:'Trading of Mineral',items:miningProcessingArray}]}
        const businessModelComponent = <MultiCollapsibles item={businessModelObject}/>
        const processComponent = <ProcessComponent processes={['Geographical Prospecting','Mine Planning','Statutory Clearance','Mine Operation','Ore Preparation','Socio-Economic Development','Marketing of Ore']}/>
        const processCollapsible = <CollapsibleComponent collapsibles={[{header:'Trunkey Mining process',text:processComponent}]}/>
        return (<div>
                <NavBar/>
                <Carousel carousels={carousels}/>
                {companyOverviewCollapsible}
                <CollapsibleComponent collapsibles={collapsibles}/>
                {businessModelComponent}
                {processComponent}
            </div>)
    }
}
ReactDOM.render(<IndexComponent/>,document.getElementById('main'))
