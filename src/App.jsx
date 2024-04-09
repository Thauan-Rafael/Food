import React from 'react';
import Header from './components/Header.jsx'
import Content from './components/Content.jsx'
function App() {
  let sum = 0;
  const [total, setTotal] = React.useState('0.00')
  return (
    <>
      <Header total={total}/>
      <Content sum={sum} total={total} setTotal={setTotal}/>
    </>
  )
}

export default App
