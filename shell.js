const shell = require('shelljs');

if (!shell.which('git')) {
    shell.echo('Sorry, this script requires git');
    shell.exit(1);
}

class Shell {
    /**
     *
     * @returns {Promise<*>}
     */

    async gitStatus() {
        return  await shell.exec('git status -s');
    }
    /**
     * @param command
     * */
    async git(command) {
        return  await shell.exec(command);
    }

    /**
     *
     * @param path
     * @returns {Promise<*>}
     */
    async cd(path) {
        return await shell.cd(path);
    }
    /**
     *
     * @param pattern
     * @returns {Promise<*>}
     */
    async ls(pattern) {
        return await shell.ls(pattern)
    }

    /**
     *
     * @paramsearch_regex
     * @params replacement,
     * @params file_array,
     * @returns {Promise<*>}
     */
    async sed(options,replacement, file ) {
        return await shell.sed('-i',options,replacement, file);
    }

}

module.exports = Shell;
