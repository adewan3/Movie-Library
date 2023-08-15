import { useEffect, useState } from "react";
import Search from "./Search";
import './App.css';
import MoviesCard from "./MoviesCard";


//d4dd90f8

//const API = "http://www.omdbapi.com?apiKey=d4dd90f8";





const App = ()=>{

    const [data_res, setData] = useState([]);

    const SearchTitle = async (txt) =>{

        // const res = await fetch(`${API}&s=${txt}`);
        // const data = await res.json();
    
        // const result = data.Search;
        // console.log(result);
        // setData(result);
        // //console.log(data_res);


        
            // Fetch data from API
            
            fetch(`${process.env.REACT_APP_API}&s=${txt}`)
              .then(response => response.json())
              .then(data => {
                // Set the fetched data to state
                //console.log(data.Search);
                setData(data.Search);
              })
              .catch(error => {
                // Handle any error that occurred during the fetch
                setData([]);
                console.error('Error fetching data:', error);
              });
           // Run this effect only once during component mount
          
          
    
    
    
    }

    // useEffect(()=>{
    //     const response = fetch()
    // },[])

    // useEffect(() => {
    //     SearchTitle("Batman");
    //   }, []);

    

    return(
        <div className="app">
            
            <h1>Movie Land</h1>
            <Search  title = {SearchTitle}/>

            {
                

                (data_res!== undefined || data_res.length>0)?
                (<div className="container">
                    {data_res.map((movie)=>(
                        <MoviesCard movie={movie}/>

                    ))};

                </div>) :
                (<div className="empty">
                    <h2>No Movies</h2>


                </div>)
            }
            

        

            

        </div>
        
        
    );
}

export default App;