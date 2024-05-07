import React from 'react'
import strawberry from '../media/drinks/strawberryImg.png'
import kiwi from '../media/drinks/kiwiImg.png'
import banana from '../media/drinks/bananaImg.png'
import Categories from '../components/Categories.jsx'
import { toast } from 'react-toastify'

let index = 0;
function Drinks({sum,updateSum,setTotal,setContent,selectedItem}){
    function changeValue(event){
        switch (event.target.name) {
            case 'strawberry':
                document.getElementById('strawberryDrink').textContent = 'Strawberry '+'- $'+event.target.value;
                break;
            case 'kiwi':
                document.getElementById('kiwiDrink').textContent = 'Kiwi '+'- $'+event.target.value
                break;
            case 'banana':
                document.getElementById('bananaDrink').textContent = 'Banana '+'- $'+event.target.value
                break;
            default:
                break;
        }
    }
    function addTotal(event){
        let itemPrice = ''
        switch (event.target.id) {
            case 'addStrawberry':
                itemPrice = document.getElementById('strawberryDrink').textContent;
                if(itemPrice.includes('$')){
                    let itemSize = document.querySelector(`label[for="${document.querySelector('input[name="strawberry"]:checked').id}"]`).textContent
                    selectedItem.push({ name: itemPrice.substring(0, itemPrice.indexOf(' - $'))+` Cake(${itemSize})`, price: parseFloat(itemPrice.substring(itemPrice.indexOf('$')+1)),index:index });
                    updateSum(parseFloat(itemPrice.substring(itemPrice.indexOf('$')+1)))
                    return index++;
                }
                else{
                    toast('Select a item!', {position: "bottom-right",hideProgressBar: true,closeButton: false,
                    autoClose: 5000,closeOnClick: true,pauseOnHover: true,draggable: true,theme: "dark",});
                }
                break;
            case 'addKiwi':
                itemPrice = document.getElementById('kiwiDrink').textContent;
                if(itemPrice.includes('$')){
                    let itemSize = document.querySelector(`label[for="${document.querySelector('input[name="kiwi"]:checked').id}"]`).textContent
                    selectedItem.push({ name: itemPrice.substring(0, itemPrice.indexOf(' - $'))+` Cake(${itemSize})`, price: parseFloat(itemPrice.substring(itemPrice.indexOf('$')+1)),index:index });
                    updateSum(parseFloat(itemPrice.substring(itemPrice.indexOf('$')+1)))
                    return index++;
                }
                else{
                    toast('Select a item!', {position: "bottom-right",hideProgressBar: true,closeButton: false,
                    autoClose: 5000,closeOnClick: true,pauseOnHover: true,draggable: true,theme: "dark",});
                }
                break;
            case 'addBanana':
                let itemPrice = document.getElementById('bananaDrink').textContent;
                if(itemPrice.includes('$')){
                    let itemSize = document.querySelector(`label[for="${document.querySelector('input[name="banana"]:checked').id}"]`).textContent
                    selectedItem.push({ name: itemPrice.substring(0, itemPrice.indexOf(' - $'))+` Cake(${itemSize})`, price: parseFloat(itemPrice.substring(itemPrice.indexOf('$')+1)),index:index });
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
                <Categories btn1='Pizza' btn2='Hamburger' btn3='Japanese' btn4='Cakes' btn5='Ice Cream' sum={sum} updateSum={updateSum} setTotal={setTotal} setContent={setContent} selectedItem={selectedItem}/>
                <div id='drinkCards' className='itemOptions container'>
                    <DrinksCard name='Strawberry' img={strawberry} price={2.00}/>
                    <DrinksCard name='Kiwi' img={kiwi} price={2.00}/>
                    <DrinksCard name='Banana' img={banana} price={2.00}/>
                </div>
            </div>
        </>
    )
    
    function DrinksCard(props){
        let taste = props.name.toLowerCase()
        return(
            <div className="card">
                <div className="card-body">
                    <img className="card-image" src={props.img}></img>
                </div>
                <div className="card-footer">
                    <h3 id={taste+'Drink'}>{props.name}</h3>
                    <div className='buyItem'>
                        <div className="sizes btn-group" role="group">
                            <input type="radio" className="btn-check" name={taste} id={taste+'P'} autoComplete="off" onClick={changeValue} value={props.price}/>
                            <label className="btn btn-outline-primary" htmlFor={taste+'P'}>300ML</label>
                            <input type="radio" className="btn-check" name={taste} id={taste+'M'} autoComplete="off" onClick={changeValue} value={props.price+1}/>
                            <label className="btn btn-outline-primary" htmlFor={taste+'M'}>500ML</label>
                            <input type="radio" className="btn-check" name={taste} id={taste+'G'} autoComplete="off" onClick={changeValue} value={props.price+2}/>
                            <label className="btn btn-outline-primary" htmlFor={taste+'G'}>700ML</label>
                        </div>
                        <button id={'add'+props.name} className='cartBtn btn btn-warning' onClick={addTotal}>Add to Cart</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Drinks;