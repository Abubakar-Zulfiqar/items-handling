import React, { useState } from 'react'

const Form = () => {
    // use the useState hook to store the values of the form fields in state
    const [formData, setFormData] = useState({})

    // handle changes to the form fields
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    // handle submission of the form
    const handleSubmit = (event) => {
        event.preventDefault()
        // submit the form data to the server here
    }

    return (
        <form className='container my-3' onSubmit={handleSubmit}>
            <label>
                Name:
                <input type='text' name='name' onChange={handleChange} value={formData.name} />
            </label>
            <br />
            <label>
                Email:
                <input type='email' name='email' onChange={handleChange} value={formData.email} />
            </label>
            <br />
            <label>
                Message:
                <textarea name='message' onChange={handleChange} value={formData.message} />
            </label>
            <br />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Form
