import React from 'react'
import pepperoni from '../media/pizzas/pepperoniImg.png'
import margherita from '../media/pizzas/margheritaImg.png'
import cheese from '../media/pizzas/cheeseImg.png'
import Categories from '../components/Categories.jsx'
import { toast } from 'react-toastify'
let index = 0;
function Pizza({sum,updateSum,setTotal,setContent,selectedItem}){
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
        let itemPrice = ''
        switch (event.target.id) {
            case 'addPepperoni':
                itemPrice = document.getElementById('pepperoniPizza').textContent;
                if(itemPrice.includes('$')){
                    let itemSize = document.querySelector(`label[for="${document.querySelector('input[name="pepperoni"]:checked').id}"]`).textContent
                    selectedItem.push({ name: itemPrice.substring(0, itemPrice.indexOf(' - $'))+` Pizza(${itemSize})`, price: parseFloat(itemPrice.substring(itemPrice.indexOf('$')+1)), index: index });
                    updateSum(parseFloat(itemPrice.substring(itemPrice.indexOf('$')+1)))
                    return index++;
                }
                else{
                    toast('Select a item!', {position: "bottom-right",hideProgressBar: true,closeButton: false,
                    autoClose: 5000,closeOnClick: true,pauseOnHover: true,draggable: true,theme: "dark",});
                }
                break;
            case 'addMargherita':
                itemPrice = document.getElementById('margheritaPizza').textContent;
                if(itemPrice.includes('$')){
                    let itemSize = document.querySelector(`label[for="${document.querySelector('input[name="margherita"]:checked').id}"]`).textContent
                    selectedItem.push({ name: itemPrice.substring(0, itemPrice.indexOf(' - $'))+` Pizza(${itemSize})`, price: parseFloat(itemPrice.substring(itemPrice.indexOf('$')+1)), index: index });
                    updateSum(parseFloat(itemPrice.substring(itemPrice.indexOf('$')+1)))
                    return index++;
                }
                else{
                    toast('Select a item!', {position: "bottom-right",hideProgressBar: true,closeButton: false,
                    autoClose: 5000,closeOnClick: true,pauseOnHover: true,draggable: true,theme: "dark",});
                }
                break;
            case 'addCheese':
                let itemPrice = document.getElementById('cheesePizza').textContent;
                if(itemPrice.includes('$')){
                    let itemSize = document.querySelector(`label[for="${document.querySelector('input[name="cheese"]:checked').id}"]`).textContent
                    selectedItem.push({ name: itemPrice.substring(0, itemPrice.indexOf(' - $'))+` Pizza(${itemSize})`, price: parseFloat(itemPrice.substring(itemPrice.indexOf('$')+1)), index: index });
                    updateSum(parseFloat(itemPrice.substring(itemPrice.indexOf('$')+1)))
                    return index++;
                }
                else{
                    toast('Select a item!', {position: "bottom-right",hideProgressBar: true,closeButton: false,
                    autoClose: 5000,closeOnClick: true,pauseOnHover: true,draggable: true,theme: "dark",});
                }
                break;
                
            default:
                break;
        }
    }
    return(
        <>
            <div className='itemPage'>
                <Categories btn1='Hamburger' btn2='Japanese' btn3='Cakes' btn4='Ice Cream' btn5='Drinks' sum={sum} updateSum={updateSum} setTotal={setTotal} setContent={setContent} selectedItem={selectedItem}/>
                <div id='pizzaCards' className='itemOptions container'>
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
            <div className="card col-sm-12 col-md-6 col-xl-4">
                <div className="card-body">
                    <img className="card-image" src={props.img}></img>
                </div>
                <div className="card-footer">
                    <h3 id={taste+'Pizza'}>{props.name}</h3>
                    <div className='buyItem'>
                        <div className="sizes btn-group" role="group">
                            <input type="radio" className="btn-check" name={taste} id={taste+'P'} autoComplete="off" onClick={changeValue} value={props.price}/>
                            <label className="btn btn-outline-primary" htmlFor={taste+'P'}>Small</label>
                            <input type="radio" className="btn-check" name={taste} id={taste+'M'} autoComplete="off" onClick={changeValue} value={props.price+3}/>
                            <label className="btn btn-outline-primary" htmlFor={taste+'M'}>Medium</label>
                            <input type="radio" className="btn-check" name={taste} id={taste+'G'} autoComplete="off" onClick={changeValue} value={props.price+6}/>
                            <label className="btn btn-outline-primary" htmlFor={taste+'G'}>Large</label>
                        </div>
                        <button id={'add'+props.name} className='cartBtn btn btn-warning' onClick={addTotal}>Add to Cart</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Pizza;