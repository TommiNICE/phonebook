/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'

const Filter = ({ searchQuery, handleSearchChange }) => {
    return (
        <div className='my-3 flex flex-col items-center'>
            <input id="input-search" 
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" 
            placeholder="search for name" 
            value={searchQuery} onChange={handleSearchChange} />
        </div>
    )
}
Filter.propTypes = {
    searchQuery: PropTypes.string.isRequired,
    handleSearchChange: PropTypes.func.isRequired,
}

export default Filter