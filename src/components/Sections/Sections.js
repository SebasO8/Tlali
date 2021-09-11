import React from 'react'
import Card from '../Card/Card'
import {Route} from "react-router-dom"
import ContainerComponents from '../ContainerComponents/ContainerComponents'
import Details from '../Details/Details'
import Cart from '../Cart/Cart'
import Contact from '../ContainerComponents/Contact/Contact'

const Sections = () => {

  return (
    <section>
      <Route path="/" component={ContainerComponents} exact />
      <Route path="/products" component={Card} exact />
      <Route path="/product/:id" component={Details} exact />
      <Route path="/cart" component={Cart}  exact/>
      <Route path="/contact" component={ContainerComponents} exact />
    </section>
  )
}

export default Sections
