import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addCart } from '../redux/action'
import { useParams } from 'react-router'
import { NavLink } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton' 

const Product = () => {

    const {id} = useParams()
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch()
    const addProduct = (product) => {
        dispatch(addCart(product))
    }

    useEffect( ()=>{
        const getProduct = async() => {
            setLoading(true)
            const responce = await fetch(`https://fakestoreapi.com/products/${id}`)
            setProduct(await responce.json())
            setLoading(false)
        }
        getProduct()
        
    },[])


    const Loading = () => {
        return(
            <>
                <div className='col-md-6'> 
                    <Skeleton height={400} width={400} />
                </div>
                <div className='col-md-6'> 
                    <Skeleton height={50} width={300} style={{lineHeight: 2}}le/>
                    <Skeleton height={75}  />
                    <Skeleton height={25} width={150} />
                    <Skeleton height={50}  />
                    <Skeleton height={150} />
                    <Skeleton height={50}  width={100}/>
                    <Skeleton height={50}  width={100} style={{marginLeft: 6}}/>
                </div>
               
            </>
        )
    }

    const ShowProducts = () => {
        return(
            <>
                <div className='col-md-6 py-5'>
                    <img src={product.image} alt={product.title} height="400px" width="400px" />
                </div>

                <div className='col-md-6 py-5' >
                    <h4 className='text-uppercase text-black-50'>
                        {product.category}
                    </h4>
                    <h1 className='display-5 py-4'>{product.title}</h1>
                    <p className='lead '>
                        Rating {product.rating && product.rating.rate}
                        <i className='fa fa-star'></i>
                    </p>
                    <h3 className='display-6 fw-bold my-4'>
                        $ {product.price}
                    </h3>
                    <p className='lead'>{product.description}</p>
                    <button className='btn btn-outline-dark' onClick={()=> addProduct(product)}>Add to Cart</button>
                    <NavLink className="btn btn-outline-dark ms-2 px-3" to="/cart" >Go to Cart</NavLink>
                </div>
               
            </>
        )
    }

  return (
    <div>
        <div className='container py-5'>
            <div className='row'>
                {loading ? <Loading /> : <ShowProducts />}
            </div>
        </div>

    </div>
  )
}

export default Product