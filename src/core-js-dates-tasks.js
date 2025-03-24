/** ********************************************************************************************
 *                                                                                             *
 * Please read the following tutorial before implementing tasks:                               *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date       *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Representing_dates_times      *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl       *
 *                                                                                             *
 ********************************************************************************************* */

/**
 * By the passed date returns the number of seconds elapsed since 00:00 01.01.1970.
 *
 * @param {string} date - date and time.
 * @return {number} milliseconds in timestamp.
 *
 * @example:
 * '01 Jan 1970 00:00:00 UTC' => 0
 * '04 Dec 1995 00:12:00 UTC' => 818035920000
 */
function dateToTimestamp(date) {
  return new Date(date).getTime();
}

/**
 * Returns the time in hh:mm:ss format from the received date.
 *
 * @param {Date} date - date.
 * @return {string} time in hh:mm:ss format.
 *
 * @example:
 * Date(2023, 5, 1, 8, 20, 55) => '08:20:55'
 * Date(2015, 10, 20, 23, 15, 1) => '23:15:01'
 */
function getTime(date) {
  const a = new Date(date);
  const a1 = a.getHours() >= 10 ? a.getHours() : `0${a.getHours()}`;
  const a2 = a.getMinutes() >= 10 ? a.getMinutes() : `0${a.getMinutes()}`;
  const a3 = a.getSeconds() >= 10 ? a.getSeconds() : `0${a.getSeconds()}`;
  return `${a1}:${a2}:${a3}`;
}

/**
 * Returns the name of the day of the week for a given date string.
 *
 * @param {string} date - date and time.
 * @return {string} the name of the day of the week
 *
 * @example:
 * '01 Jan 1970 00:00:00 UTC' => 'Thursday'
 * '03 Dec 1995 00:12:00 UTC' => 'Sunday'
 * '2024-01-30T00:00:00.000Z' => 'Tuesday'
 */
function getDayName(date) {
  const a = new Date(date);
  const mass = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    0: 'Sunday',
  };
  const a2 = a.getDay();
  return mass[a2];
}

/**
 * Returns the date of the next Friday from a given date.
 *
 * @param {Date} date
 * @return {Date}
 *
 * @example:
 * Date('2024-02-03T00:00:00Z') => Date('2024-02-09T00:00:00Z')
 * Date('2024-02-13T00:00:00Z') => Date('2024-02-16T00:00:00Z')
 * Date('2024-02-16T00:00:00Z') => Date('2024-02-23T00:00:00Z')
 */
function getNextFriday(date) {
  const a = new Date(date);
  const b = new Date(a.getFullYear(), a.getMonth(), a.getDate() + 7);
  for (let i = a, n = 0; i <= b; i.setDate(i.getDate() + 1)) {
    const a4 = i.getDay();
    if (a4 === 5 && n > 0) {
      return i;
    }
    n += 1;
  }
  return a;
}

/**
 * Returns the number of days in a specified month and year.
 *
 * @param {number} month - The month as a number (1 for January, 2 for February, etc.).
 * @param {number} year - The year as a four-digit number.
 * @return {number}
 *
 * @example:
 * 1, 2024 => 31
 * 2, 2024 => 29
 */
function getCountDaysInMonth(month, year) {
  const a = new Date(year, month, 0, 0, 0, 0);
  return a.getDate();
}

/**
 * Returns the total number of days between two dates, including both the start and end dates.
 *
 * @param {string} dateStart - The start date of the period in ISO 8601 format.
 * @param {string} dateEnd - The end date of the period in ISO 8601 format.
 * @return {number} - The total count of days in the period.
 *
 * @example:
 * '2024-02-01T00:00:00.000Z', '2024-02-02T00:00:00.000Z'  => 2
 * '2024-02-01T00:00:00.000Z', '2024-02-12T00:00:00.000Z'  => 12
 */
function getCountDaysOnPeriod(dateStart, dateEnd) {
  const a = new Date(dateStart);
  const b = new Date(dateEnd);
  const summ = (b - a) / 1000 / 60 / 60 / 24;
  return summ + 1;
}

