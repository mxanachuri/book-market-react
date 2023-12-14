import { useEffect, useState } from 'react';

function Tematicas() {
    const [categories, setCategory] = useState([]);

    const getCategory = async (url,  )=>{
      const data = await fetch(url)
      const response = await data.json();
      return response
    }

    useEffect(() =>{
    getCategory('http://localhost:3000/api/products/')
      .then(( category ) => setCategory(category.countByCategory))
    },[])

    return ( 
        <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">
                            Tematicas
                        </h5>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            {
                                categories.map((category, index) => (
                                    <div key={index} className="col-lg-6 mb-4">
                                        <div className="card bg-dark text-white shadow">
                                            <div className="card-body">{category.theme}
                                                <p>Cantidad de libros: {category.count}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
    
    
                        </div>
                    </div>
                </div>
            </div>
     );
}

export default Tematicas;