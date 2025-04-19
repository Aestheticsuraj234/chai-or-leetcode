### **Step 1: Install WSL and Ubuntu**
1. **Enable WSL**:
   - Open PowerShell as Administrator and run:
     ```powershell
     wsl --install
     ```
   - This command installs WSL and the default Ubuntu distribution.

2. **Restart Your Computer**:
   - After installation, your system will prompt you to restart. Restart your computer to complete the setup.

3. **Complete Ubuntu Setup**:
   - Open the Ubuntu terminal from the Start menu.
   - Follow the prompts to create a new UNIX username and password.

4. **Update Ubuntu**:
   - Run the following commands in the Ubuntu terminal to update the system:
     ```bash
     sudo apt update && sudo apt upgrade -y
     ```

---

### **Step 2: Modify GRUB Configuration**
Since Judge0 requires specific kernel settings, you need to modify the GRUB configuration in WSL.

1. **Open GRUB File**:
   - Use `sudo` to edit the GRUB file:
     ```bash
     sudo nano /etc/default/grub
     ```

2. **Modify GRUB_CMDLINE_LINUX**:
   - Locate the line with `GRUB_CMDLINE_LINUX` and append `systemd.unified_cgroup_hierarchy=0` to its value. For example:
     ```bash
     GRUB_CMDLINE_LINUX="quiet splash systemd.unified_cgroup_hierarchy=0"
     ```

3. **Apply Changes**:
   - Save the file and exit (`Ctrl+O`, `Enter`, `Ctrl+X` in `nano`).
   - Update GRUB:
     ```bash
     sudo update-grub
     ```

4. **Restart WSL**:
   - Restart your WSL instance:
     ```bash
     wsl --shutdown
     ```
   - Reopen the Ubuntu terminal to apply the changes.

---

### **Step 3: Install Docker**
Judge0 runs inside Docker containers, so you need to install Docker on your WSL environment.

1. **Install Docker Dependencies**:
   - Run the following commands to install Docker dependencies:
     ```bash
     sudo apt install -y apt-transport-https ca-certificates curl software-properties-common
     ```

2. **Add Docker GPG Key**:
   - Add Docker’s official GPG key:
     ```bash
     curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
     ```

3. **Add Docker Repository**:
   - Add the Docker repository to your system:
     ```bash
     echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
     ```

4. **Install Docker**:
   - Update the package list and install Docker:
     ```bash
     sudo apt update
     sudo apt install -y docker-ce docker-ce-cli containerd.io
     ```

5. **Start Docker Service**:
   - Start the Docker service and enable it to run on startup:
     ```bash
     sudo service docker start
     sudo systemctl enable docker
     ```

6. **Verify Docker Installation**:
   - Check if Docker is installed correctly:
     ```bash
     docker --version
     ```

---

### **Step 4: Install Docker Compose**
Docker Compose is required to manage multiple services in Judge0.

1. **Download Docker Compose**:
   - Download the latest version of Docker Compose:
     ```bash
     sudo curl -L "https://github.com/docker/compose/releases/download/v2.21.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
     ```

2. **Make Docker Compose Executable**:
   - Apply executable permissions:
     ```bash
     sudo chmod +x /usr/local/bin/docker-compose
     ```

3. **Verify Docker Compose Installation**:
   - Check if Docker Compose is installed correctly:
     ```bash
     docker-compose --version
     ```

---

### **Step 5: Deploy Judge0**
Now that Docker and Docker Compose are installed, you can download and deploy Judge0.

1. **Download Judge0 Release**:
   - Download the Judge0 release archive:
     ```bash
     wget https://github.com/judge0/judge0/releases/download/v1.13.1/judge0-v1.13.1.zip
     ```

2. **Extract the Archive**:
   - Unzip the downloaded file:
     ```bash
     unzip judge0-v1.13.1.zip
     ```

3. **Generate Passwords**:
   - Visit a random password generator website (e.g., https://www.random.org/passwords/) to generate two random passwords.
   - Update the `REDIS_PASSWORD` and `POSTGRES_PASSWORD` variables in the `judge0.conf` file:
     ```bash
     nano judge0.conf
     ```
   - Replace the placeholders with the generated passwords.

4. **Run Database and Redis Services**:
   - Start the database and Redis services:
     ```bash
     cd judge0-v1.13.1
     docker-compose up -d db redis
     sleep 10s
     ```

5. **Run All Services**:
   - Start the remaining Judge0 services:
     ```bash
     docker-compose up -d
     sleep 5s
     ```

6. **Verify Judge0 Deployment**:
   - Visit the Judge0 API documentation to confirm it's running:
     ```
     http://<IP ADDRESS OF YOUR SERVER>:2358/docs
     ```

---

### **Step 6: Access Judge0 from Windows**
Since Judge0 is running on `localhost:2358` in WSL, you can access it directly from your Windows browser or applications.

- **API Endpoint**:
  - The Judge0 API will be accessible at:
    ```
    http://localhost:2358
    ```

- **Integrate with Your Application**:
  - Update your application's backend to send requests to `http://localhost:2358` for code execution.

---

### **Optional: Automate WSL Startup**
To ensure Judge0 starts automatically when you boot your system:

1. **Create a Script**:
   - Create a script (e.g., `start_judge0.sh`) to start Judge0:
     ```bash
     #!/bin/bash
     cd ~/judge0-v1.13.1
     docker-compose up -d
     ```

2. **Make the Script Executable**:
   - Run the following command to make the script executable:
     ```bash
     chmod +x start_judge0.sh
     ```

3. **Run the Script on Startup**:
   - Add the script to your WSL startup process or execute it manually after booting into Ubuntu.

