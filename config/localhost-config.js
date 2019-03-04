//服务地址相关配置
function serverConfig() {
	let server = {
		port: 3000, // default: 3000
		host: 'localhost', // default: localhost
	};
	return server;
}
exports.serverConfig = serverConfig;