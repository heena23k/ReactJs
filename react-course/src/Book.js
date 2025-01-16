import React from 'react'
import './Book.css'



const Book = (props) => {
    // destructing 
    const{image,title,publisher,price} = props;
  return (
    <div className='book'>
    {console.log(props)}
    
    <div className='book-image'>
        <img src={image}/>
        </div>
        <div className='book-info'>
        <h2 className='book-author'>{title}</h2>
        <p className='book-price'> by{publisher}</p>
        <p>${price}</p>
        
        <button>Add to cart</button>
</div>

    </div>
  )
}

export default Book;