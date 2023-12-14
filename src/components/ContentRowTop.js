
import DataContent from './DataContent';
import { useEffect, useState } from 'react';

function ContentRowTop(){
    const [data, setData] = useState([]);

    const getData = async (url,url2,url3)=>{
      const data = await fetch(url)
      const response = await data.json();
      const count = await (await fetch(url2)).json();
      const countCategories = await (await fetch(url3)).json();
      const dataBoxes = [
        {
          title: "Books in Data Base",
          amount: response.count,
          icon: 'fa-film',
          styles: ['border-left-primary' ,'text-primary']
        },
        {
          title: "Total sales",
          amount: response.acountOrders,
          icon: 'fa-award',
          styles: [ 'border-left-success' ,'text-success']
        },
        {
          title: "total books sold",
          amount: response.productSold,
          icon: 'fa-user',
          styles: ['border-left-warning', 'text-warning']
        }, 
        {
          title: "total users",
          amount: count.count,
          icon: 'fa-user',
          styles: ['border-left-info', 'text-info']
        },
        {
          title: "total categories",
          amount: countCategories.countByCategory.length,
          icon: 'fa-user',
          styles: ['border-left-secondary', 'text-secondary']
        }
      ]
      return dataBoxes;
    }

    useEffect(() =>{
        getData('http://localhost:3000/api/products/sold/acountSoldAndOrders',"http://localhost:3000/api/users/list/count","http://localhost:3000/api/products/")
        .then(( data ) => setData(data))
    },[])

    return(
        <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
        </div>
        {/* Content Row Movies*/}
        <div className="row">
          {/* Movies in Data Base */}
          {
            data.map((dataBox, i) =>(
              <DataContent key={i} dataBox = {dataBox}/>
            ))
          }
        </div>
        {/* End movies in Data Base */}
        {/* Content Row Last Movie in Data Base */}

      </div>
    )
}

export default ContentRowTop;