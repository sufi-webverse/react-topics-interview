import { useEffect, useReducer, useRef, useState } from "react";

const ProductCard = ({ id, image, brand, classNames }) => {
    
  const [a, setA] = useState(0);
  const btnAddToCart = useRef(null)

  useEffect(() => {
   // mount
  }, [a]);

  function addToCart(e, id){
     console.log(e.target, id);

     console.log(btnAddToCart.current)
  }

  return (
    <>
      <div className="shadow rounded" key={id}>
        <img className="w-20" src={image} />

        <div className="flex flex-col">
          <span className="">{brand}</span>

          <button ref={btnAddToCart} className="bg-indigo-600 text-white" onClick={(e)=>addToCart(e, id)}>add to cart</button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
