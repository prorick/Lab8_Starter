// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

//phone
test('phone number correct (555) 650-9940', () => {
    let phone = functions.isPhoneNumber('(555) 650-9940');
    expect(phone).toBe(true);
  });

  test('phone number wrong: 123456789', () => {
    let phone = functions.isPhoneNumber('123456789');
    expect(phone).toBe(false);
  });

  test('phone number correct (123) 456-7890', () => {
    let phone = functions.isPhoneNumber('(123) 456-7890');
    expect(phone).toBe(true);
  });

  test('phone number wrong: yuh', () => {
    let phone = functions.isPhoneNumber('yuh');
    expect(phone).toBe(false);
  });

//email
  test('email correct: llama@love.com', () => {
    let email = functions.isEmail('llama@love.com');
    expect(email).toBe(true);
  });

  test('email correct: student@ucsd.com', () => {
    let email = functions.isEmail('student@ucsd.com');
    expect(email).toBe(true);
  });

  test('email wrong: llama@love', () => {
    let email = functions.isEmail('llama@love');
    expect(email).toBe(false);
  });
  test('email wrong: love.com', () => {
    let email = functions.isEmail('love.com');
    expect(email).toBe(false);
  });



//Strong Password
test('Strong Password correct: TaylorSwift', () => {
    let pass = functions.isStrongPassword('TaylorSwift');
    expect(pass).toBe(true);
});
test('Strong Password correct: iamahamburger12', () => {
    let pass = functions.isStrongPassword('iamahamburger12');
    expect(pass).toBe(true);
});
test('Strong Password wrong: 123love', () => {
    let pass = functions.isStrongPassword('123love');
    expect(pass).toBe(false);
});
test('Strong Password wrong: hi', () => {
    let pass = functions.isStrongPassword('hi');
    expect(pass).toBe(false);
});

//Date
test('Date correct: 5/21/2001', () => {
    let date = functions.isDate('5/21/2001');
    expect(date).toBe(true);
});
test('Date correct: 11/11/1900', () => {
    let date = functions.isDate('11/11/1900');
    expect(date).toBe(true);
});
test('Date wrong: May212001', () => {
    let date = functions.isDate('May212001');
    expect(date).toBe(false);
});
test('Date wrong: 1/2/00', () => {
    let date = functions.isDate('1/2/00');
    expect(date).toBe(false);
});

//hex
test('Hex correct: ABC123', () => {
    let hex = functions.isHexColor('ABC123');
    expect(hex).toBe(true);
});
test('Hex correct: C23', () => {
    let hex = functions.isHexColor('C23');
    expect(hex).toBe(true);
});
test('Hex wrong: G12F12', () => {
    let hex = functions.isHexColor('G12F12');
    expect(hex).toBe(false);
});
test('Hex wrong: FFF22', () => {
    let hex = functions.isHexColor('FFF22');
    expect(hex).toBe(false);
});