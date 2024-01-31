import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Users = function () {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // node-js library to call api
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((vishwa) => {console.log(vishwa.products);setProducts(vishwa.products)})
      .catch((err)=>console.log(err));

    // fetch("https://dummyjson.com/products")
    // .then(function(response){
    //     setUsers(response.json());
    // })
  }, []);

  return <>
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-4">
         
        {
            products && products.map(function(product){
                 
                return <>
                    <ProductCard id={product.id} brand={product.brand} image={product.images[0]} />
                </>
            })
        }

      </div>
  </>;
};

export default Users;
