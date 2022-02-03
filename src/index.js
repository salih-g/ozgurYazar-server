const logger = require('./logger');
const mongoose = require('mongoose');
const app = require('./app');

const server = app.listen(8081, () => {
	mongoose
		.connect('mongodb://localhost:27017/ozgurYazar-server')
		.then(() => {
			console.log('DB connected');
		})
		.catch((err) => {
			logger.error(err);
			process.exit(1);
		});
});

process.on('unhandledRejection', (reason, p) =>
	logger.error('Unhandled Rejection at: Promise ', p, reason),
);

server.on('listening', () =>
	logger.info('App started onhttp://localhost:8081'),
);
