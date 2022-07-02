const ajaxData = ({ url, method, body }) => {
    return fetch(url, {
        method: method,
        body: body,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
}

const getData = () => {
    return ajaxData({
        method: 'GET',
        url: 'db.json',
    })
}

const sendData = (data) => {
    return ajaxData({
        method: 'POST',
        url: 'https://jsonplaceholder.typicode.com/posts',
        body: JSON.stringify(data)
    })
        .then(data => console.log(data))
        .catch((error) => console.log(error))
}

getData()
    .then(data => {
        console.log(data)
        sendData(data)
    })
    .catch((error) => console.log(error))