/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'

const Person = ({ person, deletePerson }) => {
    console.log(person)
    return (
        <tr key={person.id}>
            <td>{person.name}</td>
            <td>{person.number}</td>
            <td>
                <button onClick={() => deletePerson(person.id)}>delete</button>
            </td>
        </tr>
    )
}
Person.propTypes = {
    person: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }).isRequired,
    deletePerson: PropTypes.func.isRequired,
}

export default Person
