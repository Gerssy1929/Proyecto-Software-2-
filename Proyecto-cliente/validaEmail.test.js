const { isValidEmail } = require('./emailValidator');

describe('EmailValidator', () => {
  it('valida un email con formato correcto', () => {
    const validEmail = 'test@example.com';
    expect(isValidEmail(validEmail)).toBe(true);
  });

  it('invalida un email sin @', () => {
    const invalidEmail = 'testexample.com';
    expect(isValidEmail(invalidEmail)).toBe(false);
  });

  it('invalida un email sin dominio', () => {
    const invalidEmail = 'test@example';
    expect(isValidEmail(invalidEmail)).toBe(false);
  });

  it('invalida un email sin nombre de usuario', () => {
    const invalidEmail = '@example.com';
    expect(isValidEmail(invalidEmail)).toBe(false);
  });

  it('invalida un email con espacios en blanco', () => {
    const invalidEmail = 'test @example.com';
    expect(isValidEmail(invalidEmail)).toBe(false);
  });
});
