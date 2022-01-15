const util = require('./fileUtils');

console.log(util.getFailedSuitesNum());
console.log(util.getPassedSuitesNum());
console.log(util.getFailedTestsNum());
console.log(util.getPassedTestsNum());

const count = util.getFailedSuitesNum();
util.writeIntoFile(count.toString());
