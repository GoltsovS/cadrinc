module.exports = {
    '**/*.ts?(x)': () => 'eslint --fix && git add'
}