import NavBar from './components/Navbar'
import React,{Component} from 'react'
import ReactDOM from 'react-dom'
class IndexComponent extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (<div>
                <NavBar/>
            </div>)
    }
}
ReactDOM.render(<IndexComponent/>,document.getElementById('main'))
