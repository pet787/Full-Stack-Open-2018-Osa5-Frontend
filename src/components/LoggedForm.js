import React from 'react'
import PropTypes from 'prop-types'

const LoggedForm = ({ name, handleLogout }) => {
  return (
    <div>
        {name} logged in
        <button onClick={handleLogout}>
            Logout
        </button>
    </div>
  )
}

LoggedForm.propTypes = {
  handleLogout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
}

export default LoggedForm