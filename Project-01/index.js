const express = require("express");
const fs = require("fs");
let users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes

app.get("/users", (req, res) => {
  const html = `

        <ul>
          ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
        </ul>
    
    `;

  res.status(200).send(html);
});

app.get("/api/users", (req, res) => {
  res.status(200).json(users);
});

// Dynamic path parameters
/*
app.get("/api/users/:id", (req,res) => {

    const id = Number(req.params.id);
    const user = users.find( user => user.id === id );

    res.status(200).json(user);
})
*/

app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);

    return res.status(200).json(user);
  })
  .patch((req, res) => {
    // Edit user with id
    
    const id = Number(req.params.id);
    const updates = req.body;
    console.log(req.body);

    // find user
    const userIndex = users.findIndex(user => user.id === id);

    if(userIndex === -1) return res.status(404).json({message: 'User not found'});

    // update only the provided fields
    users[userIndex] = {...users[userIndex],...updates};

    // write update on file
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users, null, 2), (err) => {
        if (err) {
            return res.status(500).json({ message: "Error writing file" });
        }
        return res.json({ message: `User with id ${id} updated`, user: users[userIndex] });
    });
  })
  .delete((req, res) => {
    // Delete user with id
    const idToDelete = Number(req.params.id); // this will give me id from the url
    console.log(idToDelete);
    const initialUserlength = users.length;
    let updatedUsers = users.filter((user) => user.id !== idToDelete); // creates a new array excluding the user

    if (initialUserlength === updatedUsers.length) {
      return res.status(404).json({ message: "user not found" });
    }

    // updating file
    users = updatedUsers;

    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
      if (err) return res.status(500).json({ message: "error writing file" });

      return res.json({ message: `user with id ${idToDelete} is deleted` });
    });
  });

// Post request
app.post("/api/users", (req, res) => {
  // Todo: create new user

  const body = req.body;
  // console.log(req.body);

  users.push({ ...body, id: users.length + 1 });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.json({ status: "User added with id: ", id: users.length });
  });
});

app.listen(PORT, (err) => {
  if (err) console.log("Error: ", err.message);
  console.log(`Server started at PORT: ${PORT}`);
});
