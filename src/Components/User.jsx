import React from 'react'

import { useContextApi } from "../Context/Context";

const User = (props) => {
    const context = useContextApi()

    return (
        <>
            <div>
                <h4>{props.user.name}</h4>
                <p>{props.user.email}</p>
                <p>{props.user.address}</p>
                <button className="btn btn-sm btn-danger" onClick={() => { context.onDelete(props.user) }}>Delete</button>
            </div>
            <hr />
        </>
    )
}

export default User