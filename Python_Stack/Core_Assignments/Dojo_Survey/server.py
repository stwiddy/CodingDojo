from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)
app.secret_key = 'Any string you wish, but KEEP DO NOT SHARE IT'


@app.route('/')
def landing_page():
    return render_template('index.html')


@app.route('/result', methods=['POST'])
def create_user():
    print('Got Post Info')
    session['name'] = request.form['name']
    session['email'] = request.form['email']
    session['location'] = request.form['location']
    session['language'] = request.form['language']
    return redirect('/result')


@app.route('/result')
def show_user():
    return render_template('result.html')

if __name__=='__main__':
    app.run(debug=True)