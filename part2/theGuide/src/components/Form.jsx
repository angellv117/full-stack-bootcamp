import React, { useState } from 'react'

export default function Form(props) {

    return (
        <form >
             <h2>Add a  new</h2>
            <div>
                name: <input value={props.newName} onChange={props.handleNameChenge} />
            </div>
            <div>
                number: <input value={props.newNumber} onChange={props.handleNumberChenge} />
            </div>
            <div>
                <button type="submit" onClick={props.addName}>add</button>
            </div>
        </form>
    )
}
