module.exports = {
    testEnvironment: 'node',

    roots: ['<rootDir>/src/tests'],

    collectCoverageFrom: [
        'src/services/**/*.js',
        'src/controllers/**/*.js',
        'src/repositories/**/*.js',
    ],

    coverageDirectory: 'coverage',

    testMatch: [
        '**/*.spec.js',
    ],
};