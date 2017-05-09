import React,{Component} from 'react'
import {Slider,Slide} from 'react-materialize'
export default class Carousel extends Component {
    constructor(props) {
        super(props)
        this.state = {carousels:this.props.carousels}
    }
    componentDidMount() {
        this.state.carousels.forEach((carousel,index)=>{
            this.colorifyImage(carousel,'#FF6F00',this.state.carousels,index)
        })
    }
    colorifyImage(carousel,color,carousels,index) {
        const canvas = document.createElement('canvas')
        const context = canvas.getContext('2d')
        const img = new Image()
        img.onload = ()=>{
            canvas.height = img.height
            canvas.width = img.width
            const w = canvas.width,h = canvas.height
            context.drawImage(img,0,0,w,h)
            context.fillStyle = color
            context.globalAlpha = 0.6
            context.fillRect(0,0,w,h)
            carousel.src = canvas.toDataURL()
            carousels[index] = carousel
            this.setState({carousels})
        }
        img.src = carousel.src
    }
    render() {
        const carousels = this.state.carousels
        const sliders = carousels.map((carousel)=>(<Slide src={carousel.src} className="occupy-total-height" title={carousel.title}>{carousel.text}</Slide>))
        return (<Slider interval={1000} indicators={false} className ="occupy-total-height">
                    {sliders}
                </Slider>)
    }
}
