function submitToServer(){
	var xmlhttp = new XMLHttpRequest();  
    var theUrl = "http://localhost:3000/cars";
	
	var imageUrl = document.getElementById("fUrl").value;
	var brand = document.getElementById("fBrand").value;
	var telNumb = document.getElementById("fTelNumb").value;
	var seller = document.getElementById("fSeller").value;
	var price = document.getElementById("fPrice").value;
	
	xmlhttp.open("POST", theUrl);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	xmlhttp.send(JSON.stringify({
	"imageUrl": imageUrl,
    "brand": brand,
    "telNumb": telNumb,
    "seller": seller,
	"price":  price}));
}
