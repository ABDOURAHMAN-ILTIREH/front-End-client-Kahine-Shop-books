import { useEffect, useContext } from 'react';
import './index.css';
import "./scss/scss_content_features.scss"


// import dark style page
import "./scss/dark.scss"

// import calca
import  {calculateProducts} from "./redux/redux"
import {useSelector, useDispatch} from "react-redux"

// import darkmodeContext
import { DarkModeContext } from "./context/Light&Dark"
import Routers from './routers/Routers';
import Layout from './layout/Layout';

function App() {
 // set lightOrdark Mode
 const { darkMode} = useContext(DarkModeContext);

 //import products from state cart
 const {products} = useSelector( (state)=> state.cart);



 const dispatch = useDispatch()

   useEffect(()=>{
     dispatch(calculateProducts())
   },[products])
  
  return (
    <div className={darkMode ? "app dark" : "app"}>
       <Layout />
    </div>
  );
}

export default App;
