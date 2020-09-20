def awsCredentials = [[$class: 'AmazonWebServicesCredentialsBinding', credentialsId: 'aws-personal']]

pipeline {
  agent {
    docker {
      image 'node:lts-alpine'
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

    stage('Build and Synth') {
      steps {
        sh 'npm run build & npm run cdk synth'
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