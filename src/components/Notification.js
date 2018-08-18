import React from 'react'
import PropTypes from 'prop-types'

const Notification = ({ message, error = false  }) => {
  if (message === null) {
    return (
      <div className="blank">
      <br></br>
      </div>
    )
  } else if (error) {
    return (
      <div className="error">
        {message}
      </div>
    )
  } else {
    return (
      <div className="notification">
        {message}
      </div>
    )
  }
}

Notification.propTypes = {
  message: PropTypes.string.isRequired
}

export default Notification