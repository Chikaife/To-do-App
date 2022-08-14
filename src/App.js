import Header from "./Header";
import Stuff from "./Stuff";
import Content from "./Content";
import Footer from './Footer';
import Search from "./Search";

import { useState } from "react";
import { useEffect } from "react";


function App() {
  const API_URL ='http://localhost:3500/items';


   
  const [items, setItems] = useState([]);

const [newItem, setNewItem] = useState('')
const [search, setSearch] = useState('')

useEffect(()=>{
const fetchItems = async () =>{
  try{
    const response = await fetch(API_URL);
    const listItems = await response.json();
    setItems(listItems)
  } catch(err){
    console.log(err.stack)
  }
}  
}, [])


 
const addItem = (item) => {
  const id = items.length ? items[items.length - 1].id + 1 : 1;
  const myNewItem = {id, checked: false, item};
  const listItems = [...items, myNewItem];
  setItems(listItems);
}

const handleCheck = (id)=>{
  const listItems = items.map((item) => item.id === id?{...item,checked: !item.checked} :item);
  setItems(listItems);
  
  }
   
  const hadelete = (id)=>{
      const listItems = items.filter((item) => item.id !== id);
      setItems (listItems);
  
  }

  const haad = (e)=>{
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem(''); 
  }
     

  
  return (
    <div className="App">
   
     
  <Header title="Hack Goals"/>
  <Stuff
  newItem = {newItem}
  setNewItem={setNewItem}
   haad={haad}
  />

  <Search
  search={search}
  setSearch={setSearch}
  />
  <Content 
  items={items.filter(item =>((item.item).toLowerCase()).includes(search.toLowerCase()))}
  handleCheck={handleCheck}
  hadelete={hadelete}
 
  />
  <Footer/>
     
    </div>
  );
}

export default App;