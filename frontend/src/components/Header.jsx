import React from 'react'

function Header() {
  return (
    <div>
        <header>
            <h1>Wild Fitness Club</h1>
            <h2>Get into the <br /> fitness journey</h2>
            <button>Abonne toi pelo</button>
                
                    <nav className='navbar'>
                    <ul>
                        <li><a href=""><img src="./src/assets/dashboard.png" alt="" width= "30px"/> Dashboard</a></li>
                        <li><a href=""><img src="./src/assets/dashboard.png" alt="" width= "30px"/>Programs</a></li>
                        <li><a href=""><img src="./src/assets/ecrire.png" alt="" width= "30px"/>Exercices</a></li>
                        <li><a href=""><img src="./src/assets/plaque.png" alt="" width= "30px"/>Nutrition</a></li>
                    </ul>
                    </nav>
                
        </header>
    </div>
  )
}


export default Header;