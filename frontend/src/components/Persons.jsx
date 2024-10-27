/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import Person from './Person'

const Persons = ({ persons, searchQuery, deletePerson }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Number</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {persons.filter(person => person.name.toLowerCase().includes(searchQuery.toLowerCase()))
                    .map(person => (
                        <Person key={person.id} person={person} deletePerson={deletePerson} />
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
    deletePerson: PropTypes.func.isRequired
}

export default Persons