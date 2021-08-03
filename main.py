from flask import Flask, render_template, redirect, url_for, session, request, logging, flash
from EMOTION_ANALYSER_FINAL_CODE import ANALYSE_EMOTION

from flask_mysqldb import MySQL, MySQLdb
import bcrypt
import os
app=Flask(__name__)
app.config[ 'SECRET_KEY' ] = 'jsbcfsbfjefebw237u3gdbdc'

#MySQL Configurations
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = '' 
app.config['MYSQL_DB'] = 'emodb'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'

mysql = MySQL()
mysql.init_app(app)

@app.route('/',methods = ['GET', 'POST'])
def home():
    if request.method == 'POST' :
        
        email = request.form['email']
        password = request.form['password']
        cur = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cur.execute("SELECT * FROM users WHERE email=%s", [email] )
        user = cur.fetchone()
        cur.close()
        password=password.encode('utf-8')
        if user is not None:
            
            if bcrypt.hashpw(password, user["password"].encode('utf-8')) == user["password"].encode('utf-8'):
                session['logged_in'] = True
                
                session['email'] = user['email']
                emotion = ANALYSE_EMOTION()
                #return emotion
                return render_template('index.html',data=emotion)
                
                
                
                #print(ANALYSE_EMOTION())
                #return render_template('login.html')
                
            else:
                return render_template('login.html')

        else:
            return render_template('login.html')

    else:
        return render_template("login.html")
@app.route('/register',methods=['GET','POST'])
def about():
    if request.method == "GET":
        return render_template('register.html')
    else:
        name = request.form['name']
       
        email = request.form['email']
        password = request.form['password'].encode('utf-8')
        hash_password = bcrypt.hashpw(password, bcrypt.gensalt())

        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO users(name, email, password) VALUES(%s, %s, %s)", (name, email, hash_password))
        mysql.connection.commit()
        
        return render_template('login.html')
    
if __name__ == '__main__':
    SECRET_KEY = os.urandom(24) 
    app.secret_key = SECRET_KEY
    app.run(debug=True)