import express from "express";

const app = express();

app.get("/users", (req, res) => res.send("Getting users"));

app.post("/users", (req, res) => res.send("Creating users"));

app.put("/users", (req, res) => res.send("Updating users"));

app.delete("/users", (req, res) => res.send("Deleting users"));

app.listen(3000);
console.log("Server is running on port 3000");
