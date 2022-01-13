echo "Start test script..."

docker build -t getting-started . && docker container run --name play-jest-container getting-started

docker container ps -a
echo "CONTAINER ID ::"
echo $(docker ps -q -l)
echo "IMAGE ID :: " 
echo $(docker image ls -q)

docker container rm $(docker container ps -a -q)
docker rmi $(docker images -a -q)

docker container ps -a
docker images ls

echo "Finish test."
