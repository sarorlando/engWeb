import express from 'express'
import cors from 'cors'
import { createPost, createTable, deletePost, getPostById, getPosts, getUser, postUser, updatePost } from './controllers/post.js';

const app = express()

//Usando dependências
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());


createTable();


app.get('/user', async (req, res) => {
    try {
        let user = await getUser();
        res.json(user);
    } catch {
        res.json({
            "statusCode": 500
        });
    }
})

app.post('/user', async (req, res) => {
    try {
        await postUser(req.body);
        res.json({
            "statusCode": 200
        });
    } catch (error) {
        res.json({
            "statusCode": 400
        });
    }
})

app.get('/post', async (req, res) => {
    try {
        let posts = await getPosts();
        res.json(posts);
    } catch {
        res.json({
            "statusCode": 500
        });
    }
})

app.post('/post', async (req, res) => {
    try {
        await createPost(req.body);
        res.json({
            "statusCode": 200
        });
    } catch (error) {
        res.json({
            "statusCode": 400
        });
    }
})

app.delete('/post/:id', async (req, res) => {
    try {
        await deletePost(req.params.id);
        res.json({
            "statusCode": 200
        });
    } catch (error) {
        res.json({
            "statusCode": 500
        });
    }
})

app.put('/post', async (req, res) => {
    try {
        await updatePost(req.body.post, req.body.id);
        res.json({
            "statusCode": 200
        });
    } catch (error) {
        res.json({
            "statusCode": 500,
            "errorMessage": error.message
        });
    }
})

app.get('/post/:id', async (req, res) => {
    try {
        let post = await getPostById(req.params.id);
        res.json(post);
    } catch {
        res.json({
            "statusCode": 500
        });
    }
})

app.listen(3000, () => console.log("api rodando na porta http://localhost:3000"));