let token = null

const blogs = [
  {
    '_id': '5b78428dea7c1f2ac0b6425b',
    'title': 'TT2',
    'author': 'AA2',
    'url': 'UU2',
    'likes': 2,
    'user': '5b76db8b11295903ac7472ff'
  },
  {
    '_id': '5b783c99568239047404848c',
    'title': 'TT',
    'author': 'AA',
    'url': 'UU',
    'likes': 4,
    'user': '5b76db8b11295903ac7472ff'
  }
]

const setToken = (newToken) => {
  token = `bearer ${newToken}`
}

const getAll = () => {
  return Promise.resolve(blogs)
}

export default { getAll, setToken, blogs }