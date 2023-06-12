import React,{useState, useEffect} from 'react'
import '../App';
import axios from 'axios';
import SERVERURL from '../constant/SERVERURL';

const Content = () => {
    const[data, setData] = useState([]);

    useEffect(() => {
        axios({
            method:"GET",
            url:SERVERURL
        }).then(res => {
            setData(res.data.response);
            console.log(res.data);
        }).catch( e =>console.log(e))
        }, [])

  return (
    <div className='content-container'>
        {data.map((item) => (
            <div className='itemDiv' 
            key={item.title} 
            onClick={() => window.open(item.matchviewUrl)}
            >
                <div className='itemHeader'>
                    <h4>{item.title}</h4>
                    </div>
                <div className='itemImage'>
                    <img src={item.thumbnail} alt={item.title} />
                </div>
            </div>
        ))}
    </div>
  )
}

export default Content