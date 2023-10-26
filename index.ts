const lib = require('./lib');
const fs = require('fs');
const prelude_ls = require('prelude-ls');

function lsseify(): void {
    const keys: string[] = Object.keys(lib);
    for (let i: number = 0; i < keys.length; i++) {
        (globalThis as any)[keys[i]] = lib[keys[i]];
    }
}

function calcify(): void {
    const lssekeys: string[] = Object.keys(lib);
    for (let i: number = 0; i < lssekeys.length; i++) {
        (globalThis as any)[lssekeys[i]] = lib[lssekeys[i]];
    }
    const preludelskeys: string[] = Object.keys(prelude_ls);
    for (let i: number = 0; i < preludelskeys.length; i++) {
        (globalThis as any)[preludelskeys[i]] = prelude_ls[preludelskeys[i]];
    }
}


