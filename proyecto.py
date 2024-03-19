from flask import Flask, render_template, request
app = Flask(__name__)


@app.route('/')
def home():
    return render_template('index.html')

@app.route('/info')
def info():
    return render_template('info.html')

@app.route('/actualizar', methods=['POST'])
def actualizar():
    valor = request.form['slider1']
    valor = request.form['slider2']
    valor = request.form['slider3']
    valor = request.form['slider4']
    return 'Valor recibido: ' + valor

if __name__ == '__main__':
    app.run(debug=True)
