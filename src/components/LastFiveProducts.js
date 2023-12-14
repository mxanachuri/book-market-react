import { useEffect, useState } from 'react';
import "./LastFiveProducts.css"

function LastFiveProducts(props) {
    const [books, setBooks] = useState([]);

    const getBook = async (url,  )=>{
      const data = await fetch(url)
      const response = await data.json();
      return response
    }

    useEffect(() =>{
        getBook('http://localhost:3000/api/products/top/last5Products')
        .then(( products ) => setBooks(products.lastProducts))
    },[])

    return ( 
        <div className='container contenedor contenido'>
        <div className="row">
        <div className="col-sm-8 contenedor"> 
        { books.map((book,i)=>
            <div className="card tarjeta" key={i}>
                <div className="card-body">
                <h5 className="card-header bg-success text-light">{book.titulo}</h5>
                <ul className="list-group list-group-flush">
                <li className="list-group-item">autor: {book.autor}</li>
                <li className="list-group-item">editorial: {book.editorial}</li>
                <li className="list-group-item">paginas: {book.paginas}</li>
                <li className="list-group-item">idioma: {book.idioma}</li>
                <li className="list-group-item">tipo tapa: {book.tipo_tapa}</li>
                <li className="list-group-item">precio: {book.precio}</li>
                <li className="list-group-item">stock: {book.stock}</li>
                <li className="list-group-item">fecha emision: {book.fecha_emision}</li>
                <li className="list-group-item"><img className="img" src={book.imagen} alt="imagen"/></li>
                </ul>
                </div>
            </div>
        )}
        </div>
      </div>
      </div>
     );
}

export default LastFiveProducts;