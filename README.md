Project Title
AI Assistant

Project Description
An AI-powered assistant built using Flask and Ollama for processing individual prompts. This application allows users to interact with different AI models, and it stores chat history using SQLite. The app can be exposed to remote users via Ngrok.

Technologies Used
Backend: Flask
AI Models: Ollama
Database: SQLite
Tools: Ngrok, Python 3.x
Features
Supports individual prompt-based AI interactions without contextual memory.
Uses SQLite for chat history storage.
Users can select from multiple AI models.
Accessible remotely via Ngrok for multiple users.
Easy to install and run locally.
Installation
Clone the Repository
Clone the repository to your local machine:


git clone https://github.com/your-username/AI-Assistant.git  
cd AI-Assistant
Create and Activate a Virtual Environment

For Windows:

bash
Copy
Edit
python -m venv .venv
.venv\Scripts\activate
For Linux or macOS:

bash
Copy
Edit
python3 -m venv .venv
source .venv/bin/activate
Install Required Dependencies
Install the required Python dependencies:

bash
Copy
Edit
pip install -r requirements.txt
Setting Up Local AI Models (Ollama)
To run the AI Assistant locally, you'll need to install Ollama and download AI models.

Install Ollama
Download and install Ollama from the official website.

Download AI Models
Use the following commands to download models for your app:

bash
Copy
Edit
ollama pull deepseek/deepseek-coder  
ollama pull mistral/mistral-7b  
ollama pull gemma/gemma-2b
View Installed Models
You can view all installed models using:

bash
Copy
Edit
ollama list
Delete a Model
To delete a model:

bash
Copy
Edit
ollama rm model-name
Running the Application
Once everything is set up, run the application with:

bash
Copy
Edit
python app.py
The app will be available at:
http://127.0.0.1:5000

Exposing the Application to the Internet Using Ngrok
To allow external users to access the AI Assistant, use Ngrok.

Install Ngrok
Download and install Ngrok from the official website.

Authenticate Ngrok
Use the following command to authenticate Ngrok with your account:

bash
Copy
Edit
ngrok authtoken your-ngrok-auth-token
Start Ngrok Tunnel
Expose your local server to the internet:

bash
Copy
Edit
ngrok http 5000
Ngrok will generate a public URL like:
https://your-ngrok-url.ngrok.io

How to Change AI Models in the App
To change AI models in the app, modify the model list in the templates folder and update the JavaScript files in the static folder. After making changes, restart the app:

bash
Copy
Edit
python app.py
Contributing
If you would like to contribute to this project, please follow these steps:

Fork the repository
Create a new branch
bash
Copy
Edit
git checkout -b feature-branch
Commit changes
bash
Copy
Edit
git commit -m "Added new feature"
Push to GitHub
bash
Copy
Edit
git push origin feature-branch
