import pizza from '../media/pizzaImg.png'
import hamburger from '../media/hamburgerImg.png'
import sushi from '../media/sushiImg.png'
import cake from '../media/cakeImg.png'
import iceCream from '../media/iceCreamImg.png'
import drink from '../media/drinkImg.png'
function Content(){
    return(
      <>
        <h3 id="homeTitle">Categories</h3>
        <section id="categories" className="container">
            <div className="row">
                <div className="categories-column col-sm-6 col-lg-4">
                    <div className="card">
                        <div className="card-header">
                            <h3>Pizza</h3>
                        </div>
                        <div className="card-body d-grid">
                            <img className="card-image" src={pizza}></img>
                        </div>
                    </div>
                </div>
                <div className="categories-column col-sm-6 col-lg-4">
                    <div className="card">
                        <div className="card-header">
                            <h3>Hamburger</h3>
                        </div>
                        <div className="card-body d-grid">
                            <img className="card-image" src={hamburger}></img>
                        </div>
                    </div>
                </div>
                <div className="categories-column col-sm-6 col-lg-4">
                    <div className="card">
                        <div className="card-header">
                            <h3>Japanese Food</h3>
                        </div>
                        <div className="card-body d-grid">
                            <img className="card-image" src={sushi}></img>
                        </div>
                    </div>
                </div>  
                <div className="categories-column col-sm-6 col-lg-4">
                    <div className="card">
                        <div className="card-header">
                            <h3>Cakes</h3>
                        </div>
                        <div className="card-body d-grid">
                            <img className="card-image" src={cake}></img>
                        </div>
                    </div>
                </div>  
                <div className="categories-column col-sm-6 col-lg-4">
                    <div className="card">
                        <div className="card-header">
                            <h3>Ice Cream</h3>
                        </div>
                        <div className="card-body d-grid">
                            <img className="card-image" src={iceCream}></img>
                        </div>
                    </div>
                </div>  
                <div className="categories-column col-sm-6 col-lg-4">
                    <div className="card">
                        <div className="card-header">
                            <h3>Drinks</h3>
                        </div>
                        <div className="card-body d-grid">
                            <img className="card-image" src={drink}></img>
                        </div>
                    </div>
                </div>  
            </div>
        </section>
      </>
    )
}
export default Content;