import React from 'react'
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
const img1 =
  "https://9to5mac.com/wp-content/uploads/sites/6/2019/11/apple-16-inch-macbook-pro-deal-1.jpg?quality=82&strip=all";
const img2 =
  "https://img.freepik.com/free-photo/one-white-sneaker-shoe-isolated-white_93675-134695.jpg";
const Home = () => {

  const productList = [
    {
      name: "Mac Book",
      price: 12000,
      imgSrc: img1,
      id: "asdfg"
    },
    {
      name: "Shoes",
      price: 490,
      imgSrc: img2,
      id: "asdfgd"
    },
  ]

  const dispatch = useDispatch();

  const addToCartHandler = (options) => {
    dispatch({ type: "addToCart", payload: options });
    dispatch({ type: "calculatePrice" });
    toast.success("Added To Cart");
  };
  return (
    <div className='home'>
      {
        productList.map(i => (
          <ProductCard
            key={i.id}
            imgSrc={i.imgSrc}
            price={i.price}
            name={i.name}
            id={i.id}
            handler={addToCartHandler} />
        ))
      }
    </div>
  )
}

const ProductCard = ({ name, id, price, handler, imgSrc }) => (
  <div className="productCard">
    <img src={imgSrc} alt={name} />
    <p>{name}</p>
    <h4>${price}</h4>
    <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>Add to Cart</button>
  </div>
)

export default Home