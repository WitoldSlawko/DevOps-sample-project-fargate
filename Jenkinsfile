def awsCredentials = [[$class: 'AmazonWebServicesCredentialsBinding', credentialsId: 'aws-personal']]

pipeline {
  agent {
    label 'Master'
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

    stage('Intall') {
      steps {
        sh 'npm install -g aws-cdk'
      }
    }

    stage('Intall') {
      steps {
        sh 'npm install -d'
      }
    }

    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }

    stage('synth') {
      steps {
        sh 'cdk synth'
      }
    }

    stage('Deploy') {
      steps {
        sh 'cdk deploy --require-approval=never'
      }
    }
  }

  post {
    always {
      cleanWs()
    }
  }
}