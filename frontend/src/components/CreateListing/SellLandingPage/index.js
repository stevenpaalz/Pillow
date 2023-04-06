
function SellLandingPage({setLandingComplete}) {

    return(
        <div id='sell-landing-page'>
            <h1>hello from landing page</h1>
            <button onClick={()=>setLandingComplete(true)}>press this to switch to sell form page</button>
        </div>
    )
}

export default SellLandingPage;

