echo "Start test script..."

docker build --no-cache -t getting-started . && docker container run --name play-jest-container getting-started npm run test

docker container ps -a
echo "CONTAINER ID ::"
echo $(docker ps -q -l)
echo "IMAGE ID :: " 
echo $(docker image ls -q)

echo "copying allure-results out of container"
docker cp $(docker ps -q -l):/usr/src/app/allure-results ./

echo "copying jest-html-report.html out of container"
docker cp $(docker ps -q -l):/usr/src/app/reports/jest-html-report.html ./

echo "copying test-report.xml out of container"
docker cp $(docker ps -q -l):/usr/src/app/test-report.xml .

echo "copying testResultJson.json out of container"
docker cp $(docker ps -q -l):/usr/src/app/testResultJson.json .

echo "copying failedCount.txt out of container"
docker cp $(docker ps -q -l):/usr/src/app/failedCount.txt .

# echo "copying jest-stare out of container"
# docker cp $(docker ps -q -l):usr/src/app/jest-stare .

docker container rm $(docker container ps -a -q)
docker rmi $(docker images -a -q)

docker container ps -a
docker images ls

echo "Finish test."
