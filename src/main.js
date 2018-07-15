import React from 'react'
import ReactDom from 'react-dom'
import {HashRouter as Router} from 'react-router-dom'
import {Provider} from 'react-redux'
import Store from './store'
import App from '@/app'

// import 'antd/dist/antd.css'
ReactDom.render(
    <Provider store={Store}>
        <Router>
            <App/>  
        </Router>
    </Provider>
   ,
    document.querySelector('#app')
)
