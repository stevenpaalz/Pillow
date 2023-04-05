import './Splash.css';
import SplashListings from './SplashListings';

function Splash() {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <>
            <div id='splash-header'>
                <h1>Find it. Tour it. Own it.</h1>
                <form onSubmit={handleSubmit} className="open-sans" id='splash-search'>
                    <input placeholder='Enter an address, neighborhood, city, or ZIP code'></input>
                    <span><button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button></span>
                </form>
            </div>
           <div id='splash-index'>
                <SplashListings />
           </div>
        </>
    )
}

export default Splash;