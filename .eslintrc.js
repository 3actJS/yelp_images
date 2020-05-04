module.exports = { 
    parser: 'babel-eslint',
    extends: ['airbnb','plugin:jest/recommended'],
    env: { 
        'jest/globals': true 
    },
    overrides: [
        {
          files: [
            '**/*.test.js'
          ],      
        }
    ],
    plugins: ['jest'],
};