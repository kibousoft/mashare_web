function generate() {
	var message = document.getElementById("message-text").value;
	var url = 'https://masha.re/#' + encodeURIComponent(message);
	var result = '<a href="https://masha.re/#' + encodeURIComponent(message) + '" target="_blank"><img src="https://masha.re/share.png"></a>';
	document.getElementById("result-area").style.display = "block"; 
	document.getElementById("result-text").value = result;
	document.getElementById("result-preview").innerHTML = result;
	document.getElementById("result-url").value = url;
}

function initialize() {
	if (!location.hash) {
		document.getElementById("share-area").style.display = "none";
		return;
	}
	document.getElementById("introduction-area").style.display = "none";
	var text = decodeURIComponent(location.hash).substring(1, location.hash.length);
	document.getElementById("share-preview").innerHTML = text;
	
	var host = getCookie("host");
	if (host) {
	  	document.getElementById("hostname-text").value = host;
	}
}

function share(host) {
	if (!host) {
	   var value = document.getElementById("hostname-text").value;
	   if (!value.length) {
	   	 alert('ホスト名を入力してください。');
	   	 return;
	   }
	   host = value;
	   document.cookie = "host=" + host;
	}
	var text = decodeURIComponent(location.hash).substring(1, location.hash.length);
	location.href = "https://" + host + "/share?text=" + encodeURIComponent(text);
}

function getCookie(cn) {
    var name = cn+"=";
    var allCookie = decodeURIComponent(document.cookie).split(';');
    var cval = [];
    for(var i=0; i < allCookie.length; i++) {
        if (allCookie[i].trim().indexOf(name) == 0) {
            cval = allCookie[i].trim().split("=");
        }   
    }
    return (cval.length > 0) ? cval[1] : nil;
}