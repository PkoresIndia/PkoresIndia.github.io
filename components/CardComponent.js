import {Card,CardTitle} from 'react-materialize'
import {Component} from 'react'
export default class CardComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {src:this.props.src}
    }
    componentDidMount() {
        const image = new Image()
        image.src = this.props.src
        image.onload = ()=>{
            const w = image.width,h= image.height,r = (w*0.95)/2
            const canvas = document.createElement('canvas')
            canvas.width = w*0.95
            canvas.height = w*0.95
            const context = canvas.getContext('2d')
            context.beginPath()
            context.arc(w/2,h/2,r,0,2*Math.PI)
            context.clip()
            context.drawImage(image,0,0)
            this.setState({src:canvas.toDataURL()})
        }
    }
    render() {
        const cardDescription = this.props.description
        const cardImage = this.state.src
        const title = this.props.title
        const cardTitleComponent = <CardTitle image = {this.state.src}>{this.props.title}</CardTitle>
        return <Card header={cardTitleComponent}>{cardDescription}</Card>
    }
}
