import {Navbar,NavItem} from 'react-materialize'
import React,{Component} from 'react'
export default class NavBar extends Component {
    constructor(props) {
        super(props)
        this.state = {navs:[{text:"Home",url:"index.html"},{text:"About Us",url:"aboutus.html"},{text:"Our Business",url:"our-business.html"},{text:"Our Partners",url:"partners.html"},{text:'Our Clients',url:'clients.html'},{text:'Gallery',url:'gallery.html'},{text:"Career",url:"career.html"},{text:"Contact Us",url:"contactus.html"}]}
    }
    render() {
        const navComponents = this.state.navs.map((nav)=>(<NavItem href={nav.url}>{nav.text}</NavItem>))
        return (<Navbar>
                  {navComponents}
                </Navbar>)
    }
}
