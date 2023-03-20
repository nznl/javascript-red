/*
 * @Descripttion: 
 * @version: 
 * @Author: WuGuang
 */
const first = document.querySelector('#number1');
const second = document.querySelector('#number2');

const result = document.querySelector('.result');

if (window.Worker) {
  const myWorker = new Worker("./worker.js");

  first.onchange = function() {
    myWorker.postMessage({
        one: first.value,
        two: second.value,
        author: 'wuguang'
    });
  }

  second.onchange = function() {
    myWorker.postMessage({
        one: first.value,
        two: second.value,
        author: 'wuguang'
    });
  }

  myWorker.onmessage = function(e) {
    console.log(e, '取值');
    result.textContent = e.data;
  }
} else {
  console.log('Your browser doesn\'t support web workers.');
}