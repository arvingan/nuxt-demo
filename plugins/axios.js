import qs from "qs";

export default function ({ app }) {
let axios = app.$axios;
let cookies = app.$cookies; 
   // 基本配置
axios.defaults.timeout = 10000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 请求回调
axios.onRequest(config => {
	const cookieRes = app.$cookies.get('cookie-name');
	console.log('cookieRes=',cookieRes);
})

// 返回回调
axios.onResponse(res => {
	app.$cookies.set('cookie-name', 'cookie-value', {
	  path: '/',
	  maxAge: 60 * 60 * 24 * 7
	})
})

// 错误回调
axios.onError(error => {
	//console.log('config=',error);
})
}


//import qs from "qs";
// 
//export default function ({ $axios, app }) {
//// console.log(app.$cookies.get('token'))  //每次请求获取cooie
//$axios.onRequest(config => {
//  //获取cookie放在头部传到后端
//  config.headers.Authorization = app.$cookies.get('token')
//  config.data = qs.stringify(config.data, {
//    allowDots: true //Option allowDots can be used to enable dot notation
//  });
//  return config;
//});
// 
//$axios.onResponse(response => {
//  return Promise.resolve(response.data);
//});
// 
//$axios.onError(error => {
//  return Promise.reject(error);
//});
