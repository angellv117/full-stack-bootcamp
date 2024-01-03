import React from 'react'

export default function Contact({name, number, handleDelete, idPerson}) {
    
    return (<li>{`${name}   ${number}`} <button id = {idPerson} onClick={handleDelete(idPerson)}>Delete</button></li>)
}
