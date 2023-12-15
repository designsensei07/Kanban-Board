
import React from 'react';
import Navbar from './comp/Navbar';
import Colbox from './comp/Columnbox';
import axios from 'axios';
import Cardbox from './comp/Cardbox';
import { useState, useEffect } from 'react';
import Dropdown from './comp/Drop';
function App() {
  const[data, setData] = useState(null);
  const[currData, setCurrData] = useState([]);
  const[isLoading, setIsLoading] = useState(true);
  const [filter, setfilter] = useState();
  useEffect(() => {

    // if(isLoading === true){
      axios.get("https://api.quicksell.co/v1/internal/frontend-assignment").then((res) => {
      setData(res.data.tickets);
      // setIsLoading(false);
      console.log(data);
    })
  }, [data!==null]);


  const sortByStatus = () => {
    setCurrData(Object.groupBy(data, ({status}) => status));
    setfilter("status")
  }
  const sortByUser = () => {
    setCurrData(Object.groupBy(data, ({userId}) => userId));
    setfilter("userId")
  }
  const sortByPriority = () => {
    setCurrData(Object.groupBy(data, ({priority}) => priority));
    setfilter("priority")
  }
  console.log(currData);



  return (
    <div className="App">
        <nav className="navbar" style={{display: "flex", }}>
        <span style={{marginBlock: 'auto' ,marginLeft:'10px', fontWeight:"bold"}}>Sort by</span>
        <input type="radio" placeholder='Priority' onClick={sortByPriority} name='Priority' style={{marginLeft:"20px"}} /><p >Priority</p>
        <span style={{marginBlock: 'auto', marginLeft:"20px", fontWeight:"bold" }}>Group by</span>
        <input type="radio" placeholder='User' onClick={sortByUser}name='Priority' style={{marginLeft:"20px"}} /><p>User</p>
        <input type="radio" placeholder='Status' onClick={sortByStatus} name='Priority' style={{marginLeft:"20px"}}/><p>Status</p>
        </nav>
        <div className='columns'>
        {Object.entries(currData).map(([key, item],i) => (
          <Colbox data={item} criteria={filter}/>
        ))}
            
        </div>
    </div>
  );
}

export default App;
