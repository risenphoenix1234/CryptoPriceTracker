 
import './Home.css'

const Home = () => {
  return (
    <div className='home'>

      <div className='hero'>
        <h1>Explore <br/> Crypto Market Place</h1>
        <p>Welcome to world crypto market Price explorer.Discover the latest value of crypto currencies.</p>

        <form >

          <input type="text" placeholder='Search Crypto' />
          <button type='submit'>Search</button>
        </form>
        

      </div>

      <div className="crypto-table">
        <div className="table-layout">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p style={{textAlign:"center"}}>24H Change</p>
          <p className="market-cap">Market Cap</p>

        </div>
      </div>
      </div>
  )
}

export default Home