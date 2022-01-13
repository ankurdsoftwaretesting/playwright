echo "Start test script..."

docker build -t getting_started . && docker container run --name playJestContainer getting_started

docker container ps -a
echo "CONTAINER ID ::"
echo $(docker ps -q -l)
echo "IMAGE ID :: " 
echo $(docker image ls -q)

echo "copying allure-results out of container"
docker cp $(docker ps -q -l):/usr/src/app/allure-results .

echo "removing container :: playJestContainer"
docker container rm playJestContainer

echo "checking ps -a"
docker container ps -a

echo "removing image :: getting_started"
docker rmi getting_started

echo "checking images -ls"
docker images ls

echo "Finish test."
