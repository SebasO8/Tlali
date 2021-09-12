import React, {useState,} from 'react';
// we import all the components and information that we are going to use

// navigation bar component
import NavBar from './components/NavBar/Navbar'
// dropdown menu component
import Dropdown from './components/Dropdown/Dropdown';
//the component where are the routes
import Sections from './components/Sections/Sections';
// component with all the information and functions for the operation of the shopping cart
import { DataProvider } from './components/Context';
import Footer from './components/Footer/Footer';


// App component
function App() {
  // the hook useSate and the function 'toggle' are used to toggle between the Navbar component and the Dropdown component
  const [isOpen, setIsOpen] = useState(false)
  
  const toggle = () => {
    setIsOpen(!isOpen)
  } 
  

  return (
    <>
      <DataProvider>
        {/* the Navbar component is passed the 'toggle' property which will be the 'toggle' arrow function */}
        <NavBar toggle={toggle}  />
        {/* The drop-down component is passed the 'isOpen' property, which will be the component's state, and the toggle property, which will be the 'toggle' arrow function, will also be passed to it */}
        <Dropdown open={isOpen} toggle={toggle} />
        <Sections/>
        <Footer/>
      </DataProvider>

    </>
  );
}

export default App;
