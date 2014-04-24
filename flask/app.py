from flask import Flask
app = Flask(__name__)

@app.route('/')
def index():
    return '<h1 class="title"><a href="/hello">Hello World!</a></h1>'

@app.route('/hello')
def hello():
    return '<h1>sup?</h1>'

if __name__ == '__main__':
    app.run(debug=True, use_reloader=True)