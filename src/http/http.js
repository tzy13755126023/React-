// 封装get请求
export function httpGet(url){
  var result = fetch(url,{
    method:"GET"
  })
  return result;
}


// post请求
export function httpPost(url,params){
  var result = fetch(url,{
    method:"POST",
    headers: {
			'Accept': 'application/json, text/plain, */*',
			'Content-Type': 'application/x-www-form-urlencoded'
		},
    // 此方式接受的参数类型
    // 需求数据：name=iwen&age=20
    // 我们希望的是{ name:iwen,age:20 }
    body:parseParams(params)
  })
  return result;
}

function parseParams(obj){
  var result = '';
	var item;
	for (item in obj) {
    // { name:iwen,age:20 }
    // &name=iwen&age=20
		result += '&' + item + '=' + encodeURIComponent(obj[item]);
	}

	if (result) {
		result = result.slice(1);
	}
  return result;
}
