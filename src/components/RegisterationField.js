import React from 'react'
export default function RegisterationField(props) {
  return (
    <>
        <div className={props.classname}>
            <label className="form__label" htmlFor={props.htmlFor}> {props.title} </label>
            <br/>
            <input className="form__input" type={props.type} id={props.id} value={props.value} 
            onChange={props.onChange}
            placeholder={props.placeholder}/>
        </div>
    </>
  )
}
