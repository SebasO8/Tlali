import React, { useContext } from 'react'
import {DataContext} from '../Context'
import {Link} from 'react-router-dom'
import Button from '../Button/Button'
import './Card.css'

const Card = () => {
  const { products,addCart } = useContext(DataContext);
  return (

    <div className="product">
      {
        products.map(product =>(
          <div className="card" key={product._id}>
            <Link to={`/product/${product._id}`} className='imageLink'>
              <img src={product.src} alt="" className='image'/>
            </Link>
            <div className="content">
              <h3>
                <Link to={`/product/${product._id}`}>{product.title}</Link>
              </h3>
              <span>${product.price}</span>
              {/* <Button></Button>
              <button onClick={()=> addCart(product._id)}>Add to cart</button> */}
              <Link to="/cart" className="cartlink" onClick={() => addCart(product._id)}>
                <Button text={'Añadir al carrito'} big={true} />
              </Link>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Card

