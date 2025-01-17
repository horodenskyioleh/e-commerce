import React from 'react'
import Products from './Products'

const Home = () => {
  return (
    <div className='cardOne'>
        <div class="card bg-dark text-white text-bg-dark border-0">
            <img src="/asset/download.jpg" class="card-img" alt="sea" height='550px'/>
            <div class="card-img-overlay d-flex flex-column justify-content-center">
                <div className='container'>
                    <h5 class="card-title display-6 fw-bolder mb-0">New Season Arrivals</h5>
                    <p class="card-text lead fs-2">
                        CHECK OUT ALL THE TRENDS 
                    </p>
                </div>
               
            </div>
        </div>
        <Products />
    </div>
  )
}

export default Home