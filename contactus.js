import NavBar from './components/Navbar'
import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import CollapsibleComponent from './components/CollapsibleComponent'
import CollectionComponent from './components/CollectionComponent'
class ContactUSComponent extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const regOfficeArray = ['A/154,1st Floor, Sahid Nagar Bhubaneswar-751007 Orissa, India','Ph: +91-674-2540557','Fax: +91-674-2545007','Email: info@pkoresindia.com,career@pkoresindia.com ']
        const regOfficeComp = <CollectionComponent className='blue darken-4' collections={regOfficeArray}/>
        const worksOfficeArray = ['1 st Floor,Thakkar Complex Back side of Union Bank Station Road,Barbil,keonjhar','Orissa-758035']
        const workOfficeComp = <CollectionComponent className='blue darken-4' collections={worksOfficeArray}/>
        const corpOfficeArray = ['Mohanesh Building, 1st floor,Parsikhill.sec-27, CVT Belapur.','Navi Mumbai.India','Ph:+91-22-27520550']
        const corpOfficeComp = <CollectionComponent className='blue darken-4' collections={corpOfficeArray}/>
        const collapsibleObj = [{header:'Reg. Office',text:regOfficeComp},{header:'Works Office',text:workOfficeComp},{header:'Corp Office',text:corpOfficeArray}]
        const collapsibles = <CollapsibleComponent collapsibles={collapsibleObj}/>
        return <div>
                  <NavBar/>
                  {collapsibles}
              </div>
    }
}
ReactDOM.render(<ContactUSComponent/>,document.getElementById('main'))