/**
 * Returns true if a given date is within a specified range, including both the start and end dates.
 *
 * @typedef {{
 * start: string, // The start date in ISO 8601 format (e.g., 'YYYY-MM-DD').
 * end: string    // The end date in ISO 8601 format.
 * }} DatePeriod
 *
 * @param {string} date - The date to check, in ISO 8601 format.
 * @param {DatePeriod} period - The period to check against.
 * @return {boolean} - True if the date is within the range, false otherwise.
 *
 * @example:
 * '2024-02-01', { start: '2024-02-02', end: '2024-03-02' } => false
 * '2024-02-02', { start: '2024-02-02', end: '2024-03-02' } => true
 * '2024-02-10', { start: '2024-02-02', end: '2024-03-02' } => true
 */
function isDateInPeriod(date, period) {
  const arr1 = date.split('-');
  const arr2 = period.start.split('-');
  const arr3 = period.end.split('-');
  const a = new Date(arr1[0], arr1[1], arr1[2], 0, 0, 0);
  const b = new Date(arr2[0], arr2[1], arr2[2], 0, 0, 0);
  const c = new Date(arr3[0], arr3[1], arr3[2], 0, 0, 0);
  return a >= b && a <= c;
}

/**
 * Returns the date formatted in 'M/D/YYYY, hh:mm:ss a'.
 *
 * @param {string} date - The date to be formatted, in ISO 8601 format (e.g., 'YYYY-MM-DDTHH:mm:ss.sssZ').
 * @return {string} - The date formatted in 'Month/Day/Year, Hour:Minute:Second AM/PM'.
 *
 * @example:
 * '2024-02-01T15:00:00.000Z' => '2/1/2024, 3:00:00 PM'
 * '1999-01-05T02:20:00.000Z' => '1/5/1999, 2:20:00 AM'
 * '2010-12-15T22:59:00.000Z' => '12/15/2010, 10:59:00 PM'
 */
function formatDate(date) {
  const a = new Date(date);
  const a2 = a.getUTCHours() >= 12 ? 'PM' : 'AM';
  const a3 =
    a.getUTCMinutes() >= 9 ? `${a.getUTCMinutes()}` : `0${a.getUTCMinutes()}`;
  const a4 =
    a.getUTCSeconds() >= 9 ? `${a.getUTCSeconds()}` : `0${a.getUTCSeconds()}`;
  let b;
  if (a2 === 'PM') {
    if (
      a.getUTCHours() === 12 &&
      a.getUTCMinutes() === 59 &&
      a.getUTCMinutes() === 59
    ) {
      b = `${a.getUTCHours()}:${a3}:${a4}`;
    } else {
      b = `${a.getUTCHours() - 12}:${a3}:${a4}`;
    }
  } else {
    b = `${a.getUTCHours()}:${a3}:${a4}`;
  }
  return `${a.getUTCMonth() + 1}/${a.getUTCDate()}/${a.getUTCFullYear()}, ${b} ${a2}`;
}

/**
 * Returns the total number of weekend days (Saturdays and Sundays) in a specified month and year.
 *
 * @param {number} month - The source month as a number (1 for January, 2 for February, etc.).
 * @param {number} year - The source year as a four-digit number.
 * @return {number} - The total count of weekend days in the month.
 *
 * @example:
 * 5, 2022 => 9
 * 12, 2023 => 10
 * 1, 2024 => 8
 */
function getCountWeekendsInMonth(month, year) {
  const a = new Date(year, month - 1, 1);
  const b = new Date(year, month, 0);
  let summ = 0;
  for (let i = a; i <= b; i.setDate(i.getDate() + 1)) {
    const a4 = i.getDay();
    if (a4 === 0 || a4 === 6) {
      summ += 1;
    }
  }
  return summ;
}

/**
 * Returns the week number of the year for a given date.
 * The first week of the year is defined according to ISO8601.
 * The first day of the week is Monday.
 *
 * @param {Date} date - The date for which to find the week number.
 * @return {number} - The week number of the year.
 *
 * @example:
 * Date(2024, 0, 3) => 1
 * Date(2024, 0, 31) => 5
 * Date(2024, 1, 23) => 8
 */
function getWeekNumberByDate(date) {
  const a = new Date(date);
  const s = a.getFullYear();
  const b = new Date(s, 0, 0);
  const summ = Math.ceil((a - b) / 1000 / 60 / 60 / 24 / 7);
  return summ;
}

/**
 * Returns the date of the next Friday the 13th from a given date.
 * Friday the 13th is considered an unlucky day in some cultures.
 *
 * @param {Date} date - The starting date to search from.
 * @return {Date} - The date of the next Friday the 13th.
 *
 * @example:
 * Date(2024, 0, 13) => Date(2024, 8, 13)
 * Date(2023, 1, 1) => Date(2023, 9, 13)
 */
