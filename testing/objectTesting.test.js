/**
 * testing objects
 */

//test(description of test, callback function)
test('testing the objects', () => {
    //actual object
    const data = {
        one:1
    }
    data.two = 3;
    expect(data).toEqual({ two:3, one:1 });
    expect(data).not.toEqual({three: 4});
    expect(data).not.toBe({ two:3, one:1 });
})

const {sum} = require('./demo');

test("testing sum method", ()=>{
    expect(sum(5, 6)).toEqual(11);
    expect(sum(5, 4)).not.toEqual(11);
    expect(sum(5, 4)).toBe(9);
})


/**
 * test for null
 */

test('test for null', () => {
    let value = null;
    expect(value).toBeNull(); //matchers
})

/**
 * test for undefined
 */

 test('test for undefined', () => {
    let value = undefined;
    expect(value).toBeUndefined(); //matchers
})

/**
 * test for something properly defined
 */

 test('test for defined', () => {
    let value = 10;
    expect(value).toBeDefined(); //matchers
})

/**
 * testing the boolean values
 */

test('testing the boolean values', ()=>{
    let x =10;
    let y =true;
    let z = null;
    let a = undefined;
    let b = NaN;

    expect(x).toBeTruthy();
    expect(y).toBeTruthy();
    expect(z).toBeFalsy();
    expect(a).toBeFalsy();
    expect(b).toBeFalsy();
})

/**
 * matching strings
 */

test("testing strings", ()=>{
    expect("Soubhik").toMatch(/bhi/);
    expect("Soubhik").not.toMatch(/xyz/);
})


/**
 * testing numbers
 */

test("tesing numbers", () =>{
    const output = 4;

    expect(output).toBe(4);
    expect(output).toEqual(4);
    expect(output).toBeGreaterThan(2);
    expect(output).toBeGreaterThanOrEqual(2);
    expect(output).toBeLessThan(10);
    expect(output).toBeLessThanOrEqual(4);
})