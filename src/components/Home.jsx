import pizza from '../media/pizzaImg.png'
import hamburger from '../media/hamburgerImg.png'
import japaneseFood from '../media/sushiImg.png'
import cake from '../media/cakeImg.png'
import iceCream from '../media/iceCreamImg.png'
import drink from '../media/drinkImg.png'
function Home({changeContent}){
    function switchContent(event){changeContent(event.currentTarget.id);}
    return(
      <>
        <section id="categories" className="container-fluid">
            <div className="row">
                <OptionCard name='Pizza' id='pizzaCard' img={pizza}/>  
                <OptionCard name='Hamburger' id='hamburgerCard' img={hamburger}/>  
                <OptionCard name='Japanese Food' id='japaneseCard' img={japaneseFood}/>  
                <OptionCard name='Cakes' id='cakeCard' img={cake}/>  
                <OptionCard name='Ice Cream' id='iceCreamCard' img={iceCream}/>  
                <OptionCard name='Drinks' id='drinkCard' img={drink}/>  
            </div>
        </section>
      </>
    )
    function OptionCard(props){
        return(
            <div id={props.id} className="categories-column col-sm-12 col-md-6 col-xl-4" onClick={switchContent}>
                    <div className="card">
                        <div className="card-header">
                            <h3>{props.name}</h3>
                        </div>
                        <div className="card-body">
                            <img className="card-image" src={props.img}></img>
                        </div>
                    </div>
                </div>
        )
    }
}
export default Home;