/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import Person from './Person'

const Persons = ({ persons, searchQuery, deletePerson, updateNumber }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
                <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Number</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {persons.filter(person => person.name.toLowerCase().includes(searchQuery.toLowerCase())
                ).map(person => (
                    <Person key={person.id} persons={persons} person={person} deletePerson={deletePerson} updateNumber={updateNumber} />
                ))}
            </tbody>
        </table>
        </div>
        
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