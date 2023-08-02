import React, {useState} from 'react'

function Countnum() {
    const {value,setvalue} = useState(0);

    const updatevalue = () => {
        setvalue(value + 1)
    }   
  return (
  <>
    <h1>Counting {value}</h1>
    <button onClick={updatevalue}>click here</button>
  </>
  )
}

export default Countnum;
