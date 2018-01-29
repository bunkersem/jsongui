import * as fs from 'fs';
import * as path from 'path';

export default class Store {
    private memStore: {};
    private fileName: string;
    private name: string;

    constructor(name: string, readyCb: (err?: Error) => void) {
        this.name = name;
        const fileName = this.fileName = path.join(__dirname, `./${name.toLocaleLowerCase()}.json`);
        console.log('created object store:', fileName);
        fs.exists(fileName, exists => {
            if (!exists) {
                fs.writeFile(fileName, '{}', readyCb);
            }
            fs.readFile(fileName, 'utf8', (err, data) => {
                if (err) {
                    readyCb(err);
                }
                let result = {};
                try {
                    result = JSON.parse(data);
                } catch (jsonErr) {
                    return readyCb(jsonErr);
                }
                if (typeof result !== 'object') {
                    return readyCb(new Error('Object store data can only be of type object.'));
                }
                this.memStore = result;
                // Ready!
                readyCb();
            });
        });
    }

    access(func: ({ }, funcCbWithResult: ({}, doneCb: (err?: NodeJS.ErrnoException) => void) => void) => void) {
        func(this.memStore, (result, doneCb) => {
            if (typeof result !== 'object') {
                throw Error('Result is not of type object');
            }
            this.memStore = result;
            const fileName = this.fileName;
            const data = JSON.stringify(this.memStore, null, process.env.NODE_ENVIRONMENT !== 'Production' ? 2 : null);
            fs.writeFile(fileName, data, doneCb);
        });

    }


}
