import React from 'react';
import Home from './components/Home.jsx'
import Header from './components/Header.jsx'
import Content from './components/Content.jsx'
import Pizza from './components/Pizza.jsx'
import Hamburger from './components/Hamburger.jsx'
function App() {
  let sum = 0;
  const [total, setTotal] = React.useState('0.00')
  const [content, setContent] = React.useState(<Home changeContent={changeContent}/>);
  function changeContent(value) {
      if(value == 'pizzaCard'){
        setContent(<Pizza sum={sum} setTotal={setTotal} setContent={setContent}/>);
      }
      else if(value == 'hamburgerCard'){
        setContent(<Hamburger sum={sum} setTotal={setTotal} setContent={setContent}/>);
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
