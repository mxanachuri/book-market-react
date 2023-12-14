import { useEffect, useState } from 'react';
import "./Product.css"

function LastUser() {
    const [user, setUser] = useState({});

    const getUser = async (url)=>{
      const data = await fetch(url)
      const response = await data.json();
      return response
    }

    useEffect(() =>{
        getUser('http://localhost:3000/api/users/find/lastUser')
      .then(( user ) => setUser(user.user))
    },[])

    return ( 
        <div className="card contenido contenedor">
            <div className="card-body">
            <h5 className="card-header bg-success text-light">email: {user.email}</h5>
            <p className='list-group-item'>nombre: {user.nombre}</p>
            <p className='list-group-item'>apellido: {user.apellido}</p>
            <div className='list-group-item'><img src={user.imagen} alt='userImage'/></div>
             </div>
        </div>
     );
}

export default LastUser;