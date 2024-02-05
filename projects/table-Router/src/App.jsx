import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';

const App = () => {

  const [data, setdata] = useState([])

  const productName = useRef()
  const price = useRef()

  const handle = () => {
    const dataa = {
      productName: productName.current.value,
      price: price.current.value
    }

    axios.post('http://localhost:5000/posts', dataa).then((res) => {
      console.log(res.data);
      setdata([...data, dataa])
    })

  }

  useEffect(() => {
    axios.get('http://localhost:5000/posts').then((res) => {
      console.log(res, "ress");+
      setdata(res.data)
    })
  }, [])




  return (
    <div>
      <h1>app</h1>
      <input type="text" ref={productName} />
      <input type="number" ref={price} />
      <button onClick={handle}>Submit</button>


      <div>

        {
          data.map((val, ind) => {

            return (
              <>
                <h1>{val.id}</h1>
                <h2>{val.productName}</h2>
                <h3>{val.price}</h3>
              </>
            )

          })
        }

      </div>
    </div>
  );
}

export default App;
