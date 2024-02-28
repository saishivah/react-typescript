import React from 'react'
import { VoidExpression } from 'typescript'

type InputProps ={
    value:string
    handleChange:(event:React.ChangeEvent<HTMLInputElement>)=>void
}

export const Input =({value,handleChange}:InputProps)=>{
//    pass it or declare your own input handler
    const handleInputChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        console.log(event)
    }

    return <input type='text' value={value} onChange={handleChange}/>;

}