import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Button from '../Button/Button'
import {DataContext} from '../Context'
import './Details.css'


const Details = () => {
    let params = useParams().id;

    const { products, addCart } = useContext(DataContext);

    const [object, setObject] = useState({product: []})

    const getProduct = () =>{
        if(params){
            const res = products
            const data = res.filter(element =>{
                return element._id === params
            })
            setObject({product: data})
        }
    }

    useEffect(() => {
        getProduct()
    }, [])

    const {product} = object

    return (
        <div className='containerDetails'>
            {product.map(item =>(
                <div className="details" key={item._id}>
                    <img src={item.src} alt={item.title}/>
                    <div className="box">
                        <div className="row">
                            <h2>{item.title}</h2>
                            <span>${item.price}</span>
                        </div>
                        <p>{item.description}</p>
                        <p>{item.content}</p>
                        <Link to="/cart" className="cart" onClick={() => addCart(item._id)}>
                        <Button text={'Añadir al carrito'} big={true}/>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Details
