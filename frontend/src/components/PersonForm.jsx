/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'

const PersonForm = ({ newName, newNumber, addNameAndNumber, handleNameChange, handleNumberChange }) => {
    return (
        <form id="form-1" onSubmit={addNameAndNumber} className="rounded-lg">
            <div className='w-[300px]'>
                <p>Name:</p> 
                <input id="input-name" value={newName}
                    onChange={handleNameChange}
                    className='w-[300px] my-[2px] py-[10px] rounded-lg' />
            </div>
            <div>
                <p>Number:</p> 
                <input id="input-number" value={newNumber}
                    onChange={handleNumberChange} 
                    className='w-[300px] my-[2px] py-[10px] rounded-lg' />
            </div>
            <div className='flex flex-col items-center'>
                <button type="submit" className="px-[30px] py-[10px] my-[5px] border border-blue-600 bg-blue-600 hover:bg-green-400 text-white rounded-lg">
                    Add
                </button>
            </div>
        </form>
    )
}
PersonForm.propTypes = {
    newName: PropTypes.string.isRequired,
    newNumber: PropTypes.string.isRequired,
    addNameAndNumber: PropTypes.func.isRequired,
    handleNameChange: PropTypes.func.isRequired,
    handleNumberChange: PropTypes.func.isRequired,
}

export default PersonForm