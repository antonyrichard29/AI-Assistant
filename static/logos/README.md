AI Assistant 
 
An AI-powered assistant built using Flask and Ollama for processing individual prompts. 
 
Features 
 
- Supports individual prompt-based AI interactions without contextual memory. 
- Uses SQLite for chat history storage. 
- Users can select from multiple AI models. 
- Accessible remotely via Ngrok for multiple users. 
- Easy to install and run locally. 
 
Installation 
 
1. Clone the Repository 
git clone https://github.com/your-username/AI-Assistant.git 
cd AI-Assistant 
 
2. Create and Activate a Virtual Environment 
 
For Windows 
python -m venv .venv 
.venv\Scripts\activate 
 
For Linux or macOS 
python3 -m venv .venv 
source .venv/bin/activate 
 
3. Install Required Dependencies 
pip install -r requirements.txt 
 
Setting Up Local AI Models Ollama 
 
To run the AI Assistant locally, install Ollama and download AI models. 
 
1. Install Ollama 
Download and install Ollama from the official website. 
 
2. Download AI Models 
ollama pull deepseek/deepseek-coder 
ollama pull mistral/mistral-7b 
ollama pull gemma/gemma-2b 
 
To view all installed models 
ollama list 
 
To delete a model 
ollama rm model-name 
 
Running the Application 
 
python app.py 
 
The app will be available at 
http://127.0.0.1:5000/ 
 
Exposing to the Internet Using Ngrok 
 
To allow external users to access the AI Assistant, use Ngrok. 
 
1. Install Ngrok 
Download and install Ngrok from the official website. 
 
2. Authenticate Ngrok 
ngrok authtoken your-ngrok-auth-token 
 
3. Start Ngrok Tunnel 
ngrok http 5000 
 
Ngrok will generate a public URL like 
https://your-ngrok-url.ngrok.io 
 
How to Change AI Models in the App 
 
Modify the model list in the templates folder and update the JavaScript files in the static folder. Restart the app after making changes. 
python app.py 
 
Contributing 
 
1. Fork the repository 
2. Create a new branch 
git checkout -b feature-branch 
3. Commit changes 
git commit -m Added new feature 
4. Push to GitHub 
git push origin feature-branch 
5. Submit a pull request 
 
License 
 
This project is licensed under the MIT License. 
