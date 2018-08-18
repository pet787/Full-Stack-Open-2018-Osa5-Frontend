import React from 'react'

const Note = ({ note, toggleImportance }) => {
  const label = note.important ? 'make not important' : 'make important'
  return (
    <div className="wrapper">
      <div className="content">
        {note.content}  {note.content}
      </div>
      <div>
        <button onClick={toggleImportance}>{label}</button>
      </div>
      <div classname="foofar">
      {note.content}
    </div>
    </div>
  )
}

export default Note