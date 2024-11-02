/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'

const ErrorNotification = ({ message }) => {

    if (!message) {
        return null
    }
return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-red-200 p-6 rounded-lg shadow-lg">
            <div className="text-red-700">
                {message}
            </div>
        </div>
    </div>
)

}
ErrorNotification.propTypes = {
    message: PropTypes.string
}

export default ErrorNotification