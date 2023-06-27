import * as assert from "assert";
import {generateTriangle} from "./index";

describe('tests', () => {
    it('test empty triangle', () => {
        const expectedOutput: number[][] = [[]];
        expect(expectedOutput).toEqual(generateTriangle(0));
    })
    // remove 'x' to run test
    xit('test triangle size 1', () => {
        const expectedOutput: number[][] = [[1]];
        expect(expectedOutput).toEqual(generateTriangle(1));
    })
    xit('test triangle size 2', () => {
        const expectedOutput: number[][] = [[1], [1, 2]];
        expect(expectedOutput).toEqual(generateTriangle(2));
    })
    xit('should testTriangleWithTwoRows', () => {
        const expectedOutput: number[][] = [[1], [1, 1], [1, 2, 1]];
        expect(expectedOutput).toEqual(generateTriangle(3));
    })

    xit('should testTriangleWithFourRows', () => {
        const expectedOutput: number[][] = [
            [1],
            [1, 1],
            [1, 2, 1],
            [1, 3, 3, 1],
        ];

        expect(expectedOutput).toEqual(generateTriangle(4));
    })

    xit('should testTriangleWithFiveRows', () => {
        const expectedOutput = [
            [1],
            [1, 1],
            [1, 2, 1],
            [1, 3, 3, 1],
            [1, 4, 6, 4, 1]
        ];
        expect(expectedOutput).toEqual(generateTriangle(5));
    })

    xit('should testTriangleWithTenRows', () => {
        const expectedOutput = [
            [1],
            [1, 1],
            [1, 2, 1],
            [1, 3, 3, 1],
            [1, 4, 6, 4, 1],
            [1, 5, 10, 10, 5, 1],
            [1, 6, 15, 20, 15, 6, 1],
            [1, 7, 21, 35, 35, 21, 7, 1],
            [1, 8, 28, 56, 70, 56, 28, 8, 1],
            [1, 9, 36, 84, 126, 126, 84, 36, 9, 1]
        ];
    })
})
