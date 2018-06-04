module.exports = {
        path:"../",
        regexp: /console\.log\(([^)]+)\);/,
        replace: 'console.log("2");',
}