import React from 'react'
import ReactDom from 'react-dom'
import {HashRouter as Router} from 'react-router-dom'
import App from '@/app'

// import 'antd/dist/antd.css'
ReactDom.render(
    <Router>
        <App/>
       
    </Router>
   ,
    document.querySelector('#app')
)
