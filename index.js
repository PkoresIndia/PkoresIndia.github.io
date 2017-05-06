import NavBar from './components/Navbar'
import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import Carousel from './components/Carousel'
import {Collapsible,CollapsibleItem,Collection,CollectionItem} from 'react-materialize'
class IndexComponent extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const carouselTitle = "PK Ores Pvt. Ltd"
        const carouselText = "Is one of the leading players in the mining industry in the mineral rich states of Orissa and Jharkhand in India. The company, established in the year 2000 by young and technically qualified entrepreneurs, in a short span of time, achieved premier status in the entire gamut of activities associated with mining from exploration, mines development, ore production, beneficiation, logistics and to stevedoring. The major minerals handled by P.K. Ores are Iron Ores, Manganese Ores, Bauxite, Chrome and Granite"
        const carousels = [{src:'img/img1.jpg',text:carouselText,title:carouselTitle},{src:'img/img2.jpg',text:'image 2',text:carouselText,title:carouselTitle}]
        return (<div>
                <NavBar/>
                <Carousel carousels={carousels}/>
                <Collapsible>
                    <CollapsibleItem expanded={true} header="Our Mission">
                        Our mission  is to have significant presence in all the activities related to mining industry, to be one of the leading players in its chosen field of operation, to give top priority to the satisfaction / delight of all stakeholders involved with the company and above all to ensure that none of its activities bring any damage to the environment is given top priority
                    </CollapsibleItem>
                    <CollapsibleItem expanded={true} header="Our Vision">
                        <Collection>
                            <CollectionItem>
                                To be the leading mining company in terms of production and dispatches.
                            </CollectionItem>
                            <CollectionItem>
                                To strive and bring as much value addition to the minerals produced as possible.
                            </CollectionItem>
                            <CollectionItem>
                                To expand the activities beyond India and be a world player.	
                            </CollectionItem>
                        </Collection>
                    </CollapsibleItem>
                </Collapsible>
            </div>)
    }
}
ReactDOM.render(<IndexComponent/>,document.getElementById('main'))
