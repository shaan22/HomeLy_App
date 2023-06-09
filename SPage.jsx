import { useState } from 'react'


import axios from 'axios'

function SPage() {
    const [count, setCount] = useState({

        type:"",
    
        name:""
    
      })
    
    const handleChange=(e)=>{
    
      const {name,value}= e.target
    
      setCount(s=>({...s, [name]:value}))
    
    }
  return (
   <>
     <form onSubmit={async(e)=>{

e.preventDefault();

await axios.post("http://localhost:5000/sendsms",{"type":count.type,"name":count.name});

console.log("sms sent")

}}>

<input name='type' defaultValue={count.type} onChange={handleChange}/>

<input name='name' defaultValue={count.name} onChange={handleChange} />

<input type="submit" value="Click" />

</form>
   </>
  )
}

export default SPage