import React from 'react'
import Blog from './components/Blog'
import LoginForm from './components/LoginForm'
import LoggedForm from './components/LoggedForm'
import BlogForm from './components/BlogForm'
import Notification from './components/Notification'
import Togglable from './components/Togglable'
import loginService from './services/login'
import blogService from './services/blogs'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notification: null,
      blogs: [],
      username: '',
      password: '',
      user: null,
      mode: 'login',
      newBlog: {
        title : '',
        author : '',
        url : '',
      }
    }
  }

  sortByLikes = (a, b) => {
    if (a.likes > b.likes ) return -1
    if (a.likes < b.likes ) return 1
    return 0
  }

  componentDidMount() {
    blogService.getAll().then(blogs => {
      this.setState({ blogs: blogs.sort(this.sortByLikes) })
    } )
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      this.setState({ user, mode: 'blogs' })
      blogService.setToken(user.token)
    }    
  } 

  showNotification = (message ) => {
    this.setState({
      notification: message,
      error : false
    })
    setTimeout(() => {
      this.setState({ notification: null })
    }, 5000)
  }

  showError = (message) => {
    this.setState({
      notification: message,
      error : true
    })
    setTimeout(() => {
      this.setState({ notification: null })
    }, 5000)
  }
  
  login = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username: this.state.username,
        password: this.state.password
      })

      window.localStorage.setItem('loggedBlogappUser', JSON.stringify(user))
//      blogService.setToken(user.token)
      this.setState({ username: '', password: '', user, mode: 'blogs' })
    } catch (exception) {
      this.showError( 'username or password wrong' )
    }
  }

  logout = (event) => {
    window.localStorage.removeItem( 'loggedBlogappUser' ) 
    this.setState( { user: null, mode: 'login' } )
  }

  handleBlogFieldChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    const blog = {...this.state.newBlog, [name]: value }
    this.setState({ newBlog: blog })
  }

  addBlog = async (event) => {
    event.preventDefault()
    try {
      const username = this.state.user.name
      const blog = await blogService.create( this.state.newBlog )
      console.log('newBlog', blog)
      const blogs = [...this.state.blogs, blog ]
      this.setState( { blogs: blogs.sort(this.sortByLikes) } )
      this.showNotification( 'A new blog \'' + blog.title + '\' by ' + username + ' was added' )
    } catch (exception) {
      this.showError( 'Adding blog failed' )
    }
  }

  handleBlogHeaderClick = (id) => (event) => {
    event.preventDefault()
    const blogs = this.state.blogs.map(blog => {
      if (blog._id === id ) {
        return {...blog, showOpen: !blog.showOpen }
      } else {
        return blog
      }
    })
    this.setState( { blogs: blogs } )
  }
  
  handleBlogLikeClick = (id) => async (event) => {
    event.preventDefault()
    try {
      var newBlog = this.state.blogs.find( blog => blog._id === id )
      newBlog = {...newBlog, likes: newBlog.likes + 1 }
      console.log(newBlog)
      await blogService.update( id, newBlog )
      const blogs = this.state.blogs.map(blog => {
        if (blog._id === id ) {
          return newBlog
        } else {
          return blog
        }
      })
      this.setState( { blogs: blogs.sort(this.sortByLikes) } )
      this.showNotification( 'A like +1 was added' )
    } catch (exception) {
      this.showError( 'Adding like failed' )
    }
  }

  handleBlogDeleteClick = (id) => async (event) => {
    event.preventDefault()
    try {
      const blog = this.state.blogs.find(blog => blog._id === id)
      console.log(blog)
      if ( window.confirm( 'Delete ' + blog.title + ' by ' + blog.author ) ) {
        await blogService.deleteBlog( id )
        const blogs = this.state.blogs.filter(blog => blog._id !== id)
        this.setState( { blogs: blogs.sort(this.sortByLikes) } )
        this.showNotification( 'A blog was deleted' )
      }
    } catch (exception) {
        this.showError( 'Delete blog failed' )
    }
  }

  render() {
    const mode = this.state.mode
    if (mode === 'login') {
      return (
        <div>
          <Notification
            message={this.state.notification} 
            error={this.state.error}  
          />
           <LoginForm
              username={this.state.username}
              password={this.state.password}
              handleChange={ (event) => {
                this.setState({ [event.target.name]: event.target.value } ) } }
              handleSubmit={this.login}
            />
        </div>
      )
     } else if (mode === 'blogs') {
      return (
        <div>
          <Notification
            message={this.state.notification} 
            error={this.state.error}  
          />
          <LoggedForm
            name={ this.state.username }
            handleLogout={ this.logout }
          />
          <h2>blogs</h2>
          <Togglable buttonLabel="Create blog">
            <BlogForm
              handleSubmit = { this.addBlog }
              handleChange = { this.handleBlogFieldChange}
            />
          </Togglable>
          {this.state.blogs.map(blog =>
            <Blog 
              key={blog._id} 
              blog={blog} 
              onClickHeader={this.handleBlogHeaderClick(blog._id)}
              onClickLike={this.handleBlogLikeClick(blog._id)}
              onClickDelete={this.handleBlogDeleteClick(blog._id)}
            />
          )}
        </div>
      )
    }
  }
}

export default App;
