import React,{useEffect,useState,useRef} from 'react';
import axios from 'axios';

const login = () => {
    const [data, setdata] = useState([])
    const name = useRef(0);
    const password = useRef(0);

    const handel = (e) => {
        e.preventDefault();
        let res = {
            name: name.current.value,
            password: password.current.value
        }
        if(res.name===''||res.password===''){
        return
        }
        data.map((val, ind) => {

            if (res.name === val.name && res.password === val.password) {
                alert("login success");
                localStorage.setItem("user", JSON.stringify(res))
                window.location.href = 'http://localhost:5174/user'
            }

        })
        // axios.post("http://localhost:3000/posts",res).then((result) => {
        //   setdata([...data, result.data])
        // })
    }

    useEffect(() => {
        axios.get("http://localhost:3000/posts").then((ress) => {
            setdata(ress.data)
        })
    }, [])

    return (
        <div>
            <form onSubmit={handel}>
                <input type="text" ref={name} />
                <input type="password" ref={password} />
                <button type='submit'>submit</button>
            </form>
        </div>
    );
}

export default login;
