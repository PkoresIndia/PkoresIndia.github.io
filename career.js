import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import CollectionComponent from './components/CollectionComponent'
import CollapsibleComponent from './components/CollapsibleComponent'
import Navbar from './components/Navbar'
export default class CareerComponent extends Component {
    constructor(props) {
      super(props)
    }
    render() {
        const careerArray = ['PK ore believes in the philosophy of "Human Resources". It views that a company cannot be the leader without the appropriate team behind it. Keeping this in mind, PK Ore has formualted the policy to become the leader in its field. The company has an atmosphere which help the employees to take the initiative for new ideas, make innovation, develop a passion to achieve their goals and succeed. The company has an environment to nurture their own decision and participate and make their own decision and participate in the decision making process.',<div>Pk ore provides a long term career. You are looking for the oportunity, where people matter, then PK ore is the right place to be at. To apply, email your resume at <a href="mailto:hrhobbsr@gmail.com?Subject=My%20Resume" target="_blank"> hrhobbsr@gmail.com</a> </div>]
        const careerCollection = <CollectionComponent collections={careerArray}/>
        const careerCollapsible = <CollapsibleComponent collapsibles = {[{header:'Career At PK Ores',text:careerCollection}]}/>
        return <div>
                  <Navbar/>
                  {careerCollapsible}
              </div>
    }
}
ReactDOM.render(<CareerComponent/>,document.getElementById('main'))
