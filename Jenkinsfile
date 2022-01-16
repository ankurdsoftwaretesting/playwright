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
    }
   
    post{
        always{
            echo 'generating allure report...'
            allure includeProperties: false, jdk: '', results: [[path: 'Playwright-jest-runner/allure-results'], [path: 'Playwright-jest-runner/allure-results']]
           
//            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: './jest-stare', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: 'Jest Stare Report'])
           
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: './', reportFiles: 'jest-html-report.html', reportName: 'HTML Report', reportTitles: 'Jest-HTML-Report'])
       
            junit 'test-report.xml'
           
            script {
                   script {
//                    def count = readFile(file: 'failedCount.txt');
                      def resultJson = readJSON file: "${env.WORKSPACE}\testResultJson.json";
                      if(resultJson.numFailedTestSuites == 0){
                         sh 'exit 1'
                      }
                      
//                    if(count != '0'){
//                       sh 'exit 1'
//                    }
                } 
               echo "Status of build is ${currentBuild.result}"
            }
        }
    }
}
