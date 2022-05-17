import React from 'react'
import axios from 'axios';
import { useEffect,useState } from 'react';

const UserList = () => {
  const [data, setData] = useState([]);

  useEffect (()=>{
     axios.get("https://jsonplaceholder.typicode.com/users")
     .then(response=>{console.log(response)
     setData(response.data)
     })
     .catch((error)=>console.log(error))
 
  },[])
   return (
     <div className="App">
        <ul>
   <li>
       {
     data.map(data=><li key={data.id}><p>name:</p>{data.name}
     <br/><p>email:</p>{data.email}
     <br/><p>adress:</p>
     {data.address.street}</li>)
       }
   </li>
      </ul>
     </div>
   );
}

export default UserList;