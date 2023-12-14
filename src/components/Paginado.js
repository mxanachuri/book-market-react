import { useEffect, useState } from 'react';
import "./Paginado.css"
function Paginado() {
    const [users, setUsers] = useState([]);

    const getBook = async (url)=>{
      const data = await fetch(url)
      const response = await data.json();
      return response
    }

    useEffect(() =>{
        getBook('http://localhost:3000/api/users/')
      .then(( users ) => {setUsers(users.users)})
    },[])


    return ( 
        <div className='contenedor'>
            <h1>USERS</h1>
            <div className="card flex-contenedor">
            {users.map((user,i)=>
                <div key={i} className='contenido'>
                    <div className="card-body">
                        <h5 className="card-header bg-success text-light">{user.email}</h5>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">nombre: {user.nombre}</li>
                        <li className="list-group-item">apellido:{user.apellido}</li>
                    </ul>
                </div>    
            )}
           </div> 
        </div>  
     );
}

export default Paginado;