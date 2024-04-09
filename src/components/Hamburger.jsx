import React from 'react'
import beef from '../media/hamburgers/beefImg.png'
import chicken from '../media/hamburgers/chickenImg.png'
import veggie from '../media/hamburgers/veggieImg.png'
import Categories from '../components/Categories.jsx'

function Hamburger({sum,setTotal, setContent}){
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
        switch (event.target.id) {
            case 'addBeef':
                if(document.getElementById('beefHamburger').textContent.includes('$')){
                    sum = sum + parseFloat(document.getElementById('beefHamburger').textContent.slice(13,15))
                    setTotal(sum)
                }
                else{alert('Empty')}
                break;
            case 'addChicken':
                if(document.getElementById('chickenHamburger').textContent.includes('$')){
                    sum = sum + parseFloat(document.getElementById('chickenHamburger').textContent.slice(14,16))
                    setTotal(sum)
                }
                else{alert('Empty')}
                break;
            case 'addVeggie':
                if(document.getElementById('veggieHamburger').textContent.includes('$')){
                    sum = sum + parseFloat(document.getElementById('veggieHamburger').textContent.slice(10,14))
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
                <Categories btn1='Pizza' btn2='Japanese Food' btn3='Cakes' btn4='Ice Cream' btn5='Drinks' sum={sum} setTotal={setTotal} setContent={setContent}/>
                <div id='hamburgerCards' className='hamburgerOptions container'>
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
                        <div className="btn-group" role="group">
                            <input type="radio" className="btn-check" name={taste} id={taste+'P'} autoComplete="off" onClick={changeValue} value={props.price}/>
                            <label className="btn btn-outline-primary" htmlFor={taste+'P'}>Single</label>
                            <input type="radio" className="btn-check" name={taste} id={taste+'M'} autoComplete="off" onClick={changeValue} value={props.price+1}/>
                            <label className="btn btn-outline-primary" htmlFor={taste+'M'}>Double</label>
                            <input type="radio" className="btn-check" name={taste} id={taste+'G'} autoComplete="off" onClick={changeValue} value={props.price+2}/>
                            <label className="btn btn-outline-primary" htmlFor={taste+'G'}>Triple</label>
                        </div>
                        <button id={'add'+props.name} className='btn btn-warning' onClick={addTotal}>Add to Cart</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Hamburger;