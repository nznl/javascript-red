/*
 * @Descripttion: 
 * @version: 
 * @Author: WuGuang
 */
onmessage = function(e) {
    // const result = e.data;
    // if (isNaN(result)) {
    //   postMessage('Please write two numbers');
    // } else {
      const workerResult = `${e.data.one * e.data.two} ===> ${e.data.author}`
      postMessage(workerResult);
    // }
  }