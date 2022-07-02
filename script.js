const ajaxData = ({ url, data, method }) => {
    return fetch(url, {
        method: method,
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
}

const xmlRequestData = () => {
    
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
        data: data
    })
        .then(data => console.log(data))
        .catch((error) => console.log(error))
}

getData()
    .then(data => sendData(data))
    .catch((error) => console.log(error))