import React from 'react'
import PropTypes from 'prop-types'

const BlogForm = ({ handleSubmit, handleChange }) => {
  return (
    <div>
      <h2>Create new blog</h2>
      <form onSubmit={handleSubmit}>
        <div>
          title
          <input 
            name='title'
            onChange={handleChange}
          />
        </div>
        <div>
          author
          <input
            name='author'
          onChange={handleChange}
          />
        </div>
        <div>
          url
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