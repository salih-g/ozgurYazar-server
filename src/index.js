const logger = require('./logger');
const server = require('./server');

process.on('unhandledRejection', (reason, p) =>
	logger.error('Unhandled Rejection at: Promise ', p, reason),
);

server.on('listening', () =>
	logger.info(`App started on:http://localhost:${PORT}`),
);
