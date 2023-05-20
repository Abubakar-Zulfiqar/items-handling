import React, { useState, useEffect, createContext, useContext } from 'react'

const ContextApi = createContext(null)
export const useContextApi = () => useContext(ContextApi)

const ContextProvider = (props) => {

    let initUser

    (localStorage.getItem('users') === null) ? initUser = [] :
        initUser = JSON.parse(localStorage.getItem('users'))

    const addUser = (name, email, address) => {
        console.log('I am adding this todo', name, email, address)
        let sno
        if (users.length === 0) {
            sno = 0
        }
        else {
            sno = users[users.length - 1].sno + 1
        }
        const myUser = {
            sno: sno,
            name: name,
            email: email,
            address: address,
        }
        setUsers([...users, myUser])
        console.log(myUser)
    }

    const onDelete = (user) => {
        console.log('I am ondelete of todo', user)

        setUsers(users.filter((e) => {
            return e !== user
        }))
        console.log('deleted', users)
        localStorage.setItem('users', JSON.stringify(users))
    }

    const [users, setUsers] = useState(initUser)

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users))
    }, [users])

    return (
        <ContextApi.Provider value={{ addUser, onDelete, users }}>
            {props.children}
        </ContextApi.Provider>
    )
}

export default ContextProvider