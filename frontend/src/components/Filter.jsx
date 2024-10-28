/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'

const Filter = ({ searchQuery, handleSearchChange }) => {
    return (
        <div className='w-[300px] flex flex-col items-center'>
        <input id="input-search" className='w-[300px] my-[10px] py-[10px] rounded-lg' placeholder="search for name" 
        value={searchQuery} onChange={handleSearchChange} />
      </div>
    )
}
Filter.propTypes = {
    searchQuery: PropTypes.string.isRequired,
    handleSearchChange: PropTypes.func.isRequired,
}

export default Filter