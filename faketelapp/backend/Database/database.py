from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI']='mysql+pymysql://root:bleach123@localhost/faketel'

db = SQLAlchemy(app)

class Usuarios(db.Model):
    __tablename__ = "usuarios"
    _id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    nome = db.Column(db.String(50))
    email = db.Column(db.String(100))
    cpf = db.Column(db.String(100), unique=True)
    pis = db.Column(db.Integer, unique=True)
    senha = db.Column(db.String(100), unique=True)

class Endereco(db.Model):
    __tablename__ = "endereco"
    _id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    estado = db.Column(db.String(100))
    municipio = db.Column(db.String(100))
    cep = db.Column(db.Integer)
    rua = db.Column(db.String(100))
    numero = db.Column(db.Integer)
    complemento = db.Column(db.String(100))

    def __init__(self, nome):
        self.nome = nome
db.create_all()