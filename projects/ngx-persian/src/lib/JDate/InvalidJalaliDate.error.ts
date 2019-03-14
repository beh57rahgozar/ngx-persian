export class InvalidJalaliDateError extends Error {
  constructor(...params) {
    super(...params);

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    // @ts-ignore
    if (Error.captureStackTrace) {
      // @ts-ignore
      Error.captureStackTrace(this, InvalidJalaliDateError);
    }

    this.message = 'Invalid jalali date.';
  }
}
