// ! - чем меньше тест, тем лучше
// лучше написать несколько маленьких тестов, чем один большой

import {mult, splitIntoWords, sum} from "./01";

let a: number, b: number, c: number;

// всегда выполняется перед каждым тестом
beforeEach(() => {
    // data
    a = 1;
    b = 2;
    c = 3;
})

// 1 параметр - описание теста, 2 - сам тест
test('sum should be correct', () => {
    // 1 data - подготовительные (исходные) данные
    // const a = 1
    // const b = 2
    // const c = 3

    // 2 action - действие
    const result1 = sum(a, b);
    const result2 = sum(b, c);
    const result3 = sum(a, c);

    // 3 expect result - какой ожидаем результат
    expect(result1).toBe(3);
    expect(result2).toBe(5);
    expect(result3).toBe(4);
})

test('multiply should be correct', () => {
    // action
    const result1 = mult(a, b);
    const result2 = mult(b, c);
    const result3 = mult(a, c);

    // expect result
    expect(result1).toBe(2);
    expect(result2).toBe(6);
    expect(result3).toBe(3);
})

test('spliting into words should be correct', () => {
    // data
    const sent1 = "Hello my friends!";
    const sent2 = "JS - the best programming language";

    // action
    const result1 = splitIntoWords(sent1)
    const result2 = splitIntoWords(sent2)

    // expect result
    expect(result1.length).toBe(3);
    expect(result1[0]).toBe('hello');
    expect(result1[1]).toBe('my');
    expect(result1[2]).toBe('friends');

    expect(result2.length).toBe(6);
    expect(result2[0]).toBe('js');
    expect(result2[1]).toBe('-');
    expect(result2[2]).toBe('the');
    expect(result2[3]).toBe('best');
    expect(result2[4]).toBe('programming');
    expect(result2[5]).toBe('language');
})