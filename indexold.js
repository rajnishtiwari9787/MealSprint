import React from "react"; 
import ReactDOM from "react-dom/client";



/*

Header - 
    logo
    nav items   
Body
    search 
    resturant container
        resturant card
            img
            name
            rating
            cuisine
            delivery time
Footer
    copyright
    links
    contact
    address


*/


const Header=()=>{
    return(
        <div className="header">

            <div className="logo-container">
                <img className="logo" src="https://e7.pngegg.com/pngimages/496/109/png-clipart-gold-colored-triangle-logo-nail-art-june-triangulo-neon-angle-rectangle-thumbnail.png" alt="logo of brand" />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li className="cart-logo"><img src="data:image/png;base64,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" alt="cart-logo" /></li>
                </ul>
            </div>
        </div>

    )
}

const styleCard={                   //this is a js object
    backgroundColor:"#f0f0f0",
};



const ResturantCard=(props)=>{
    console.log(props);
    return(
        <div className="res-card" style={styleCard}> 
            <img className="res-logo" src={props.image} alt="resturant-image" />
            <h3>{props.resName}</h3>
            <h4>{props.cuisines}</h4>
            <h4>{props.rating}</h4>
            <h4>{props.time}</h4>
        </div>
    )
}


/*

we can also write the above as

const ResturantCard=({resName,cuisines,rating,time})=>{
    console.log(props);
    return(
        <div className="res-card" style={styleCard}> 
            <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/12/18/35139b49-285b-4b15-ae85-94c910ff612c_69cb0003-937e-49d0-a21a-5b46ec2dd500.jpg_compressed" alt="resturant-image" />
            <h3>{resName}</h3>
            <h4>{cuisines}</h4>
            <h4>{rating}</h4>
            <h4>{time}</h4>
        </div>
    )
}

this will behave the same


this is called destructuring
*/

const Body=()=>{
    return(
        <div className="Body">
            <div className="search">Search</div>
            <div className="Resturant-Conatiner">
                <ResturantCard
                 resName="Meghna Foods" 
                 cuisines="Pizza, Garlic Bread" 
                 rating="4.4 Stars"
                 time="38 mins"
                 image="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/12/18/35139b49-285b-4b15-ae85-94c910ff612c_69cb0003-937e-49d0-a21a-5b46ec2dd500.jpg_compressed"
                 />
                <ResturantCard 
                resName="Burger" 
                cuisines="Burger, Fries" 
                rating="4.6 Stars"
                time="25 mins"
                image="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/a621fa2337beff38368bb19988d27fcb"
                />
            </div>
        </div>
    )
}

const AppLayout=()=>{
    return(
        <div classname="app">
            <Header/>
            <Body/>
        </div>
    )
}




const root=ReactDOM.createRoot(document.getElementById("heading"));
root.render(<AppLayout/>);

