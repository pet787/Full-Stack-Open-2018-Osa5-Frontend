import React from 'react'
import PropTypes from 'prop-types'

const lineStyle = {
  paddingLeft: 10,
}

const Blog = ( { user, blog, onClickHeader, onClickLike, onClickDelete } ) => {

  if (blog.showOpen) {
    if (blog.user._id===undefined || user.id === blog.user._id) {
      return( 
        <div className="blog">
          <div className="header" onClick={onClickHeader}><b>Title: {blog.title} Author: {blog.author}</b></div>
          <div className="url" style={lineStyle}>{blog.url}</div>
          <div className="likes" style={lineStyle}>{blog.likes} likes <button type="button" onClick={onClickLike}>Like</button></div>
          <div className="user"  style={lineStyle}>added by {blog.user.name}</div>
          <div className="delete" style={lineStyle}><button className="deleteButton" type="button" onClick={onClickDelete}>Delete</button></div>
      </div>  
      )
    } else {
      return( 
        <div className="blog">
          <div className="header" onClick={onClickHeader}><b>Title: {blog.title} Author: {blog.author}</b></div>
          <div className="url" style={lineStyle}>{blog.url}</div>
          <div className="likes" style={lineStyle}>{blog.likes} likes <button type="button" onClick={onClickLike}>Like</button></div>
          <div className="user" style={lineStyle}>added by {blog.user.name}</div>
        </div>
      )  
    }
  } else {
    return( 
    <div className="blog">
        <div className="header" onClick={onClickHeader}><b>Title: {blog.title} Author: {blog.author}</b></div>
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