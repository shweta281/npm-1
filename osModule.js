const { log } = require("console");
const os= require("os")
const currOs= {
    "uptime":os.uptime(),
    "freemem":os.freemem(),
    "totalmem":os.totalmem(),
    "machine":os.machine,
    "userinfo":os.userInfo(),
    "version":os.version(),
    "release":os.release()
};
console.log(currOs);
console.log(currOs.totalmem- currOs.freemem);

