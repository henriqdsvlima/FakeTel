from app import app, db
from flask import jsonify, request, session
from werkzeug import check_password_hash

@app.route('/')
def home():
	if 'username' in session:
		username = session['username']
		return jsonify({'message' : 'You are already logged in', 'username' : username})
	else:
		resp = jsonify({'message' : 'Unauthorized'})
		resp.status_code = 401
		return resp

@app.route('/login', methods=['POST'])
def login():
	conn = None;
	cursor = None;
	
	try:
		_json = request.json
		_email = _json['email']
		_password = _json['senha']
		
		# validate the received values
		if _email and _password:
			#check user exists			
			conn = db.connect()
			cursor = conn.cursor()
			
			sql = "SELECT * FROM email WHERE email=%s"
			sql_where = (_email,)
			
			cursor.execute(sql, sql_where)
			row = cursor.fetchone()
			
			if row:
				if check_password_hash(row[2], _password):
					session['email'] = row[1]
					#cursor.close()
					#conn.close()
					return jsonify({'message' : 'You are logged in successfully'})
				else:
					resp = jsonify({'message' : 'Bad Request - invalid password'})
					resp.status_code = 400
					return resp
		else:
			resp = jsonify({'message' : 'Bad Request - invalid credendtials'})
			resp.status_code = 400
			return resp

	except Exception as e:
		print(e)

	finally:
		if cursor and conn:
			cursor.close()
			conn.close()
		
@app.route('/logout')
def logout():
	if 'email' in session:
		session.pop('email', None)
	return jsonify({'message' : 'You successfully logged out'})
		
if __name__ == "__main__":
    app.run()