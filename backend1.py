from flask import Flask

app = Flask(__name__, static_url_path='', static_folder='static')

@app.route('/')
def home():
    return "Hello from Backend 1"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5001)