function getNextFridayThe13th(date) {
  const a = new Date(date);
  const b = new Date(a.getFullYear() + 1, 0, 0);
  let c;
  for (let i = a; i <= b; i.setDate(i.getDate() + 1)) {
    const a4 = i.getDay();
    const a5 = i.getDate();
    if (a4 === 5 && a5 === 13) {
      return new Date(i.getFullYear(), i.getMonth(), a5);
    }
  }
  return c;
}

/**
 * Returns the quarter of the year for a given date.
 *
 * @param {Date} date - The date for which to find the quarter.
 * @return {number} - The quarter of the year (1-4).
 *
 * @example:
 * Date(2024, 1, 13) => 1
 * Date(2024, 5, 1) => 2
 * Date(2024, 10, 10) => 4
 */
function getQuarter(date) {
  const a = new Date(date);
  const b = a.getMonth();
  let aa;
  if (b >= 0 && b <= 2) {
    aa = 1;
  } else if (b >= 3 && b <= 5) {
    aa = 2;
  } else if (b >= 6 && b <= 8) {
    aa = 3;
  } else {
    aa = 4;
  }
  return aa;
}

/**
 * Generates an employee's work schedule within a specified date range, based on a pattern of working and off days.
 * The start and end dates of the period are inclusive.
 *
 * @typedef {{
 * start: string, // The start date in 'DD-MM-YYYY' format.
 * end: string    // The end date in 'DD-MM-YYYY' format.
 * }} DatePeriod
 *
 * @param {DatePeriod} period - The start and end dates of the period.
 * @param {number} countWorkDays - The number of consecutive working days.
 * @param {number} countOffDays - The number of consecutive days off.
 * @return {Array<string>} - An array of dates in 'DD-MM-YYYY' format representing the work schedule.
 *
 * @example:
 * { start: '01-01-2024', end: '15-01-2024' }, 1, 3 => ['01-01-2024', '05-01-2024', '09-01-2024', '13-01-2024']
 * { start: '01-01-2024', end: '10-01-2024' }, 1, 1 => ['01-01-2024', '03-01-2024', '05-01-2024', '07-01-2024', '09-01-2024']
 */
function getWorkSchedule(period, countWorkDays, countOffDays) {
  const a = period.start.split('-');
  const b = period.end.split('-');
  const aa = new Date(a[2], a[1] - 1, a[0]);
  const bb = new Date(b[2], b[1] - 1, b[0]);
  const mass = [];
  for (let i = aa, n2 = 1; i <= bb; i.setDate(i.getDate() + 1)) {
    const day = i.getDate() <= 9 ? `0${i.getDate()}` : i.getDate();
    const month =
      i.getMonth() + 1 <= 9 ? `0${i.getMonth() + 1}` : i.getMonth() + 1;
    if (n2 <= countWorkDays) {
      mass.push(`${day}-${month}-${i.getFullYear()}`);
      n2 += 1;
    } else if (n2 > countWorkDays + countOffDays) {
      mass.push(`${day}-${month}-${i.getFullYear()}`);
      n2 = 2;
    } else if (n2 > countWorkDays && n2 <= countWorkDays + countOffDays) {
      n2 += 1;
    }
  }
  return mass;
}

/**
 * Determines whether the year in the provided date is a leap year.
 * A leap year is a year divisible by 4, but not by 100, unless it is also divisible by 400.
 *
 * @param {Date} date - The date from which the year will be checked.
 * @return {boolean} - True if the year is a leap year, false otherwise.
 *
 * @example:
 * Date(2024, 2, 1) => true
 * Date(2022, 2, 1) => false
 * Date(2020, 2, 1) => true
 */
function isLeapYear(date) {
  const a = new Date(date);
  return a.getFullYear() % 4 === 0;
}

module.exports = {
  dateToTimestamp,
  getTime,
  getDayName,
  getNextFriday,
  getCountDaysInMonth,
  getCountDaysOnPeriod,
  isDateInPeriod,
  formatDate,
  getCountWeekendsInMonth,
  getWeekNumberByDate,
  getNextFridayThe13th,
  getQuarter,
  getWorkSchedule,
  isLeapYear,
};
