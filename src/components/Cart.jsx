import React from 'react'
import { AiFillDelete } from 'react-icons/ai'

const img1 =
  "https://9to5mac.com/wp-content/uploads/sites/6/2019/11/apple-16-inch-macbook-pro-deal-1.jpg?quality=82&strip=all";
const img2 =
  "https://img.freepik.com/free-photo/one-white-sneaker-shoe-isolated-white_93675-134695.jpg";

const Cart = () => {
  return (
    <div className='cart'>
      <main>
        <CartItem
          imgSrc={img1}
          name="Mac Book"
          price={2322}
          qty={1}
          id="adfg"
        />

      </main>

      <aside>
        <h2>Subtotal: ${2000}</h2>
        <h2>Shipping: ${20}</h2>
        <h2>Tax: ${2}</h2>
        <h2>Total: ${2022}</h2>
      </aside>
    </div>
  )
}

const CartItem = ({ imgSrc, name, price, qty, decrement, increment, deleteHandler, id }) => (
  <div className="cartItem">
    <img src={imgSrc} alt="Item" />
    <article>
      <h3>{name}</h3>
      <p>${price}</p>
    </article>
    <div>
      <button onClick={() => decrement(id)}>-</button>
      <p>{qty}</p>
      <button onClick={() => increment(id)}>+</button>
    </div>
    <AiFillDelete onClick={() => deleteHandler(id)} />
  </div>

)
export default Cart