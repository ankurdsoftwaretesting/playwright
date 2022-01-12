echo "Start test script..."

set -e

docker build -t getting_started . && docker container run --name playJestCon1 getting_started

docker container ps -a
echo "CONTAINER ID ::"
echo $(docker ps -q -l)
echo "IMAGE ID :: " 
echo $(docker image ls -q)

echo "copying allure-results out of container"
docker cp $(docker ps -q -l):/usr/src/app/allure-results .

echo "Finish test."
