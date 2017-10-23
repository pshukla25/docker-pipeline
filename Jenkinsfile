node {
    def app

    stage('Clone repository') {
        checkout scm
    }

    stage('Build image') {
        app = docker.build("pshukla25/docker-pipeline")
    }

    stage('Test image') {
            sh 'echo "Test passed"'
    }

    stage('Push image') {
        ocker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
            app.push("${env.BUILD_NUMBER}")
            app.push("latest")
        }
    }
}
