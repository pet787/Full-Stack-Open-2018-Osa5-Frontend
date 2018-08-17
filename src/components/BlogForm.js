import React from 'react'

const BlogForm = ({ handleSubmit, handleChange, value }) => {
  return (
    <div>
      <h2>Create new blog</h2>
      <form onSubmit={handleSubmit}>
        <div>
          title
          <input 
            name='title'
            value={value}
            onChange={handleChange}
          />
        </div>
        <div>
          author
          <input
            name='author'
            value={value}
          onChange={handleChange}
          />
        </div>
        <div>
          url
          <input
           name='url'
            value={value}
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

export default BlogForm