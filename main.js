// Task 01: Iterating with Async/Await

function delay(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

async function iterateWithAsyncAwait(values) {
	for (let value of values) {
		await delay(1000); // Wait for 1 second
		console.log(value); // Log the value after delay
	}
}

const values = [1, 2, 3, 4, 5];
iterateWithAsyncAwait(values);

// Task 02: Awaiting a Call

async function fetchData() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({ data: "API data received" }); // Simulate API response
		}, 1000);
	});
}

async function awaitCall() {
	const data = await fetchData(); // Wait for the API response
	console.log(data); // Log the response
}

awaitCall();

// Task 03: Handling Errors with Async/Await

async function fetchDataWithError() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const success = false; // Simulate an error scenario
			if (success) {
				resolve({ data: "API data received" });
			} else {
				reject("Error: Failed to fetch data");
			}
		}, 1000);
	});
}

async function awaitCallWithErrorHandling() {
	try {
		const data = await fetchDataWithError(); // Wait for the API response
		console.log(data); // Log the response if successful
	} catch (error) {
		console.log("User-friendly message: Something went wrong!", error); // Handle the error
	}
}

awaitCallWithErrorHandling();

// Task 04: Chaining Async/Await

function logMessage(message, delayTime) {
	return new Promise((resolve) =>
		setTimeout(() => {
			console.log(message);
			resolve();
		}, delayTime)
	);
}

async function chainedAsyncFunctions() {
	await logMessage("Function 1 completed", 1000); // Wait 1 second
	await logMessage("Function 2 completed", 1000); // Wait another second
	await logMessage("Function 3 completed", 1000); // Wait another second
}

chainedAsyncFunctions();
