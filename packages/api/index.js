const chalk = require('chalk');

class FakeApi {
    constructor(configs) {
        this.configs = configs || {};
    }
    mockAPICall(cb) {
        return new Promise((res, rej) => {
            console.log(chalk.green("Attempting a mock api call"))
            setTimeout(() => {
                let threshold = 25;
                let isFail = (Math.random() * 100) < threshold;
                let snError = (Math.random() * 100) < 20;
                let response = {
                    result:{
                        code: isFail ? 401 : 200,
                        body: `A ${isFail ? "failed" : "succesful"} request body`,
                    }
                };
                if(cb) { cb(["Did it fail?", isFail, JSON.stringify(response,null,2)]) }
                if(snError) {
                    response.error = "Some error passed back via sn";
                    response.code = 400;
                }
                if(isFail) { rej(response) }
                else { res(response) }    
            }, 2000);    
        })
    }
}

module.exports = FakeApi;