import "./SplashCTA.css";
import buyCTAImg from "../../assets/buy_cta.png";
import sellCTAImg from "../../assets/sell_cta.png";
import rentCTAImg from "../../assets/rent_cta.png";
import { useHistory } from "react-router-dom";

function SplashCTA() {
    const history = useHistory();

    const buyReroute = () => {
        history.push("/homes")
    }

    const sellReroute = () => {
        history.push("/sell")
    }

    const rentReroute = () => {
        history.push("/homes")
    }

    return(
        <div id='splash-cta' className="open-sans">
            <div onClick={buyReroute} id='buy-cta' className='cta-card'>
                <img src={buyCTAImg} alt=""></img>
                <h4>Buy a home</h4>
                <p>Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.</p>
                <button>Browse homes</button>
            </div>
            <div onClick={sellReroute} id='sell-cta' className='cta-card'>
                <img src={sellCTAImg} alt=""></img>
                <h4>Sell a home</h4>
                <p>No matter what path you take to sell your home, we can help you navigate a successful sale.</p>
                <button>See your options</button>
            </div>
            <div onClick={rentReroute} id='rent-cta' className='cta-card'>
                <img src={rentCTAImg} alt=""></img>
                <h4>Rent a home</h4>
                <p>We’re creating a seamless online experience – from shopping on the largest rental network, to applying, to paying rent.</p>
                <button>Find rentals</button>
            </div>
        </div>
    )
}

export default SplashCTA;