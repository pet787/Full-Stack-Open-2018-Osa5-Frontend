import React from 'react'
import PropTypes from 'prop-types'

const lineStyle = {
  paddingLeft: 10,
}

const Blog = ( { user, blog, onClickHeader, onClickLike, onClickDelete } ) => {

  console.log('blog.user',blog.user,'user',user)
  if (blog.showOpen) {
    if (blog.user._id===undefined || user.id === blog.user._id) {
      return( 
        <div className="blog">
          <div onClick={onClickHeader}><b>Title: {blog.title} Author: {blog.author}</b></div>
          <div style={lineStyle}>{blog.url}</div>
          <div style={lineStyle}>{blog.likes} likes <button type="button" onClick={onClickLike}>Like</button></div>
          <div style={lineStyle}>added by {blog.user.name}</div>
          <div style={lineStyle}><button type="button" onClick={onClickDelete}>Delete</button></div>
      </div>  
      )
    } else {
      return( 
        <div className="blog">
        <div onClick={onClickHeader}><b>Title: {blog.title} Author: {blog.author}</b></div>
        <div style={lineStyle}>{blog.url}</div>
        <div style={lineStyle}>{blog.likes} likes <button type="button" onClick={onClickLike}>Like</button></div>
        <div style={lineStyle}>added by {blog.user.name}</div>
        </div>
      )  
    }
  } else {
    return( 
    <div className="blog">
        <div onClick={onClickHeader}><b>Title: {blog.title} Author: {blog.author}</b></div>
    </div>  
    )
  }
}

Blog.propTypes = {
  user: PropTypes.object.isRequired,
  blog: PropTypes.object.isRequired,
  onClickHeader: PropTypes.func.isRequired,
  onClickLike: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired
}

export default Blog