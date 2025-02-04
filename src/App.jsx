import { useEffect, useState } from 'react'
import './App.css'
import loading_spinner from './assets/loading_block_spinger.svg'
import Cards from './Components/Cards'
import axios from 'axios';

function App() {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true); // State for loading

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((respones) => {
        // console.log(respones);
        setProducts(respones.data)
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.log(error);
        setLoading(false); // Also set loading to false if there's an error
      })
  }, [])
  // console.log(products);


  return (
    <>
      
      <main className='bg-light mt-5  container'>
        {
          // Conditional rendering based on the loading state
          loading ? 
          (
            <div id="loading" className="d-flex justify-content-center vh-100  align-items-center">
              <img src={loading_spinner} className="logo react" alt="jj" />
            </div>
          ) : 
          (
            <div id="card" className="row g-4 mb-5">
              {/* Cards components  */}
              {products.map((product, index) =>
                <div className="col-md-6 col-lg-3 " key={product.id}>
                  <Cards data={product} />
                </div>
              )
              }
            </div>
          )
        }


      </main>
      
    </>
  )
}

export default App
