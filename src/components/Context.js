import React, { Component } from 'react'
// this create global properties
export const DataContext = React.createContext();

export class DataProvider extends Component {

    // component with current state and cart functions
    state = {
        products: [
            {
              "_id": "1",
              "title": "Caja Tlali Premium",
              "src": "https://i.ibb.co/BfYbYRD/Mesa-de-trabajo-1.jpg",
              "description": "Caja con 2 suculentas, matera personalizada si lo desea, vino gato negro o champaña Jp Chenet, frasco con dulces de tu preferencia o por defecto bombones de chocolate y vela.",
              "price": 95000,
              "count": 1
            },
            {
              "_id": "2",
              "title": "Caja Tlali Silver",
              "src": "https://i.ibb.co/mSh0vf6/Mesa-de-trabajo-2.jpg",
              "description": "Caja con 1 suculenta, matera personalizada si lo desea, vino gato negro o champaña Jp Chenet, frasco con dulces de tu preferencia o por defecto bombones de chocolate y vela.",
              "price": 85000,
              "count": 1
            },
            {
              "_id": "3",
              "title": "Caja Tlali Triple",
              "src": "https://i.ibb.co/bLSx0Yv/Mesa-de-trabajo-3.jpg",
              "description": "Caja con 3 suculentas, matera perzonalizada si lo deseas.",
              "price": 70000,
              "count": 1
            },
            {
              "_id": "4",
              "title": "Caja Tlali Oasis",
              "src": "https://i.ibb.co/wRs7nVJ/Mesa-de-trabajo-4.jpg",
              "description": "Caja con oasis de vidrio y tres suculentas.",
              "price": 50000,
              "count": 1
            },
            {
              "_id": "5",
              "title": "Caja Tlali Sencilla",
              "src": "https://i.ibb.co/Wg72M2Y/Mesa-de-trabajo-5.jpg",
              "description": "Caja sencilla con suculenta y matera perzonalizada si lo deseas.",
              "price": 35000,
              "count": 1
            },
            {
                "_id": "6",
                "title": "Caja Tlali Gold",
                "src": "https://images.unsplash.com/photo-1547517023-7ca0c162f816?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
                "description": "Caja con 3 suculenta, matera perzonalizada champaña Jp Chenet y frasco con dulces de tu preferencia o por defecto bombones de chocolate. ",
                "price": 130000,
                "count": 1
              }, 
              {
                "_id": "7",
                "title": "Tlali Paradise",
                "src": "https://images.unsplash.com/photo-1623225178244-e5d61f4b8010?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80",
                "description": "Terrario con dos suculentas, muñeco de tu preferencia, frasco con dulces de tu preferencia o por defecto bombones de chocolate y vela.",
                "price": 65000,
                "count": 1
              }, 
              {
                "_id": "8",
                "title": "Caja Tlali 3 Regal",
                "src": "https://i.ibb.co/9rhYJqK/Whats-App-Image-2021-09-12-at-11-23-16.jpg",
                "description": "Caja con 2 suculentas y matera perzonalizada si lo deseas, 3 whisky Chivas Regal 700 Ml, 2 frascos con dulces de tu preferencia o por defecto mani.",
                "price": 300000,
                "count": 1
              }, 
              {
                "_id": "9",
                "title": "Caja Tlali Fresh",
                "src": "https://i.ibb.co/DWBt3X9/producto-9.jpg",
                "description": "Caja con 2 suculentas, matera personalizada si lo desea, frasco con dulces de tu preferencia y un botilito.",
                "price": 115000,
                "count": 1
              }, 
              {
                "_id": "10",
                "title": "Tlali Cactus",
                "src": "https://images.unsplash.com/photo-1508021371391-516c9dd8fcfd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=638&q=80",
                "description": "Caja sencilla con cactus y matera perzonalizada si lo deseas",
                "price": 45000,
                "count": 1
              },       
        ],
        cart: [],
        total: 0
    };

    // add the product to the cart
    addCart = (id) =>{
        const {products, cart} = this.state;
        // returns true if item_id is different from the id parameter, otherwise it returns false
        const check = cart.every(item =>{
            return item._id !== id
        })
        // if check is true the following is executed
        if(check){
            // A constant called data is created where the array called products will be reviewed and it will return a new array that will have only the properties with name _id that is equal to our id parameter
            const data = products.filter(product =>{
                return product._id === id
            })
            // modify the state to an array with a copy of cart and data
            this.setState({cart: [...cart,...data]})
        }
        // if the verification is false, an alert is run
        else{
            alert("El producto ya ha sido añadido al carrito")
        }
    };

    // reduce the counter amount
    reduction = id =>{
        // bring the state
        const { cart } = this.state;
        // iterates with each item in the cart
        cart.forEach(item =>{
            // if item_id is strictly equal to id it will execute the ternary operator
            if(item._id === id){
                // if item.count is strictly equal to 1, item.count will be equal to 1 otherwise 1 will be subtracted
                item.count === 1 ? item.count = 1 : item.count -=1;
            }
        })
        // modify the status
        this.setState({cart: cart});
        // call getTotal function
        this.getTotal();
    };
    // add the counter quantity
    increase = id =>{
        // bring the state
        const { cart } = this.state;
        // iterates with each item in the cart
        cart.forEach(item =>{
            // if item_id is strictly equal to id, it will increment 1 to the counter
            if(item._id === id){
                item.count += 1;
            }
        })
        // modify the status
        this.setState({cart: cart});
        // call getTotal function
        this.getTotal();
    };
    // remove the product from the cart
    removeProduct = id =>{
        // the following will be executed if window.confirm is true
        if(window.confirm("¿Quieres eliminar este producto?")){
            // bring the state
            const {cart} = this.state;
            // iterates with each item in the cart
            cart.forEach((item, index) =>{
                // if item_id is strictly equal to id, it will remove an element from the array from the position we are
                if(item._id === id){
                    cart.splice(index, 1)
                    // if item.count is greater than or equal to 1, item.count will be equal to 1
                    if(item.count >= 1){item.count = 1}
                }
            })
            // modify the status
            this.setState({cart: cart});
            // call getTotal function
            this.getTotal();
        }
       
    };
    // modify the total
    getTotal = ()=>{
        // bring the state
        const{cart} = this.state;
        // the variable prev will be where the operations that are being carried out are saved, item.price will be added to prev by item.count and this will start with 0
        const res = cart.reduce((prev, item) => {
            return prev + (item.price * item.count);
        },0)
        // modify the status
        this.setState({total: res})
    };
    // every time the page is refreshed the following is executed
    componentDidUpdate(){
        localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
        localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
    };

    componentDidMount(){
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if(dataCart !== null){
            this.setState({cart: dataCart});
        }
        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
        if(dataTotal !== null){
            this.setState({total: dataTotal});
        }
    }
   

    render() {
        const {products, cart,total} = this.state;
        const {addCart,reduction,increase,removeProduct,getTotal} = this;
        return (
            <DataContext.Provider 
            value={{products, addCart, cart, reduction,increase,removeProduct,total,getTotal}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}