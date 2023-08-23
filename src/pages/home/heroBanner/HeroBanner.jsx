import React, {useState} from 'react'
import "./style.scss"

const HeroBanner = () => {
  const[background, setBackground] = useState("");
  const [query, setQuery] = useState("");


const searchQueryHandler = (event) => {
if(event.key === "Enter" && query.length > 0) {

}

}

  return (
  <div className="HeroBanner">
    <div className='wrapper'>
      <div className="heroBannerContent">
        <span className="title">Welcome</span>
        <span className="subTitle">Millions of movies, TV shows and people to discover. Explore now.</span>
        <div className="searchInput">
          <input type="text" placeholder='Search for a movie or TV Show....' onChange={(e)=> setQuery(e.target.value)} oneKeyUp= {searchQueryHandler}/>
          <button>Search</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default HeroBanner
