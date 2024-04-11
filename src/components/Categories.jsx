import React from 'react'
import Pizza from './Pizza'
import Hamburger from './Hamburger'
import Japanese from './Japanese'
import Cake from './Cakes'
import Cream from './Creams'
function Categories(props){
    const {setTotal, setContent} = props;
    return(
        <div id='categoriesSelect' className="container btn-group" role="group">
            <button type="button" className="categoriesOptions btn btn-warning" onClick={openCategory}>{props.btn1}</button>
            <button type="button" className="categoriesOptions btn btn-warning" onClick={openCategory}>{props.btn2}</button>
            <button type="button" className="categoriesOptions btn btn-warning" onClick={openCategory}>{props.btn3}</button>
            <button type="button" className="categoriesOptions btn btn-warning" onClick={openCategory}>{props.btn4}</button>
            <button type="button" className="categoriesOptions btn btn-warning" onClick={openCategory}>{props.btn5}</button>
        </div>
     )
     function openCategory(event){
        if(event.target.textContent == 'Pizza'){
            setContent(<Pizza sum={props.sum} setTotal={setTotal} setContent={setContent}/>)
        }
        else if(event.target.textContent == 'Hamburger'){
            setContent(<Hamburger sum={props.sum} setTotal={setTotal} setContent={setContent}/>)
        }
        else if(event.target.textContent == 'Japanese Food'){
            setContent(<Japanese sum={props.sum} setTotal={setTotal} setContent={setContent}/>)
        }
        else if(event.target.textContent == 'Cakes'){
            setContent(<Cake sum={props.sum} setTotal={setTotal} setContent={setContent}/>)
        }
        else if(event.target.textContent == 'Ice Cream'){
            setContent(<Cream sum={props.sum} setTotal={setTotal} setContent={setContent}/>)
        }
     }
}
export default Categories;