import { useEffect, useState } from 'react';
import "./Product.css"
import { useParams } from 'react-router-dom';

function Product() {
    const param = useParams();
    const [book, setBook] = useState({});

    const getBook = async (url,  )=>{
      const data = await fetch(url)
      const response = await data.json();
      return response
    }

    useEffect(() =>{
        getBook('http://localhost:3000/api/products/'+param.id)
      .then(( product ) => setBook(product.product))
    },[])

    return ( 
        <div className="card" >
            <div className="card-body">
             <p>{book.titulo}</p>
             <p>{book.autor}</p>
             <p>{book.editorial}</p>
             <p>{book.paginas}</p>
             <p>{book.idoma}</p>
             <p>{book.tipo_tapa}</p>
             <p>{book.precio}</p>
             <p>{book.stok}</p>
             <p>{book.fecha_emision}</p>
             </div>
        </div>
     );
}

export default Product;