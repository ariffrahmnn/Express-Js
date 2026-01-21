import express from 'express';
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>hello, express!</h1>");
})

app.get("/contact", (req, res) => {
    res.send("<h1>Contact</h1><p>+6289526823772</p>");
})

app.get("/about", (req, res) => {
    res.send("<h1>About</h1><p>My name is Arif Rahman Muda, today is 21-1-2026, and tonight im learning how to send respond to our website using express</p>");
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})