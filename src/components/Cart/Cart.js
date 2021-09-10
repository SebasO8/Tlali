import React, { useContext, useEffect } from 'react'
import {DataContext} from '../Context'
import {Link} from 'react-router-dom'
import './Cart.css'

const Cart = () => {
  const { cart,increase,reduction,removeProduct,total,getTotal } = useContext(DataContext);
    
  useEffect(() => {
    getTotal()
  }, [])
    
  if(cart.length === 0){
    return (<h2 style={{textAlign:"center", paddingTop:'80px'}}>Todavia no tienes productos</h2>)
  }else{
     return (
     <>
      {
        cart.map(item =>(
          <div className="details cart" key={item._id}>
            <img src={item.src} alt=""/>
            <div className="box">
              <div className="row">
                <h2>{item.title}</h2>
                <span>${item.price * item.count}</span>
              </div>
              <p>{item.description}</p>
              <p>{item.content}</p>
              <div className="amount">
                <button className="count" onClick={() => reduction(item._id)}> - </button>
                <span>{item.count}</span>
                <button className="count" onClick={() => increase(item._id)}> + </button>
              </div>
            </div>
            <div className="delete" onClick={() => removeProduct(item._id)}>X</div>
          </div>
        ))
      }
      <div className="total">
      <h3>Total: ${total}</h3>
      <Link to="/payment" className='boton'>Payment</Link>
      </div>
    </>
    )
            }
        }
    


export default Cart