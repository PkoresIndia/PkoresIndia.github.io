import React,{Component} from 'react'
import Navbar from './components/Navbar'
import GalleryComponent from './components/GalleryComponent'
import ReactDOM from 'react-dom'
class Gallery extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const galleryImgs = []

        for(var i=1;i<=16;i++) {
            galleryImgs.push(`./img/gallery_img${i}.JPG`)
        }
        console.log(galleryImgs)
        return (<div>
                <Navbar/>
                <GalleryComponent images={galleryImgs}/>
                </div>)
    }
}
ReactDOM.render(<Gallery/>,document.getElementById('main'))
