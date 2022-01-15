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
module.exports = {
  getFailedSuitesNum,
  getPassedSuitesNum,
  getFailedTestsNum,
  getPassedTestsNum,
};
