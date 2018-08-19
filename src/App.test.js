import React from 'react'
import { mount } from 'enzyme'
import App from './App'
import Blog from './components/Blog'
jest.mock('./services/blogs')

describe('<App />', () => {
  let app
  beforeAll(() => {
    app = mount( <App /> )
  })

  it('renders zero blogs at login screen', () => {
    app.update()
    const blogComponents = app.find(Blog)
    expect(blogComponents.length).toEqual(0)
  })
})