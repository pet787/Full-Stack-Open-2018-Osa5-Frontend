import React from 'react'
import { shallow } from 'enzyme'
import SimpleBlog from './SimpleBlog'

describe.only('<SimpleBlog />', () => {
  it('renders content', () => {
    const blog = {
      title: 'Uber blog',
      author: 'John',
      likes: 10
    }

    const blogComponent = shallow( <SimpleBlog blog = { blog } /> )
    const headerDiv = blogComponent.find( '.header' )
    expect(headerDiv.text()).toContain(blog.title)
    expect(headerDiv.text()).toContain(blog.author)
    const likesDiv = blogComponent.find( '.likes' )
    expect(likesDiv.text()).toContain(blog.likes)
  })

  it('clicking the button twice calls event handler twice', () => {
    const blog = {
      title: 'Uber blog',
      author: 'John',
      likes: 10
    }
  
    const mockHandler = jest.fn()
  
    const blogComponent = shallow(
      <SimpleBlog
        blog={blog}
        onClick={mockHandler}
      />
    )
  
    const button = blogComponent.find('button')
    button.simulate('click')
    expect(mockHandler.mock.calls.length).toBe(1)
    button.simulate('click')
    expect(mockHandler.mock.calls.length).toBe(2)
  })

})