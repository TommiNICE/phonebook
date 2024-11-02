/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'

const SuccessNotification = ({ message }) => {

    if (!message) {
        return null
    }
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-green-100 p-6 rounded-lg shadow-lg">
            <div className="text-green-700">
                {message}
            </div>
        </div>
    </div>
    )
}
SuccessNotification.propTypes = {
    message: PropTypes.string
}

export default SuccessNotification