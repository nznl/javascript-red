export default class myTools {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    joinP(data) {
        let result = [];
        for (let key in data) {
            let str = `${key}=${data[key]}`;
            result.push(str);
        }
        result.join('&');
    }

    request({method, url, data, type}) {
        const xhr = window.XMLHttpRequest() ? new XMLHttpRequest() : new ActiveXObject('Mircosoft.XMLGTTP');
        if (method === 'get') {
            xhr.open(url + '?' + this.joinP(data));
            xhr.send();
        } else {
            xhr.open(url);
            xhr.setRequestHeader('Content-Type', type);
            xhr.send(this.joinP(data));
        }
        return  new Promise((resolve, reject) => {
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    resolve(JSON.parse(xhr.response));
                } else {
                    reject('请求失败');
                }
            }
        })
    }
}

export function ceshi() {
    console.log('ceshi1')
}