const express = require('express');
const cors = require('cors');

//Routes
const accountsRoutes = require("./src/accounts/routes");

const app = express();
const port = 9006;

app.use(express.json());
app.use(cors({
    origin: '*'
}));

app.get("/", (req, res) => {
    res.send("Hello World");
})

//API Route
app.get("/", (req, res) => {
    res.send("Hello World");
})

app.use("/api/accounts", accountsRoutes);

app.listen(port, () => console.log(`running on ${port}`));
