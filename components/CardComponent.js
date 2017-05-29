import {Card,CardTitle} from 'react-materialize'
import React,{Component} from 'react'
export default class CardComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {src:this.props.src}
    }
    componentDidMount() {
        // const image = new Image()
        // image.src = this.props.src
        // image.onload = ()=>{
        //     const w = image.width,h= image.height,r = (w)/4
        //     const canvas = document.createElement('canvas')
        //     canvas.width = w*0.5
        //     canvas.height = w*0.5
        //     const context = canvas.getContext('2d')
        //     context.beginPath()
        //     context.arc(w/4,w/4,r,0,2*Math.PI)
        //     context.clip()
        //     context.drawImage(image,0,0)
        //     this.setState({src:canvas.toDataURL()})
        // }
    }
    render() {
        const cardDescription = this.props.description
        const cardImage = this.state.src
        const title = this.props.title
        const cardTitleComponent = <CardTitle image = {this.state.src}>{this.props.title}</CardTitle>
        return <Card header={cardTitleComponent}>{cardDescription}</Card>
    }
}
