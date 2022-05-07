#coding: UTF-8
from flask import Flask, request, url_for, redirect, jsonify


app = Flask(__name__)

@app.route("/")
def homepage():
    resposta = {'texto de sucesso': 'Api Online!!!'}
    return jsonify(resposta)

app.run(host='0.0.0.0')