// build a basic image gallery with useReducer to allow users to navigate between images and display the current image

import React, { useReducer } from "react";
const initialState = {
  currentImageIndex: 0,
};
const imageReducer = (state, action) => {switch (action.type){
    case 'NEXT_IMAGE':
      return {
        currentImageIndex: state.currentImageIndex +1 
      };
      case 'PREVIOUS_IMAGE':
        return{
          currentImageIndex:state.currentImageIndex -1
        }
        default :
        return state
  }};
const images = [
    'https://th.bing.com/th/id/OIG1.wQ7nqzXG6LLji1s3MrOP',
    'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg',
    'https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg',
    'https://static.vecteezy.com/system/resources/thumbnails/021/746/785/small/holding-a-tree-in-a-ball-ecology-and-environment-concept-with-generative-ai-photo.jpg',
    'https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?cs=srgb&dl=pexels-soldiervip-1308881.jpg&fm=jpg',
    'https://tinypng.com/images/social/website.jpg'
];
const ImageGalleryUsingUsereducer = () => {
    const [state,dispatch] = useReducer(imageReducer,initialState);

    const currentImage = images[state.currentImageIndex];
  
    return (
      <div>
        <h1>Image Gallery</h1>
        <div>
          <img src={currentImage}/>
        </div>
        <div>
          <button onClick={()=> dispatch({type:'PREVIOUS_IMAGE'})}>Previous</button>
          <button onClick={()=> dispatch({type:'NEXT_IMAGE'})}>Next</button>
        </div>
      </div>
    )
  }