import React, { useContext, useEffect} from 'react'
import {DataContext} from '../Context'
import './Cart.css'
import Button from '../Button/Button'


const Cart = () => {
  const { cart,increase,reduction,removeProduct,total, getTotal} = useContext(DataContext);
  const CartLength = cart.length > 0;
  
   

  useEffect(() => {
    getTotal()
  }, [CartLength, getTotal])
  

  let whTi = cart.map(item=>( [item.count, item.title]))
  console.log(whTi)
  
  let whPr = total 

  
    
  if(cart.length === 0){
    return (<h2 style={{paddingTop:'80px', height:'100vh', display:'flex', alignItems:'center', justifyContent:'center',textAlign: 'center'}}>Todavia no tienes productos</h2>)
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
      {/* <Link to="/payment" className='boton'>Payment</Link> */}
      <a  href={` https://api.whatsapp.com/send?phone=573196848051&text= Tú orden es ${whTi}, con un total de ${whPr}`}>
        <Button text={'Enviar orden'} big={true}/>
      </a>
      </div>
    </>
    )
            }
        }
    


export default Cart