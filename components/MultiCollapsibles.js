import React,{Component} from 'react'
import CollapsibleComponent from './CollapsibleComponent'
import CollectionComponent from './CollectionComponent'
import {Col,Row} from 'react-materialize'
export default class MultiCollapsibles extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const collapsibleItem = this.props.item
        const collapsibles = collapsibleItem.collapsibles

        const gridSize = collapsibles.length!=0?Math.floor(12/collapsibles.length):1
        const collapsibleComponents = collapsibles.map((collapsible)=>{
            const title = collapsible.title
            const component = <CollectionComponent collections={collapsible.items}/>
            return <Col s={gridSize} l={gridSize} m={gridSize}><CollapsibleComponent collapsibles={[{header:title,text:component}]}/></Col>
        })
        const collapsibleSubComponent = <Row>{collapsibleComponents}</Row>

        return <div>
                <CollapsibleComponent collapsibles={[{header:collapsibleItem.title,text:collapsibleSubComponent}]}/>
              </div>
    }
}
