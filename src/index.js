const logger = require('./logger');
const mongoose = require('mongoose');
const app = require('./app');
const { MONGO_URL, PORT } = require('./config');

const server = app.listen(PORT, () => {
	mongoose
		.connect(MONGO_URL)
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
	logger.info(`App started on:http://localhost:${PORT}`),
);
