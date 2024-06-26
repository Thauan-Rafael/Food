import React from 'react';
import Home from './components/Home.jsx'
import Header from './components/Header.jsx'
import Content from './components/Content.jsx'
import Pizza from './components/Pizza.jsx'
import Hamburger from './components/Hamburger.jsx'
import Japanese from './components/Japanese.jsx'
import Cake from './components/Cakes.jsx'
import Cream from './components/Creams.jsx'
import Drinks from './components/Drinks.jsx'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
let selectedItem = []
let cartItems = [];
function App() {
  let sum = 0;
  const [total, setTotal] = React.useState('0')
  const [content, setContent] = React.useState(<Home changeContent={changeContent}/>);
  function updateSum(amount){
    sum = sum + amount;
    setTotal(sum)
    return sum
  }
  function changeContent(value) {
      switch (value) {
        case 'pizzaCard':
          setContent(<Pizza sum={sum} setTotal={setTotal} setContent={setContent} updateSum={updateSum} selectedItem={selectedItem}/>);
          break;
      case 'hamburgerCard':
          setContent(<Hamburger sum={sum} setTotal={setTotal} setContent={setContent} updateSum={updateSum} selectedItem={selectedItem}/>);
          break;
      case 'japaneseCard':
          setContent(<Japanese sum={sum} setTotal={setTotal} setContent={setContent} updateSum={updateSum} selectedItem={selectedItem}/>);
          break;
      case 'cakeCard':
          setContent(<Cake sum={sum} setTotal={setTotal} setContent={setContent} updateSum={updateSum} selectedItem={selectedItem}/>);
          break;
    case 'iceCreamCard':
          setContent(<Cream sum={sum} setTotal={setTotal} setContent={setContent} updateSum={updateSum} selectedItem={selectedItem}/>);
          break;
    case 'drinkCard':
          setContent(<Drinks sum={sum} setTotal={setTotal} setContent={setContent} updateSum={updateSum} selectedItem={selectedItem}/>);
          break;
        default:
          break;
      }
  }
  return (
    <>
      <Header cartItems={cartItems} updateSum={updateSum} setTotal={setTotal} total={total} setContent={setContent} changeContent={changeContent} selectedItem={selectedItem}/>
      <Content sum={sum} setTotal={setTotal} content={content} setContent={setContent}/>
      <ToastContainer/>
    </>
  )
}

export default App
