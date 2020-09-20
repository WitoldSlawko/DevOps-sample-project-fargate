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

    stage('whoami') {
      steps {
        sh 'echo $USER && whoami'
      }
    }

    stage('verify') {
      steps {
        sh 'npx -v node -v && npm -v && cdk -v'
      }
    }

    stage('Build and Synth') {
      steps {
        sh 'npm run build & cdk synth'
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