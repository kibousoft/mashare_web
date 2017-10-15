function generate() {
	var message = document.getElementById("message-text").value;
	var result = '<a href="https://masha.re/#' + encodeURIComponent(message) + '"><img src="https://masha.re/share.png"></a>';
	document.getElementById("result-area").style.display = "block"; 
	document.getElementById("result-text").value = result;
	document.getElementById("result-preview").innerHTML = result;
}

function initialize() {
	if (!location.hash) {
		document.getElementById("share-area").style.display = "none";
		return;
	}
	document.getElementById("introduction-area").style.display = "none";
	var text = decodeURIComponent(location.hash).substring(1, location.hash.length);
	document.getElementById("share-preview").innerHTML = text;
}

function share(host) {
	if (!host) {
	   var value = document.getElementById("hostname-text").value;
	   if (!value.length) {
	   	 alert('ホスト名を入力してください。');
	   	 return;
	   }
	   host = value;
	}
	var text = decodeURIComponent(location.hash.substring(1, location.hash.length));
	location.href = "https://" + host + "/share?text=" + text;
}