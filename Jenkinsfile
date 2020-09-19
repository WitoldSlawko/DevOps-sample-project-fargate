def awsCredentials = [[$class: 'AmazonWebServicesCredentialsBinding', credentialsId: 'aws-personal']]

pipeline {
  agent {
    dockerfile true
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

    stage('Build') {
      steps {
        sh 'npm run build'
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