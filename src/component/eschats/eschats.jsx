import React, { Component } from 'react'
import monment from 'moment'
import echarts  from 'echarts'
// import LazyComponent from '../../tool/lazyCompony'
// console.log( LazyComponent)

class Eschats extends Component {
    constructor(props){
        super(props)
        this.state={
            option : {
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line'
                }]
            }
            
        }
    }
    componentDidMount(){
        let  myChart= echarts.init(this.refs['main'])  
        myChart.setOption(this.state.option);
        window.onresize = ()=>{
            let Wmain = document.documentElement.clientWidth -256;
            myChart.resize(Wmain)
        }
      
      
    }
    render() {
        return (
            <div>
            
            <div style={{width:'100%',height:'400px'}} ref='main'>
                 
            </div>
            </div>
        )
    }
}
export default  Eschats