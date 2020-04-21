const makeHttpRequest = (event) => {
  axios.post("http://dummy.restapiexample.com/api/v1/create", {event})
}

document.addEventListener('keyup', makeHttpRequest);
