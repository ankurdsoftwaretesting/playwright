echo "Start test script..."

docker build -t getting-started . && docker container run --name play-jest-container getting-started

docker container ps -a
echo "CONTAINER ID ::"
echo $(docker ps -q -l)
echo "IMAGE ID :: " 
echo $(docker image ls -q)

echo "copying allure-results out of container"
docker cp $(docker ps -q -l):/usr/src/app/allure-results .

echo "checking ps -a"
docker container ps -a

echo "removing container :: play-jest-container"
docker container rm play-jest-container

echo "checking ps -a"
docker container ps -a

echo "checking images ls"
docker images ls

echo "Finish test."
