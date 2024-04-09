import React from 'react';
import Home from '../components/Home.jsx';
import Pizza from '../components/Pizza.jsx';


function Content({sum, total, setTotal}) {
  const [content, setContent] = React.useState(<Home changeContent={changeContent} />);
  function changeContent(value) {
      if(value == 'pizzaCard'){
        setContent(<Pizza sum={sum} total={total} setTotal={setTotal}/>);
      }
  }
  return (
      <>
        {content}
      </>
  );
}

export default Content;
