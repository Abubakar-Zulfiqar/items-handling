import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

import { useContextApi } from "../Context/Context";

const Create = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [formList, setFormList] = useState([{ user1: '', user2: '', user3: '' }])
    const context = useContextApi()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!name || !email || !address) {
            // alert('Name, Email or Address cannot be blank')
        } else {
            context.addUser(name, email, address)
            setName('')
            setEmail('')
            setAddress('')
        }
    }

    const handleUserAdd = () => {
        setFormList([...formList, { user1: '', user2: '', user3: '' }])
    }

    const handleUserChange = (e, i) => {
        const { name, value } = e.target
        const list = [...formList]
        list[i][name] = value
        setFormList(list)
    }

    return (
        <>
            <Link to='/form' className='d-flex justify-content-center mt-5' style={{ style: 'none' }}>
                <Button type='button' variant='secondary'>Dynamic Form</Button>
            </Link>
            <div className='container my-3'>
                <h3>Add a User</h3>
                {formList.map((x, i) => (
                    <form key={i} onSubmit={handleSubmit}>
                        <div className='mb-3'>
                            <label htmlFor='name' className='form-label'>Name</label>
                            <input className='form-control' type='text' value={x.user1} id='user1'
                                name='user1' onChange={(e) => handleUserChange(e, i)} />
                        </div>

                        <div className='mb-3'>
                            <label htmlFor='email' className='form-label'>Email</label>
                            <input className='form-control' type='email' value={x.user2} id='user2'
                                name='user2' onChange={(e) => handleUserChange(e, i)} aria-describedby='emailHelp' />
                        </div>

                        <div className='mb-3'>
                            <label htmlFor='address' className='form-label'>Address</label>
                            <input className='form-control' type='text' value={x.user3} id='user3'
                                name='user3' onChange={(e) => handleUserChange(e, i)} />
                        </div>

                        {formList.length - 1 === i && formList.length < 8 && (
                            <button type='button'
                                className='btn btn-sm btn-success me-3' onClick={handleUserAdd}>
                                Add User
                            </button>
                        )}
                        <br />
                    </form>
                ))}
                <button type='submit' className='btn btn-sm btn-primary mt-3'>
                    Submit
                </button>
            </div>

            <div style={{ marginLeft: '7.6rem', marginTop: '1.3rem' }}>
                <Link to='/view'>
                    <button className='btn btn-sm btn-secondary'>
                        View Users
                    </button>
                </Link>
            </div>
        </>
    )
}

export default Create