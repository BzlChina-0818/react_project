let querystring ={
     strify(obj){
         let str = ''
         for(var i in obj){
                str += i +"="+obj[i]+"&"
         }
         let str1 = str.slice(0,-1)
         return str1
     },
     parse(str){
        let arr=str.split("&")
        let o={}
        arr.forEach((i,ind)=>{
            let newarr=i.split("=")
            o[newarr[0]]=newarr[1]
        })
        return o
    }
}
let baseUrl =process.env.NODE_ENV =="development"?"http://localhost:9000":""
   
export default {
      get(url,obj){
        let o = querystring.strify(obj)
        console.log(o)
       url = url +'?'+ o
        return new Promise((resolve,reject)=>{
            console.log(baseUrl+url)
             fetch(baseUrl+url,{
                headers:{
                    'Content-Type':'application/json'
                }
             })
             .then(body=>{
                return body.json() 
             })
             .then((data)=>{
                 resolve(data)
             })
        })
      },
      post(url,params){
        return new Promise((resolve,reject)=>{
            fetch(baseUrl+url,{
                method:"post",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(params)
              
            }).then(body=>body.json())
              .then(res=>{
                  resolve(res)
              })
        })
    }
}