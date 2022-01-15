const express = require('express');

const app = express();

const connectDB = require("./config/db");

connectDB();

const Blog = require("./model/Blog");

app.use(express.json());

app.post('/blog', async (req, res) => {
    console.log(req.body);
    const result = await Blog.create(req.body);
    res.status(200).json(result);
})

// Get all records from the db
app.get("/blogs", async (req, res) => {
    const result = await Blog.find({});
    res.status(200).json(result);
})

// updating the model
app.put('/blog/:blogId', async (req, res) => {
    await Blog.findOneAndUpdate({id: req.params.blogId}, req.body);
    res.status(200).json({msg: "Sucessfully updated"});
})

app.delete('/blog/:blogId', async (req, res) => {
    await Blog.findOneAndDelete({id: req.params.blogId});
    res.status(200).json({msg: "Sucessfully deleted"});
})

// app.get('/', (req, res) => {
//     res.send('UPdated get requrest')
// })

// Route to get all blogs
// app.get('/blogs', (req, res) => {
//     res.send("All the blogs");
// })

// Route to get all blogs
// app.post('/blogs', (req, res) => {
//     console.log(req.body);
//     res.send("Post request from the blogs");
// })

// app.post('/blogs', (req, res) => {
//     console.log(req.body);
//     res.send("Post request from the blogs");
// })

// app.put('/blogs/:blogId', (req, res) => {
//     console.log(req.params);
//     res.send('Inside req params body');
// })

// app.post('/blogs/query', (req, res) => {
//     console.log(req.query);
//     res.send('Inside req query body');
// })

app.listen(5000, () => {
    console.log(`Server started`);
});