/**
 * 
 */

import * as EXPECT from '@brendangooch/jest-expect';
import { everyCombination } from "./index.js";

testAll();
function testAll(): void {
    describe('every-combination', () => {
        test3Numbers();
        test4Numbers();
        test5Numbers();
        test6Numbers();
    });
}

function test3Numbers(): void {
    describe('3 numbers', () => {

        test('6 combinations', () => {
            EXPECT.toBe(everyCombination([1, 2, 3]).length, 6);
        });

        test('all unique', () => {
            EXPECT.toBe(Array.from(new Set(everyCombination([1, 2, 3]).map(arr => arr.join('-')))).length, 6);
        });

        describe('removes duplicates', () => {

            test('2 duplicates = 3 combinations', () => {
                EXPECT.toBe(everyCombination([1, 2, 2]).length, 3);
            });

            test('3 duplicates = 1 combination', () => {
                EXPECT.toBe(everyCombination([1, 1, 1]).length, 1);
            });

        });

    });
}

function test4Numbers(): void {
    describe('4 numbers', () => {

        test('24 combinations', () => {
            EXPECT.toBe(everyCombination([1, 2, 3, 4]).length, 24);
        });

        test('all unique', () => {
            EXPECT.toBe(Array.from(new Set(everyCombination([1, 2, 3, 4]).map(arr => arr.join('-')))).length, 24);
        });

        describe('removes duplicates', () => {

            test('2 duplicates = 12 combinations', () => {
                EXPECT.toBe(everyCombination([1, 1, 3, 4]).length, 12);
            });

            test('3 duplicates = 4 combination', () => {
                EXPECT.toBe(everyCombination([1, 1, 1, 4]).length, 4);
            });

            test('4 duplicates = 1 combination', () => {
                EXPECT.toBe(everyCombination([1, 1, 1, 1]).length, 1);
            });

        });

    });
}

function test5Numbers(): void {
    describe('5 numbers', () => {

        test('120 combinations', () => {
            EXPECT.toBe(everyCombination([1, 2, 3, 4, 5]).length, 120);
        });

        test('all unique', () => {
            EXPECT.toBe(Array.from(new Set(everyCombination([1, 2, 3, 4, 5]).map(arr => arr.join('-')))).length, 120);
        });

        describe('removes duplicates', () => {

            test('2 duplicates = 60 combinations', () => {
                EXPECT.toBe(everyCombination([1, 1, 3, 4, 5]).length, 60);
            });

            test('3 duplicates = 20 combinations', () => {
                EXPECT.toBe(everyCombination([1, 1, 1, 4, 5]).length, 20);
            });

            test('4 duplicates = 5 combination5', () => {
                EXPECT.toBe(everyCombination([1, 1, 1, 1, 5]).length, 5);
            });

            test('5 duplicates = 1 combination', () => {
                EXPECT.toBe(everyCombination([1, 1, 1, 1, 1]).length, 1);
            });

        });

    });
}

function test6Numbers(): void {
    describe('6 numbers', () => {

        test('720 combinations', () => {
            EXPECT.toBe(everyCombination([1, 2, 3, 4, 5, 6]).length, 720);
        });

        test('all unique', () => {
            EXPECT.toBe(Array.from(new Set(everyCombination([1, 2, 3, 4, 5, 6]).map(arr => arr.join('-')))).length, 720);
        });

        describe('removes duplicates', () => {

            test('2 duplicates = 360 combinations', () => {
                EXPECT.toBe(everyCombination([1, 1, 3, 4, 5, 6]).length, 360);
            });

            test('3 duplicates = 120 combinations', () => {
                EXPECT.toBe(everyCombination([1, 1, 1, 4, 5, 6]).length, 120);
            });

            test('4 duplicates = 30 combinations', () => {
                EXPECT.toBe(everyCombination([1, 1, 1, 1, 5, 6]).length, 30);
            });

            test('5 duplicates = 6 combinations', () => {
                EXPECT.toBe(everyCombination([1, 1, 1, 1, 1, 6]).length, 6);
            });

            test('6 duplicates = 1 combination', () => {
                EXPECT.toBe(everyCombination([1, 1, 1, 1, 1, 1]).length, 1);
            });

        });

    });
}