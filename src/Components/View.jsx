import React from 'react'
import { Link } from "react-router-dom";

import User from './User'
import { useContextApi } from "../Context/Context";

const View = (props) => {
    const context = useContextApi()

    return (
        <>
            <div className="container" style={{ minHeight: '70vh', margin: '40px auto' }}>
                <h3 className="my-3">Users List</h3>
                <Link to='/'>
                    <button className='btn btn-sm btn-secondary mb-3'>Add Users</button>
                    <br />
                </Link>
                {context.users.length === 0 ? "No Users to display" :
                    context.users.map((user) => {
                        console.log(user.sno)
                        return (<User user={user} key={user.sno} onDelete={context.onDelete} />
                        )
                    })
                }
            </div>
        </>
    )
}

export default View