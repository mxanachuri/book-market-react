import "./Product.css"

function Users(props) {
    return ( 
        <div>
        <h2>Usuarios</h2>
            <div className="card-body">
            { props.users.map(user => 
                <p>{user.email}</p>
            )
            }
             </div>
            <button onClick={props.prevHandler}>Prev</button>
            <button onClick={props.nextHandler}>Next</button>
        </div>
        
     );
}

export default Users;