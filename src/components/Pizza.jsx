import pepperoni from '../media/pizzas/pepperoniImg.png'
import margherita from '../media/pizzas/margheritaImg.png'
import cheese from '../media/pizzas/cheeseImg.png'
function Pizza(){
    return(
        <div className="row">
            <div className="categories-column col-sm-12 col-md-6 col-lg-4">
                <div className="card">
                    <div className="card-header">
                        <h3>Pizza</h3>
                    </div>
                    <div className="card-body d-grid">
                        <img className="card-image" src={pepperoni}></img>
                    </div>
                </div>
            </div>
            <div className="categories-column col-sm-12 col-md-6 col-lg-4">
                <div className="card">
                    <div className="card-header">
                        <h3>Pizza</h3>
                    </div>
                    <div className="card-body d-grid">
                        <img className="card-image" src={margherita}></img>
                    </div>
                </div>
            </div>
            <div className="categories-column col-sm-12 col-md-6 col-lg-4">
                <div className="card">
                    <div className="card-header">
                        <h3>Pizza</h3>
                    </div>
                    <div className="card-body d-grid">
                        <img className="card-image" src={cheese}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Pizza;