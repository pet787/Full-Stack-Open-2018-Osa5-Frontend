import React from 'react'

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

export default LoggedForm