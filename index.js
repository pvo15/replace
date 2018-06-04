const Shell = require('./shell');
const Path = require('./path');
const config = require('./config');

const shell = new Shell();

(async () => {

    try {
        await shell.cd(config.path);
        const changedFiles = await shell.gitStatus();
        const path = new Path(changedFiles.stdout);



        await Promise.all(path.getArrayOfPath().map(async (path) => {
             return await shell.sed(config.regexp, config.replace, path);
        }));
    } catch (e) {
        console.error("Something went wrong")
    }
    process.exit(1)
})();
