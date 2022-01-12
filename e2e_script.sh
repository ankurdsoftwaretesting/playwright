echo "Start test script..."

set -e

docker build -t test . && docker container run --name playJestCon1 test

docker container ps -a
echo "CONTAINER ID ::"
echo $(docker ps -q -l)
echo "IMAGE ID :: " 
echo $(docker image ls -q)

echo "copying allure-results out of container"
docker cp $(docker ps -q -l):/usr/src/app/allure-results .

echo "Finish test."
