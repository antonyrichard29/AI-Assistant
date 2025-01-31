### **AI Assistant**

### **Description**  
The AI Assistant is an AI-powered chatbot application built using **Flask** for the backend and **Ollama** for processing individual AI prompts. It provides a seamless, interactive experience where users can ask questions, and the assistant provides answers based on selected AI models. The application supports **SQLite** for chat history storage and can run entirely **offline** after downloading AI models. Additionally, it can be accessed remotely using **Ngrok** if needed.

### **Technologies Used**
- **Backend**: Flask, Python
- **AI Models**: Ollama (DeepSeek, Mistral, Gemma, Llama, Qwen, Phi )
- **Database**: SQLite
- **Tools**: Ngrok, Python 3.x

  ![Screenshot 2025-01-30 233727](https://github.com/user-attachments/assets/f7fdfb42-24b0-4d97-bf83-f417b794f42f)

  ![Screenshot 2025-01-30 233812](https://github.com/user-attachments/assets/6cf666fc-45d6-4f9c-9520-a0ac3ceb806b)

  ![Screenshot 2025-01-30 233906](https://github.com/user-attachments/assets/955f8d90-cb06-4648-a708-385fa9170af9)

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

### **Exposing the Application to the Internet Using Ngrok**
To allow external users to access the AI Assistant, use Ngrok.

1. **Install Ngrok**
   Download and install Ngrok from the official website.
2. **Authenticate Ngrok**
   Use the following command to authenticate Ngrok with your account:
```bash
ngrok authtoken your-ngrok-auth-token
```
3. **Start Ngrok Tunnel**
   Expose your local server to the internet:
```bash
ngrok http 5000
```
Ngrok will generate a public URL like: https://your-ngrok-url.ngrok.io

## **AI Models and System Specifications**
You can download and use any AI model in the AI Assistant app, as long as it's compatible with Ollama.

### **Model Parameters and System Requirements**

AI models run based on the parameters you choose and the system specifications of your machine. It is important to understand the system requirements for running these models effectively. Below are some key points to consider:

### **Model Parameters**
- **Model Size**: Some AI models may require more resources depending on their size. Larger models generally demand more RAM and processing power.
- **Model Version**: Ensure that you are using the correct version of the model, as certain versions may have different performance requirements.
  
For example:
   - `deepseek-r1:1.5b` might have different resource usage compared to `gemma2:2b`. Larger models typically consume more memory and computational power.

### **System Specifications**
AI models require different system specifications to run efficiently. Ensure your machine meets the following requirements based on the model's needs:

- **Processor (CPU)**: A multi-core processor (Intel i7 or higher recommended) is usually required for better performance.
- **RAM**: Larger models may require more RAM. For example, `mistral` may require 16GB of RAM or more, while smaller models may work fine with 8GB.
- **GPU** (Optional but recommended): Some models can be run more efficiently with a GPU, especially when dealing with more complex tasks. If your system supports CUDA or OpenCL, consider using a GPU for improved performance.
- **Disk Space**: Ensure your machine has sufficient disk space to download and store the model files. Models can take several GBs, especially those with higher parameters.

### **Running Models Based on System Specifications**
When you choose a model, ensure that the system you're using has enough resources to support the model's demands. Larger models (e.g., `phi3.5`, `mistral`) may not run efficiently on lower-specification systems. If you experience performance issues, consider using smaller models or upgrading your system's resources.

### **Model Performance and Customization**
- **Performance Tuning**: You can adjust the model's performance by tweaking certain parameters based on your system’s specifications. Some models may allow you to adjust batch size or other configurations for optimal performance.
- **Load Balancing**: If your system supports multiple cores or GPUs, consider distributing the load across resources to improve speed and efficiency.

### **Best Practices**
- Always check the system requirements of the model you plan to use before running it.
- Use models that match your system's specifications for optimal performance.
- Monitor your system’s resource usage (CPU, RAM, GPU) when running models to prevent system overload.

By following these guidelines, you can ensure smooth operation when using AI models in your application.

### **Customizing AI Models in the App**
Once you have chosen and downloaded a model, you can update the app to use it as described in the [Customizing AI Models in the App](#customizing-ai-models-in-the-app) section.


### **Contributing**
If you would like to contribute to this project, please fork the repository, create a new branch, make your changes, and submit a pull request.
