echo "Start test script..."

set -e

docker build --network=host -t test . -f Dockerfile && docker run -t --ipc=host test

docker container ps -a

echo "copying jest-html-report out of container"
docker cp $(docker ps -q -l):/usr/src/app/jest-html-report.html . 

echo "copying allure-* out of container"
docker cp $(docker ps -q -l):/usr/src/app/allure-results .

echo "Finish test."
