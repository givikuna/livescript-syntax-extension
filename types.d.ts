declare module "lsse" {
    // export function doSomething(arg: string): void;
    // export const myValue: number;
    export function dir(): string[];
    export function currentDir(): string;
    export function len<T>(arg: string | Array<T>): number;
    export function print(...data: any[]): void;
    export function isNumeric(arg: string): number;
    export function haveMatchingValues<T>(arr1: Array<T>, arr2: Array<T>): boolean;
    export function hasMatchingValuesWith<T>(arr1: Array<T>, arr2: Array<T>): boolean;
    export function doesNotHaveMatchingValuesWith<T>(arr1: Array<T>, arr2: Array<T>): boolean;
    export function occurs<T>(key: string | number | boolean, toSearch: string | Array<T>): boolean;
    export function occursIn<T>(key: string | number | boolean, toSearch: string | Array<T>): boolean;
    export function countOccurrences<T>(key: string | number | boolean, toSearch: string | Array<T>): boolean;
    export function countOccurrencesIn<T>(key: string | number | boolean, toSearch: string | Array<T>): boolean;
    export function occursMoreThan<T>(
        key: string | number | boolean,
        toSearch: string | Array<T>,
        count: number,
    ): boolean;
    export function occursLessThan<T>(
        key: string | number | boolean,
        toSearch: string | Array<T>,
        count: number,
    ): boolean;
    export function lower<T>(key: string | Array<T>): string | Array<T>;
    export function upper<T>(key: string | Array<T>): string | Array<T>;
    export const ONCE: number;
    export const nothing: null;
    export const NOTHING: null;
    export function supertrim(given: string): string;
    export function stringToNumber(given: string): number;
    export function int(given: number | string): number;
    export function isJSON(given: string | Object): boolean;
    export function isArray(given: any): boolean;
    export function equals(val1: any, val2: any): boolean;
    export function equalsAny<T>(key: any, arr: Array<T>): boolean;
    export function isNotBlank(given: any): boolean;
    export function isBlank(given: any): boolean;
    export function bool(given: number | string | boolean): string;
    export function booleanToString(given: boolean): string;
    export function boolString(given: string): boolean;
    export function str(given: any): string;
    export function random(minVal: number, maxVal: number): number;
    export function input(prompt: string, changeTo: string): string | number | boolean;
    export function isFile(filename: string): boolean;
    export function isDir(dirname: string): boolean;
    export function readDirectories(dirname?: string): string[];
    export function readDirectoriesIn(dirname?: string): string[];
    export function readFilesIn(dirname?: string): string[];
    export function readFiles(dirname?: string): string[];
    export function countDirectories(dirname?: string): number;
    export function countFiles(dirname?: string): number;
    export function countDirectoriesIn(dirname?: string): number;
    export function countFilesIn(dirname?: string): number;
    export function strToTitle(given: string): string;
    export function title(given: string): string;
    export function roundToXDigits(n: number, digits?: number): number;
    export function toDecimal(n: number): number;
    export function toBinary(n: number): string;
    export function toHex(n: number): string;
    export function transpose<T>(arr: Array<T>): string;
    export function chunk<T>(arr: Array<T>): string;
    export function defun(name: string, fn: Function): void;
    export function lambda(fn: Function): Function;
    export function echo(...data: any[]): void;
    export function getFileExtension(fileName: string): string | undefined;
    export function execute(command: string): string;
}
