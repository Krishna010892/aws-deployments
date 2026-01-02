from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/api")
def api():
    return jsonify({"message": "Flask backend running on Kubernetes"})

# New root / route for testing / curl
@app.route("/")
def index():
    return jsonify({"message": "Backend root is alive!"})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
