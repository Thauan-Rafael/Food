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
function App() {
  let sum = 0;
  const [total, setTotal] = React.useState('0.00')
  const [content, setContent] = React.useState(<Home changeContent={changeContent}/>);
  function updateSum(amount){
    sum = sum + amount;
    setTotal(sum)
  }
  function changeContent(value) {
      switch (value) {
        case 'pizzaCard':
          setContent(<Pizza sum={sum} setTotal={setTotal} setContent={setContent} updateSum={updateSum}/>);
          break;
      case 'hamburgerCard':
          setContent(<Hamburger sum={sum} setTotal={setTotal} setContent={setContent} updateSum={updateSum}/>);
          break;
      case 'japaneseCard':
          setContent(<Japanese sum={sum} setTotal={setTotal} setContent={setContent} updateSum={updateSum}/>);
          break;
      case 'cakeCard':
          setContent(<Cake sum={sum} setTotal={setTotal} setContent={setContent} updateSum={updateSum}/>);
          break;
    case 'iceCreamCard':
          setContent(<Cream sum={sum} setTotal={setTotal} setContent={setContent} updateSum={updateSum}/>);
          break;
    case 'drinkCard':
          setContent(<Drinks sum={sum} setTotal={setTotal} setContent={setContent} updateSum={updateSum}/>);
          break;
        default:
          break;
      }
  }
  return (
    <>
      <Header total={total} setContent={setContent} changeContent={changeContent}/>
      <Content sum={sum} setTotal={setTotal} content={content} setContent={setContent}/>
    </>
  )
}

export default App
