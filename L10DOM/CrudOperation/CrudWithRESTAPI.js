const apiUrl = "https://yourapi.com/users";

// ✅ Create (POST)
async function createUser(data) {
  const res = await fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  return res.json();
}

// ✅ Read (GET)
async function getUser(id) {
  const res = await fetch(`${apiUrl}/${id}`);
  return res.json();
}

// ✅ Update (PUT or PATCH)
async function updateUser(id, data) {
  const res = await fetch(`${apiUrl}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  return res.json();
}

// ✅ Delete (DELETE)
async function deleteUser(id) {
  const res = await fetch(`${apiUrl}/${id}`, {
    method: "DELETE"
  });
  return res.status === 200;
}
