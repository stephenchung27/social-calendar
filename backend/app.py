from flask import Flask, jsonify

app = Flask(__name__)


@app.route('/api')
def test():
    return jsonify('Call from backend')