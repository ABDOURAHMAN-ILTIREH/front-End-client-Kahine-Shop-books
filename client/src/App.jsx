import { useEffect} from 'react';
import './index.css';
import "./scss/scss_content_features.scss"


// import calca
import  {calculateProducts} from "./redux/redux"
import {useSelector, useDispatch} from "react-redux"

import Layout from './layout/Layout';

function App() {

 //import products from state cart
 const {products} = useSelector( (state)=> state.cart);



 const dispatch = useDispatch()

   useEffect(()=>{
     dispatch(calculateProducts())
   },[products])
  
  return (
    <div className="app">
       <Layout />
    </div>
  );
}

export default App;
