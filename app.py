from flask import Flask, request, jsonify, render_template
import sqlite3
import requests, json

# Make sure this is in your Flask app setup
app = Flask(__name__, static_url_path='/static', static_folder='static')


# Update the query_ollama function to accept the selected model
def query_ollama(prompt, model):
    url = "http://127.0.0.1:11434/api/generate"
    try:
        response = requests.post(url, json={"model": model, "prompt": prompt}, stream=True)
        response.raise_for_status()
        full_response = "".join(json.loads(line.decode('utf-8'))['response'] for line in response.iter_lines() if line)
        return full_response.strip()
    except Exception as e:
        return f"Error: {e}"

# Save chat to SQLite database
def save_message(user_message, ai_message):
    conn = sqlite3.connect('chat_history.db')
    cursor = conn.cursor()
    cursor.execute('''
        INSERT INTO messages (user_message, ai_message)
        VALUES (?, ?)
    ''', (user_message, ai_message))
    conn.commit()
    conn.close()

# Fetch chat history from database
def fetch_chat_history():
    conn = sqlite3.connect('chat_history.db')
    cursor = conn.cursor()
    cursor.execute('SELECT id, user_message, ai_message FROM messages ORDER BY id DESC')
    rows = cursor.fetchall()
    conn.close()
    return rows

@app.route("/")
def index():
    return render_template("index.html")

@app.route('/api/chat', methods=['POST'])
def chat():
    data = request.json
    user_prompt = data.get('prompt', '')
    selected_model = data.get('model', 'gemma2:2b')  # Get the selected model, default to 'gemma2:2b'

    ai_response = query_ollama(user_prompt, selected_model)

    # Save chat messages to the database
    save_message(user_prompt, ai_response)

    return jsonify({"response": ai_response})

@app.route("/api/history", methods=['GET'])
def history():
    chat_history = fetch_chat_history()
    return jsonify({"history": chat_history})

@app.route("/api/history/delete/<int:id>", methods=["DELETE"])
def delete_history(id):
    try:
        conn = sqlite3.connect('chat_history.db')
        cursor = conn.cursor()
        cursor.execute("DELETE FROM messages WHERE id = ?", (id,))  # Delete specific chat by ID
        conn.commit()
        conn.close()
        return jsonify({"message": "Chat history deleted successfully!"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500



if __name__ == '__main__':
    # Ensure the database exists and has the correct schema
    conn = sqlite3.connect('chat_history.db')
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS messages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_message TEXT NOT NULL,
            ai_message TEXT NOT NULL
        )
    ''')
    conn.commit()
    conn.close()

    app.run(debug=True)
