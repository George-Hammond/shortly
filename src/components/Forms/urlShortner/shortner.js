import React from 'react'
import './shortner.css'
import ListedLinks from '../shortened link lists/listedLinks'
import Middle from '../../Middle/middle'
import Boost from '../../Boost/boost';
import { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import errorStyle from './styleError';



const Shortner = () => {
  const [valueInput, setValueInput] = useState([])
  const [value_input, setValue_input]= useState('');
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  
  const onSubmitForm = async(e) => {
    // e.preventDefault()
    
      try{
      const body = { value_input }
      console.log(JSON.stringify(body))
      const response = await fetch('http://localhost:5000/shorten', {
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(body)
      });

      console.log(response)
    }
    catch(err){
      console.log(err.message)
    }      
    
    setValue_input('');
    
  }
   
  const getShortenUrl = async() => {

    try{
      const response = await fetch('http://localhost:5000/shorten');
      const jsonData = await response.json();

      setValueInput(jsonData)      
      console.log(jsonData);
    } 
    catch(err){
    console.log(err.message)
  }
    
  }

  useEffect(()=>{
    getShortenUrl()

  }, []);

  return (
    <div>
      <div className='container-shortner'>
        <div className='shortner-container'>
        <svg xmlns="http://www.w3.org/2000/svg" width="1110" height="168">
            <path fill="#4B3F6B" fill-rule="evenodd" d="M647-93.924c0 52.724 15.5 90.486 73 114.877 57.5 24.391 113.055 2.134 168.786 14.894 55.731 12.76 55.731 94.962 108.214 145.549s163.142 62.874 253.12 11.552c89.976-51.322 130.765-171.152 103.88-241.807C1327.115-119.515 1275.593-184 1027-184c-248.593 0-380 37.353-380 90.076zm-781 213c0 52.724 15.5 90.486 73 114.877 57.5 24.391 113.055 2.134 168.786 14.894 55.731 12.76 55.731 94.962 108.214 145.549s163.142 62.874 253.12 11.552C559.095 354.626 599.884 234.796 573 164.141 546.115 93.485 494.593 29 246 29c-248.593 0-380 37.353-380 90.076z"/>
        </svg>

        <form className='shortner-form' onSubmit={handleSubmit(onSubmitForm)}>
            <div className='special'>
                <input 
                    type='url' 
                    placeholder='Shorten a link here...' 
                    value={value_input}
                    {...register("url", { required: true })}                
                    onChange={(e)=> setValue_input(e.target.value)}
                />
                <button >shorten it!</button>                
            </div>
             {
                  errors.url && <span style={errorStyle}>Please add a link</span>
            }            
        </form>    

       </div>
        {
          valueInput.length > 0 ?
          <>
            {valueInput.map((value) => (
              <ListedLinks value={value}  />
            )              
            )}
          </>           
          : 
          ''
        }               
        <Middle />
        <Boost />
      </div>
      
    </div>
  )
}

export default Shortner
