import React from 'react'
import { shallow } from 'enzyme'
import Blog from './Blog'

describe.only('<Blog />', () => {
  it('renders title and author only', () => {
    const user = {
        id : '12345'
    }

    const blog = {
      title: 'Uber blog',
      author: 'John',
      url: 'http://zzz.com',
      likes: 10,
      showOpen: false,
      user: {
        _id: '12345',
        name: 'John'
    }
  }

  const mockHandler1 = jest.fn()
  const mockHandler2 = jest.fn()
  const mockHandler3 = jest.fn()

  const blogComponent = shallow( 
        <Blog 
            user = {user} 
            blog = {blog} 
            onClickHeader={mockHandler1}
            onClickLike={mockHandler2}
            onClickDelete={mockHandler3}
        /> 
    )
    const headerDiv = blogComponent.find( '.header' )
    expect(headerDiv.text()).toContain(blog.title)
    expect(headerDiv.text()).toContain(blog.author)
    expect(blogComponent.find('.url').exists()).toBe(false);
    expect(blogComponent.find('.likes').exists()).toBe(false);
    expect(blogComponent.find('.user').exists()).toBe(false);
    expect(blogComponent.find('.delete').exists()).toBe(false);
  })

  it('clicking the button', () => {
    const user = {
        id : '12345'
    }

    const blog = {
      title: 'Uber blog',
      author: 'John',
      url: 'http://zzz.com',
      likes: 10,
      showOpen: false,
      user: {
          _id: '12345',
          name: 'John'
      }
    }
  
    const mockHandler1 = jest.fn()
    const mockHandler2 = jest.fn()
    const mockHandler3 = jest.fn()
  
    const blogComponent = shallow(
      <Blog
        user = {user} 
        blog={blog}
        onClickHeader={mockHandler1}
        onClickLike={mockHandler2}
        onClickDelete={mockHandler3}
      />
    )
  
    const header = blogComponent.find('.header').simulate('click')
    expect(mockHandler1.mock.calls.length).toBe(1)
  })

  it('show all', () => {
    const user = {
        id : '12345'
    }

    const blog = {
      title: 'Uber blog',
      author: 'John',
      url: 'http://zzz.com',
      likes: 10,
      showOpen: true,
      user: {
          _id: '12345',
          name: 'John'
      }
    }
  
    const mockHandler1 = jest.fn()
    const mockHandler2 = jest.fn()
    const mockHandler3 = jest.fn()
  
    const blogComponent = shallow(
      <Blog
        user = {user} 
        blog={blog}
        onClickHeader={mockHandler1}
        onClickLike={mockHandler2}
        onClickDelete={mockHandler3}
      />
    )
  
    expect(blogComponent.find('.url').exists()).toBe(true);
    expect(blogComponent.find('.likes').exists()).toBe(true);
    expect(blogComponent.find('.user').exists()).toBe(true);
    expect(blogComponent.find('.delete').exists()).toBe(true);
  })

  it('do not show delete', () => {
    const user = {
        id : '99999'
    }

    const blog = {
      title: 'Uber blog',
      author: 'John',
      url: 'http://zzz.com',
      likes: 10,
      showOpen: true,
      user: {
          _id: '12345',
          name: 'John'
      }
    }
  
    const mockHandler1 = jest.fn()
    const mockHandler2 = jest.fn()
    const mockHandler3 = jest.fn()
  
    const blogComponent = shallow(
      <Blog
        user = {user} 
        blog={blog}
        onClickHeader={mockHandler1}
        onClickLike={mockHandler2}
        onClickDelete={mockHandler3}
      />
    )
  
    expect(blogComponent.find('.url').exists()).toBe(true);
    expect(blogComponent.find('.likes').exists()).toBe(true);
    expect(blogComponent.find('.user').exists()).toBe(true);
    expect(blogComponent.find('.delete').exists()).toBe(false);
  })

})