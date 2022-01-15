pipeline{
   
   agent {label 'ad-internal'}
    
    stages{
        stage("clean WS"){
            steps{
                cleanWs()
            }
        }
        stage("Git checkout"){
            steps{
                git branch: 'main', changelog: false, poll: false, url: 'https://github.com/ankurdsoftwaretesting/playwright.git'
            }
        }
        stage("run e2e_script.sh"){
           steps{
                sh "chmod 777 ./e2e_script.sh && ./e2e_script.sh"
           }
        }
        // stage("create image and run container"){
        //   steps{
        //         sh "docker build -t getting-started ."
        //         sh "docker run --name playCon getting-started"
        //   }
        // }
    }
    post{
        always{
            echo 'generating allure report...'
            allure includeProperties: false, jdk: '', results: [[path: 'Playwright-jest-runner/allure-results'], [path: 'Playwright-jest-runner/allure-results']]
           
//            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: './jest-stare', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: 'Jest Stare Report'])
           
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: './', reportFiles: 'jest-html-report.html', reportName: 'HTML Report', reportTitles: 'Jest-HTML-Report'])
       
            junit 'test-report.xml'
           
            script {
                   def data = readFile(file: 'testResultJson.json');
                   result = JSON.parse(data);
                   println(result.numFailedTestSuites)
               }
        }
    }
}
