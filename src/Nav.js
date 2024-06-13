import React from 'react'
import logo from './Logo .svg'

function Nav() {
  return (
    <>
        <nav className='nav'>
            <img src="Logo.svg" alt='logo'></img>
            <ul className='nav-list'>
                <li>
                  <a>Home</a>
                </li>

                <li>
                  <a>About</a>
                </li>

                <li>
                  <a>Menu</a>
                </li>

                <li>
                  <a>Reservations</a>
                </li>

                <li>
                  <a>Ording Online</a>
                </li>

                <li>
                  <a>Login</a>
                </li>
            </ul>
        </nav>
    </>
  )
}

export default Nav