def awsCredentials = [[$class: 'AmazonWebServicesCredentialsBinding', credentialsId: 'aws-personal']]

pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile'
    }
  }

  environment {
    AWS_REGION = 'us-east-1'
    HOME = '.'
  }

  options {
    disableConcurrentBuilds()
    timestamps()
    withCredentials(awsCredentials)
  }

  stages {

    stage('Get Code') {
      steps {
        checkout scm
      }
    }

    stage('docker') {
      steps {
        sh 'docker ps -q && docker container ls -q'
      }
    }

    stage('whoami') {
      steps {
        sh 'pwd'
      }
    }

    stage('ls node_modules') {
      steps {
        sh 'ls'
      }
    }

    stage('npm install -d') {
      steps {
        sh 'npm install -d'
      }
    }

    stage('verify') {
      steps {
        sh 'npx -v node -v && npm -v && npm run cdk -v'
      }
    }

    stage('Build and Synth') {
      steps {
        sh 'npm run build & npm run synth'
      }
    }

    stage('Deploy') {
      steps {
        sh 'npm run cdk deploy --require-approval=never'
      }
    }
  }

  post {
    always {
      cleanWs()
      deleteDir()
    }
  }
}