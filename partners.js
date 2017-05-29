import React,{Component} from 'react'
import CollapsibleComponent from './components/CollapsibleComponent'
import CollectionComponent from './components/CollectionComponent'
import Navbar from './components/Navbar'
import ReactDOM from 'react-dom'
class PartnersComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {src:'img/partners.jpg',w:0}
    }
    componentDidMount() {
        const image = new Image()
        image.src = this.state.src
        image.onload = ()=>{
            const w = image.width,h = image.height
            const canvas = document.createElement('canvas')
            canvas.width = w
            canvas.height = h
            const context = canvas.getContext('2d')
            context.beginPath()
            context.rect(0,h/9+h/30,w,8*h/10-h/20-h/30)
            context.clip()
            context.drawImage(image,0,0)
            this.setState({src:canvas.toDataURL(),w})
        }
    }
    render() {
        const partnersHtml =<img src={this.state.src} style={{transform:`translateX(${window.innerWidth/2-this.state.w/2})`}}></img>
        // const partnersArray = ['We are associated with lot of companies in form of exploration and technology used for mining.',partnersHtml]
        // const partnersCollectionComponent = <CollectionComponent className="white" collections={partnersArray}/>
        const collapsibleObject = [{header:'Working with',text:partnersHtml}]
        return (<div>
                  <Navbar/>
                  <CollapsibleComponent collapsibles={collapsibleObject}/>
              </div>)
    }
}
ReactDOM.render(<PartnersComponent/>,document.getElementById('main'))
