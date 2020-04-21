const makeHttpRequest = (event) => {
  axios.post("https://dummy.restapiexample.com/api/v1/create", {event})
}

document.addEventListener('keyup', makeHttpRequest);
