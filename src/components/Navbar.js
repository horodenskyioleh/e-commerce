import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

import '../components/syles/navbar.scss'



const Navbar = () => {
  
  const state = useSelector((state)=> state.handleCart)
  
  return (
    

            <div className='header'>
                <div className='wrapper'>
                    <div className='logo-container'>
                        
                        <div className='image-text'>MarketPlace</div>
                    </div>

                    <div className='nav-list'>
                        <ul className='nav-list-item'>
                            <li className='nav-list-item-link'>
                                <NavLink  className='nav-item-link' to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li className='nav-list-item-link'>
                                <NavLink  className='nav-item-link' to="/products">
                                    Products
                                </NavLink>
                            </li>
                            <li className='nav-list-item-link'>
                                <NavLink  className='nav-item-link' to="/about">
                                    About
                                </NavLink>
                            </li>
                            <li className='nav-list-item-link'>
                                <NavLink  className='nav-item-link' to="/contacts">
                                    Contacts
                                </NavLink>
                            </li>
                        </ul>
                        
                    </div>

                    <div className='buttons'>
                        <NavLink to='/login' className='btn btn-outline-dark'>
                     <i className='fa  me-1'></i>
                            Login
                     </NavLink>

                    </div>

                    <div className='buttons'>
                        <NavLink to='/register' className='btn btn-outline-dark ms-2'>
                            <i className='fa  me-1'></i>
                                Register
                        </NavLink>
                    </div>

                    <div className='buttons'>
                        <NavLink to='/cart' className='btn btn-outline-dark ms-2'>
                            <i className='fa  me-1'></i>
                                Cart({state.length})
                        </NavLink>
                    </div>

            
                </div> 
            </div>
            
            

            
          
  )
}

export default Navbar