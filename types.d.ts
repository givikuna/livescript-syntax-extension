type PipeFunction<T, U> = (x: T) => U;
import { to_vec, to_char, to_float, to_int, to_str, Str, Char, Vec, Float, Int } from "./classes";

declare module "lsse" {
    export function to_vec<T>(x: T[] | string | Str | Vec<T>): Vec<T>
    export function to_char(x: string | Str): Char
    export function to_int(x: number | string | Str | Float | Int): Int
    export function to_float(x: string | Int | number | Str | Char): Float
    export function to_str(x: string | number | Char | Int | Float | Str | Vec<any> | Array<any>): Str
    export class Float {
        private val: number;
        constructor(val: string | Int | number | Str | Char);
        unwrap(): number;
        equals(n: Float): boolean;
        to_float(val: string | Int | number | Str | Char): Float;
        recip(): Float;
        clone(): Float;
        as_str(): Str;
        inc(): Float;
        dec(): Float;
        increment(): Float;
        decrement(): Float;
        multiply_by(n: Float | number | Int): Float;
        divide_by(n: Float | number | Int): Float;
        add_to(n: Float | number | Int): Float;
        subtract(n: Float | number | Int): Float;
        subtract_from(n: Float | number | Int): Float;
        as_int(): Int;
        abs(): Float;
        ceil(): Float;
        floor(): Float;
        cbrt(): Float;
        sqrt(): Float;
        log10(): Float;
        copy(): Float;
        loge(): Float;
        log1p(): Float;
        log2(): Float;
        log(base: Int | Float | number): Float;
        to_deg(): Float;
        to_rad(): Float;
        E(ex: Int | Float | number): Float;
        pow(x: number | Float | Int): Float;
        digits(): Vec<Char>;
        pipe<U>(...fs: Array<PipeFunction<any, any>>): U;
    }
    export class Char {
        private val: string
        constructor(val: string | Str)
        to_char(s: string | Str): Char
        equals(c: Char): boolean
        unwrap(): string
        clone(): Char
        charcode(): Int
        as_int(): Int
        as_float(): Float
        as_str(): Str
        copy(): Char
        is_numeric(): boolean
        pipe<U>(...fs: Array<PipeFunction<any, any>>): U
    }
    export class Str {
        private val: string
        constructor(val: string | number | Char | Int | Float | Str | Vec<any> | Array<any>)
        starts_with(s: string | Str | Char): boolean
        to_str(s: string | number | Char | Int | Float | Str | Vec<any> | Array<any>): Str
        as_char(): Char
        equals(s: Str): boolean
        unwrap(): string
        charcode_at(n: Int | number): Int
        remove_all(s: Str | Char | string | number | Float | Int): Str
        clone(): Str
        palindrome(): boolean
        size(): Int
        numeric(): boolean
        replace_all(x: Str | string | Char, y: Str | string | Char): Str
        as_int(): Int
        as_float(): number
        chars(): Vec<string>
        join<T>(xs: T[] | Vec<T>): Str 
        len(): Int
        trim_start(): Str
        trim_end(): Str
        trim(): Str
        capitalize(): Str
        upper(): Str
        lower(): Str
        to_upper(): Str
        to_lower(): Str
        to_number(): number
        take(n: number | Int): Str
        drop(n: number | Int): Str 
        rev(): Str 
        concat(s: Str | string): Str
        at(i: Int | number): string | undefined
        char_at(i: Int | number): Char | undefined
        ends_with(s: string | Str): boolean
        includes(s: string | Str): boolean
        replace(s: string, s2: string): Str 
        repeat(n: number | Int): Str
        fold(f: (x: Char, y: Char) => Char, z: Char): Str
        foldr(f: (x: Char, y: Char) => Char, z: Char): Str
        folds(f: (x: Char, y: Char) => Char): Str
        foldrs(f: (x: Char, y: Char) => Char): Str
        empty(): boolean
        clear(): Str
        copy(): Str 
        words(): string[]
        split(s: Str | string | Char): Vec<Str>
        uniq(): Str
        sort(): Str
        slice(x: Int | number, y: Int | number): Str
        pipe<U>(...fs: Array<PipeFunction<any, any>>): U
    }
    export class Int {
        private val: number
        constructor(val: number | string | Str | Float | Int)
        to_int(n: number | string | Str | Float | Int): Int
        unwrap(): number
        equals(n: Int): boolean
        floor(): Int 
        ceil(): Int
        abs(): Int
        clone(): Int
        as_str(): Str 
        to_float(): Float
        is_even(): boolean
        is_odd(): boolean
        divisors(): Vec<Int>
        is_prefect(): boolean
        multiply_by(n: Int | number): Int
        divide_by(n: Int | number): Int
        add_to(n: Int | number): Int
        subtract(n: Int | number): Int
        recip(): Int
        sqrt(): Int
        expt(n: number | Int): Int
        inc(): Int
        dec(): Int 
        increment(): Int
        decrement(): Int
        factorial(): Int
        cbrt(): Int
        log10(): Int
        loge(): Int 
        log1p(): Int
        log2(): Int
        log(base: Int | Float | number): Int
        to_deg(): Int
        copy(): Int
        to_rad(): Int
        E(ex: Int | Float | number): Int
        pipe<U>(...fs: Array<PipeFunction<any, any>>): U
    }
    export class Vec<T> {
        private arr: Array<T>;
        constructor(arr: T[] | string | Str | Vec<T>)
        equals(xs: Vec<T>): boolean
        to_vec(s: T[] | string | Str): Vec<T>
        unwrap(): Array<T>
        unwords(): Str
        len(): Int
        at(i: number | Int): T
        freq(val: T): Int
        enumerate(): Vec<[number, T]>
        sort(): Vec<T>
        mapcar<M>(f: (x: T, i?: number) => M): Vec<M>
        flat<N>(): Vec<N> 
        join(s: string | Str | Char): Str
        pop(): T | undefined
        uniq(): Vec<T>
        fold(f: (z: T, x: T) => T, z: T): T 
        fold1(f: (z: number, x: number) => number): number
        foldl(f: (z: T, x: T) => T, z: T): T
        foldr(f: (z: T, x: T) => T, z: T): T
        foldr1(f: (z: number, x: number) => number): number
        foldr0(f: (z: number, x: number) => number): number
        foldl0(f: (z: number, x: number) => number): number
        foldl1(f: (z: number, x: number) => number): number
        fold0(f: (z: number, x: number) => number): number
        rev(): Vec<T>
        clone(): Vec<T> 
        extend<N>(vec: Vec<N> | N[]): Vec<T | N> 
        any(f: (x: T) => boolean): boolean
        all(f: (x: T) => boolean): boolean
        sum(): Float
        product(): number
        mean(): number
        min(): T
        max(): T
        to_string(): string
        push(el: T): Vec<T>
        map<N>(f: (x: T, i?: number) => N): Vec<N>
        keys(): Vec<number>
        fill<N>(val: N): Vec<N>
        clear(): Vec<any> 
        empty(): boolean
        iter(): Iterable<[number, T]>
        filter(f: (x: T) => boolean): Vec<T>
        reject(f: (x: T) => boolean): Vec<T>
        partition(f: (x: T) => boolean): Vec<Vec<T>>
        last_index_of(x: T): Int
        values(): Iterable<T>
        splice(x: Int | number, y?: Int | number, z?: T): Vec<T>
        is_char_vec(): boolean
        is_str_vec(): boolean
        is_int_vec(): boolean
        is_float_vec(): boolean
        is_number_vec(): boolean
        is_string_vec(): boolean
        remove_index(i: Int | number): Vec<T> 
        find_index(x: T): Int | undefined
        find(f: (x: T) => boolean): T | undefined
        compact(): Vec<T>
        remove(el: T): Vec<T> 
        to_str(): Str
        head(): T
        last(): T
        slice(x: Int | number, y: Int | number): Vec<T> 
        take(n: Int | number): Vec<T>
        drop(n: Int | number): Vec<T>
        split_at(n: Int | number): Vec<T> 
        get(i: Int | number): T
        elem_indices(el: T): Vec<Int> 
        indices(): Vec<Int> 
        map_to_int(): Vec<Int>
        map_to_float(): Vec<Float>
        map_to_str(): Vec<Str>
        map_to_string(): Vec<string> 
        map_to_number(): Vec<number>
        copy(): Vec<T> 
        map_to_char(): Vec<Char> 
        member(x: T): boolean
        mem(x: T): boolean
        includes(x: T): boolean
        map2<N, M>(f: (x: T, y: N) => M, ys: N[]): Vec<M>
        pipe<U>(...fs: Array<PipeFunction<any, any>>): U
        replace_all(x: T, y: T): Vec<T>
        remove_all(x: T): Vec<T> 
        transposed<N>(): Vec<T> 
        transpose<N>(): Vec<T> 
        chunk(n: number | Int): Vec<Vec<T>>
        foldstr(f: (x: Str) => Str): Str
        foldstring(f: (x: string) => string): string
        foldt(f: (x: boolean) => boolean): boolean
        foldf(f: (x: boolean) => boolean): boolean
    }
    export function mapcar<T, T2>(f: (x: T2) => T2, xs: Array<T>): Array<T2>
    export function str(s: any): string;
    export function int(n: number | string): number;
    export function random(minVal: number, maxVal: number): number;
    export function lower(s: string): string;
    export function upper(s: string): string;
    export function inc(n: number): number;
    export function dec(n: number): number;
    export function supertrim(s: string): string;
    export function freq<T>(k: T, xs: T[]): number;
    export function len<T>(xs: string | Array<T>): number;
    export function enumerate<T>(xs: Array<T>): Map<number, T>;
    export function member<T>(k: T, xs: Array<T>): boolean;
    export function map2<T, T2, T3>(f: (x: T, y: T2) => T3, xs: Array<T>, ys: Array<T>): Array<T3>;
    export function listRef<T>(i: number, xs: Array<T>): T;
    export function hashRef<T>(k: string, xs: {[key: string]: T}): T;
    export function buildList<T>(n: number, f: (n: number) => T): Array<ReturnType<typeof f>>;
    export function title(s: string): string;
    export function uniq(xs: Array<any>): Array<any>;
    export function memoize(f: Function): typeof f;
    export function sorted<T>(xs: Array<T>): Array<T>;
    export function noop(): void;
    export function id<T>(it: T): T;
    export function before(beforeFunc: Function, func: Function): Function;
    export function after(func: Function, afterFunc: Function): Function;
    export function throttle(func: Function, delay: number): Function;
    export function debounce(func: Function, delay: number): Function;
    export function lazy(f: Function): Function;
    export function listTo(x: number, y: number): Array<number>;
    export function listFrom(x: number, y: number): Array<number>;
    export function bool(it: any): boolean;
    export function pipe<T, U>(x: T, ...fs: Array<PipeFunction<any, any>>): U;
    export function cond<T>(...conditions: Array<[boolean, any] | [string, any]>): T;
    export function expt(n: number, power: number): number;
    export function replaceAll(x1: string, x2: string, xs: string): string;
    export function removeAll(x: string, xs: string): string;
    export function stringAppend(s1: string, s2: string): string;
    export function iter<T>(xs: Array<T>): Iterator<T>;
    export const say: typeof console.log;
    export function indexOf<T>(x: T, xs: T[]): number;
    export function isNumeric(xs: string): boolean;
    export function csc(n: number): number;
    export function sec(n: number): number;
    export function cot(n: number): number;
    export function arcsin(n: number): number;
    export function arccos(n: number): number;
    export function arctan(n: number): number;
    export const exmp1: typeof Math.expm1;
    export function replace(x1: string, x2: string, xs: string): string;
    export function trimStart(s: string): string;
    export function trimEnd(s: string): string;
    export function input(s: string): string;
    export function charcode(s: string): string;
    export function makeHash(xs: [string, any]): {[key: string]: any};
    export function fold0<T>(f: (x: T, y: T) => T, xs: Array<T>): T;
    export function foldl0<T>(f: (x: T, y: T) => T, xs: T[]): T;
    export function fodlr0<T>(f: (x: T, y: T) => T, xs: Array<T>): T;
    export function transpose<T>(xs: T[]): T[];
    export function chunk<T>(arr: T[], size: number): T[][];
    export type sleepOption = 'milliseconds' | 'seconds' | 'hours' | 'days';
    export function sleep(amount: number, type?: sleepOption): void;
    export function lambda<T>(f: (...args: any) => T): typeof f;
    export const fn: typeof lambda;
    export function exec(cmd: string): string;
    export function toDeg(rad: number): number;
    export function toRad(deg: number): number;
    export function E(n: number, ex: number): number;
    export const G: 6.67384e-11;
    export const g: 9.807;
    export function factorial(n: number): number;
    export function palindrome(s: string): boolean;
    export function divisors(n: number): number[];
    export function perfect(n: number): boolean;
    export function naturalNumber(n: number): boolean;
    export function isInt(n: number): boolean;
    export function changeIn(f: number, o: number): number;
    export function foldstr(f: (x: string, y: string) => string, xs: Array<string>): string;
    export function foldt(f: (x: boolean, y: boolean) => boolean, xs: Array<boolean>): boolean;
    export function foldf(f: (x: boolean, y: boolean) => boolean, xs: Array<boolean>): boolean;
    export function summation(n: number, i: number, f: (x: number) => number): number;
    export function comb(n: number, k: number): number;
    export function invertMatrix(A: number[][]): number[][];
    export function addMatrix(A: number[][], B: number[][]): number[][];
    export function minusMatrix(A: number[][], B: number[][]): number[][];
    export function multiplyMatrix(A: number[][], B: number[][]): number[][];
    export function divideMatrix(A: number[][], B: number[][]): number[][];
    export const elementaryCharge: 1.602176634e-19;
    export const coulomb: 1.602176634e19;
    export const microCoulomb: 1.6021766e13;
    export const C: 299792458;
    export function mem<T>(k: T, xs: Array<T>): boolean;
    export function explode(s: string): string[];
    export function put<T>(x: T, xs: Array<T>): T[];
    export function implode(xs: string[]): string;
    export function put<T>(xs: T[], x: T): T[];
    export const K: 9e9;
    export const protonMass: 1.672621898e-27;
    export const electronMass: 9.10938356e-31;
    export function electrostaticForce(Q1: number, Q2: number, r: number): number;
    export function gravitationalForce(m1: number, m2: number, r: number): number;
    export function F(m: number, a: number): number;
    export function centripetalForce(m: number, v: number, r: number): number;
    export function frictionalForce(coef: number, FN: number): number;
    export function springForce(k: number, x: number): number;
    export function quadraticFormula(a: number, b: number, c: number): number;
    export const PlancksConstant: 6.626070040e-34;
    export const BoltzmannConstant: 1.38064852e-23;
    export const FaradayConstant: 9.648533289e4;
    export const RydbergConstant: 1.0973731568508e7;
    export const StefanBoltzmannConstant: 5.670367e-8;
    export const fineStructureConstant: 7.297352566e-3;
    export const mole: 6.02214076e23;
    export function deleteAfterIndex<T>(n: number, xs: T[]): T[];
    export function deleteAfter<T>(x: T, xs: T[]): T[];
    export function trunc(x: number): number;
    export const ln10: number;
    export const ln2: number;
    export const log10e: number;
    export const log2e: number;
    export function clz32(n: number): number;
    export function expm1(n: number): number;
    export function dsin(n: number): number;
    export function dcos(n: number): number;
    export function dtan(n: number): number;
    export function dcsc(n: number): number;
    export function dsec(n: number): number;
    export function dcot(n: number): number;
    export function darcsin(n: number): number;
    export function darccos(n: number): number;
    export function darctan(n: number): number;
    export function darccsc(n: number): number;
    export function darcsec(n: number): number;
    export function darccot(n: number): number;
}
