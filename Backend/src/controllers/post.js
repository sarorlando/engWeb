import { openDb } from "../database/configDb.js"
import { v4 as uuidv4 } from "uuid" //Biblioteca para gerar uid aleatórios


export async function createTable() {
    openDb().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS Posts (id TEXT PRIMARY KEY, title TEXT, subtitle TEXT, content TEXT, created_at TEXT, updated_at TEXT )')
        db.exec('CREATE TABLE IF NOT EXISTS User (id TEXT PRIMARY KEY, name TEXT, password TEXT, email TEXT )')
    });
}

export async function getUser() {
    return openDb().then(db => {
        return db.all('SELECT name, email FROM User').then(res => res)
    });
}

export async function postUser(_user) {
    let id = uuidv4();

    openDb().then(db => {
        db.run('INSERT INTO User (id, name, password, email) VALUES (?, ?, ?, ?)', [id, _user.name, _user.password, _user.email])
    });
}

export async function getPosts() {
    return openDb().then(db => {
        return db.all('SELECT * FROM Posts').then(res => res)
    });
}

export async function createPost(_post) {
    
    if(_post.title.match(/.*\S.*/) && _post.content.match(/.*\S.*/)) {
        let id = uuidv4();
        let created_at = new Date();
        let updated_at = new Date();

        openDb().then(db => {
            db.run('INSERT INTO Posts (id, title, subtitle, content, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?)', 
            [id, _post.title, _post.subtitle, _post.content, created_at, updated_at])
        });    
    } else {
        throw new Error("Entrada inválida, tente novamente.");
    }
}

export async function deletePost(_id) {
    return openDb().then(db => {
        return db.all('DELETE FROM Posts WHERE id=?',[_id]).then(res => res)
    });
}

export async function updatePost(_post, _id) {
    if (_post.title.match(/.*\S.*/) && _post.content.match(/.*\S.*/)) {
        let updated_at = new Date();

        openDb().then(db => {
            db.run('UPDATE Posts SET title = ?, subtitle = ?, content = ?, updated_at = ? WHERE id = ?',
                [_post.title, _post.subtitle, _post.content, updated_at, _id])
        });
    } else {
        throw new Error("Entrada inválida, tente novamente.");
    }
}

export async function getPostById(_id) {
    return openDb().then(db => {
        return db.all('SELECT title, subtitle, content FROM Posts WHERE id=?', [_id]).then(res => res)
    });
}