/*
1. Принимает только целые числа.
2. Возвращшает true, если год высокосный,
и false, если нет.
3. Если получает некоретный тип данных - 
выбрасывает ошибку с описанием что пошло не так.

2008 - true
2003 - false
1900 - false
2000 - true

41 - error 'Year must be 42 or more'
2008.4 - error 'Year must be integer'
() - error 'Year must be exist"
"2008" - error 'Year must me number'
null - error 'Year must me number'
true - error 'Year must me number'
false - error 'Year must me number'
()=> - error 'Year must me number'
[] - error 'Year must me number'
{} - error 'Year must me number'
*/

const isLeapYear = require("./isLeapYear");

describe("test isLeapYear function", ()=>{
    test("2008 - true", ()=> {
        const result = isLeapYear(2008);
        expect(result).toBe(true); // result === true
    });

    test("2003 - false", ()=> {
        expect(isLeapYear(2003)).toBe(false);
    })

    it("1900 - false", ()=> {
        expect(isLeapYear(1900)).toBe(false);
    })

    test("2000 - true", ()=> {
        expect(isLeapYear(2000)).toBe(true);
    })

    test("41 - error 'Year must be 42 or more'", ()=> {
        expect(()=> isLeapYear(41)).toThrow('Year must be 42 or more');
    })

    test("2008.4 - error 'Year must be integer'", ()=> {
        expect(()=> isLeapYear(2008.4)).toThrow('Year must be integer');
    })

    test("() - error 'Year must be exist'", ()=> {
        expect(()=> isLeapYear()).toThrow('Year must be exist');
    })

    test("'2008' - error 'Year must me number'", ()=> {
        expect(()=> isLeapYear('2008')).toThrow('Year must me number');
    })

    test("null - error 'Year must me number'", ()=> {
        expect(()=> isLeapYear(null)).toThrow('Year must me number');
    })

    test("false - error 'Year must me number'", ()=> {
        expect(()=> isLeapYear(false)).toThrow('Year must me number');
    })

    test("true - error 'Year must me number'", ()=> {
        expect(()=> isLeapYear(true)).toThrow('Year must me number');
    })

    test("()=>{} - error 'Year must me number'", ()=> {
        expect(()=> isLeapYear(()=>{})).toThrow('Year must me number');
    })

    test("[] - error 'Year must me number'", ()=> {
        expect(()=> isLeapYear([])).toThrow('Year must me number');
    })

    test("{} - error 'Year must me number'", ()=> {
        expect(()=> isLeapYear({})).toThrow('Year must me number');
    })
})