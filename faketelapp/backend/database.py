from app import app
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy(app)
app.config['SQLALCHEMY_DATABASE_URI']='mysql+pymysql://root:bleach123@localhost/faketel'


