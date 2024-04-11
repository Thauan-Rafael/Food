import React from 'react'
import strawberry from '../media/iceCreams/strawberryImg.png'
import chocolate from '../media/iceCreams/chocolateImg.png'
import vanilla from '../media/iceCreams/vanillaImg.png'
import Categories from '../components/Categories.jsx'

function Cream({sum,setTotal,setContent}){
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
                    sum = sum + parseFloat(itemPrice.substring(itemPrice.indexOf('$')+1))
                    setTotal(sum)
                }
                else{alert('Empty')}
                break;
            case 'addChocolate':
                itemPrice = document.getElementById('chocolateCream').textContent;
                if(itemPrice.includes('$')){
                    sum = sum + parseFloat(itemPrice.substring(itemPrice.indexOf('$')+1))
                    setTotal(sum)
                }
                else{alert('Empty')}
                break;
            case 'addVanilla':
                let itemPrice = document.getElementById('vanillaCream').textContent;
                if(itemPrice.includes('$')){
                    sum = sum + parseFloat(itemPrice.substring(itemPrice.indexOf('$')+1))
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
                <Categories btn1='Pizza' btn2='Hamburger' btn3='Japanese Food' btn4='Cakes' btn5='Drinks' sum={sum} setTotal={setTotal} setContent={setContent}/>
                <div id='creamCards' className='itemOptions container'>
                    <CreamCard name='Strawberry' img={strawberry} price={10.00}/>
                    <CreamCard name='Chocolate' img={chocolate} price={9.00}/>
                    <CreamCard name='Vanilla' img={vanilla} price={8.50}/>
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
export default Cream;