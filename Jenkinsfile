pipeline {
    agent any
    environment {
        // Set necessary environment variables for the Jenkins user
        HOME = "/var/lib/jenkins"  // Adjust based on your Jenkins user's home directory
        DOCKER_IMAGE = "lms-admin-panel-frontend-app"
        CONTAINER_NAME = "lms-admin-panel-frontend-container"
        PROJECT_PATH = "/var/www/html/lms-admin-panel-frontend"
    }

    stages {
        
        stage('Clone Repository') {
            steps {
                script {
                    // Run the commands directly as Jenkins user (no need for sudo)
                    sh '''
                    echo "Starting SSH agent..."
                    eval $(ssh-agent -s)
                    echo "Adding SSH key..."
                    ssh-add ~/.ssh/id_rsa_bitbucket

                    echo "Navigating to the lms-admin-panel-frontend project directory..."
                    cd /var/www/html/lms-admin-panel-frontend

                    echo "Pulling latest code from origin/main..."
                    git reset --hard HEAD    # Discard local changes
                    git clean -fd           # Remove untracked files and directories
                    git pull origin main    # Pull fresh code
                    '''
                }
            }
        }

         stage('Build Docker Image') {
             steps {
                 dir("${env.WORKSPACE_DIR}") {
                     script {
                         sh 'echo "docker start"'
                         sh 'cp -r /var/www/html/lms-admin-panel-frontend/* .'
                         sh 'docker build -t $DOCKER_IMAGE .'
                     }
                 }
             }
         }
         stage('Deploy Docker Container') {
             steps {
                 script {
                     sh '''
                         docker stop $CONTAINER_NAME || true
                         docker rm $CONTAINER_NAME || true
                         docker run -d --name $CONTAINER_NAME -p 3000:3000 $DOCKER_IMAGE
                     '''
                 }
             }
         }
    }
    post {
        always {
            echo 'Pipeline execution completed.'
        }
    }
}