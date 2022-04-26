from curses.ascii import US
import email
from fastapi import FastAPI

from pydantic import BaseModel

app = FastAPI()

# rota raiz

@app.get("/")
def raiz():
    return{"Olá":"Mundo"}

#Criar Model

class Usuario(BaseModel):
    id: int
    nome: str
    email: str
    senha: str
    

#Criar Base de Dados
base_dados = [
    Usuario(id=1, nome="Henrique", email="henrique@henrique.com.br", senha="henrique123"),
     Usuario(id=2, nome="Henrique2", email="henrique2@henrique2.com.br", senha="henrique123")
]

#Rota Get All

@app.get("/usuarios")
def get_all_users():
    return base_dados

#Rota Get Id 
@app.get("/usuarios/{id_usuario}")
def get_user_id(id_usuario: int):
    for user in base_dados:
        if(user.id == id_usuario):
            return user
    return {"Status": 404, "Mensagem": "Não encontrado"}

#Rota inserir usuario

@app.post("/usuarios")
def insere_usuario(user: Usuario):
    base_dados.append(user)
    return user