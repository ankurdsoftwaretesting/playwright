const fs = require('fs');
const fileName = './testResultJson.json';

function getFailedSuitesNum() {
  return getJsonFormattedResult().numFailedTestSuites;
}
function getPassedSuitesNum() {
  return getJsonFormattedResult().numPassedTestSuites;
}
function getFailedTestsNum() {
  return getJsonFormattedResult().numFailedTests;
}
function getPassedTestsNum() {
  return getJsonFormattedResult().numPassedTests;
}
function getJsonFormattedResult() {
  let result = '';
  try {
    const jsonString = fs.readFileSync(fileName);
    result = JSON.parse(jsonString);
  } catch (err) {
    console.log(err);
    return;
  }
  return result;
}
function writeIntoFile(data) {
  fs.writeFile('failedCount.txt', data, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    //file written successfully
  });
}
module.exports = {
  getFailedSuitesNum,
  getPassedSuitesNum,
  getFailedTestsNum,
  getPassedTestsNum,
  writeIntoFile
};
