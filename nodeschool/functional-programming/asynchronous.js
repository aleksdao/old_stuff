function loadUsers(userIds, load, done) {
  var users = []
  for (var i = 0; i < userIds.length; i++) {
    load(userIds[i], function (obj) {
      users[i] = user;
    })
    // users.push(load(userIds[i]))
  }
  return users;
}

module.exports = loadUsers
