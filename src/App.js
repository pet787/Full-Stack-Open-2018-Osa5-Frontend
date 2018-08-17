import React from 'react'
import Blog from './components/Blog'
import LoginForm from './components/LoginForm'
import LoggedForm from './components/LoggedForm'
import BlogForm from './components/BlogForm'
import Notification from './components/Notification'
import loginService from './services/login'
import blogService from './services/blogs'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      blogs: [],
      username: '',
      password: '',
      user: null,
      mode: 'login',
      newBlog: {
        title : '',
        author : '',
        url : ''
      }
    }
  }

  componentDidMount() {
    blogService.getAll().then(blogs =>
      this.setState({ blogs })
    )
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      this.setState({ user, mode: 'blogs' })
      blogService.setToken(user.token)
    }    

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
      this.setState({
        error: 'username or password wrong',
      })
      setTimeout(() => {
        this.setState({ error: null })
      }, 5000)
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
    console.log(this.state.newBlog)
    event.preventDefault()
    try {
      const blog = await blogService.create( this.state.newBlog )
      const blogs = [...this.state.blogs, blog ]
      this.setState( { blogs: blogs, mode: 'blogs' } )
    } catch (exception) {
      this.setState({ error: 'Adding blog failed' })
      setTimeout(() => {
        this.setState({ error: null })
      }, 5000)
    }
  }
  
  render() {
    const mode = this.state.mode
    if (mode === 'login') {
      return (
        <div>
           <Notification message={this.state.error} />
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
          <Notification message={this.state.error} />
          <LoggedForm
            name={ this.state.username }
            handleLogout={ this.logout }
          />
          <h2>blogs</h2>
          <button onClick = { () => this.setState( { mode: 'new' } ) }>
              create blog
            </button>
          {this.state.blogs.map(blog =>
            <Blog key={blog._id} blog={blog} />
          )}
        </div>
      )
    } else if ( mode === 'new' ) {
      return (
        <div>
          <Notification message = { this.state.error } />
          <LoggedForm
            name={ this.state.username }
            handleLogout={ this.logout }
          />
          <BlogForm
            handleSubmit = { this.addBlog }
            handleChange = { this.handleBlogFieldChange} 
          />
        </div>
      )
    }
  }
}

export default App;
