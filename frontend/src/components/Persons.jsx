/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import Person from './Person'

const Persons = ({ persons, searchQuery, deletePerson, updateNumber }) => {
    return (
        <table className='divide-y divide-blue-500 w-[300px]'>
            <thead className='bg-yellow-50'>
                <tr>
                    <th className='font-normal text-xl p-2'>Name</th>
                    <th className='font-normal text-xl p-2'>Number</th>
                    <th className='font-normal text-xl p-2'>Actions</th>
                </tr>
            </thead>
            <tbody className='bg-white divide-y divide-blue-500'>
                {persons.filter(person => person.name.toLowerCase().includes(searchQuery.toLowerCase())
                ).map(person => (
                    <Person key={person.id} person={person} deletePerson={deletePerson} updateNumber={updateNumber} />
                ))}
            </tbody>
        </table>
    )
}
Persons.propTypes = {
    persons: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired
        })
    ).isRequired,
    searchQuery: PropTypes.string.isRequired,
    deletePerson: PropTypes.func.isRequired,
    updateNumber: PropTypes.func.isRequired

}

export default Persons