import axios from 'axios'
import React, { useEffect, useState } from 'react'

function International() {

    const [News,NextNews] = useState([])
    useEffect(()=>{
      axios.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c261f27321f04afbbc65e2e975aaef76").then((res) =>{
        console.log(res.data.articles);
        NextNews(res.data.articles);
      })
    },[])

  return (
    <div>
        <div className='container my-3'>
          
          <div className='container row my-2 mx-2'>
            {
              News.map((val)=>{

                let touch = <a href={val.url} className="btn btn-dark"> Read More </a>
                
                //img is not given then
                function img() {
                    if (val.urlToImage===null) {
                      return("https://w0.peakpx.com/wallpaper/119/524/HD-wallpaper-lightning-night-storm-thumbnail.jpg")
                    }
                    else{
                      return(val.urlToImage);
                    }
                  }
                  
                  //author 

                  function aut(){
                    if(val.author===null){
                      return("Non")
                    }else{
                      return(val.author)
                    }
                  }

                  // date formate

                  function da(){
                    const d = new Date(val.publishedAt).toLocaleDateString("de-DE");
                    return d
                  }

                return(
                  <div className='col-md-4 my-2'>
              
              <div className="card" style={{width:"21rem"}}>
                        <img src={img()} className="card-img-top" alt="..." />
                          <div className="card-body">
                            <h5 className="card-title">{val.title}</h5>
                            <p className="card-text">{val.description}</p>
                            <ul>
                              <li><b>Author  </b>: {aut()}</li>
                              <li><b>PUBLISHED AT </b>: {da()}</li>
                              <li><b>OPEN IN </b>: {val.source.name}</li>
                            </ul>
                            <button className="btn">{touch}</button>
                          </div>
                      </div>

                  </div>
                )
              })
            }
          </div>

        </div>
      
    </div>
  )
}

export default International
