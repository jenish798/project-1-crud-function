import React from 'react';
import { useState } from "react"
import {Link, useNavigate } from "react-router-dom";
import array from "../data/string";
import { v4 as uuid } from 'uuid';
import ButtonComp from '../button/Button'
import InputComp from '../input/input';

export default function Create(){

    const [name,setName] = useState('');
    const [age,setAge] = useState('');

    let history = useNavigate();

    const handleSubmit = (e) =>{
e.preventDefault();

const ids = uuid();
console.log(ids)
let uni = ids.slice(0,8);

let a=name, b= age;
if(name =='' || age ==''){
    alert('invalid input')
    return
}
array.push({id:uni,Name:a,Age:b})

history('/')
    }
    return(
        <div>
<form>

    <InputComp onChange={(e)=>setName(e.target.value)} type="text" placeholder="enter Name" required />
    <InputComp onChange={(e)=> setAge(e.target.value)} type="number" required placeholder="Age"/>


    <ButtonComp onClick = {(e) => handleSubmit(e)} type='submit'>
        submit
    </ButtonComp>

    <Link to='/'> 
    <ButtonComp>Home</ButtonComp></Link>
   
</form>
        </div>
    )
}