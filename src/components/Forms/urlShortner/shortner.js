import React from 'react'
import './shortner.css'
import ListedLinks from '../shortened link lists/listedLinks'
import Middle from '../../Middle/middle'
import Boost from '../../Boost/boost';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';
import { ErrorMessage } from '@hookform/error-message'; 


const url = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;
const schema = yup.object().shape({
  url: yup.string().matches(url).required
})

const myStyleUrl= {
  color: "rgba(255, 64, 64, 0.7)",
  fontSize: "13px",
  padding: "0px",
  margin: "5px 0px 0px 0px",
  fontFamily: "'Public Sans', sans-serif",
  width: "200px"
}
const Shortner = () => {
  const [valueInput, setValueInput] = useState('')
  const [value, setValue]= useState('');
  const [toggle_linkBar, setToggle_linkBar] = useState(false);
  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schema)
  })
  
  const handleClick = () =>{    
    setValueInput(value);
    setValue('');
    setToggle_linkBar(true);
  }  

  return (
    <div>
      <div className='container-shortner'>
        <div className='shortner-container'>
        <svg xmlns="http://www.w3.org/2000/svg" width="1110" height="168">
            <path fill="#4B3F6B" fill-rule="evenodd" d="M647-93.924c0 52.724 15.5 90.486 73 114.877 57.5 24.391 113.055 2.134 168.786 14.894 55.731 12.76 55.731 94.962 108.214 145.549s163.142 62.874 253.12 11.552c89.976-51.322 130.765-171.152 103.88-241.807C1327.115-119.515 1275.593-184 1027-184c-248.593 0-380 37.353-380 90.076zm-781 213c0 52.724 15.5 90.486 73 114.877 57.5 24.391 113.055 2.134 168.786 14.894 55.731 12.76 55.731 94.962 108.214 145.549s163.142 62.874 253.12 11.552C559.095 354.626 599.884 234.796 573 164.141 546.115 93.485 494.593 29 246 29c-248.593 0-380 37.353-380 90.076z"/>
        </svg>
        <div className='shortner-form'>
            <input 
                type='url' 
                placeholder='Shorten a link here...' 
                value={value}
                url ={url}
                {...register("url")}
                onChange={(e)=> setValue(e.target.value)}
            />
            <ErrorMessage
              errors={errors}
              url={url}
              render={({message})=> <p style={myStyleUrl}>Please add a link</p>}
            />
            <button onClick={handleClick}>shorten it!</button> 
        </div>        
        </div>
        <ListedLinks valueInput={valueInput}  toggle_linkBar={toggle_linkBar}/>        
        <Middle />
        <Boost />
      </div>
      
    </div>
  )
}

export default Shortner
