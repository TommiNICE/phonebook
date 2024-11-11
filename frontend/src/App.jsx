import { useState, useEffect } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import SuccessNotification from './components/SucessNotification'
import ErrorNotification from './components/ErrorNotification'
import personService from './services/persons'

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchQuery, setNewSearch] = useState('')
  const [successMessage, setSuccessMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
      .catch(error => {
        console.log(error.response.data.error)
        setErrorMessage(error.response.data.error)
      })
  }, [])

  const addNameAndNumber = (event) => {
    event.preventDefault()
    const nameExists = persons.some(person => person.name === newName)
    if (!nameExists) {
      personService
        .create({ name: newName, number: newNumber })
        .then(returnedPerson => {
          console.log(returnedPerson)
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
          setSuccessMessage(`Added ${newName}`)
          setTimeout(() => {
            setSuccessMessage(null)
          }, 3000)
        })
        .catch(error => {
          console.log(error)
          setErrorMessage(`Validation of name and number failed. Name must be at least 3 characters long and number must be at least 6 digits long`)
          setTimeout(() => {
            setErrorMessage(null)
          }, 3000)
        })
    } 
    else {
      setErrorMessage(`${newName} is already added to phonebook`)
      setTimeout(() => {
        setErrorMessage(null)
      }, 3000)
    }
  }

  const updateNumber = (id, newNumber) => {
    const personToUpdate = persons.find(person => person.id === id)
    personService
      .updateNumber(id,
        newNumber
      )
      .then(returnedPerson => {
        setPersons(persons.map(person => person.id !== id ? person : returnedPerson))
        setNewNumber('')
        setSuccessMessage(`Updated ${personToUpdate.name}'s number`)
        setTimeout(() => {
          setSuccessMessage(null)
        }, 3000)
      })
      .catch(error => {
        console.log(error.response.data.error)
        setErrorMessage(error.response.data.error)
        setTimeout(() => {
          setErrorMessage(null)
        }, 3000)
      })
  }

  const deletePerson = (id) => {
    const personToDelete = persons.find(person => person.id === id)
    if (window.confirm(`Delete ${personToDelete.name}?`)) {
      personService
        .deletePerson(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id))
          setSuccessMessage(`Deleted ${personToDelete.name}`)
          setTimeout(() => {
            setSuccessMessage(null)
          }, 3000)
        })
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchQuery = (event) => {
    setNewSearch(event.target.value)
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6'>
      <div className="max-w-4xl mx-auto">
      <Header />
      <SuccessNotification message={successMessage} />
      <ErrorNotification message={errorMessage} />
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        addNameAndNumber={addNameAndNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange} />
      <Filter searchQuery={searchQuery} handleSearchChange={handleSearchQuery} />
      <Persons persons={persons} searchQuery={searchQuery} deletePerson={deletePerson} updateNumber={updateNumber} />
      <Footer />
      </div>
    </div>
  )
}

export default App