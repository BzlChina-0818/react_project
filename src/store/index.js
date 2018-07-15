import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import  {UP_DATA_LIST} from './actionTyepe'
const defaultState = {
    tableList: []
}
const action= {
    [UP_DATA_LIST](text){
      return{
          type:UP_DATA_LIST,
          text:text
      } 
    }
}
const reducer = (state =defaultState, action)=>{
    let {type} = action

}
export default new createStore(reducer,applyMiddleware(thunk))