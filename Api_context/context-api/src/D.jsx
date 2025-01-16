import React, { useContext } from 'react'
import { GreetContext,Greet2Context } from './A'


const D = () => {
    const useCon = useContext(GreetContext);
    const useCon2 = useContext(Greet2Context);
  return (
    

//     <GreetContext.Consumer>{(val)=>{
// return (
//     <Greet2Context.Consumer>
//         {
//             (val2)=>{
//                 return <h1>Greet:{val} {val2}</h1>
//             }
//         }
//     </Greet2Context.Consumer>
// )
//     }}

//     </GreetContext.Consumer>
    
<h1>Greet {useCon} {useCon2}</h1>
        
    
  );

};

export default D