/* eslint-disable no-unused-vars */
import React from 'react'
import { Plus } from 'lucide-react';
import PropTypes from 'prop-types'

const PersonForm = ({ newName, newNumber, addNameAndNumber, handleNameChange, handleNumberChange }) => {
    return (
        <form id="form-1" onSubmit={addNameAndNumber} className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1" >
                        Name:    
                    </label> 
                    <input id="input-name" value={newName}
                        onChange={handleNameChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Enter name" />
                </div>
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number:
                    </label>
                    <input id="input-number" value={newNumber}
                        type="tel"
                        onChange={handleNumberChange} 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder='Enter phone Number' />
                </div>
                    <button type="submit" className="mt-4 w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2">
                        <Plus size={20} />
                        Add Contact
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