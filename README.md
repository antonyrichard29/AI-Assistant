## **README for AI Assistant**

### **Project Title**  
AI Assistant

### **Project Description**  
The AI Assistant is an AI-powered chatbot application built using **Flask** for the backend and **Ollama** for processing individual AI prompts. It provides a seamless, interactive experience where users can ask questions, and the assistant provides answers based on selected AI models. The application supports **SQLite** for chat history storage and can be accessed remotely using **Ngrok**.

### **Technologies Used**
- **Backend**: Flask, Python
- **AI Models**: Ollama (DeepSeek, Mistral, Gemma)
- **Database**: SQLite
- **Tools**: Ngrok, Python 3.x

### **Installation**

1. **Clone the repository to your local machine**:
    ```bash
    git clone https://github.com/your-username/AI-Assistant.git
    ```

2. **Navigate to the project directory**:
    ```bash
    cd AI-Assistant
    ```

3. **Create and activate a virtual environment**:

   For **Windows**:
   ```bash
   python -m venv .venv
   .venv\Scripts\activate

### **Setting Up Local AI Models (Ollama)**

To run the AI Assistant locally, you'll need to install **Ollama** and download AI models.

1. **Install Ollama**  
   Download and install Ollama from the official website.

2. **Download AI Models**  
   Use the following commands to download models for your app:
    ```bash
    ollama run deepseek-r1:1.5b  
    ollama run llama3.2  
    ollama run mistral  
    ollama run qwen2.5:3b  
    ollama run gemma2:2b  
    ollama run phi3.5
    ```

3. **View Installed Models**  
   You can view all installed models using:
    ```bash
    ollama list
    ```

4. **Delete a Model**  
   To delete a model:
    ```bash
    ollama rm model-name
    ```

### **Running the Application**

Once everything is set up, run the application with:
```bash
python app.py
```
The app will be available at: http://127.0.0.1:5000
