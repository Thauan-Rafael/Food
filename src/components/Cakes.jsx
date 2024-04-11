import React from 'react'
import chocolate from '../media/cakes/chocolateImg.png'
import strawberry from '../media/cakes/strawberryImg.png'
import lemon from '../media/cakes/lemonImg.png'
import Categories from '../components/Categories.jsx'

function Cake({sum,setTotal,setContent}){
    function changeValue(event){
        switch (event.target.name) {
            case 'chocolate':
                document.getElementById('chocolateCake').textContent = 'Chocolate '+'- $'+event.target.value;
                break;
            case 'strawberry':
                document.getElementById('strawberryCake').textContent = 'Strawberry '+'- $'+event.target.value
                break;
            case 'lemon':
                document.getElementById('lemonCake').textContent = 'Lemon '+'- $'+event.target.value
                break;
            default:
                break;
        }
    }
    function addTotal(event){
        let itemPrice = '';
        switch (event.target.id) {
            case 'addChocolate':
                itemPrice = document.getElementById('chocolateCake').textContent;
                if(itemPrice.includes('$')){
                    sum = sum + parseFloat(itemPrice.substring(itemPrice.indexOf('$')+1))
                    setTotal(sum)
                }
                else{alert('Empty')}
                break;
            case 'addStrawberry':
                itemPrice = document.getElementById('strawberryCake').textContent;
                if(itemPrice.includes('$')){
                    sum = sum + parseFloat(itemPrice.substring(itemPrice.indexOf('$')+1))
                    setTotal(sum)
                }
                else{alert('Empty')}
                break;
            case 'addLemon':
                itemPrice = document.getElementById('lemonCake').textContent;
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
                <Categories btn1='Pizza' btn2='Hamburger' btn3='Japanese Food' btn4='Ice Cream' btn5='Drinks' sum={sum} setTotal={setTotal} setContent={setContent}/>
                <div id='cakeCards' className='itemOptions container'>
                    <CakeCard name='Chocolate' img={chocolate} price={10.00}/>
                    <CakeCard name='Strawberry' img={strawberry} price={9.00}/>
                    <CakeCard name='Lemon' img={lemon} price={8.50}/>
                </div>
            </div>
        </>
    )
    
    function CakeCard(props){
        let taste = props.name.toLowerCase()
        return(
            <div className="card">
                <div className="card-body">
                    <img className="card-image" src={props.img}></img>
                </div>
                <div className="card-footer">
                    <h3 id={taste+'Cake'}>{props.name}</h3>
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
export default Cake;