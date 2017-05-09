export default class ProcessComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {src:''}
    }
    componentDidMount() {
        const processes = this.props.processes
        const canvas = document.createElement('canvas')
        const context = canvas.getContext('2d')
        const w = window.innerWidth, h = window.innerHeight
        const size = h/processes.length
        canvas.width = size*2
        canvas.height = size*(2*processes.length+1)
        const y = 3*size/2 ,x = size
        context.fillStyle = '#283593'
        for(var i=0;i<processes.length;i++) {
            context.beginPath()
            context.arc(x,y,size/2,0,2*Math.PI)
            context.fill()
            y += 2 * size
        }
        this.setState({src:canvas.toDataURL()})
    }
    render() {
        return <img src={this.state.src} style={{webkitTransform:`translateX(${window.innerWidth/2-window.innerWidth/6}px)`}}></img>
    }
}
