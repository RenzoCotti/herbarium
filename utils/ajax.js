/* AJAX */

/* The doRequest function handles AJAX calls to the server.

 * Exercise 3a: BEGIN

 * The function must check that:
 *  - all the arguments are passed when called
 *  - method has one of the following value: "GET", "POST", "PUT", "DELETE"
 *  - the data (data parameter) is in JSON format
 * If a check fails the function must throw an error.

 * Exercise 3a: END

 * Exercise 3b: BEGIN

 * The function must open a connection to the server according to the method and url parameters
 * The function must correctly set the Request Headers according to the headers parameter,
 * additionally to the ones needed by the JSON interaction according to the method parameter
 * The function must correctly set the data to be sent according to the data parameter

 * Exercise 3b: END

 * Exercise 3c: BEGIN

 * The function must call the callback function when the response is ready, passing the JSON object parsed from the response, if there is one,
 * or return in case of errors.

 * Exercise 3c: END

 *
 * @param {String} method The method of the AJAX request. One of: "GET", "POST", "PUT", "DELETE".
 * @param {String} url The url of the API to call, optionally with parameters.
 * @param {Object} headers The Associative Array containing the Request Headers. It must be null if there are no headers.
 * @param {JSON} data The data in the JSON format to be sent to the server. It must be null if there are no data.
 * @param {Function} callback The function to call when the response is ready.
 */

 function doJSONRequest(method, url, headers, data, callback){

	//suggested by Susanna Riccardi, since try/catch using JSON.parse wasn't working
	if (data !== undefined){
		if (data !== null && data.toString() !== "[object Object]") {
				throw "Invalid JSON data.";
		}
	}


 	if(arguments.length != 5 || method === "HEAD"  ){
		throw "error";
	}

 	else if ((method === "GET")||(method === "POST")||(method === "PUT")||(method === "DELETE")){


 		let request = new XMLHttpRequest();
 		request.open(method, url, true);
 		if (method === "PUT" || method === "POST"){
 			request.setRequestHeader("Content-Type", "application/json;charset=utf-8");
 		}

		//thanks to Emanuele Giuseppe Esposito and Lara Bruseghini for suggesting this approach
		if (headers){
			for(let header in headers) { request.setRequestHeader(header, headers[header]); }
		}

 		request.setRequestHeader("Accept","application/json");

 		request.onreadystatechange = function(){
 			if (request.readyState == 4){

 				if (request.status == 200){
 					callback(JSON.parse(request.responseText));
 				}
 			}
 		}
		request.send(JSON.stringify(data));
 	}
 }

/* AJAX */
