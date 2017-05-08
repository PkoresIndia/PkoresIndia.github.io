import {Collapsible,CollapsibleItem} from 'react-materialize'
import React,{Component} from 'react'
export default class CollapsibleComponent extends Component {
    constructor(props) {
        super(props)
    }
    render() {
      const collapsibleComponents = this.props.collapsibles
      const collapsibles = collapsibleComponents.map((collapsibleComponent)=>(<CollapsibleItem className="black-text white" expanded={true} header={collapsibleComponent.header} icon='whatshot'>{collapsibleComponent.text}</CollapsibleItem>))
      return (<Collapsible className="white black-text">
                {collapsibles}
            </Collapsible>)
    }
}
