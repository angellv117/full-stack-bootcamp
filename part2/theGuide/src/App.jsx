import React, { useEffect, useState } from 'react'
import Contact from './components/Contact'
import Filter from './components/Filter'
import Form from './components/Form'
import personService from './services/person'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setfiter] = useState('')
  const [personFilter, setPersonFilter] = useState([])
  const [errorMessage, setErrorMessage] = useState({
    message: null,
    clase: null

  })

  const hook = () => {
    personService.getAll()
      .then(initialPerson => {
        setPersons(initialPerson)
      })
  }

  useEffect(hook, [])

  const alerta = (message, clase) =>{
    setErrorMessage(
      {
        message: message,
        clase: clase
      }
    )
    setTimeout(() => {
      setErrorMessage({
        message: null,
        clase: null
      })
    }, 5000)
  }

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber
    }
    var message = ''
    if (persons.some(objeto => objeto.name === newName)) {
      if (window.confirm(`${newName}  exite, quiere sobrescribirlo`)) {
        const person = persons.find(person => person.name === newName)
        personService
          .update(person.id, nameObject)
          .then(returnPerson => {
            setPersons(persons.map(p => p.id != person.id ? p : returnPerson))
          })
        message = `El contacto ${newName} ha sido modificado`
      }
    }
    else {
      personService.create(nameObject)
        .then(newContact => {
          setPersons(persons.concat(newContact))

        }
        )
      message = `El contacto ${newName} ha sido registrado`
    }
    setNewName('')
    setNewNumber('')
    alerta(message, 'success')

  }
  const handleDelete = id => {
    const oldName = persons.filter(person => person.id == id.target.id)[0].name
    if (window.confirm(`Do you what to delete ${oldName}`)) {
      personService.deletePerson(id.target.id)
        .then(newContact => {
          personService.getAll()
            .then(initialPerson => {
              setPersons(initialPerson)
            })
          alerta(`El contacto ${oldName} ha sido borrado`, 'error')
        }
        )
        .catch(error => {
          setPersons(persons.filter(p => p.id != id.target.id))
          alerta(`El contacto ${oldName} ya no existe en el servidor`, 'error')
          
        })
    }
  }

  const handleNameChenge = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChenge = (event) => {
    setNewNumber(event.target.value)
  }
  const handleFilterChenge = (event) => {
    setfiter(event.target.value)
    setPersonFilter(persons.filter(person => person.name.toLowerCase().includes(document.getElementById('filtertxt').value.toLowerCase())))
  }

  return (
    <div>
      <Notification message={errorMessage.message} clase={errorMessage.clase} />
      <h2>Phonebook</h2>
      <Filter onChange={handleFilterChenge} id='filtertxt' value={filter} ></Filter>
      <Form addName={addName} newName={newName} handleNameChenge={handleNameChenge} newNumber={newNumber} handleNumberChenge={handleNumberChenge}></Form>

      <h2>Numbers</h2>
      <ul>
        {personFilter.length <= 0
          ? persons.map((person) => (
            <Contact key={person.id} idPerson={person.id} name={person.name} number={person.number} handleDelete={() => handleDelete}></Contact>
          ))
          : personFilter.map((person) => (
            <Contact key={person.id} idPerson={person.id} name={person.name} number={person.number} handleDelete={() => handleDelete} ></Contact>
          ))
        }
      </ul>
    </div>
  )
}

export default App