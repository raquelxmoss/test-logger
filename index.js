const makeHttpRequest = (event) => {
  axios.get("https://postman-echo.com/get", {event})
}

document.addEventListener('keyup', makeHttpRequest);
