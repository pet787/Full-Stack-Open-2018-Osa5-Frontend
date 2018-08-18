import React from 'react'
import PropTypes from 'prop-types'

const BlogForm = ({ handleSubmit, handleChange }) => {
  return (
    <div>
      <h2>Create new blog</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Title
          <input 
            name='title'
            onChange={handleChange}
          />
        </div>
        <div>
          Author
          <input
            name='author'
          onChange={handleChange}
          />
        </div>
        <div>
          URL
          <input
           name='url'
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Create</button>
        </div>
      </form>
    </div>
  )
}

BlogForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
}


export default BlogForm