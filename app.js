import express from 'express';
const app = express();
const PORT = 3000;

const usuarios = [
    {id: 1, nome: "Daniele"},
    {id: 2, nome: "Felipe"},
    {id: 3, nome: "Mateus"}
]

const produtos = [
    {id: 1, nome: "Notebook", preco: 3500, categoria: "informatica"},
    {id: 2, nome: "Mouse", preco: 80, categoria: "acessorios"},
    {id: 3, nome: "Teclado", preco: 150, categoria: "acessorios"}
]

app.get('/', (req, res) => {
    res.send('Bem-vindo ao Express!')
});

app.get('/usuarios', (req, res) => {
    res.json(usuarios);
});

app.get('/produtos', (req, res) => {
    const { categoria } = req.query;
    const produtosFiltrados = categoria
        ? produtos.filter(produto => produto.categoria === categoria)
        : produtos;

    res.json(produtosFiltrados);
});

app.get('/produtos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const produto = produtos.find(p => p.id === id);

    if (!produto) {
        return res.status(404).json({erro: 'Produto não encontrado!'});
    }

    res.json(produto);
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
        `Servidor rodando em http://localhost:${PORT}`
    );
}); 