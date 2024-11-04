/**
 * 
 */

export function everyCombination(input: number[]): number[][] {
    if (input.length === 3) return removeDuplicates(everyCombination3(input));
    if (input.length === 4) return removeDuplicates(everyCombination4(input));
    if (input.length === 5) return removeDuplicates(everyCombination5(input));
    if (input.length === 6) return removeDuplicates(everyCombination6(input));
    return [];
}

// 6 combinations
export function everyCombination3(input: number[]): number[][] {
    return [
        [input[0], input[1], input[2]],
        [input[0], input[2], input[1]],
        [input[1], input[0], input[2]],
        [input[1], input[2], input[0]],
        [input[2], input[0], input[1]],
        [input[2], input[1], input[0]]
    ];
}

// 4 x 6 combinations = 24
export function everyCombination4(input: number[]): number[][] {
    const all: number[][] = [];
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 6; j++) {
            //@ts-ignore
            all.push([input[i]].concat(everyCombination3(input.filter((number, index) => index !== i))[j]));
        }
    }
    return all;
}

// 5 x 24 combinations = 120
export function everyCombination5(input: number[]): number[][] {
    const all: number[][] = [];
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 24; j++) {
            //@ts-ignore
            all.push([input[i]].concat(everyCombination4(input.filter((number, index) => index !== i))[j]));
        }
    }
    return all;
}

// 6 x 120 combinations = 720
export function everyCombination6(input: number[]): number[][] {
    const all: number[][] = [];
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 120; j++) {
            //@ts-ignore
            all.push([input[i]].concat(everyCombination5(input.filter((number, index) => index !== i))[j]));
        }
    }
    return all;
}

function removeDuplicates(input: number[][]): number[][] {
    return Array.from(new Set(input.map(arr => arr.join('-')))).map(str => str.split('-').map(str => parseInt(str)));
}