function $(id){return document.querySelectorAll(id)}

function test(reg){
	return function(evt){
		var selector = "output[name="+evt.target.name+"out]"
		var outputEle = $(selector)[0]
		outputEle.value=reg.test(evt.target.value);
		outputEle.className=outputEle.value
	}
}

function clear(evt){
	evt.target.value="";
}

var phoneList = ["18812011232",
			 "+8618812011232",
			 "008618812011232",
			 "18812312",
			 "12345678909",
			 "1221318909"]

var wordsList = ["foo foo bar",
			 "foo bar foo",
			 "foo  barbar bar"]

function addTestData(name,list){
	var ele = $("#"+name)[0];
	var html = ""
	for(var i=0; i<list.length;i++){
		html += '<option value="'+list[i]+'">'+list[i]+'</option>';
	}
	ele.innerHTML += html;	
}

window.onload=function(){
	// 添加测试数据
	addTestData("phone-li", phoneList)
	addTestData("words-li", wordsList)	
	var phone = $("input[name=phone]")[0];
	var words = $("input[name=words]")[0];
	phone.oninput = test(/^((00|\+)86)?1[34578][0-9]{9}$/);
	words.oninput = test(/\b(\w+)\b\s+\1\b/);
	// 双击清除数据
	phone.ondblclick = clear;
	words.ondblclick = clear;
}