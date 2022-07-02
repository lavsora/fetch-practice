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

const xmlHttpSendData = (data) => {
    let xhr = new XMLHttpRequest();

    let json = JSON.stringify(data);

    xhr.upload.onprogress = function (event) {
        console.log(`Отправлено ${event.loaded} из ${event.total}`);
    };

    xhr.upload.onload = function () {
        console.log(`Данные успешно отправлены.`);
    };

    xhr.upload.onerror = function () {
        console.log(`Произошла ошибка во время отправки: ${xhr.status}`);
    };

    xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts');
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

    xhr.send(json);

    xhr.onload = () => console.log(xhr.response);
}

const getData = () => {
    return ajaxData({
        method: 'GET',
        url: 'db.json',
    })
}

getData()
    .then(data => {
        console.log(data)
        xmlHttpSendData(data)
    })
    .catch((error) => console.log(error))