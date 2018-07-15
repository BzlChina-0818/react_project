import React, { Component ,Fragment} from 'react'

export default class LazyComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            Com : null
        }
    }
    componentWillMount(){
       this.props.lazy().then((data)=>{
             this.setState({
                 Com : data.default
             })
       })
    }
    render() {
        let {Com} = this.state
        return (
            <Fragment>
                {Com ?<Com {...this.props}/>:null}
            </Fragment>
        )
    }
}

// import React,{Component} from "react"



// class LazyComponent extends Component{
//       constructor(props){
//         super(props)
//         this.state={
//           Com:null
//         }
//       }
//       componentWillMount(){
//         this.props.lazy().then((data)=>{
//           console.log(data)
//           this.setState({
//             Com:data.default
//           })
//         })
       
//       }
//       render(){
//         let {Com}=this.state
//         return <div>
//           {Com?<Com {...this.props}/>:null} 
//         </div>
      
//       }
     
//   }



// export default LazyComponent