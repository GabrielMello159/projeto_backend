🧠 README do BACKEND
🎓 API de Controle de Presença

API RESTful desenvolvida em Node.js + Express + Sequelize + JWT + Swagger, responsável por gerenciar usuários e presenças de alunos.
Banco de dados em SQLite, com autenticação via token JWT.

⚙️ Tecnologias Utilizadas

⚡ Node.js

🚀 Express

🧩 Sequelize + SQLite

🔐 JWT (autenticação)

🔒 Bcrypt.js (hash de senha)

🧭 Swagger (documentação)

🌍 CORS

```bash
📁 Estrutura de Pastas
backend/
│
├── index.js
├── Dockerfile
├── package.json
├── doc/
│   └── extend.js
└── src/
    ├── config/
    │   └── database.js
    ├── controllers/
    │   ├── userController.js
    │   └── presencaController.js
    ├── middlewares/
    │   └── auth.js
    ├── models/
    │   ├── User.js
    │   └── Presenca.js
    ├── repositories/
    │   ├── userRepository.js
    │   └── presencaRepository.js
    ├── routes/
    │   ├── userRoute.js
    │   └── presencaRoute.js
    └── services/
        ├── userService.js
        └── presencaService.js
```

🚀 Como Rodar Localmente
1️⃣ Instalar dependências
cd backend
npm install

2️⃣ Iniciar o servidor
node index.js

✅ O servidor estará disponível em:
http://localhost:3000

🐳 Executar com Docker
cd backend
docker build -t presenca-backend .
docker run -d -p 3000:3000 presenca-backend

## 🧠 Endpoints Principais

### 👤 Usuários (`/auth`)

| Método | Endpoint | Descrição |
| :--- | :--- | :--- |
| POST | `/auth/register` | Cria um novo usuário |
| POST | `/auth/login` | Faz login e retorna token JWT |

📦 Exemplo de registro:
```bash
{
  "nome": "Gabriel Mello",
  "email": "gabriel@email.com",
  "senha": "123456"
}
```

📦 Exemplo de login:
```bash
{
  "email": "gabriel@email.com",
  "senha": "123456"
}
```
🧾 Presenças (/presenca)
Método	Endpoint	Descrição
GET	/presenca	Lista todas as presenças (requer token JWT)
POST	/presenca	Registra uma nova presença (requer token JWT)

📦 Exemplo de body:
```bash
{
  "nome": "João Silva",
  "ra": "12345",
  "turma": "ADS 3A",
  "data": "2025-10-30"
}
```

⚠️ Todas as rotas /presenca exigem cabeçalho de autenticação:

Authorization: Bearer <seu_token>

📚 Swagger

Acesse a documentação interativa:
👉 http://localhost:3000/api-docs

Clique em Authorize 🔒, cole seu token JWT e explore as rotas.

🗃️ Banco de Dados

Banco: SQLite

Arquivo gerado automaticamente: backend/database.sqlite

Tabelas:

Usuario → usuários cadastrados

Presenca → registros de presença

## 🧰 Variáveis e Configurações

| Configuração | Valor Padrão | Descrição |
| :--- | :--- | :--- |
| Porta | 3000 | Porta padrão da API |
| JWT_SECRET | PresencaSecret | Chave de criptografia do token |
| Banco | SQLite | Armazenamento local simples |


💻 Autor:
👤 Gabriel Mello
📘 Projeto acadêmico desenvolvido com fins educacionais.
