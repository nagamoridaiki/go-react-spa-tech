import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Validation from '../validation';

function AddForm (props) {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [nameErrorMessage, setNameErrorMessage] = useState('')
  const [ageErrorMessage, setAgeErrorMessage] = useState('')

  const doChangeName = (e)=> {
    setName(e.target.value)
  }

  const doChangeAge = (e)=> {
    setAge(e.target.value)
  }

  useEffect(() => {
    setNameErrorMessage(Validation.formValidate("name", name))
    setAgeErrorMessage(Validation.formValidate("age", age))
  },[name, age])

  const doAction = (e)=> {
    const url = 'http://localhost:8080/users'

    const formData = {
        name: name,
        age: age
    }    

    axios.post(url, formData)
        .then(function (response) {
            console.log("レスポンスデータ", response.data);
            setName('')
            setAge(null)
        })
  }

  return (
    <form onSubmit={doAction} >
    <div className="form-group row">
        <input type="text" className="form-control-sm col" 
            onChange={doChangeName} value={name} required />
        {nameErrorMessage && (<div color='red'>{nameErrorMessage}</div>)}
        <input type="number" className="form-control-sm col" 
            onChange={doChangeAge} value={age} required />
        {ageErrorMessage && (<div color='red'>{ageErrorMessage}</div>)}
        {!nameErrorMessage && !ageErrorMessage && (
            <input type="submit" value="Add" 
                className="btn btn-primary btn-sm col-2" />
        )}
    </div>
    </form>
  )
}

export default AddForm