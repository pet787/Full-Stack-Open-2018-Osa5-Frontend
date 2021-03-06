import React from 'react'

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

export default Notification