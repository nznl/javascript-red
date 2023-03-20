console.log(this.name);
this.onmessage = function ({ data }) {
  console.log("接受到了来自主线程的数据:", data);
  sleep(10000); // 耗时 10s
  this.postMessage({ name: "子线程数据" });
};

this.onerror = function (err) {
  // worker 线程发生了错误!
  throw new Error(err);
};

// 模拟会阻塞主线程的耗时操作.
function sleep(wait = 5000) {
  let now = new Date();
  while (new Date() - now < wait) {}
}
