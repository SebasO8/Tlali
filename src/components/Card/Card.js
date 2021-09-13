import React, { useContext, useState } from 'react'
import {DataContext} from '../Context'
import {Link} from 'react-router-dom'
import Button from '../Button/Button'
import './Card.css'

const Card = () => {
  const { products,addCart } = useContext(DataContext);



  const [productsFilter, setProductsFilter] = useState(products)
   
    
    const machine = () =>{
        let result = products.filter(catg => catg.category.includes("suculentas1"))
        setProductsFilter(result) 
    }
    const machine2 = () =>{
      let result = products.filter(catg => catg.category.includes("incluyeDulces"))
      setProductsFilter(result) 
    }
    const machine3 = () =>{
    let result = products.filter(catg => catg.category.includes("licor"))
    setProductsFilter(result) 
    }
  return (
    <div className='container-products'>
      <p className='text-products'>Categorias:</p>
      <div className='buttonsContainer'>
        
      <button onClick={machine} className='buttonFilter'>Más de una suculenta</button>
      <button onClick={machine2} className='buttonFilter'>Incluye Dulces</button>
      <button onClick={machine3} className='buttonFilter'>Incluye Licores</button>
    </div>
    <div className="product">
      {
        productsFilter.map(product =>(
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
    </div>
  )
}

export default Card

