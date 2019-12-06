import React from 'react'
import './Header.css'

const Header = ({pseudo}) => {
 
    return (
      <header>
         <h1> RфV  </h1>
       
                    <div className='logo'>
                        <a href="#">
                            <img src="" alt=""></img>
                        </a>
                    </div>
                <div/>
                    <div className="hamburger">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                      <nav>
                        <ul className="nav-links">
                            <li> Concept</li>
                            <li> Produits </li>
                            <li> Menu </li>
                            <li> Contact </li>
                        </ul>
                        </nav>
                        <div className="banner-area">
                        <div className="banner-text">
                            <h2> Organic Plant Based</h2>
                            <a href="#" > Learn More </a>
                        </div>
                    </div>

                    <div className="main-content">
                        <div className="wrapper">
                            <h2>Content Header</h2>
                            <p> jeheheheheheheeh </p>
                        </div>
                    </div>
                    <section className="landing">
                    </section>
                  
      </header>
       
    )
  }


export default Header;
