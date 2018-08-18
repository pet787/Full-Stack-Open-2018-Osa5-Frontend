import React from 'react'


const lineStyle = {
  paddingLeft: 10,
}

const Blog = ( { blog, onClickHeader, onClickLike } ) => {


  if (blog.showOpen) {
    return( 
      <div className="blog">
        <div onClick={onClickHeader}><b>{blog.title} {blog.author}</b></div>
        <div style={lineStyle}>{blog.url}</div>
        <div style={lineStyle}>{blog.likes} likes <button type="button" onClick={onClickLike}>Like</button></div>
        <div style={lineStyle}>added by {blog.user.name}</div>
    </div>  
    )
} else {
    return( 
    <div className="blog">
      <div onClick={onClickHeader}><b>{blog.title} {blog.author}</b></div>
    </div>  
    )
  }
}

export default Blog