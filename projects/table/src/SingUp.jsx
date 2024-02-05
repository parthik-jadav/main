import axios from 'axios';
import React, { useRef , useState} from 'react';

const SingUp = () => {

 const [data, setdata] = useState([]);
 const name = useRef()
 const password = useRef()
 
 function save(){
     let ans = {
       name:name.current.value,
       password:password.current.value
     }
     if(ans.name===''||ans.password===''){
        alert('fill this form perfectly')
        return
     }
     axios.post("http://localhost:3000/posts",ans).then((res)=>{
         alert('singup sucsecc')
         window.location.href ='http://localhost:5174/login'
     })
 }
 

  return (
    <div>
     <input type="text" name='name' ref={name}/>
     <input type="password" name='pass' ref={password}/>
     <button onClick={save}>submit</button>
    </div>
  );
}

export default SingUp;
