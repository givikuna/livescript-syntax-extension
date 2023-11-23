type PipeFunction<T, U> = (x: T) => U

declare module "lsse" {
    export function flip<T, N, M>(f: (x: T, y: N) => M): (y: N, x: T) => M
    export function rev<T>(xs: T[]): T[]
    export function fold<T>(f: (x: T, y: T) => T, z: T, xs: T[]): T
    export function foldl<T>(f: (x: T, y: T) => T, z: T, xs: T[]): T
    export function foldr<T>(f: (x: T, y: T) => T, z: T, xs: T[]): T
    export function fold1<T>(f: (x: T, y: T) => T, xs: T[]): T
    export function foldl1<T>(f: (x: T, y: T) => T, xs: T[]): T
    export function foldr1<T>(f: (x: T, y: T) => T, xs: T[]): T
    export function filter<T>(f: (x: T) => boolean, xs: T[]): T[]
    export function reject<T>(f: (x: T) => boolean, xs: T[]): T[]
    export function partition<T>(f: (x: T) => boolean, xs: T[]): T[][]
    export function map<T, T2>(f: (x: T) => T2, xs: T[]): T2[]
    export function mapcar<T, T2>(f: (x: T) => T2, xs: Array<T>): Array<T2>
    export function str(s: any): string
    export function int(n: number | string): number
    export function random(minVal: number, maxVal: number): number
    export function lower(s: string): string
    export function upper(s: string): string
    export function inc(n: number): number
    export function dec(n: number): number
    export function supertrim(s: string): string
    export function freq<T>(k: T, xs: T[]): number
    export function len<T>(xs: string | Array<T>): number
    export function enumerate<T>(xs: Array<T>): Map<number, T>
    export function member<T>(k: T, xs: Array<T>): boolean
    export function map2<T, T2, T3>(f: (x: T, y: T2) => T3, xs: T[], ys: T2[]): T3[]
    export function listRef<T>(i: number, xs: Array<T>): T
    export function hashRef<T>(k: string, xs: { [key: string]: T }): T
    export function buildList<T>(n: number, f: (n: number) => T): Array<ReturnType<typeof f>>
    export function title(s: string): string
    export function uniq(xs: Array<any>): Array<any>
    export function memoize<T>(f: T): typeof f
    export function sorted<T>(xs: Array<T>): Array<T>
    export function noop(d: any): void
    export function id<T>(it: T): T
    export function before(beforeFunc: Function, func: Function): Function
    export function after(func: Function, afterFunc: Function): Function
    export function throttle(func: Function, delay: number): Function
    export function debounce(func: Function, delay: number): Function
    export function lazy(f: Function): Function
    export function listTo(x: number, y: number): Array<number>
    export function listFrom(x: number, y: number): Array<number>
    export function bool(it: any): boolean
    export function pipe<T, U>(x: T, ...fs: Array<PipeFunction<any, any>>): U
    export function cond<T>(...conditions: Array<[boolean, any] | [string, any]>): T
    export function expt(n: number, power: number): number
    export function replaceAll(x1: string, x2: string, xs: string): string
    export function removeAll(x: string, xs: string): string
    export function stringAppend(s1: string, s2: string): string
    export function iter<T>(xs: Array<T>): Iterator<T>
    export const say: typeof console.log
    export function indexOf<T>(x: T, xs: T[]): number
    export function isNumeric(xs: string): boolean
    export const exmp1: typeof Math.expm1
    export function replace(x1: string, x2: string, xs: string): string
    export function trimStart(s: string): string
    export function trimEnd(s: string): string
    export function input(s: string): string
    export function charcode(s: string): string
    export function makeHash(xs: [string, any]): { [key: string]: any }
    export function fold0<T>(f: (x: T, y: T) => T, xs: Array<T>): T
    export function foldl0<T>(f: (x: T, y: T) => T, xs: T[]): T
    export function fodlr0<T>(f: (x: T, y: T) => T, xs: Array<T>): T
    export function transpose<T>(xs: T[]): T[]
    export function chunk<T>(arr: T[], size: number): T[][]
    export type sleepOption = "milliseconds" | "seconds" | "hours" | "days"
    export function sleep(amount: number, type?: sleepOption): void
    export function lambda<T>(f: (...args: any) => T): typeof f
    export const fn: typeof lambda
    export function exec(cmd: string): string
    export function foldstr(f: (x: string, y: string) => string, xs: Array<string>): string
    export function foldt(f: (x: boolean, y: boolean) => boolean, xs: Array<boolean>): boolean
    export function foldf(f: (x: boolean, y: boolean) => boolean, xs: Array<boolean>): boolean
    export function exec(cmd: string): string
    export const λ: typeof fn
    export function palindrome(s: string): boolean
    export function changeIn(f: number, i: number): number
    export function factorial(n: number): number
    export function ǃ(n: number): number
    export function comb(n: number, k: number): number
    export const nCr: typeof comb
    export function sin(n: number): number
    export function cos(n: number): number
    export function tan(n: number): number
    export function arccsc(n: number): number
    export function arcsec(n: number): number
    export function arctan(n: number): number
    export function toRad(n: number): number
    export function toDeg(n: number): number
    export function abs(n: number): number
    export function signum(n: number): number
    export function floor(n: number): number
    export function ceil(n: number): number
    export function sqrt(n: number): number
    export function cbrt(n: number): number
    export function gcd(n: number, m: number): number
    export function lcm(n: number, m: number): number
    export function dsin(n: number): number
    export function dcos(n: number): number
    export function dtan(n: number): number
    export function dcsc(n: number): number
    export function dsec(n: number): number
    export function dcot(n: number): number
    export function darcsin(n: number): number
    export function darccos(n: number): number
    export function darctan(n: number): number
    export function darccsc(n: number): number
    export function darcsec(n: number): number
    export function darccot(n: number): number
    export const ln: typeof Math.log
    export const log10: typeof Math.log10
    export const log1p: typeof Math.log1p
    export const log2: typeof Math.log2
    export function log(base: number, n: number): number
    export function even(n: number): boolean
    export function odd(n: number): boolean
    export function E(n: number, ex: number): number
    export const G: 6.67384e-11
    export const earthMass: 5.97219e24
    export const earthRadius: 6378100
    export function recip(n: number): number
    export const ge: 9.797759126737114
    export function isNaturalNumber(n: number): boolean
    export function isInt(n: number): boolean
    export function summation(n: number, i: number, f: (m: number) => number): number
    export function Σ(xs: number[]): number
    export function invertMatrix(A: number[][]): number[][]
    export function addMatrix(A: number[][], B: number[][]): number[][]
    export function subtractMatrix(A: number[][], B: number[][]): number[][]
    export function multiplyMatrix(A: number[][], B: number[][]): number[][]
    export function divideMatrix(A: number[][], B: number[][]): number[][]
    export const gn: 9.807
    export const g: 9.807
    export const elementaryCharge: 1.602176634e-19
    export const e: typeof Math.E
    export const C: 299792458
    export const π: typeof Math.PI
    export const pi: typeof Math.PI
    export const tau: 6.283185307179586
    export const τ: 6.283185307179586
    export const magneticConstant: 0.0000012566370614359173
    export const μ0: 0.0000012566370614359173
    export const vacuumPermittivity: 8.854187817620389e-12
    export const ε0: 8.854187817620389e-12
    export const Ke: 8987551787.368177
    export const mα: 6.69048768e-27
    export const alphaParticleMass: 6.69048768e-27
    export const Qα: 3.2043532680000003e-19
    export const alphaParticleCharge: 3.2043532680000003e-19
    export const gcf: typeof gcd
    export function append<T, N>(xs: T[], ys: N[]): (T | N)[]
    export function listAppend<T, N>(xs: T[], ys: N[]): (T | N)[]
    export function stringAppend(s1: string, s2: string): string
    export const ƒ: typeof lambda
    export const ǀ: typeof len
    export const ǁ: typeof abs
    export function Δ<T, N>(xs: T[], ys: N[]): (T | N)[]
    export function difference<T, N>(xs: T[], ys: N[]): (T | N)[]
    export function ϵ<T>(x: T, xs: T[]): boolean
    export function ᐡ<T, N>(xs: T[], ys: N[]): (T | N)[]
    export const union: typeof ᐡ
    export function ᐢ<T, N>(xs: T[], ys: N[]): (T | N)[]
    export const intersection: typeof ᐢ
    export function properSubset<T, N>(xs: T[], ys: N[]): boolean
    export function properSuperset<T, N>(xs: T[], ys: N[]): boolean
    export const ᑦ: typeof properSubset
    export const ᐣ: typeof properSuperset
    export function negate(n: number): number
    export const neg: typeof negate
    export const ᐨ: typeof neg
    export const ᕀ: typeof neg
    export const Ɩ: typeof Math.floor
    export function to_set<T>(xs: T[]): Set<T>
    export function Ø<T>(xs: T[]): boolean
    export class Vec<T> {
        private arr: T[]
        constructor(arr: Vec<T> | T[] | Set<T> | Iterable<T> | ReadonlyArray<T> | string)
        static from<U>(arr: Vec<U> | U[] | Set<U> | Iterable<U> | ReadonlyArray<U> | string): Vec<U>
        static append<N, M>(xs: Vec<N>, ys: Vec<M>): Vec<N | M>
        unwrap(): T[]
        clone(): Vec<T>
        id(): Vec<T>
        o(): Vec<T>
        push(item: T): this
        pop(): T | undefined
        len(): number
        get(i: number): T
        empty(): boolean
        clear(): this
        for_each(callback: (item: T, i?: number) => void): void
        map<U>(callback: (item: T, i?: number) => U): Vec<U>
        filter(callback: (item: T, i?: number) => boolean): Vec<T>
        reject(callback: (item: T, i?: number) => boolean): Vec<T>
        partition(callback: Parameters<typeof this.filter>[0]): Vec<Vec<T>>
        any(f: Parameters<typeof this.filter>[0]): boolean
        all(f: Parameters<typeof this.filter>[0]): boolean
        flatten<U>(): Vec<U>
        slice(start?: number, end?: number): Vec<T>
        take(n: number): Vec<T>
        drop(n: number): Vec<T>
        rev(): Vec<T>
        concat<N>(other: Vec<N>): Vec<T | N>
        uniq(): Vec<T>
        chunk(size: number): Vec<Vec<T>>
        find(predicate: (item: T, index: number) => boolean): T | undefined
        index_of(item: T): number
        last_index_of(item: T): number
        index_of_item(item: T, fromIndex: number | 0): number
        to_s(): string
        shuffle(): Vec<T>
        fold1(f: (z: number, x: number) => number): number
        fold(f: (z: T, x: T) => T, z: T): T
        foldl(f: (z: T, x: T) => T, z: T): T
        foldr(f: (z: T, x: T) => T, z: T): T
        foldr1(f: (z: number, x: number) => number): number
        foldr0(f: (z: number, x: number) => number): number
        foldl0(f: (z: number, x: number) => number): number
        foldl1(f: (z: number, x: number) => number): number
        fold0(f: (z: number, x: number) => number): number
        first(): T | undefined
        last(): T | undefined
        freq(f: Parameters<typeof this.filter>[0]): number
        freq_of(k: T): number
        map2<U, N>(f: (x: T, y: N) => U, arr: Vec<N> | N[] | Set<N>): Vec<U>
        compact(): Vec<T>
        sum(): number
        avg(): number
        product(): number
        mem(k: T): boolean
        iter(): IterableIterator<[number, T]>
        rem(k: T): this
        sort_by(f: (x: T, y: T) => number): Vec<T>
        to_set(): Set<T>
        Ø(): true | false
        difference<N>(arr: ConstructorParameters<typeof Vec<N>>[0]): Vec<N | T>
        Δ<N>(arr: ConstructorParameters<typeof Vec<N>>[0]): Vec<N | T>
        intersection<N>(arr: ConstructorParameters<typeof Vec<N>>[0]): Vec<N | T>
        ᐢ<N>(arr: ConstructorParameters<typeof Vec<N>>[0]): Vec<N | T>
        ϵ(x: T): boolean
        union<N>(arr: ConstructorParameters<typeof Vec<N>>[0]): Vec<N | T>
        ᐡ<N>(arr: ConstructorParameters<typeof Vec<N>>[0]): Vec<N | T>
        properSubset<N>(arr: ConstructorParameters<typeof Vec<N>>[0]): boolean
        ᑦ<N>(arr: ConstructorParameters<typeof Vec<N>>[0]): boolean
        ᑦR(): boolean
        ᑦN(): boolean
    }
}
