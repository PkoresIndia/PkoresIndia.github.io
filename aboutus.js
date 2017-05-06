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
        const paragraphs = ['PK Ores Pvt. Ltd.  was set up in the year 2002.  It is one of the leading iron ore suppliers in India. It deals with supplies of iron ore fines to leading exporter in India. In 2002, PK Ores Pvt. Ltd ventured into the field of mining of iron ore. Presently it is involved in mining of ferrous and non ferrous minerals like Iron Ore, Chrome, Manganese, Bauxite, Dolomite etc.','PK Ores Pvt. Ltd.  was set up in the year 2002.  It is one of the leading iron ore suppliers in India. It deals with supplies of iron ore fines to leading exporter in India. In 2002, PK Ores Pvt. Ltd ventured into the field of mining of iron ore. Presently it is involved in mining of ferrous and non ferrous minerals like Iron Ore, Chrome, Manganese, Bauxite, Dolomite etc.','Our core strengths are mining of Ferrous and Non Ferrous minerals. The company carries out Iron ore mining in the mineral rich state of Orissa and Jharkhand in the Eastern part of India. The company is also involved in deploying new technology to upgrade its mining facilities to maintain high quality and efficient processes. While pursuing excellence in the above areas, the company’s underlying philosophy has always been to give special care towards local people, environmental issues, child education, health programs and non-conventional energy within its mining area. The company has maintained its efficiency, workers and the environment and has sustained consistent quality in all its efforts.']
        const paragraphCollection = <CollectionComponent className="blue darken-4" collections={paragraphs}/>
        const collapsibles = <CollapsibleComponent collapsibles={[{header:'About Us',text:paragraphCollection}]}/>
        return (<div>
                  <NavBar/>
                  {collapsibles}
                </div>)
    }
}
ReactDOM.render(<AboutUsComponent/>,document.getElementById('main'))
