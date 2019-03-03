//服务地址相关配置
function serverConfig() {
	let server = {
		port: 10050, // default: 3000
		host: '192.168.0.150', // default: localhost
	};
	return server;
}
exports.serverConfig = serverConfig;