import React,{Component} from 'react'
export default class ProcessComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {src:''}
    }
    drawImage() {
      const processes = this.props.processes
      const canvas = document.createElement('canvas')
      const context = canvas.getContext('2d')
      const w = window.innerWidth, h = window.innerHeight
      let size = Math.max(h,w)/processes.length
      size /= 5
      canvas.width = size*18
      canvas.height = 18*size
      let cx = 9*size,cy = 9*size
      context.fillStyle = '#FFB300'
      context.fillRect(0,0,canvas.width,canvas.height)
      context.fillStyle = '#283593'
      context.strokeStyle = context.fillStyle
      context.lineWidth = size/2
      const points = []
      context.beginPath()
      context.arc(cx,cy,7*size,0,2*Math.PI)
      context.stroke()
      if(processes.length > 0) {
        console.log(`processes are ${processes.length}`)
          const gapDeg = 360/(processes.length)
          for(var i=0;i<processes.length;i++) {
              const deg = (i*gapDeg)
              context.save()
              context.translate(cx,cy)
              context.rotate((deg+gapDeg/3)*Math.PI/180)
              for(var j=0;j<2;j++) {
                  context.save()
                  context.translate(0,-7*size)
                  context.rotate((2*j-1)*Math.PI/4)

                  context.beginPath()
                  context.moveTo(0,0)
                  context.lineTo(-size,0)
                  context.stroke()
                  context.restore()
              }
              context.restore()
              const x = cx+(7*size)*(Math.cos(deg*Math.PI/180)),y = cy + (7*size)*Math.sin(deg*Math.PI/180)
              points.push({x,y})
          }
      }
      points.forEach((point,index)=>{
          const text = processes[index]
          const textTokens = text.split(" ")
          context.beginPath()
          context.arc(point.x,point.y,size*2,0,2*Math.PI)
          context.fillStyle = '#283593'
          context.fill()
          context.fillStyle = 'white'
          context.font = context.font.replace(/\d{2}/,`${size/2}`)
          var yText = -size/2
          for(var i=0;i<textTokens.length;i++){
              const wText = context.measureText(textTokens[i]).width
              context.save()
              context.translate(point.x,point.y)
              context.fillText(textTokens[i],-wText/2,yText)
              yText+=(size*2)/3
              context.restore()
          }

      })
      this.setState({src:canvas.toDataURL()})
    }
    componentDidMount() {
        this.drawImage()
        window.onresize = () => {
            this.drawImage()
        }
    }
    render() {
        const imgW = 18*Math.max(window.innerWidth,window.innerHeight)/(this.props.processes.length*5)
        console.log(imgW)
        return <img src={this.state.src} style={{webkitTransform:`translateX(${window.innerWidth/2-imgW/2}px)`}}></img>
    }
}
