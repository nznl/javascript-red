/*
 * @Author: WuGuang
 * @Date: 2022-08-01 09:07:52
 * @Description:
 *
 * Copyright (c) 2022 by KYNY, All Rights Reserved.
 */
export class Car {
  constructor(color, age) {
    this.color = color;
    this.age = age;
  }
  test() {
    console.log("我是car中的颜色" + this.color);
  }
}
export class CarSon extends Car {
  constructor(color, age, son) {
    super(color, age);
    this.son = son;
  }
  test() {
    console.log("son color" + this.son, this.color);
  }
  sonPrivate() {
    console.log(this.age);
  }
}

export default {
  arr: ["a", "b", "c", "d"],
  str: "wuguang",
};

export class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
