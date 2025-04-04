import { db } from "../server.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = (req, res) => {
  //CHECK EXISTING USER
  const q = "SELECT * FROM users WHERE email = ? OR username = ?";

  /* db.query() executes the SQL query using the database connection.
     [req.body.email, req.body.username], provides the values to replace the placeholders (?) in the query. 
  */
  db.query(q, [req.body.email, req.body.username], (err, data) => {
    if (err) return res.json(err); // error handling
    if (data.length) return res.status(409).json("User already exists!"); // user exists check

    //hash the psw and create a user
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    //insert user into db
    const q = "INSERT INTO users(`username`,`email`,`password`) VALUES (?)";
    const values = [req.body.username, req.body.email, hash];

    db.query(q, [values], (err, data) => {
      if (err) return res.json(err);
      return res.status(200).json("User has been created");
    });
  });
};

export const login = (req, res) => {
  // CHECK IF USER USER EXISTS
  const q = "SELECT * FROM users WHERE  USERNAME  = ?";

  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.json(err);
    if (data.length === 0) return res.status(404).json("User not found");

    // CHECK PASSWORD
    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );

    if (!isPasswordCorrect)
      return res.status(400).json("Wrong username or password!");

    const token = jwt.sign({ id: data[0].id }, "jwtkey");
    const { password, ...other } = data[0];
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(data[0]);
  });
};

export const logout = (req, res) => {

  res.clearCookie("access_token", {
    sameSite:"none",
    secure:true
  }).status(200).json("user has been logged out")
};
