
import { useState } from 'react';
import './App.css';

import Cart from './components/Cart';
import NavBar from './components/NavBar';
import Shop from './components/Shop';
function App() {
const[cart,setCart] = useState([]);
const[warning,setWarning] = useState(false);
const[show,setShow] = useState(true)

const handleClick=(item)=>{
let isPresent = false;
cart.forEach((product)=>{
  if(item.id===product.id)
    isPresent=true;
  
})
if(isPresent){
setWarning(true);
setTimeout(()=>{
  setWarning(false)
},2000)
return 

  
}
setCart([...cart,item])

}
  return (
    <div>
<NavBar size ={cart.length} setShow = {setShow}/>
{
  show?<Shop handleClick={handleClick}/>:<Cart cart ={cart} setCart ={setCart}/>
}
<Shop handleClick={handleClick}/>
{
        warning && <div className='warning'> Item is already in your cart </div>
      }
    </div>
  );
}

export default App;
