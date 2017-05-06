import {Collection,CollectionItem} from 'react-materialize'
import React,{Component} from 'react'
export default class CollectionComponent extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const collections = this.props.collections.map((collection)=>(<CollectionItem className={this.props.className}>{collection}</CollectionItem>))
        return <Collection header={this.props.header||''} className={this.props.className}>{collections}</Collection>
    }
}
