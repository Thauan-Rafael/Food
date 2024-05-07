import React from 'react'
import strawberry from '../media/iceCreams/strawberryImg.png'
import chocolate from '../media/iceCreams/chocolateImg.png'
import vanilla from '../media/iceCreams/vanillaImg.png'
import Categories from '../components/Categories.jsx'
import { toast } from 'react-toastify'

let index=0;
function Cream({sum,updateSum,setTotal,setContent,selectedItem}){
    function changeValue(event){
        switch (event.target.name) {
            case 'strawberry':
                document.getElementById('strawberryCream').textContent = 'Strawberry '+'- $'+event.target.value;
                break;
            case 'chocolate':
                document.getElementById('chocolateCream').textContent = 'Chocolate '+'- $'+event.target.value
                break;
            case 'vanilla':
                document.getElementById('vanillaCream').textContent = 'Vanilla '+'- $'+event.target.value
                break;
            default:
                break;
        }
    }
    function addTotal(event){
        let itemPrice = ''
        switch (event.target.id) {
            case 'addStrawberry':
                itemPrice = document.getElementById('strawberryCream').textContent;
                if(itemPrice.includes('$')){
                    let itemSize = document.querySelector(`label[for="${document.querySelector('input[name="strawberry"]:checked').id}"]`).textContent
                    selectedItem.push({ name: itemPrice.substring(0, itemPrice.indexOf(' - $'))+` Cream(${itemSize})`, price: parseFloat(itemPrice.substring(itemPrice.indexOf('$')+1)),index: index });
                    updateSum(parseFloat(itemPrice.substring(itemPrice.indexOf('$')+1)))
                    return index++;
                }
                else{
                    toast('Select a item!', {position: "bottom-right",hideProgressBar: true,closeButton: false,
                    autoClose: 5000,closeOnClick: true,pauseOnHover: true,draggable: true,theme: "dark",});
                }
                break;
            case 'addChocolate':
                itemPrice = document.getElementById('chocolateCream').textContent;
                if(itemPrice.includes('$')){
                    let itemSize = document.querySelector(`label[for="${document.querySelector('input[name="chocolate"]:checked').id}"]`).textContent
                    selectedItem.push({ name: itemPrice.substring(0, itemPrice.indexOf(' - $'))+` Cream(${itemSize})`, price: parseFloat(itemPrice.substring(itemPrice.indexOf('$')+1)),index: index });
                    updateSum(parseFloat(itemPrice.substring(itemPrice.indexOf('$')+1)))
                    return index++;
                }
                else{
                    toast('Select a item!', {position: "bottom-right",hideProgressBar: true,closeButton: false,
                    autoClose: 5000,closeOnClick: true,pauseOnHover: true,draggable: true,theme: "dark",});
                }
                break;
            case 'addVanilla':
                let itemPrice = document.getElementById('vanillaCream').textContent;
                if(itemPrice.includes('$')){
                    let itemSize = document.querySelector(`label[for="${document.querySelector('input[name="vanilla"]:checked').id}"]`).textContent
                    selectedItem.push({ name: itemPrice.substring(0, itemPrice.indexOf(' - $'))+` Cream(${itemSize})`, price: parseFloat(itemPrice.substring(itemPrice.indexOf('$')+1)),index: index });
                    updateSum(parseFloat(itemPrice.substring(itemPrice.indexOf('$')+1)))
                    return index++;
                }
                else{
                toast('Select a item!', {position: "bottom-right",hideProgressBar: true,closeButton: false,
                    autoClose: 5000,closeOnClick: true,pauseOnHover: true,draggable: true,theme: "dark",});}
                break;
                
            default:
                break;
        }
    }
    return(
        <>
            <div className='itemPage'>
                <Categories btn1='Pizza' btn2='Hamburger' btn3='Japanese' btn4='Cakes' btn5='Drinks' sum={sum} updateSum={updateSum} setTotal={setTotal} setContent={setContent} selectedItem={selectedItem}/>
                <div id='creamCards' className='itemOptions container'>
                    <CreamCard name='Strawberry' img={strawberry} price={3.00}/>
                    <CreamCard name='Chocolate' img={chocolate} price={3.00}/>
                    <CreamCard name='Vanilla' img={vanilla} price={3.00}/>
                </div>
            </div>
        </>
    )
    
    function CreamCard(props){
        let taste = props.name.toLowerCase()
        return(
            <div className="card">
                <div className="card-body">
                    <img className="card-image" src={props.img}></img>
                </div>
                <div className="card-footer">
                    <h3 id={taste+'Cream'}>{props.name}</h3>
                    <div className='buyItem'>
                        <div className="sizes btn-group" role="group">
                            <input type="radio" className="btn-check" name={taste} id={taste+'P'} autoComplete="off" onClick={changeValue} value={props.price}/>
                            <label className="btn btn-outline-primary" htmlFor={taste+'P'}>1 Scoop</label>
                            <input type="radio" className="btn-check" name={taste} id={taste+'M'} autoComplete="off" onClick={changeValue} value={props.price+1}/>
                            <label className="btn btn-outline-primary" htmlFor={taste+'M'}>2 Scoops</label>
                            <input type="radio" className="btn-check" name={taste} id={taste+'G'} autoComplete="off" onClick={changeValue} value={props.price+2}/>
                            <label className="btn btn-outline-primary" htmlFor={taste+'G'}>3 Scoops</label>
                        </div>
                        <button id={'add'+props.name} className='cartBtn btn btn-warning' onClick={addTotal}>Add to Cart</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Cream;