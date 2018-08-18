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
    const contentDiv = blogComponent.find( '.header' )
    expect(contentDiv.text()).toContain(blog.title)
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