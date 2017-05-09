import NavBar from './components/Navbar'
import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import CollapsibleComponent from './components/CollapsibleComponent'
import CollectionComponent from './components/CollectionComponent'
class AboutUsComponent extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const paragraphs = ['P.K. Ore Pvt. Ltd. is managed by a board of directors comprising of young and forward looking entreprenuers Manas Das Patnaik and Rajesh Das Patnaik. It is an organisation built on honesty and integrity is composed by highly experienced professionals in different disciplines - engineers,mining professionals,material management , finance,etc.','Management is quite flexible and project managers who are well qualified and experienced have free hand in operation of the  project. Only general guidelines and policy directives are issued from corporate office.','Pk Ores is one of the leading service providers having operation and offices across the country. Consistent focus on timely delivery and effective project management process has helped the company to multiply its turnover in a short period.','The approach to detailed and methodical planning keeps the company ahead of others. The company is one of the most reputed turnkey mining solution provider achieving national recognition']
        const paragraphCollection = <CollectionComponent className="white" collections={paragraphs}/>
        const collapsibles = <CollapsibleComponent collapsibles={[{header:'About Us',text:paragraphCollection}]}/>
        return (<div>
                  <NavBar/>
                  {collapsibles}
                </div>)
    }
}
ReactDOM.render(<AboutUsComponent/>,document.getElementById('main'))
