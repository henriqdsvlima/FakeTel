#coding: UTF-8
from flask import Blueprint, Flask, request, jsonify, abort
from flask.views import MethodView
from models.user import Usuarios, db
app = Flask(__name__)

user = Blueprint('user',__name__)
@app.route("/")
def homepage():
    resposta = {'texto de sucesso': 'Api Online!!!'}
    return jsonify(resposta)


@app.route("/user")
def home():
    return 'Bem vindo a lista de usuarios!'

class UserView(MethodView):
     
    def get(self, id=None, page=1):
        if not id:
            users = Usuarios.query.paginate(page, 10).items
            res = {}
            for user in users:
                res[user.id] = {
                    'name': str(user.name),
                    'email': str(user.email),
                    'cpf': str(user.cpf),
                    'pis': int(user.pis),
                    'senha': str(user.senha),
                    'pais': str(user.pais),
                    'estado': str(user.estado),
                    'municipio': str(user.municipio),
                    'cep': int(user.cep),
                    'rua': str(user.rua),
                    'numero': int(user.numero),
                    'complemento': str(user.complemento)
                }
        else:
            users = Usuarios.query.filter_by(id=id).first()
            if not users:
                abort(404)
            res = {
                'name': str(user.name),
                'email': str(user.email),
                'cpf': str(user.cpf),
                'pis': int(user.pis),
                'senha': str(user.senha),
                'pais': str(user.pais),
                'estado': str(user.estado),
                'municipio': str(user.municipio),
                'cep': int(user.cep),
                'rua': str(user.rua),
                'numero': int(user.numero),
                'complemento': str(user.complemento)
            }
        return jsonify(res)
 
    def post(self):
        nome = request.form.get('name')
        email = request.form.get('email')
        cpf = request.form.get('cpf')
        pis = request.form.get('pis')
        senha = request.form.get('senha')
        pais = request.form.get('pais')
        estado = request.form.get('estado')
        municipio = request.form.get('municipio')
        cep = request.form.get('cep')
        rua = request.form.get('rua')
        numero = request.form.get('numero')
        complemento = request.form.get('complemento')
        user = Usuarios(nome, email, cpf, pis, senha,pais, estado, municipio, cep, rua, numero, complemento)
        db.session.add(user)
        db.session.commit()
        return jsonify({user.id: {
            'name': str(user.name),
            'email': str(user.email),
            'cpf': str(user.cpf),
            'pis': int(user.pis),
            'senha': str(user.senha),
            'pais': str(user.pais),
            'estado': str(user.estado),
            'municipio': str(user.municipio),
            'cep': int(user.cep),
            'rua': str(user.rua),
            'numero': int(user.numero),
            'complemento': str(user.complemento)
        }})             
user_view =  UserView.as_view('user_view')
app.add_url_rule(
    '/user/', view_func=user_view, methods=['GET', 'POST'] 
)
app.add_url_rule(
    '/user/<int:id>', view_func=user_view, methods=['GET']
)

app.run(host='localhost', debug=True)