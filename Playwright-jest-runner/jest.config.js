module.exports = {
    preset: 'ts-jest',
    testMatch: ['**/test/*.spec.ts'],
    collectCoverage: true,
    testTimeout: 100000,
    "reporters": [
        "default",
        ["./node_modules/jest-html-reporter", {
            "pageTitle": "Test Report",
            "outputPath": "./reports/jest-html-report.html"
        }]
    ],
    testRunner: "jest-jasmine2",
    setupFilesAfterEnv: ["jest-allure/dist/setup"],
    testResultsProcessor: './node_modules/jest-junit-reporter',
}
