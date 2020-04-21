const makeHttpRequest = (event) => {
  console.log(event)
  console.log(event.key)
  axios.post("https://dummy.restapiexample.com/api/v1/create", {key: event.key})
}

console.log('document', document)
console.log('window', window)

document.addEventListener('keyup', makeHttpRequest);
