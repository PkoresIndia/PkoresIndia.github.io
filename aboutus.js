import NavBar from './components/Navbar'
import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import CollapsibleComponent from './components/CollapsibleComponent'
import CollectionComponent from './components/CollectionComponent'
import CardComponent from './components/CardComponent'
import {Row,Col} from 'react-materialize'
class AboutUsComponent extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const paragraphs = ['P.K. Ore Pvt. Ltd. is managed by a board of directors comprising of young and forward looking entreprenuers Manas Das Patnaik and Rajesh Das Patnaik. It is an organisation built on honesty and integrity is composed by highly experienced professionals in different disciplines - engineers,mining professionals,material management , finance,etc.','Management is quite flexible and project managers who are well qualified and experienced have free hand in operation of the  project. Only general guidelines and policy directives are issued from corporate office.','Pk Ores is one of the leading service providers having operation and offices across the country. Consistent focus on timely delivery and effective project management process has helped the company to multiply its turnover in a short period.','The approach to detailed and methodical planning keeps the company ahead of others. The company is one of the most reputed turnkey mining solution provider achieving national recognition']
        const paragraphCollection = <CollectionComponent className="white" collections={paragraphs}/>
        const collapsibles = <CollapsibleComponent collapsibles={[{header:'About Us',text:paragraphCollection}]}/>
        const coreTeamArray = [{description:'Rajesh Kumar Daspattnaik holds B.E. in Computer Science, from OEC Bhubaneswar with little stint in Software activities has started his company in Mining sector. His background with IT industry helped him to develop the company PKOres and to a 60 crore turnover company with 6 years operation.',title:'Mr Rajesh Kumar Daspattnaik(Managing Director)',src:'img/aboutus_2.jpg'},{description:'Manas Ranjan Daspannaik is basically a Mechanical Engineer with a snort stint of industrial experience formed the company PKOres Pvt.Ltd. started working for the company vigorously. His background with industrial experience and endless effort helped him to grow the company to high scale. Presently the turnover of the company is about 100 Crore.',title:'Mr Manas Ranjan Daspattnaik',src:'img/aboutus_1.jpg'},{description:'Sri B.K. Mishra, B.Tech with PG diploma In business management is having 35 years of Industrial experience having exposure to different aspects of Industrial activity like construction, Production, maintenance, marketing, procurement. In process plant like steel, Cement, Ferro-chrome. Further to this, he has about 10-12 yrs exposure in Mining & Software activities in higher cadre. He retired from IDCOL as Executive Director.',title:'Sri B.K. Mishra(Technical Advisor)',src:'img/aboutus_3.jpg'}]

        const cardComponents = coreTeamArray.map((coreTeamMember)=>{
            return <Col s={12} m={4} l={4}><CardComponent description={coreTeamMember.description} title ={coreTeamMember.title} src={coreTeamMember.src}></CardComponent></Col>
        })
        const cardComponentGroup = <Row>{cardComponents}</Row>
        const cardCollapsible = <CollapsibleComponent collapsibles={[{header:'Our Core Team',text:cardComponentGroup}]}/>
        return (<div>
                  <NavBar/>
                  {collapsibles}
                  {cardCollapsible}
                </div>)
    }
}
ReactDOM.render(<AboutUsComponent/>,document.getElementById('main'))
