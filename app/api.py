from flask import Flask, jsonify

app = Flask(__name__)

# Sample data
sample_data = {
    'message': 'Hello, this is a sample API response!',
    'status': 'success'
}

# Route to handle API requests
# for get scess
@app.route('/api/sample', methods=['GET'])
def get_sample_data():
    return jsonify(sample_data)

if __name__ == '__main__':
    app.run(debug=True)
