let token = null

const blogs = [
  {
    '_id': {
      '$oid': '5b78428dea7c1f2ac0b6425b'
    },
    'title': 'TT2',
    'author': 'AA2',
    'url': 'UU2',
    'likes': 2,
    'user': {
      '$oid': '5b76db8b11295903ac7472ff'
    },
    '__v': 0
  },
  {
    '_id': {
      '$oid': '5b783c99568239047404848c'
    },
    'title': 'TT',
    'author': 'AA',
    'url': 'UU',
    'likes': 4,
    'user': {
      '$oid': '5b76db8b11295903ac7472ff'
    },
    '__v': 0
  },
  {
    id: '5a451e30b5ffd44a58fa79ab',
    content: 'HTTP-protokollan tärkeimmät metodit ovat GET ja POST',
    date: '2017-12-28T16:39:12.713Z',
    important: true,
    user: {
      _id: '5a437a9e514ab7f168ddf138',
      username: 'mluukkai',
      name: 'Matti Luukkainen'
    }
  }
]

const getAll = () => {
  return Promise.resolve(blogs)
}

export default { getAll, blogs }