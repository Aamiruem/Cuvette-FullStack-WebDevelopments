let users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

// ✅ Create
function createUser(name) {
  const newUser = {
    id: users.length + 1,
    name
  };
  users.push(newUser);
  return newUser;
}

// ✅ Read
function getUser(id) {
  return users.find(user => user.id === id);
}

// ✅ Update
function updateUser(id, newName) {
  const user = users.find(user => user.id === id);
  if (user) {
    user.name = newName;
  }
  return user;
}

// ✅ Delete
function deleteUser(id) {
  users = users.filter(user => user.id !== id);
}
