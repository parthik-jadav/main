import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [arr, setArr] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5000/posts").then((res) => {
      setArr(res.data)
    })
  }, [])

  function removeData(val) {
    axios.delete(`http://localhost:5000/posts/${val}`)
  }

  // function Edit(val){
  //   let data = {

  //   }
  //   axios.put("http://localhost:5000/posts/"+val,{
  //     name: "parthik",
  //     phone: "111"
  //   }).then((res) => {
  //     setArr(res.data)
  //   })
  // }
  console.log(input.name);


  return (<>
    <table border="2">
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Remove</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {
          arr.map((val, ind) =>
            <tr key={ind}>
              <td>{val.name}</td>
              <td>{val.phone}</td>
              <td><button onClick={() => removeData(val.id)}>Delete</button></td>
              <td><button onClick={() => Edit(val.id)}>Edit</button></td>
            </tr>
          )
        }
      </tbody>
    </table>
    <div>
      <input type="text" onChange={(e) => setinput(input.name = e.target.value)} />
      <input type="text" onChange={(e) => setinput(input.phone = e.target.value)} />
      <button >submit</button>
    </div>
  </>)
}

export default App;
