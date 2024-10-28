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
    const numberExists = persons.some(person => person.number === newNumber)
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
    } else if (nameExists && !numberExists) {
      const personToUpdate = persons.find(person => person.name === newName)
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        personService
          .updateNumber(personToUpdate.id, { name: personToUpdate.name, number: newNumber })
          .then(returnedPerson => {
            setPersons(persons.map(person => person.id === personToUpdate.id ? returnedPerson : person))
            setNewName('')
            setNewNumber('')
            setSuccessMessage(`Updated Number to ${newNumber}`)
            setTimeout(() => {
              setSuccessMessage(null)
            }, 3000)
          })
          .catch(error => {
            console.log(error.response.data)
            setErrorMessage(`Information of ${personToUpdate.name} has already been removed from server`)
            setTimeout(() => {
              setErrorMessage(null)
            }, 3000)
            setPersons(persons.filter(person => person.id !== personToUpdate.id))
          })
      }
    } else {
      setErrorMessage(`${newName} is already added to phonebook`)
      setTimeout(() => {
        setErrorMessage(null)
      }, 3000)
    }
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
    <div className='flex flex-col items-center max-w-[300px] mx-auto'>
      <Header />
      <SuccessNotification message={successMessage} />
      <ErrorNotification message={errorMessage} />
      <h2 className='text-xl'>New Entry</h2>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        addNameAndNumber={addNameAndNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange} />
      <Filter searchQuery={searchQuery} handleSearchChange={handleSearchQuery} />
      <Persons persons={persons} searchQuery={searchQuery} deletePerson={deletePerson} />
      <Footer />
    </div>
  )
}

export default App