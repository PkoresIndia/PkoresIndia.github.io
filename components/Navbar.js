import {Navbar,NavItem} from 'react-materialize'
import React,{Component} from 'react'
export default class NavBar extends Component {
    constructor(props) {
        super(props)
        this.state = {navs:[{text:"Home",url:"index.html"},{text:"About Us",url:"aboutus.html"},{text:"Contact Us",url:"contactus.html"},{text:"Services",url:"services.html"}]}
    }
    render() {
        const navComponents = this.state.navs.map((nav)=>(<NavItem href={nav.url}>{nav.text}</NavItem>))
        return (<Navbar>
                  {navComponents}
                </Navbar>)
    }
}
