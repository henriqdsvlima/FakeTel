import hmac
from database import db

class Usuarios(db.Model):
    __tablename__ = "usuarios"
    _id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    nome = db.Column(db.String(50))
    email = db.Column(db.String(100))
    cpf = db.Column(db.String(100), unique=True)
    pis = db.Column(db.Integer, unique=True)
    senha = db.Column(db.String(100))
    estado = db.Column(db.String(100))
    municipio = db.Column(db.String(100))
    cep = db.Column(db.Integer)
    rua = db.Column(db.String(100))
    numero = db.Column(db.Integer)
    complemento = db.Column(db.String(100))

def __init__(self, nome, senha):
    self.nome = nome
    self.senha = senha
def save_to_db(self):
        db.session.add(self)
        db.session.commit()

def check_password(self, password):
    return hmac.compare_digest(self.password, password)

def check_cpf(self, cpf):
    return hmac.compare_digest(self.cpf, cpf)

def check_pis(self, pis):
    return hmac.compare_digest(self.pis, pis)
db.create_all()