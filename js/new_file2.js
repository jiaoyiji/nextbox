mui.ajax(url+'/prod-api/api/login',{
	type:'post',
	headers:{
		'Content-Type' : 'application/json'
	},
	data:{
		username : 'test01',
		password : '123456'
	},
	success:function(data){
		localStorage.setItem('token',data.token)
	}
	
})