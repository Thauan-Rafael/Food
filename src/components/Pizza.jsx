import React from 'react'
import pepperoni from '../media/pizzas/pepperoniImg.png'
import margherita from '../media/pizzas/margheritaImg.png'
import cheese from '../media/pizzas/cheeseImg.png'
import Categories from '../components/Categories.jsx'

function Pizza({sum,setTotal,setContent}){
    function changeValue(event){
        switch (event.target.name) {
            case 'pepperoni':
                document.getElementById('pepperoniPizza').textContent = 'Pepperoni '+'- $'+event.target.value;
                break;
            case 'margherita':
                document.getElementById('margheritaPizza').textContent = 'Margherita '+'- $'+event.target.value
                break;
            case 'cheese':
                document.getElementById('cheesePizza').textContent = 'Cheese '+'- $'+event.target.value
                break;
            default:
                break;
        }
    }
    function addTotal(event){
        switch (event.target.id) {
            case 'addPepperoni':
                if(document.getElementById('pepperoniPizza').textContent.includes('$')){
                    sum = sum + parseFloat(document.getElementById('pepperoniPizza').textContent.slice(13,15))
                    setTotal(sum)
                }
                else{alert('Empty')}
                break;
            case 'addMargherita':
                if(document.getElementById('margheritaPizza').textContent.includes('$')){
                    sum = sum + parseFloat(document.getElementById('margheritaPizza').textContent.slice(14,16))
                    setTotal(sum)
                }
                else{alert('Empty')}
                break;
            case 'addCheese':
                if(document.getElementById('cheesePizza').textContent.includes('$')){
                    sum = sum + parseFloat(document.getElementById('cheesePizza').textContent.slice(10,14))
                    setTotal(sum)
                }
                else{alert('Empty')}
                break;
                
            default:
                break;
        }
    }
    return(
        <>
            <div className='itemPage'>
                <Categories btn1='Hamburger' btn2='Japanese Food' btn3='Cakes' btn4='Ice Cream' btn5='Drinks' sum={sum} setTotal={setTotal} setContent={setContent}/>
                <div id='pizzaCards' className='pizzaOptions container'>
                    <PizzaCard name='Pepperoni' img={pepperoni} price={10.00}/>
                    <PizzaCard name='Margherita' img={margherita} price={9.00}/>
                    <PizzaCard name='Cheese' img={cheese} price={8.50}/>
                </div>
            </div>
        </>
    )
    
    function PizzaCard(props){
        let taste = props.name.toLowerCase()
        return(
            <div className="card">
                <div className="card-body">
                    <img className="card-image" src={props.img}></img>
                </div>
                <div className="card-footer">
                    <h3 id={taste+'Pizza'}>{props.name}</h3>
                    <div className='buyItem'>
                        <div className="btn-group" role="group">
                            <input type="radio" className="btn-check" name={taste} id={taste+'P'} autoComplete="off" onClick={changeValue} value={props.price}/>
                            <label className="btn btn-outline-primary" htmlFor={taste+'P'}>Small</label>
                            <input type="radio" className="btn-check" name={taste} id={taste+'M'} autoComplete="off" onClick={changeValue} value={props.price+3}/>
                            <label className="btn btn-outline-primary" htmlFor={taste+'M'}>Medium</label>
                            <input type="radio" className="btn-check" name={taste} id={taste+'G'} autoComplete="off" onClick={changeValue} value={props.price+6}/>
                            <label className="btn btn-outline-primary" htmlFor={taste+'G'}>Large</label>
                        </div>
                        <button id={'add'+props.name} className='btn btn-warning' onClick={addTotal}>Add to Cart</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Pizza;