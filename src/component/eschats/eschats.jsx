import React, { Component,Fragment } from 'react'
import moment from 'moment'
import echarts  from 'echarts'
// import LazyComponent from '../../tool/lazyCompony'
// console.log( LazyComponent)
import http from '../../until/http'
import style from '../eschats/esc'
class Eschats extends Component {
    constructor(props){
        super(props)
        let oData = new Date();
        let arr = [];
        for(var i=1;i<=7;i++){
            arr.unshift(moment().month(oData.getMonth()).subtract(i,'day').format("YYYY-MM-DD"))
        } 
        console.log(arr)
        this.state={
            option : {
                xAxis: {
                    type: 'category',
                    data: arr
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
    componentWillMount(){
       
    }
    componentDidMount(){
        let  myChart= echarts.init(this.div); 
        myChart.setOption(this.state.option);
       
        http.post('/dsp-report/index',{}).then((res)=>{
            console.log(res)
    })
        window.onresize = ()=>{
            let Wmain = document.documentElement.clientWidth -256;
            myChart.resize(Wmain)
        }
      
      
    }
    render() {
        
        return (
            <Fragment>
             <div className={style.top}>
                 <header className={style.head}>
                     111
                 </header>
                 <div className={style.mon}>
                    <div>
                        <p>现金账户</p>
                        <h3>￥126,560.00</h3>
                    </div>
                    <div>
                        <p>今日消耗</p>
                        <h3>￥5400</h3>
                    </div>
                 </div>
                
             </div>
            <div style={{width:'100%',height:'400px'}} ref={(div)=>{(this.div=div)}}>
                 
            </div>
            </Fragment>
        )
    }
}
export default  Eschats