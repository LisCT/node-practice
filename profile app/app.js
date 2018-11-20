// problem: we need a simple way to look at a user's badge count and Javascript points.
// solution: Use Node.js to connect to treehouse's API to get profile information to print out


// to print msg to console

function printMessage(username, badgeCount, points){

    const messages = `${username} has ${badgeCount} total badge(s) and ${points} in Javascript`;

    console.log(messages);


}



// Connect to the API URL (https://teamtreehouse.com/claudiotellez2.json)

function fetchData(url) {
		
	return fetch(url)
		.then(checkStatus)
		.then(res => res.json())
		.catch(error => console.log('Looks like there was a problem', error))
	
}


// promise all return an array with the responses messages
// is a sequense when one load then load other

Promise.all([
	fetchData('https://teamtreehouse.com/claudiotellez2.json')
])
.then(data => {
	
	console.log(data);
	
})


function checkStatus(response){
	
	if(response.ok){
		
		return Promise.resolve(response);
		
	}else{
		
		return Promise.reject(new Error(response.statusText));
	
	}
	
}


// Read the data 
// Parse the data
// print the data 