const os = require("os")

// info about the current user
const user = os.userInfo()
console.log(user);

// method returns the sytemt uptime in sec
const uptime = os.uptime()
console.log(uptime);

// current os
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}

console.log(currentOS);