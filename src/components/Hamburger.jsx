import React from 'react'
import beef from '../media/hamburgers/beefImg.png'
import chicken from '../media/hamburgers/chickenImg.png'
import veggie from '../media/hamburgers/veggieImg.png'
import Categories from '../components/Categories.jsx'
import { toast } from 'react-toastify'

let index = 0;
function Hamburger({sum,updateSum,setTotal, setContent,selectedItem}){
    function changeValue(event){
        switch (event.target.name) {
            case 'beef':
                document.getElementById('beefHamburger').textContent = 'Beef Burger '+'- $'+event.target.value;
                break;
            case 'chicken':
                document.getElementById('chickenHamburger').textContent = 'Chicken Burger '+'- $'+event.target.value;
                break;
            case 'veggie':
                document.getElementById('veggieHamburger').textContent = 'Veggie Burger '+'- $'+event.target.value;
                break;
            default:
                break;
        }
    }
    function addTotal(event){
        let itemPrice = ''
        switch (event.target.id) {
            case 'addBeef':
                itemPrice = document.getElementById('beefHamburger').textContent;
                if(itemPrice.includes('$')){
                    let itemSize = document.querySelector(`label[for="${document.querySelector('input[name="beef"]:checked').id}"]`).textContent
                    selectedItem.push({ name: itemPrice.substring(0, itemPrice.indexOf(' - $'))+`(${itemSize})`, price: parseFloat(itemPrice.substring(itemPrice.indexOf('$')+1)),index: index});                    updateSum(parseFloat(itemPrice.substring(itemPrice.indexOf('$')+1)))
                    return index++;
                }
                else{
                    toast('Select a item!', {position: "bottom-right",hideProgressBar: true,closeButton: false,
                    autoClose: 5000,closeOnClick: true,pauseOnHover: true,draggable: true,theme: "dark",});
                }
                break;
            case 'addChicken':
                itemPrice = document.getElementById('chickenHamburger').textContent;
                if(itemPrice.includes('$')){
                    let itemSize = document.querySelector(`label[for="${document.querySelector('input[name="chicken"]:checked').id}"]`).textContent
                    selectedItem.push({ name: itemPrice.substring(0, itemPrice.indexOf(' - $'))+`(${itemSize})`, price: parseFloat(itemPrice.substring(itemPrice.indexOf('$')+1)),index: index });
                    updateSum(parseFloat(itemPrice.substring(itemPrice.indexOf('$')+1)))
                    return index++;
                }
                else{
                    toast('Select a item!', {position: "bottom-right",hideProgressBar: true,closeButton: false,
                    autoClose: 5000,closeOnClick: true,pauseOnHover: true,draggable: true,theme: "dark",});
                }
                break;
            case 'addVeggie':
                itemPrice = document.getElementById('veggieHamburger').textContent;
                if(itemPrice.includes('$')){
                    let itemSize = document.querySelector(`label[for="${document.querySelector('input[name="veggie"]:checked').id}"]`).textContent
                    selectedItem.push({ name: itemPrice.substring(0, itemPrice.indexOf(' - $'))+`(${itemSize})`, price: parseFloat(itemPrice.substring(itemPrice.indexOf('$')+1)),index: index });
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
                <Categories btn1='Pizza' btn2='Japanese' btn3='Cakes' btn4='Ice Cream' btn5='Drinks' sum={sum} updateSum={updateSum} setTotal={setTotal} setContent={setContent} selectedItem={selectedItem}/>
                <div id='hamburgerCards' className='itemOptions container'>
                    <HamburgerCard name='Beef' img={beef} price={3.00}/>
                    <HamburgerCard name='Chicken' img={chicken} price={3.50}/>
                    <HamburgerCard name='Veggie' img={veggie} price={4.00}/>
                </div>
            </div>
        </>
    )
    function HamburgerCard(props){
        let taste = props.name.toLowerCase()
        return(
            <div className="card">
                <div className="card-body">
                    <img className="card-image" src={props.img}></img>
                </div>
                <div className="card-footer">
                    <h3 id={taste+'Hamburger'}>{props.name+' Burger'}</h3>
                    <div className='buyItem'>
                        <div className="sizes btn-group" role="group">
                            <input type="radio" className="btn-check" name={taste} id={taste+'P'} autoComplete="off" onClick={changeValue} value={props.price}/>
                            <label className="btn btn-outline-primary" htmlFor={taste+'P'}>Single</label>
                            <input type="radio" className="btn-check" name={taste} id={taste+'M'} autoComplete="off" onClick={changeValue} value={props.price+1}/>
                            <label className="btn btn-outline-primary" htmlFor={taste+'M'}>Double</label>
                            <input type="radio" className="btn-check" name={taste} id={taste+'G'} autoComplete="off" onClick={changeValue} value={props.price+2}/>
                            <label className="btn btn-outline-primary" htmlFor={taste+'G'}>Triple</label>
                        </div>
                        <button id={'add'+props.name} className='cartBtn btn btn-warning' onClick={addTotal}>Add to Cart</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Hamburger;