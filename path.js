
class Path {
    constructor(stdout) {
        this.stdout = stdout;
    }

    getArrayOfPath(){
        const  path =  [ this.getPath(this.stdout) ];
        let singlPath = {};

        for(let i = 1; i < this.stdout.length; i++ ) {
            if(!path[0].tail) {
                return ;
            }
            if (path[i - 1]) {
                singlPath = this.getPath(path[i-1].tail);
                if (singlPath === null) {
                    break;
                }
                path.push(singlPath)
            }
        }
        return path[0] && path.map((item) => item.path)

    }

    getPath(stdout = this.stdout) {
        if (typeof stdout !== 'string') return null;
        const start = stdout.indexOf(' ') + 1;
        const end = stdout.indexOf('\n');
        if(end === -1){
            return null;
        }

        return {
            path: stdout.substring(start, end),
            tail: stdout.substring(end + 1 , stdout.length)
        }
    }

}

module.exports = Path;


