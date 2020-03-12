import React, {useEffect, useState} from 'react';
import axios from 'axios';

const StarWars = props => {
    const[objectData,setObjectData] = useState({});
    const[getData,setGetData] = useState({});
    const[obj,setObj] = useState("people");
    const[num,setNum] = useState("");
    useEffect(()=>{
        axios.get('https://swapi.co/api/')
        
            .then(res=> {
                setObjectData(res.data)
            
            })
            .catch( err => console.log(err));
        
    },[]
    );
    const onSubmitHander = event => {
        event.preventDefault();
        console.log('*************')
        console.log('https://swapi.co/api/'+ obj +'/'+ num);
        axios.get('https://swapi.co/api/'+ obj +'/'+ num)
        .then(res =>{
            console.log(res);
            setGetData(res.data)
        })
        .catch( () =>{

            console.log("These aren't the droids you're looking for(STUPID BROKEN API");
        },[]
        );
        const route = '/'+ obj +'/' + num
        


    }
    const keys = Object.keys(objectData);
    const keys2 = Object.keys(getData);



    return (
        <>
        <div>
            <form onSubmit = {onSubmitHander}>
                <label>Search for:</label>
                <select name= "search"onChange = {event => setObj(event.target.value)}>
                {keys.map((keys, i)=>
                    <option name = "objects" key = {i}  >{keys}</option>
                )}
                </select>
                <input type= "number" name = 'num' onChange = {event => setNum(event.target.value)}/>
                <input type="submit" value = "Search"/>
            </form>
        </div>
        <div>
            {keys2.map((keys, i) =>
                <p>{keys}: {getData[keys]}</p>
            )}
        </div>
        </>

    );
}

export default StarWars
