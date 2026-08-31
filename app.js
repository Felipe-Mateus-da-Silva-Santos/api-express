import express from 'express';
const app = express();
const PORT = 3000;

const usuarios = [
    {id: 1, nome: "Daniele"},
    {id: 2, nome: "Felipe"},
    {id: 3, nome: "Mateus"}
]

app.get('/', (req, res) => {
    res.send('Bem-vindo ao Express!')
});

app.get('/usuarios', (req, res) => {
    res.json(usuarios);
});

app.post('/usuarios', (req, res) => {
    const novoUsuario = {
        id: usuarios.length + 1,
        nome: 'Antonio'
    }
    usuarios.push(novoUsuario);
    res.status(201).json(novoUsuario);
});

app.get('usuario/id', (req, res) => {
    const id = req.params.id;
    const usuario = usuarios.find(
        u => u.id === parseInt(id)
    );
    if(!usuario){
        return res.status(404).json({erro: 'Usuário não encontrado!'});

    }
    res.status(200).json(usuario)
} )

app.listen(PORT, () => {
    console.log(
        `Servidor rodando em htto://localhost:${PORT}`
    );
});