import React,{Component} from 'react'
import {Col,Row,MediaBox} from 'react-materialize'
export default class GalleryComponent extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const galleryImages = this.props.images.map((image,index)=>(<Col s={4} m={4} l={4}><MediaBox src={image} caption={`image number ${index+1}`} width={window.innerWidth/2}/></Col>))
        return  (<Row>
                    {galleryImages}
                  </Row>)
    }
}
