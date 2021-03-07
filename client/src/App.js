import React, {useState, useEffect} from "react";
import Send from "./components/form/form";
import axios from "axios";



function App() {
/*n  useEffect(()=>{
    axios.get('http://localhost:3001/pizzas?_order=asc&_sort=price').then(resp=>{
      dispatch(setPizzas(resp.data))})
  },[]);*/
  return (
      <Send/>
  );
}

export default App;
