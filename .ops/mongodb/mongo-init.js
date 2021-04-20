db = db.getSiblingDB('poc')
db.createUser({
  user: 'incuser',
  password: 'incuser-2021!*',
  roles: [
    'root',
    { role: 'readWrite', db: 'poc' }
  ]
})
