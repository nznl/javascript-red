/*
 * @Author: WuGuang
 * @Date: 2022-08-08 13:44:51
 * @Description: 
 * 
 * Copyright (c) 2022 by KYNY, All Rights Reserved. 
 */

export function awaitMain(p) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(p);
            resolve(p);
        }, 1000);
    });
}

export async function awaitResult() {
    const number_const= await awaitMain(30);
    console.log('在此之前', number_const);
}

export function promiseFn() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('宏任务第一阶');
        }, 3000);
    })
}