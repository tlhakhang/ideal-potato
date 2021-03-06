'use strict';

let express = require('express');
let compression = require('compression');
let cors = require('cors');

let server = express();
let zfs = require('./routers/zfs');
let zpool = require('./routers/zpool');
let mnttab = require('./routers/mnttab');
let sysinfo = require('./routers/sysinfo');

server.use(compression());
server.use(cors());

// TODO:  read the routers folder and create all the endpoints -- less chance of missing modules.
// TODO:  possible to pass in arguments to include set of endpoints and assume general defaults.
// TODO:  different OS support?
server.use('/zfs', zfs);
server.use('/zpool', zpool);
server.use('/mnttab', mnttab);
server.use('/sysinfo', sysinfo);

server.listen(8008);
