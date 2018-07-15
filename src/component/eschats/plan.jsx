import React, { Component } from 'react'
import {Table, Icon, Divider ,Modal, Button} from 'antd'
import http from '../../until/http'
import style from '../../css/home'
export default class Plan extends Component {
  constructor(props){
    super(props)
    this.state={
      dataSource:null,
      visible: false,
      delectIndex:null
    }
    this.handleOk = this.handleOk.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
   
  }
  handleDelect(record){
    this.setState({
      visible:true
    })
  }
  handleOk(){
    console.log(this.state.delectIndex)
   http.post(`/dsp-creative/delect/${this.state.delectIndex}`).then((res)=>{
           if(res.status=='0'){
             console.log('1')
            this.updataTable()
           }
   })
       this.setState({
         visible:false
       })
  }
  handleCancel(e){
    this.setState({
      visible:false
    })
  }
  render() {
    let that = this
    const columns = [{
      title: '单元ID',
      dataIndex: 'key',
      render: text => <a href="javascript:;">{text}</a>,
    }, {
      title: '单元名称',
      dataIndex: 'status'
    }, {
      title: '投放周期',
      dataIndex: 'dayBudget'
    }, 
    {
      title: '曝光量',
      dataIndex: 'clickNum'
    },
    {
      title: '点击率',
      dataIndex: 'consumed'
    },
    {
      title: '总消耗',
      dataIndex: 'clickPrice'
    },{
      title: '',
      render: (text, record) =>{
        function del(rec){
          that.setState({
            visible:true,
            delectIndex:rec.key
          })  
        } 
        return(
          <span>
            <a href="javascript:;" onClick={()=>{del(record)}}>X</a>
          </span>
        )
      
      }
         
     
    
    }];
    
  
    return (
      <div className={style.scr}>
           <Modal
           title="警告"
           visible={this.state.visible}
           onOk={this.handleOk}
           onCancel={this.handleCancel}
           okText="确定"
           cancelText="取消"
           >
           您确定要删除么？
           </Modal>
           <Table columns={columns} dataSource={this.state.dataSource} />
      </div>
    )
  }
  updataTable(){
   
    http.post('/dsp-creative/daata').then(( res)=>{
      console.log('已删除')
       this.setState({
        dataSource:res.data.list
       })
   })
  }
  componentDidMount(){
    this.updataTable()
  }
}

