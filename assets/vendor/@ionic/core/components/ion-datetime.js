/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { proxyCustomElement, HTMLElement, createEvent, writeTask, h, Host } from '@stencil/core/internal/client';
import { a as chevronBack, f as chevronForward, c as chevronDown, g as caretUpSharp, h as caretDownSharp } from './index7.js';
import { b as getIonMode } from './ionic-global.js';
import { startFocusVisible } from './focus-visible.js';
import { r as raf, e as renderHiddenInput, g as getElementRoot } from './helpers.js';
import { p as printIonWarning, a as printIonError } from './index8.js';
import { i as isRTL } from './dir.js';
import { c as createColorClasses } from './theme.js';
import { g as generateDayAriaLabel, a as getDay, i as isBefore, b as isAfter, c as isSameDay, d as getPreviousMonth, e as getNextMonth, v as validateParts, f as getPartsFromCalendarDay, h as getEndOfWeek, j as getStartOfWeek, k as getPreviousDay, l as getNextDay, m as getPreviousWeek, n as getNextWeek, p as parseMinParts, o as parseMaxParts, q as parseDate, w as warnIfValueOutOfBounds, r as convertToArrayOfNumbers, s as convertDataToISO, t as getToday, u as getClosestValidDate, x as getNumDaysInMonth, y as getCombinedDateColumnData, z as getMonthColumnData, A as getDayColumnData, B as getYearColumnData, C as isMonthFirstLocale, D as getTimeColumnsData, E as isLocaleDayPeriodRTL, F as getMonthAndYear, G as getDaysOfWeek, H as getDaysOfMonth, I as generateMonths, J as is24Hour, K as getLocalizedTime, L as getMonthAndDay, M as formatValue, N as getNextYear, O as getPreviousYear, P as clampDate, Q as parseAmPm, R as calculateHourFromAMPM } from './data.js';
import { d as defineCustomElement$c } from './backdrop.js';
import { d as defineCustomElement$b } from './button.js';
import { d as defineCustomElement$a } from './buttons.js';
import { d as defineCustomElement$9 } from './icon.js';
import { d as defineCustomElement$8 } from './item.js';
import { d as defineCustomElement$7 } from './label.js';
import { d as defineCustomElement$6 } from './note.js';
import { d as defineCustomElement$5 } from './picker-column-internal.js';
import { d as defineCustomElement$4 } from './picker-internal.js';
import { d as defineCustomElement$3 } from './popover.js';
import { d as defineCustomElement$2 } from './ripple-effect.js';

const isYearDisabled = (refYear, minParts, maxParts) => {
  if (minParts && minParts.year > refYear) {
    return true;
  }
  if (maxParts && maxParts.year < refYear) {
    return true;
  }
  return false;
};
/**
 * Returns true if a given day should
 * not be interactive according to its value,
 * or the max/min dates.
 */
const isDayDisabled = (refParts, minParts, maxParts, dayValues) => {
  /**
   * If this is a filler date (i.e. padding)
   * then the date is disabled.
   */
  if (refParts.day === null) {
    return true;
  }
  /**
   * If user passed in a list of acceptable day values
   * check to make sure that the date we are looking
   * at is in this array.
   */
  if (dayValues !== undefined && !dayValues.includes(refParts.day)) {
    return true;
  }
  /**
   * Given a min date, perform the following
   * checks. If any of them are true, then the
   * day should be disabled:
   * 1. Is the current year < the min allowed year?
   * 2. Is the current year === min allowed year,
   * but the current month < the min allowed month?
   * 3. Is the current year === min allowed year, the
   * current month === min allow month, but the current
   * day < the min allowed day?
   */
  if (minParts && isBefore(refParts, minParts)) {
    return true;
  }
  /**
   * Given a max date, perform the following
   * checks. If any of them are true, then the
   * day should be disabled:
   * 1. Is the current year > the max allowed year?
   * 2. Is the current year === max allowed year,
   * but the current month > the max allowed month?
   * 3. Is the current year === max allowed year, the
   * current month === max allow month, but the current
   * day > the max allowed day?
   */
  if (maxParts && isAfter(refParts, maxParts)) {
    return true;
  }
  /**
   * If none of these checks
   * passed then the date should
   * be interactive.
   */
  return false;
};
/**
 * Given a locale, a date, the selected date(s), and today's date,
 * generate the state for a given calendar day button.
 */
const getCalendarDayState = (locale, refParts, activeParts, todayParts, minParts, maxParts, dayValues) => {
  /**
   * activeParts signals what day(s) are currently selected in the datetime.
   * If multiple="true", this will be an array, but the logic in this util
   * is the same whether we have one selected day or many because we're only
   * calculating the state for one button. So, we treat a single activeParts value
   * the same as an array of length one.
   */
  const activePartsArray = Array.isArray(activeParts) ? activeParts : [activeParts];
  /**
   * The day button is active if it is selected, or in other words, if refParts
   * matches at least one selected date.
   */
  const isActive = activePartsArray.find((parts) => isSameDay(refParts, parts)) !== undefined;
  const isToday = isSameDay(refParts, todayParts);
  const disabled = isDayDisabled(refParts, minParts, maxParts, dayValues);
  /**
   * Note that we always return one object regardless of whether activeParts
   * was an array, since we pare down to one value for isActive.
   */
  return {
    disabled,
    isActive,
    isToday,
    ariaSelected: isActive ? 'true' : null,
    ariaLabel: generateDayAriaLabel(locale, isToday, refParts),
    text: refParts.day != null ? getDay(locale, refParts) : null,
  };
};
/**
 * Returns `true` if the month is disabled given the
 * current date value and min/max date constraints.
 */
const isMonthDisabled = (refParts, { minParts, maxParts, }) => {
  // If the year is disabled then the month is disabled.
  if (isYearDisabled(refParts.year, minParts, maxParts)) {
    return true;
  }
  // If the date value is before the min date, then the month is disabled.
  // If the date value is after the max date, then the month is disabled.
  if ((minParts && isBefore(refParts, minParts)) || (maxParts && isAfter(refParts, maxParts))) {
    return true;
  }
  return false;
};
/**
 * Given a working date, an optional minimum date range,
 * and an optional maximum date range; determine if the
 * previous navigation button is disabled.
 */
const isPrevMonthDisabled = (refParts, minParts, maxParts) => {
  const prevMonth = Object.assign(Object.assign({}, getPreviousMonth(refParts)), { day: null });
  return isMonthDisabled(prevMonth, {
    minParts,
    maxParts,
  });
};
/**
 * Given a working date and a maximum date range,
 * determine if the next navigation button is disabled.
 */
const isNextMonthDisabled = (refParts, maxParts) => {
  const nextMonth = Object.assign(Object.assign({}, getNextMonth(refParts)), { day: null });
  return isMonthDisabled(nextMonth, {
    maxParts,
  });
};

const datetimeIosCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;background:var(--background);overflow:hidden}ion-picker-column-internal{min-width:26px}:host(.datetime-size-fixed){width:auto;height:auto}:host(.datetime-size-fixed:not(.datetime-prefer-wheel)){max-width:350px}:host(.datetime-size-fixed.datetime-prefer-wheel){min-width:350px;max-width:-webkit-max-content;max-width:-moz-max-content;max-width:max-content}:host(.datetime-size-cover){width:100%}:host .calendar-body,:host .datetime-year{opacity:0}:host(:not(.datetime-ready)) .datetime-year{position:absolute;pointer-events:none}:host(.datetime-ready) .calendar-body{opacity:1}:host(.datetime-ready) .datetime-year{display:none;opacity:1}:host .wheel-order-year-first .day-column{-ms-flex-order:3;order:3;text-align:end}:host .wheel-order-year-first .month-column{-ms-flex-order:2;order:2;text-align:end}:host .wheel-order-year-first .year-column{-ms-flex-order:1;order:1;text-align:start}:host .datetime-calendar,:host .datetime-year{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-flow:column;flex-flow:column}:host(.show-month-and-year) .datetime-year{display:-ms-flexbox;display:flex}@supports (background: -webkit-named-image(apple-pay-logo-black)) and (not (aspect-ratio: 1/1)){:host(.show-month-and-year) .calendar-next-prev,:host(.show-month-and-year) .calendar-days-of-week,:host(.show-month-and-year) .calendar-body,:host(.show-month-and-year) .datetime-time{left:-99999px;position:absolute;visibility:hidden;pointer-events:none}:host-context([dir=rtl]):host(.show-month-and-year) .calendar-next-prev,:host-context([dir=rtl]).show-month-and-year .calendar-next-prev,:host-context([dir=rtl]):host(.show-month-and-year) .calendar-days-of-week,:host-context([dir=rtl]).show-month-and-year .calendar-days-of-week,:host-context([dir=rtl]):host(.show-month-and-year) .calendar-body,:host-context([dir=rtl]).show-month-and-year .calendar-body,:host-context([dir=rtl]):host(.show-month-and-year) .datetime-time,:host-context([dir=rtl]).show-month-and-year .datetime-time{left:unset;right:unset;right:-99999px}}@supports (not (background: -webkit-named-image(apple-pay-logo-black))) or ((background: -webkit-named-image(apple-pay-logo-black)) and (aspect-ratio: 1/1)){:host(.show-month-and-year) .calendar-next-prev,:host(.show-month-and-year) .calendar-days-of-week,:host(.show-month-and-year) .calendar-body,:host(.show-month-and-year) .datetime-time{display:none}}:host(.month-year-picker-open) .datetime-footer{display:none}:host(.datetime-readonly),:host(.datetime-disabled){pointer-events:none}:host(.datetime-disabled){opacity:0.4}:host .datetime-header .datetime-title{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}:host .datetime-action-buttons.has-clear-button{width:100%}:host .datetime-action-buttons ion-buttons{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}:host .calendar-action-buttons{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}:host .calendar-action-buttons ion-item,:host .calendar-action-buttons ion-button{--background:translucent}:host .calendar-action-buttons ion-item ion-label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host .calendar-action-buttons ion-item ion-icon{padding-left:4px;padding-right:0;padding-top:0;padding-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host .calendar-action-buttons ion-item ion-icon{padding-left:unset;padding-right:unset;-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:0;padding-inline-end:0}}:host .calendar-days-of-week{display:grid;grid-template-columns:repeat(7, 1fr);text-align:center}:host .calendar-body{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-webkit-scroll-snap-type:x mandatory;-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory;overflow-x:scroll;overflow-y:hidden;scrollbar-width:none;outline:none}:host .calendar-body .calendar-month{scroll-snap-align:start;scroll-snap-stop:always;-ms-flex-negative:0;flex-shrink:0;width:100%}:host .calendar-body .calendar-month-disabled{scroll-snap-align:none}:host .calendar-body::-webkit-scrollbar{display:none}:host .calendar-body .calendar-month-grid{display:grid;grid-template-columns:repeat(7, 1fr)}:host .calendar-day{padding-left:0px;padding-right:0px;padding-top:0px;padding-bottom:0px;margin-left:0px;margin-right:0px;margin-top:0px;margin-bottom:0px;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border:none;outline:none;background:none;color:currentColor;font-family:var(--ion-font-family, inherit);cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;z-index:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host .calendar-day{padding-left:unset;padding-right:unset;-webkit-padding-start:0px;padding-inline-start:0px;-webkit-padding-end:0px;padding-inline-end:0px}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host .calendar-day{margin-left:unset;margin-right:unset;-webkit-margin-start:0px;margin-inline-start:0px;-webkit-margin-end:0px;margin-inline-end:0px}}:host .calendar-day[disabled]{pointer-events:none;opacity:0.4}:host .calendar-day:after{border-radius:32px;padding-left:4px;padding-right:4px;padding-top:4px;padding-bottom:4px;position:absolute;top:50%;left:50%;width:32px;height:32px;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);content:\" \";z-index:-1}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host .calendar-day:after{padding-left:unset;padding-right:unset;-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px}}:host .datetime-time{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}:host(.datetime-presentation-time) .datetime-time{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}:host ion-popover{--height:200px}:host .time-header{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host .time-body{border-radius:8px;padding-left:12px;padding-right:12px;padding-top:6px;padding-bottom:6px;display:-ms-flexbox;display:flex;border:none;background:var(--ion-color-step-300, #edeef0);color:var(--ion-text-color, #000);font-family:inherit;font-size:inherit;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host .time-body{padding-left:unset;padding-right:unset;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px}}:host .time-body-active{color:var(--ion-color-base)}:host(.in-item){position:static}:host(.show-month-and-year) .calendar-action-buttons ion-item{--color:var(--ion-color-base)}:host{--background:var(--ion-color-light, #ffffff);--background-rgb:var(--ion-color-light-rgb);--title-color:var(--ion-color-step-600, #666666)}:host(.datetime-presentation-date-time:not(.datetime-prefer-wheel)),:host(.datetime-presentation-time-date:not(.datetime-prefer-wheel)),:host(.datetime-presentation-date:not(.datetime-prefer-wheel)){min-height:350px}:host .datetime-header{padding-left:16px;padding-right:16px;padding-top:16px;padding-bottom:16px;border-bottom:0.55px solid var(--ion-color-step-200, #cccccc);font-size:14px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host .datetime-header{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}:host .datetime-header .datetime-title{color:var(--title-color)}:host .datetime-header .datetime-selected-date{margin-top:10px}:host .calendar-action-buttons ion-item{--padding-start:16px;--background-hover:transparent;--background-activated:transparent;font-size:16px;font-weight:600}:host .calendar-action-buttons ion-item ion-icon,:host .calendar-action-buttons ion-buttons ion-button{color:var(--ion-color-base)}:host .calendar-action-buttons ion-buttons{padding-left:0;padding-right:0;padding-top:8px;padding-bottom:0}:host .calendar-action-buttons ion-buttons ion-button{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}:host .calendar-days-of-week{padding-left:8px;padding-right:8px;padding-top:0;padding-bottom:0;color:var(--ion-color-step-300, #b3b3b3);font-size:12px;font-weight:600;line-height:24px;text-transform:uppercase}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host .calendar-days-of-week{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}:host .calendar-body .calendar-month .calendar-month-grid{padding-left:8px;padding-right:8px;padding-top:8px;padding-bottom:8px;height:calc(100% - 16px)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host .calendar-body .calendar-month .calendar-month-grid{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}:host .calendar-day{font-size:20px}:host .calendar-day:after{opacity:0.2}:host .calendar-day:focus:after{background:var(--ion-color-base)}:host .calendar-day.calendar-day-today{color:var(--ion-color-base)}:host .calendar-day.calendar-day-active{color:var(--ion-color-base);font-weight:600}:host .calendar-day.calendar-day-active:after{background:var(--ion-color-base)}:host .calendar-day.calendar-day-today.calendar-day-active{color:var(--ion-color-contrast)}:host .calendar-day.calendar-day-today.calendar-day-active:after{background:var(--ion-color-base);opacity:1}:host .datetime-time{padding-left:16px;padding-right:16px;padding-top:8px;padding-bottom:16px;font-size:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host .datetime-time{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}:host .datetime-time .time-header{font-weight:600}:host .datetime-buttons{padding-left:8px;padding-right:8px;padding-top:8px;padding-bottom:8px;border-top:0.55px solid var(--ion-color-step-200, #cccccc)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host .datetime-buttons{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}:host .datetime-buttons ::slotted(ion-buttons),:host .datetime-buttons ion-buttons{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}:host .datetime-action-buttons{width:100%}";

const datetimeMdCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;background:var(--background);overflow:hidden}ion-picker-column-internal{min-width:26px}:host(.datetime-size-fixed){width:auto;height:auto}:host(.datetime-size-fixed:not(.datetime-prefer-wheel)){max-width:350px}:host(.datetime-size-fixed.datetime-prefer-wheel){min-width:350px;max-width:-webkit-max-content;max-width:-moz-max-content;max-width:max-content}:host(.datetime-size-cover){width:100%}:host .calendar-body,:host .datetime-year{opacity:0}:host(:not(.datetime-ready)) .datetime-year{position:absolute;pointer-events:none}:host(.datetime-ready) .calendar-body{opacity:1}:host(.datetime-ready) .datetime-year{display:none;opacity:1}:host .wheel-order-year-first .day-column{-ms-flex-order:3;order:3;text-align:end}:host .wheel-order-year-first .month-column{-ms-flex-order:2;order:2;text-align:end}:host .wheel-order-year-first .year-column{-ms-flex-order:1;order:1;text-align:start}:host .datetime-calendar,:host .datetime-year{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-flow:column;flex-flow:column}:host(.show-month-and-year) .datetime-year{display:-ms-flexbox;display:flex}@supports (background: -webkit-named-image(apple-pay-logo-black)) and (not (aspect-ratio: 1/1)){:host(.show-month-and-year) .calendar-next-prev,:host(.show-month-and-year) .calendar-days-of-week,:host(.show-month-and-year) .calendar-body,:host(.show-month-and-year) .datetime-time{left:-99999px;position:absolute;visibility:hidden;pointer-events:none}:host-context([dir=rtl]):host(.show-month-and-year) .calendar-next-prev,:host-context([dir=rtl]).show-month-and-year .calendar-next-prev,:host-context([dir=rtl]):host(.show-month-and-year) .calendar-days-of-week,:host-context([dir=rtl]).show-month-and-year .calendar-days-of-week,:host-context([dir=rtl]):host(.show-month-and-year) .calendar-body,:host-context([dir=rtl]).show-month-and-year .calendar-body,:host-context([dir=rtl]):host(.show-month-and-year) .datetime-time,:host-context([dir=rtl]).show-month-and-year .datetime-time{left:unset;right:unset;right:-99999px}}@supports (not (background: -webkit-named-image(apple-pay-logo-black))) or ((background: -webkit-named-image(apple-pay-logo-black)) and (aspect-ratio: 1/1)){:host(.show-month-and-year) .calendar-next-prev,:host(.show-month-and-year) .calendar-days-of-week,:host(.show-month-and-year) .calendar-body,:host(.show-month-and-year) .datetime-time{display:none}}:host(.month-year-picker-open) .datetime-footer{display:none}:host(.datetime-readonly),:host(.datetime-disabled){pointer-events:none}:host(.datetime-disabled){opacity:0.4}:host .datetime-header .datetime-title{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}:host .datetime-action-buttons.has-clear-button{width:100%}:host .datetime-action-buttons ion-buttons{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}:host .calendar-action-buttons{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}:host .calendar-action-buttons ion-item,:host .calendar-action-buttons ion-button{--background:translucent}:host .calendar-action-buttons ion-item ion-label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host .calendar-action-buttons ion-item ion-icon{padding-left:4px;padding-right:0;padding-top:0;padding-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host .calendar-action-buttons ion-item ion-icon{padding-left:unset;padding-right:unset;-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:0;padding-inline-end:0}}:host .calendar-days-of-week{display:grid;grid-template-columns:repeat(7, 1fr);text-align:center}:host .calendar-body{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-webkit-scroll-snap-type:x mandatory;-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory;overflow-x:scroll;overflow-y:hidden;scrollbar-width:none;outline:none}:host .calendar-body .calendar-month{scroll-snap-align:start;scroll-snap-stop:always;-ms-flex-negative:0;flex-shrink:0;width:100%}:host .calendar-body .calendar-month-disabled{scroll-snap-align:none}:host .calendar-body::-webkit-scrollbar{display:none}:host .calendar-body .calendar-month-grid{display:grid;grid-template-columns:repeat(7, 1fr)}:host .calendar-day{padding-left:0px;padding-right:0px;padding-top:0px;padding-bottom:0px;margin-left:0px;margin-right:0px;margin-top:0px;margin-bottom:0px;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border:none;outline:none;background:none;color:currentColor;font-family:var(--ion-font-family, inherit);cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;z-index:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host .calendar-day{padding-left:unset;padding-right:unset;-webkit-padding-start:0px;padding-inline-start:0px;-webkit-padding-end:0px;padding-inline-end:0px}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host .calendar-day{margin-left:unset;margin-right:unset;-webkit-margin-start:0px;margin-inline-start:0px;-webkit-margin-end:0px;margin-inline-end:0px}}:host .calendar-day[disabled]{pointer-events:none;opacity:0.4}:host .calendar-day:after{border-radius:32px;padding-left:4px;padding-right:4px;padding-top:4px;padding-bottom:4px;position:absolute;top:50%;left:50%;width:32px;height:32px;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);content:\" \";z-index:-1}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host .calendar-day:after{padding-left:unset;padding-right:unset;-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px}}:host .datetime-time{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}:host(.datetime-presentation-time) .datetime-time{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}:host ion-popover{--height:200px}:host .time-header{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host .time-body{border-radius:8px;padding-left:12px;padding-right:12px;padding-top:6px;padding-bottom:6px;display:-ms-flexbox;display:flex;border:none;background:var(--ion-color-step-300, #edeef0);color:var(--ion-text-color, #000);font-family:inherit;font-size:inherit;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host .time-body{padding-left:unset;padding-right:unset;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px}}:host .time-body-active{color:var(--ion-color-base)}:host(.in-item){position:static}:host(.show-month-and-year) .calendar-action-buttons ion-item{--color:var(--ion-color-base)}:host{--background:var(--ion-color-step-100, #ffffff);--title-color:var(--ion-color-contrast)}:host .datetime-header{padding-left:20px;padding-right:20px;padding-top:20px;padding-bottom:20px;background:var(--ion-color-base);color:var(--title-color)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host .datetime-header{padding-left:unset;padding-right:unset;-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px}}:host .datetime-header .datetime-title{font-size:12px;text-transform:uppercase}:host .datetime-header .datetime-selected-date{margin-top:30px;font-size:34px}:host .datetime-calendar .calendar-action-buttons ion-item{--padding-start:20px}:host .calendar-action-buttons ion-item,:host .calendar-action-buttons ion-button{color:var(--ion-color-step-650, #595959)}:host .calendar-days-of-week{padding-left:10px;padding-right:10px;padding-top:0px;padding-bottom:0px;color:var(--ion-color-step-500, gray);font-size:14px;line-height:36px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host .calendar-days-of-week{padding-left:unset;padding-right:unset;-webkit-padding-start:10px;padding-inline-start:10px;-webkit-padding-end:10px;padding-inline-end:10px}}:host .calendar-body .calendar-month .calendar-month-grid{padding-left:10px;padding-right:10px;padding-top:4px;padding-bottom:4px;grid-template-rows:repeat(6, 1fr)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host .calendar-body .calendar-month .calendar-month-grid{padding-left:unset;padding-right:unset;-webkit-padding-start:10px;padding-inline-start:10px;-webkit-padding-end:10px;padding-inline-end:10px}}:host .calendar-day{padding-left:0px;padding-right:0;padding-top:13px;padding-bottom:13px;font-size:14px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host .calendar-day{padding-left:unset;padding-right:unset;-webkit-padding-start:0px;padding-inline-start:0px;-webkit-padding-end:0;padding-inline-end:0}}:host .calendar-day:focus:after{background:rgba(var(--ion-color-base-rgb), 0.2);-webkit-box-shadow:0px 0px 0px 4px rgba(var(--ion-color-base-rgb), 0.2);box-shadow:0px 0px 0px 4px rgba(var(--ion-color-base-rgb), 0.2)}:host .calendar-day.calendar-day-today{color:var(--ion-color-base)}:host .calendar-day.calendar-day-today:after{border:1px solid var(--ion-color-base)}:host .calendar-day.calendar-day-active{color:var(--ion-color-contrast)}:host .calendar-day.calendar-day-active:after{border:1px solid var(--ion-color-base);background:var(--ion-color-base)}:host .datetime-time{padding-left:16px;padding-right:16px;padding-top:8px;padding-bottom:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host .datetime-time{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}:host .time-header{color:var(--ion-color-step-650, #595959)}:host(.datetime-presentation-month) .datetime-year,:host(.datetime-presentation-year) .datetime-year,:host(.datetime-presentation-month-year) .datetime-year{margin-top:20px;margin-bottom:20px}:host .datetime-buttons{padding-left:10px;padding-right:10px;padding-top:10px;padding-bottom:10px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host .datetime-buttons{padding-left:unset;padding-right:unset;-webkit-padding-start:10px;padding-inline-start:10px;-webkit-padding-end:10px;padding-inline-end:10px}}:host .datetime-view-buttons ion-button{color:var(--ion-color-step-800, #333333)}";

const Datetime = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.ionCancel = createEvent(this, "ionCancel", 7);
    this.ionChange = createEvent(this, "ionChange", 7);
    this.ionFocus = createEvent(this, "ionFocus", 7);
    this.ionBlur = createEvent(this, "ionBlur", 7);
    this.ionStyle = createEvent(this, "ionStyle", 7);
    this.ionRender = createEvent(this, "ionRender", 7);
    this.inputId = `ion-dt-${datetimeIds++}`;
    this.prevPresentation = null;
    /**
     * Duplicate reference to `activeParts` that does not trigger a re-render of the component.
     * Allows caching an instance of the `activeParts` in between render cycles.
     */
    this.activePartsClone = [];
    this.showMonthAndYear = false;
    this.activeParts = [];
    this.workingParts = {
      month: 5,
      day: 28,
      year: 2021,
      hour: 13,
      minute: 52,
      ampm: 'pm',
    };
    this.isPresented = false;
    this.isTimePopoverOpen = false;
    /**
     * The color to use from your application's color palette.
     * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
     * For more information on colors, see [theming](/docs/theming/basics).
     */
    this.color = 'primary';
    /**
     * The name of the control, which is submitted with the form data.
     */
    this.name = this.inputId;
    /**
     * If `true`, the user cannot interact with the datetime.
     */
    this.disabled = false;
    /**
     * If `true`, the datetime appears normal but is not interactive.
     */
    this.readonly = false;
    /**
     * Which values you want to select. `'date'` will show
     * a calendar picker to select the month, day, and year. `'time'`
     * will show a time picker to select the hour, minute, and (optionally)
     * AM/PM. `'date-time'` will show the date picker first and time picker second.
     * `'time-date'` will show the time picker first and date picker second.
     */
    this.presentation = 'date-time';
    /**
     * The text to display on the picker's cancel button.
     */
    this.cancelText = 'Cancel';
    /**
     * The text to display on the picker's "Done" button.
     */
    this.doneText = 'Done';
    /**
     * The text to display on the picker's "Clear" button.
     */
    this.clearText = 'Clear';
    /**
     * The locale to use for `ion-datetime`. This
     * impacts month and day name formatting.
     * The `'default'` value refers to the default
     * locale set by your device.
     */
    this.locale = 'default';
    /**
     * The first day of the week to use for `ion-datetime`. The
     * default value is `0` and represents Sunday.
     */
    this.firstDayOfWeek = 0;
    /**
     * If `true`, multiple dates can be selected at once. Only
     * applies to `presentation="date"` and `preferWheel="false"`.
     */
    this.multiple = false;
    /**
     * If `true`, a header will be shown above the calendar
     * picker. This will include both the slotted title, and
     * the selected date.
     */
    this.showDefaultTitle = false;
    /**
     * If `true`, the default "Cancel" and "OK" buttons
     * will be rendered at the bottom of the `ion-datetime`
     * component. Developers can also use the `button` slot
     * if they want to customize these buttons. If custom
     * buttons are set in the `button` slot then the
     * default buttons will not be rendered.
     */
    this.showDefaultButtons = false;
    /**
     * If `true`, a "Clear" button will be rendered alongside
     * the default "Cancel" and "OK" buttons at the bottom of the `ion-datetime`
     * component. Developers can also use the `button` slot
     * if they want to customize these buttons. If custom
     * buttons are set in the `button` slot then the
     * default buttons will not be rendered.
     */
    this.showClearButton = false;
    /**
     * If `true`, the default "Time" label will be rendered
     * for the time selector of the `ion-datetime` component.
     * Developers can also use the `time-label` slot
     * if they want to customize this label. If a custom
     * label is set in the `time-label` slot then the
     * default label will not be rendered.
     */
    this.showDefaultTimeLabel = true;
    /**
     * If `cover`, the `ion-datetime` will expand to cover the full width of its container.
     * If `fixed`, the `ion-datetime` will have a fixed width.
     */
    this.size = 'fixed';
    /**
     * If `true`, a wheel picker will be rendered instead of a calendar grid
     * where possible. If `false`, a calendar grid will be rendered instead of
     * a wheel picker where possible.
     *
     * A wheel picker can be rendered instead of a grid when `presentation` is
     * one of the following values: `'date'`, `'date-time'`, or `'time-date'`.
     *
     * A wheel picker will always be rendered regardless of
     * the `preferWheel` value when `presentation` is one of the following values:
     * `'time'`, `'month'`, `'month-year'`, or `'year'`.
     */
    this.preferWheel = false;
    /**
     * Returns the DatetimePart interface
     * to use when rendering an initial set of
     * data. This should be used when rendering an
     * interface in an environment where the `value`
     * may not be set. This function works
     * by returning the first selected date in
     * "activePartsClone" and then falling back to
     * defaultParts if no active date is selected.
     */
    this.getActivePartsWithFallback = () => {
      var _a;
      const { defaultParts } = this;
      return (_a = this.getActivePart()) !== null && _a !== void 0 ? _a : defaultParts;
    };
    this.getActivePart = () => {
      const { activePartsClone } = this;
      return Array.isArray(activePartsClone) ? activePartsClone[0] : activePartsClone;
    };
    this.closeParentOverlay = () => {
      const popoverOrModal = this.el.closest('ion-modal, ion-popover');
      if (popoverOrModal) {
        popoverOrModal.dismiss();
      }
    };
    this.setWorkingParts = (parts) => {
      this.workingParts = Object.assign({}, parts);
    };
    this.setActiveParts = (parts, removeDate = false) => {
      const { multiple, minParts, maxParts, activePartsClone } = this;
      /**
       * When setting the active parts, it is possible
       * to set invalid data. For example,
       * when updating January 31 to February,
       * February 31 does not exist. As a result
       * we need to validate the active parts and
       * ensure that we are only setting valid dates.
       * Additionally, we need to update the working parts
       * too in the event that the validated parts are different.
       */
      const validatedParts = validateParts(parts, minParts, maxParts);
      this.setWorkingParts(validatedParts);
      if (multiple) {
        /**
         * We read from activePartsClone here because valueChanged() only updates that,
         * so it's the more reliable source of truth. If we read from activeParts, then
         * if you click July 1, manually set the value to July 2, and then click July 3,
         * the new value would be [July 1, July 3], ignoring the value set.
         *
         * We can then pass the new value to activeParts (rather than activePartsClone)
         * since the clone will be updated automatically by activePartsChanged().
         */
        const activePartsArray = Array.isArray(activePartsClone) ? activePartsClone : [activePartsClone];
        if (removeDate) {
          this.activeParts = activePartsArray.filter((p) => !isSameDay(p, validatedParts));
        }
        else {
          this.activeParts = [...activePartsArray, validatedParts];
        }
      }
      else {
        this.activeParts = Object.assign({}, validatedParts);
      }
      const hasSlottedButtons = this.el.querySelector('[slot="buttons"]') !== null;
      if (hasSlottedButtons || this.showDefaultButtons) {
        return;
      }
      this.confirm();
    };
    this.initializeKeyboardListeners = () => {
      const calendarBodyRef = this.calendarBodyRef;
      if (!calendarBodyRef) {
        return;
      }
      const root = this.el.shadowRoot;
      /**
       * Get a reference to the month
       * element we are currently viewing.
       */
      const currentMonth = calendarBodyRef.querySelector('.calendar-month:nth-of-type(2)');
      /**
       * When focusing the calendar body, we want to pass focus
       * to the working day, but other days should
       * only be accessible using the arrow keys. Pressing
       * Tab should jump between bodies of selectable content.
       */
      const checkCalendarBodyFocus = (ev) => {
        var _a;
        const record = ev[0];
        /**
         * If calendar body was already focused
         * when this fired or if the calendar body
         * if not currently focused, we should not re-focus
         * the inner day.
         */
        if (((_a = record.oldValue) === null || _a === void 0 ? void 0 : _a.includes('ion-focused')) || !calendarBodyRef.classList.contains('ion-focused')) {
          return;
        }
        this.focusWorkingDay(currentMonth);
      };
      const mo = new MutationObserver(checkCalendarBodyFocus);
      mo.observe(calendarBodyRef, { attributeFilter: ['class'], attributeOldValue: true });
      this.destroyKeyboardMO = () => {
        mo === null || mo === void 0 ? void 0 : mo.disconnect();
      };
      /**
       * We must use keydown not keyup as we want
       * to prevent scrolling when using the arrow keys.
       */
      calendarBodyRef.addEventListener('keydown', (ev) => {
        const activeElement = root.activeElement;
        if (!activeElement || !activeElement.classList.contains('calendar-day')) {
          return;
        }
        const parts = getPartsFromCalendarDay(activeElement);
        let partsToFocus;
        switch (ev.key) {
          case 'ArrowDown':
            ev.preventDefault();
            partsToFocus = getNextWeek(parts);
            break;
          case 'ArrowUp':
            ev.preventDefault();
            partsToFocus = getPreviousWeek(parts);
            break;
          case 'ArrowRight':
            ev.preventDefault();
            partsToFocus = getNextDay(parts);
            break;
          case 'ArrowLeft':
            ev.preventDefault();
            partsToFocus = getPreviousDay(parts);
            break;
          case 'Home':
            ev.preventDefault();
            partsToFocus = getStartOfWeek(parts);
            break;
          case 'End':
            ev.preventDefault();
            partsToFocus = getEndOfWeek(parts);
            break;
          case 'PageUp':
            ev.preventDefault();
            partsToFocus = ev.shiftKey ? getPreviousYear(parts) : getPreviousMonth(parts);
            break;
          case 'PageDown':
            ev.preventDefault();
            partsToFocus = ev.shiftKey ? getNextYear(parts) : getNextMonth(parts);
            break;
          /**
           * Do not preventDefault here
           * as we do not want to override other
           * browser defaults such as pressing Enter/Space
           * to select a day.
           */
          default:
            return;
        }
        /**
         * If the day we want to move focus to is
         * disabled, do not do anything.
         */
        if (isDayDisabled(partsToFocus, this.minParts, this.maxParts)) {
          return;
        }
        this.setWorkingParts(Object.assign(Object.assign({}, this.workingParts), partsToFocus));
        /**
         * Give view a chance to re-render
         * then move focus to the new working day
         */
        requestAnimationFrame(() => this.focusWorkingDay(currentMonth));
      });
    };
    this.focusWorkingDay = (currentMonth) => {
      /**
       * Get the number of padding days so
       * we know how much to offset our next selector by
       * to grab the correct calenday-day element.
       */
      const padding = currentMonth.querySelectorAll('.calendar-day-padding');
      const { day } = this.workingParts;
      if (day === null) {
        return;
      }
      /**
       * Get the calendar day element
       * and focus it.
       */
      const dayEl = currentMonth.querySelector(`.calendar-day:nth-of-type(${padding.length + day})`);
      if (dayEl) {
        dayEl.focus();
      }
    };
    this.processMinParts = () => {
      const { min, defaultParts } = this;
      if (min === undefined) {
        this.minParts = undefined;
        return;
      }
      this.minParts = parseMinParts(min, defaultParts);
    };
    this.processMaxParts = () => {
      const { max, defaultParts } = this;
      if (max === undefined) {
        this.maxParts = undefined;
        return;
      }
      this.maxParts = parseMaxParts(max, defaultParts);
    };
    this.initializeCalendarListener = () => {
      const calendarBodyRef = this.calendarBodyRef;
      if (!calendarBodyRef) {
        return;
      }
      /**
       * For performance reasons, we only render 3
       * months at a time: The current month, the previous
       * month, and the next month. We have a scroll listener
       * on the calendar body to append/prepend new months.
       *
       * We can do this because Stencil is smart enough to not
       * re-create the .calendar-month containers, but rather
       * update the content within those containers.
       *
       * As an added bonus, WebKit has some troubles with
       * scroll-snap-stop: always, so not rendering all of
       * the months in a row allows us to mostly sidestep
       * that issue.
       */
      const months = calendarBodyRef.querySelectorAll('.calendar-month');
      const startMonth = months[0];
      const workingMonth = months[1];
      const endMonth = months[2];
      const mode = getIonMode(this);
      const needsiOSRubberBandFix = mode === 'ios' && typeof navigator !== 'undefined' && navigator.maxTouchPoints > 1;
      /**
       * Before setting up the scroll listener,
       * scroll the middle month into view.
       * scrollIntoView() will scroll entire page
       * if element is not in viewport. Use scrollLeft instead.
       */
      writeTask(() => {
        calendarBodyRef.scrollLeft = startMonth.clientWidth * (isRTL(this.el) ? -1 : 1);
        const getChangedMonth = (parts) => {
          const box = calendarBodyRef.getBoundingClientRect();
          const root = this.el.shadowRoot;
          /**
           * Get the element that is in the center of the calendar body.
           * This will be an element inside of the active month.
           */
          const elementAtCenter = root.elementFromPoint(box.x + box.width / 2, box.y + box.height / 2);
          /**
           * If there is no element then the
           * component may be re-rendering on a slow device.
           */
          if (!elementAtCenter)
            return;
          const month = elementAtCenter.closest('.calendar-month');
          if (!month)
            return;
          /**
           * The edge of the month must be lined up with
           * the edge of the calendar body in order for
           * the component to update. Otherwise, it
           * may be the case that the user has paused their
           * swipe or the browser has not finished snapping yet.
           * Rather than check if the x values are equal,
           * we give it a tolerance of 2px to account for
           * sub pixel rendering.
           */
          const monthBox = month.getBoundingClientRect();
          if (Math.abs(monthBox.x - box.x) > 2)
            return;
          /**
           * From here, we can determine if the start
           * month or the end month was scrolled into view.
           * If no month was changed, then we can return from
           * the scroll callback early.
           */
          if (month === startMonth) {
            return getPreviousMonth(parts);
          }
          else if (month === endMonth) {
            return getNextMonth(parts);
          }
          else {
            return;
          }
        };
        const updateActiveMonth = () => {
          if (needsiOSRubberBandFix) {
            calendarBodyRef.style.removeProperty('pointer-events');
            appliediOSRubberBandFix = false;
          }
          /**
           * If the month did not change
           * then we can return early.
           */
          const newDate = getChangedMonth(this.workingParts);
          if (!newDate)
            return;
          const { month, day, year } = newDate;
          if (isMonthDisabled({ month, year, day: null }, {
            minParts: Object.assign(Object.assign({}, this.minParts), { day: null }),
            maxParts: Object.assign(Object.assign({}, this.maxParts), { day: null }),
          })) {
            return;
          }
          /**
           * Prevent scrolling for other browsers
           * to give the DOM time to update and the container
           * time to properly snap.
           */
          calendarBodyRef.style.setProperty('overflow', 'hidden');
          /**
           * Use a writeTask here to ensure
           * that the state is updated and the
           * correct month is scrolled into view
           * in the same frame. This is not
           * typically a problem on newer devices
           * but older/slower device may have a flicker
           * if we did not do this.
           */
          writeTask(() => {
            this.setWorkingParts(Object.assign(Object.assign({}, this.workingParts), { month, day: day, year }));
            calendarBodyRef.scrollLeft = workingMonth.clientWidth * (isRTL(this.el) ? -1 : 1);
            calendarBodyRef.style.removeProperty('overflow');
          });
        };
        /**
         * When the container finishes scrolling we
         * need to update the DOM with the selected month.
         */
        let scrollTimeout;
        /**
         * We do not want to attempt to set pointer-events
         * multiple times within a single swipe gesture as
         * that adds unnecessary work to the main thread.
         */
        let appliediOSRubberBandFix = false;
        const scrollCallback = () => {
          if (scrollTimeout) {
            clearTimeout(scrollTimeout);
          }
          /**
           * On iOS it is possible to quickly rubber band
           * the scroll area before the scroll timeout has fired.
           * This results in users reaching the end of the scrollable
           * container before the DOM has updated.
           * By setting `pointer-events: none` we can ensure that
           * subsequent swipes do not happen while the container
           * is snapping.
           */
          if (!appliediOSRubberBandFix && needsiOSRubberBandFix) {
            calendarBodyRef.style.setProperty('pointer-events', 'none');
            appliediOSRubberBandFix = true;
          }
          // Wait ~3 frames
          scrollTimeout = setTimeout(updateActiveMonth, 50);
        };
        calendarBodyRef.addEventListener('scroll', scrollCallback);
        this.destroyCalendarListener = () => {
          calendarBodyRef.removeEventListener('scroll', scrollCallback);
        };
      });
    };
    /**
     * Clean up all listeners except for the overlay
     * listener. This is so that we can re-create the listeners
     * if the datetime has been hidden/presented by a modal or popover.
     */
    this.destroyInteractionListeners = () => {
      const { destroyCalendarListener, destroyKeyboardMO } = this;
      if (destroyCalendarListener !== undefined) {
        destroyCalendarListener();
      }
      if (destroyKeyboardMO !== undefined) {
        destroyKeyboardMO();
      }
    };
    this.processValue = (value) => {
      /**
       * TODO FW-2646 remove value !== ''
       */
      const hasValue = value !== '' && value !== null && value !== undefined;
      let valueToProcess = hasValue ? parseDate(value) : this.defaultParts;
      const { minParts, maxParts, multiple } = this;
      if (!multiple && Array.isArray(value)) {
        this.value = value[0];
        valueToProcess = valueToProcess[0];
      }
      /**
       * Datetime should only warn of out of bounds values
       * if set by the user. If the `value` is undefined,
       * we will default to today's date which may be out
       * of bounds. In this case, the warning makes it look
       * like the developer did something wrong which is
       * not true.
       */
      if (hasValue) {
        warnIfValueOutOfBounds(valueToProcess, minParts, maxParts);
      }
      /**
       * If there are multiple values, pick an arbitrary one to clamp to. This way,
       * if the values are across months, we always show at least one of them. Note
       * that the values don't necessarily have to be in order.
       */
      const singleValue = Array.isArray(valueToProcess) ? valueToProcess[0] : valueToProcess;
      const { month, day, year, hour, minute, tzOffset } = clampDate(singleValue, minParts, maxParts);
      const ampm = parseAmPm(hour);
      this.setWorkingParts({
        month,
        day,
        year,
        hour,
        minute,
        tzOffset,
        ampm,
      });
      /**
       * Since `activeParts` indicates a value that
       * been explicitly selected either by the
       * user or the app, only update `activeParts`
       * if the `value` property is set.
       */
      if (hasValue) {
        if (Array.isArray(valueToProcess)) {
          this.activeParts = [...valueToProcess];
        }
        else {
          this.activeParts = {
            month,
            day,
            year,
            hour,
            minute,
            tzOffset,
            ampm,
          };
        }
      }
      else {
        /**
         * Reset the active parts if the value is not set.
         * This will clear the selected calendar day when
         * performing a clear action or using the reset() method.
         */
        this.activeParts = [];
      }
    };
    this.onFocus = () => {
      this.ionFocus.emit();
    };
    this.onBlur = () => {
      this.ionBlur.emit();
    };
    this.hasValue = () => {
      return this.value != null && this.value !== '';
    };
    this.nextMonth = () => {
      const calendarBodyRef = this.calendarBodyRef;
      if (!calendarBodyRef) {
        return;
      }
      const nextMonth = calendarBodyRef.querySelector('.calendar-month:last-of-type');
      if (!nextMonth) {
        return;
      }
      const left = nextMonth.offsetWidth * 2;
      calendarBodyRef.scrollTo({
        top: 0,
        left: left * (isRTL(this.el) ? -1 : 1),
        behavior: 'smooth',
      });
    };
    this.prevMonth = () => {
      const calendarBodyRef = this.calendarBodyRef;
      if (!calendarBodyRef) {
        return;
      }
      const prevMonth = calendarBodyRef.querySelector('.calendar-month:first-of-type');
      if (!prevMonth) {
        return;
      }
      calendarBodyRef.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    };
    this.toggleMonthAndYearView = () => {
      this.showMonthAndYear = !this.showMonthAndYear;
    };
  }
  disabledChanged() {
    this.emitStyle();
  }
  minChanged() {
    this.processMinParts();
  }
  maxChanged() {
    this.processMaxParts();
  }
  yearValuesChanged() {
    this.parsedYearValues = convertToArrayOfNumbers(this.yearValues);
  }
  monthValuesChanged() {
    this.parsedMonthValues = convertToArrayOfNumbers(this.monthValues);
  }
  dayValuesChanged() {
    this.parsedDayValues = convertToArrayOfNumbers(this.dayValues);
  }
  hourValuesChanged() {
    this.parsedHourValues = convertToArrayOfNumbers(this.hourValues);
  }
  minuteValuesChanged() {
    this.parsedMinuteValues = convertToArrayOfNumbers(this.minuteValues);
  }
  activePartsChanged() {
    this.activePartsClone = this.activeParts;
  }
  /**
   * Update the datetime value when the value changes
   */
  valueChanged() {
    const { value, minParts, maxParts, workingParts, multiple } = this;
    if (this.hasValue()) {
      if (!multiple && Array.isArray(value)) {
        this.value = value[0];
        return; // setting this.value will trigger re-run of this function
      }
      /**
       * Clones the value of the `activeParts` to the private clone, to update
       * the date display on the current render cycle without causing another render.
       *
       * This allows us to update the current value's date/time display without
       * refocusing or shifting the user's display (leaves the user in place).
       */
      const valueDateParts = parseDate(value);
      if (valueDateParts) {
        warnIfValueOutOfBounds(valueDateParts, minParts, maxParts);
        if (Array.isArray(valueDateParts)) {
          this.activePartsClone = [...valueDateParts];
        }
        else {
          const { month, day, year, hour, minute } = valueDateParts;
          const ampm = hour != null ? (hour >= 12 ? 'pm' : 'am') : undefined;
          this.activePartsClone = Object.assign(Object.assign({}, this.activeParts), { month,
            day,
            year,
            hour,
            minute,
            ampm });
          /**
           * The working parts am/pm value must be updated when the value changes, to
           * ensure the time picker hour column values are generated correctly.
           *
           * Note that we don't need to do this if valueDateParts is an array, since
           * multiple="true" does not apply to time pickers.
           */
          this.setWorkingParts(Object.assign(Object.assign({}, workingParts), { ampm }));
        }
      }
      else {
        printIonWarning(`Unable to parse date string: ${value}. Please provide a valid ISO 8601 datetime string.`);
      }
    }
    this.emitStyle();
    this.ionChange.emit({ value });
  }
  /**
   * Confirms the selected datetime value, updates the
   * `value` property, and optionally closes the popover
   * or modal that the datetime was presented in.
   */
  async confirm(closeOverlay = false) {
    const { isCalendarPicker, activeParts } = this;
    /**
     * We only update the value if the presentation is not a calendar picker.
     */
    if (activeParts !== undefined || !isCalendarPicker) {
      const activePartsIsArray = Array.isArray(activeParts);
      if (activePartsIsArray && activeParts.length === 0) {
        this.value = undefined;
      }
      else {
        /**
         * Prevent convertDataToISO from doing any
         * kind of transformation based on timezone
         * This cancels out any change it attempts to make
         *
         * Important: Take the timezone offset based on
         * the date that is currently selected, otherwise
         * there can be 1 hr difference when dealing w/ DST
         */
        if (activePartsIsArray) {
          const dates = convertDataToISO(activeParts).map((str) => new Date(str));
          for (let i = 0; i < dates.length; i++) {
            activeParts[i].tzOffset = dates[i].getTimezoneOffset() * -1;
          }
        }
        else {
          const date = new Date(convertDataToISO(activeParts));
          activeParts.tzOffset = date.getTimezoneOffset() * -1;
        }
        this.value = convertDataToISO(activeParts);
      }
    }
    if (closeOverlay) {
      this.closeParentOverlay();
    }
  }
  /**
   * Resets the internal state of the datetime but does not update the value.
   * Passing a valid ISO-8601 string will reset the state of the component to the provided date.
   * If no value is provided, the internal state will be reset to the clamped value of the min, max and today.
   */
  async reset(startDate) {
    this.processValue(startDate);
  }
  /**
   * Emits the ionCancel event and
   * optionally closes the popover
   * or modal that the datetime was
   * presented in.
   */
  async cancel(closeOverlay = false) {
    this.ionCancel.emit();
    if (closeOverlay) {
      this.closeParentOverlay();
    }
  }
  get isCalendarPicker() {
    const { presentation } = this;
    return presentation === 'date' || presentation === 'date-time' || presentation === 'time-date';
  }
  connectedCallback() {
    this.clearFocusVisible = startFocusVisible(this.el).destroy;
  }
  disconnectedCallback() {
    if (this.clearFocusVisible) {
      this.clearFocusVisible();
      this.clearFocusVisible = undefined;
    }
  }
  initializeListeners() {
    this.initializeCalendarListener();
    this.initializeKeyboardListeners();
  }
  componentDidLoad() {
    /**
     * If a scrollable element is hidden using `display: none`,
     * it will not have a scroll height meaning we cannot scroll elements
     * into view. As a result, we will need to wait for the datetime to become
     * visible if used inside of a modal or a popover otherwise the scrollable
     * areas will not have the correct values snapped into place.
     */
    const visibleCallback = (entries) => {
      const ev = entries[0];
      if (!ev.isIntersecting) {
        return;
      }
      this.initializeListeners();
      /**
       * TODO FW-2793: Datetime needs a frame to ensure that it
       * can properly scroll contents into view. As a result
       * we hide the scrollable content until after that frame
       * so users do not see the content quickly shifting. The downside
       * is that the content will pop into view a frame after. Maybe there
       * is a better way to handle this?
       */
      writeTask(() => {
        this.el.classList.add('datetime-ready');
      });
    };
    const visibleIO = new IntersectionObserver(visibleCallback, { threshold: 0.01 });
    /**
     * Use raf to avoid a race condition between the component loading and
     * its display animation starting (such as when shown in a modal). This
     * could cause the datetime to start at a visibility of 0, erroneously
     * triggering the `hiddenIO` observer below.
     */
    raf(() => visibleIO === null || visibleIO === void 0 ? void 0 : visibleIO.observe(this.el));
    /**
     * We need to clean up listeners when the datetime is hidden
     * in a popover/modal so that we can properly scroll containers
     * back into view if they are re-presented. When the datetime is hidden
     * the scroll areas have scroll widths/heights of 0px, so any snapping
     * we did originally has been lost.
     */
    const hiddenCallback = (entries) => {
      const ev = entries[0];
      if (ev.isIntersecting) {
        return;
      }
      this.destroyInteractionListeners();
      /**
       * When datetime is hidden, we need to make sure that
       * the month/year picker is closed. Otherwise,
       * it will be open when the datetime re-appears
       * and the scroll area of the calendar grid will be 0.
       * As a result, the wrong month will be shown.
       */
      this.showMonthAndYear = false;
      writeTask(() => {
        this.el.classList.remove('datetime-ready');
      });
    };
    const hiddenIO = new IntersectionObserver(hiddenCallback, { threshold: 0 });
    raf(() => hiddenIO === null || hiddenIO === void 0 ? void 0 : hiddenIO.observe(this.el));
    /**
     * Datetime uses Ionic components that emit
     * ionFocus and ionBlur. These events are
     * composed meaning they will cross
     * the shadow dom boundary. We need to
     * stop propagation on these events otherwise
     * developers will see 2 ionFocus or 2 ionBlur
     * events at a time.
     */
    const root = getElementRoot(this.el);
    root.addEventListener('ionFocus', (ev) => ev.stopPropagation());
    root.addEventListener('ionBlur', (ev) => ev.stopPropagation());
  }
  /**
   * When the presentation is changed, all calendar content is recreated,
   * so we need to re-init behavior with the new elements.
   */
  componentDidRender() {
    const { presentation, prevPresentation, calendarBodyRef, minParts, preferWheel } = this;
    /**
     * TODO(FW-2165)
     * Remove this when https://bugs.webkit.org/show_bug.cgi?id=235960 is fixed.
     * When using `min`, we add `scroll-snap-align: none`
     * to the disabled month so that users cannot scroll to it.
     * This triggers a bug in WebKit where the scroll position is reset.
     * Since the month change logic is handled by a scroll listener,
     * this causes the month to change leading to `scroll-snap-align`
     * changing again, thus changing the scroll position again and causing
     * an infinite loop.
     * This issue only applies to the calendar grid, so we can disable
     * it if the calendar grid is not being used.
     */
    const hasCalendarGrid = !preferWheel && ['date-time', 'time-date', 'date'].includes(presentation);
    if (minParts !== undefined && hasCalendarGrid && calendarBodyRef) {
      const workingMonth = calendarBodyRef.querySelector('.calendar-month:nth-of-type(1)');
      if (workingMonth) {
        calendarBodyRef.scrollLeft = workingMonth.clientWidth * (isRTL(this.el) ? -1 : 1);
      }
    }
    if (prevPresentation === null) {
      this.prevPresentation = presentation;
      return;
    }
    if (presentation === prevPresentation) {
      return;
    }
    this.prevPresentation = presentation;
    this.destroyInteractionListeners();
    this.initializeListeners();
    /**
     * The month/year picker from the date interface
     * should be closed as it is not available in non-date
     * interfaces.
     */
    this.showMonthAndYear = false;
    raf(() => {
      this.ionRender.emit();
    });
  }
  componentWillLoad() {
    const { el, multiple, presentation, preferWheel } = this;
    if (multiple) {
      if (presentation !== 'date') {
        printIonWarning('Multiple date selection is only supported for presentation="date".', el);
      }
      if (preferWheel) {
        printIonWarning('Multiple date selection is not supported with preferWheel="true".', el);
      }
    }
    this.processMinParts();
    this.processMaxParts();
    const hourValues = (this.parsedHourValues = convertToArrayOfNumbers(this.hourValues));
    const minuteValues = (this.parsedMinuteValues = convertToArrayOfNumbers(this.minuteValues));
    const monthValues = (this.parsedMonthValues = convertToArrayOfNumbers(this.monthValues));
    const yearValues = (this.parsedYearValues = convertToArrayOfNumbers(this.yearValues));
    const dayValues = (this.parsedDayValues = convertToArrayOfNumbers(this.dayValues));
    const todayParts = (this.todayParts = parseDate(getToday()));
    this.defaultParts = getClosestValidDate(todayParts, monthValues, dayValues, yearValues, hourValues, minuteValues);
    this.processValue(this.value);
    this.emitStyle();
  }
  emitStyle() {
    this.ionStyle.emit({
      interactive: true,
      datetime: true,
      'interactive-disabled': this.disabled,
    });
  }
  /**
   * Universal render methods
   * These are pieces of datetime that
   * are rendered independently of presentation.
   */
  renderFooter() {
    const { showDefaultButtons, showClearButton } = this;
    const hasSlottedButtons = this.el.querySelector('[slot="buttons"]') !== null;
    if (!hasSlottedButtons && !showDefaultButtons && !showClearButton) {
      return;
    }
    const clearButtonClick = () => {
      this.reset();
      this.value = undefined;
    };
    /**
     * By default we render two buttons:
     * Cancel - Dismisses the datetime and
     * does not update the `value` prop.
     * OK - Dismisses the datetime and
     * updates the `value` prop.
     */
    return (h("div", { class: "datetime-footer" }, h("div", { class: "datetime-buttons" }, h("div", { class: {
        ['datetime-action-buttons']: true,
        ['has-clear-button']: this.showClearButton,
      } }, h("slot", { name: "buttons" }, h("ion-buttons", null, showDefaultButtons && (h("ion-button", { id: "cancel-button", color: this.color, onClick: () => this.cancel(true) }, this.cancelText)), h("div", null, showClearButton && (h("ion-button", { id: "clear-button", color: this.color, onClick: () => clearButtonClick() }, this.clearText)), showDefaultButtons && (h("ion-button", { id: "confirm-button", color: this.color, onClick: () => this.confirm(true) }, this.doneText)))))))));
  }
  /**
   * Wheel picker render methods
   */
  renderWheelPicker(forcePresentation = this.presentation) {
    /**
     * If presentation="time-date" we switch the
     * order of the render array here instead of
     * manually reordering each date/time picker
     * column with CSS. This allows for additional
     * flexibility if we need to render subsets
     * of the date/time data or do additional ordering
     * within the child render functions.
     */
    const renderArray = forcePresentation === 'time-date'
      ? [this.renderTimePickerColumns(forcePresentation), this.renderDatePickerColumns(forcePresentation)]
      : [this.renderDatePickerColumns(forcePresentation), this.renderTimePickerColumns(forcePresentation)];
    return h("ion-picker-internal", null, renderArray);
  }
  renderDatePickerColumns(forcePresentation) {
    return forcePresentation === 'date-time' || forcePresentation === 'time-date'
      ? this.renderCombinedDatePickerColumn()
      : this.renderIndividualDatePickerColumns(forcePresentation);
  }
  renderCombinedDatePickerColumn() {
    const { defaultParts, workingParts, locale, minParts, maxParts, todayParts, isDateEnabled } = this;
    const activePart = this.getActivePartsWithFallback();
    /**
     * By default, generate a range of 3 months:
     * Previous month, current month, and next month
     */
    const monthsToRender = generateMonths(workingParts);
    const lastMonth = monthsToRender[monthsToRender.length - 1];
    /**
     * Ensure that users can select the entire window of dates.
     */
    monthsToRender[0].day = 1;
    lastMonth.day = getNumDaysInMonth(lastMonth.month, lastMonth.year);
    /**
     * Narrow the dates rendered based on min/max dates (if any).
     * The `min` date is used if the min is after the generated min month.
     * The `max` date is used if the max is before the generated max month.
     * This ensures that the sliding window always stays at 3 months
     * but still allows future dates to be lazily rendered based on any min/max
     * constraints.
     */
    const min = minParts !== undefined && isAfter(minParts, monthsToRender[0]) ? minParts : monthsToRender[0];
    const max = maxParts !== undefined && isBefore(maxParts, lastMonth) ? maxParts : lastMonth;
    const result = getCombinedDateColumnData(locale, todayParts, min, max, this.parsedDayValues, this.parsedMonthValues);
    let items = result.items;
    const parts = result.parts;
    if (isDateEnabled) {
      items = items.map((itemObject, index) => {
        const referenceParts = parts[index];
        let disabled;
        try {
          /**
           * The `isDateEnabled` implementation is try-catch wrapped
           * to prevent exceptions in the user's function from
           * interrupting the calendar rendering.
           */
          disabled = !isDateEnabled(convertDataToISO(referenceParts));
        }
        catch (e) {
          printIonError('Exception thrown from provided `isDateEnabled` function. Please check your function and try again.', e);
        }
        return Object.assign(Object.assign({}, itemObject), { disabled });
      });
    }
    /**
     * If we have selected a day already, then default the column
     * to that value. Otherwise, set it to the default date.
     */
    const todayString = workingParts.day !== null
      ? `${workingParts.year}-${workingParts.month}-${workingParts.day}`
      : `${defaultParts.year}-${defaultParts.month}-${defaultParts.day}`;
    return (h("ion-picker-column-internal", { class: "date-column", color: this.color, items: items, value: todayString, onIonChange: (ev) => {
        // TODO(FW-1823) Remove this when iOS 14 support is dropped.
        // Due to a Safari 14 issue we need to destroy
        // the scroll listener before we update state
        // and trigger a re-render.
        if (this.destroyCalendarListener) {
          this.destroyCalendarListener();
        }
        const { value } = ev.detail;
        const findPart = parts.find(({ month, day, year }) => value === `${year}-${month}-${day}`);
        this.setWorkingParts(Object.assign(Object.assign({}, workingParts), findPart));
        this.setActiveParts(Object.assign(Object.assign({}, activePart), findPart));
        // We can re-attach the scroll listener after
        // the working parts have been updated.
        this.initializeCalendarListener();
        ev.stopPropagation();
      } }));
  }
  renderIndividualDatePickerColumns(forcePresentation) {
    const { workingParts, isDateEnabled } = this;
    const shouldRenderMonths = forcePresentation !== 'year' && forcePresentation !== 'time';
    const months = shouldRenderMonths
      ? getMonthColumnData(this.locale, workingParts, this.minParts, this.maxParts, this.parsedMonthValues)
      : [];
    const shouldRenderDays = forcePresentation === 'date';
    let days = shouldRenderDays
      ? getDayColumnData(this.locale, workingParts, this.minParts, this.maxParts, this.parsedDayValues)
      : [];
    if (isDateEnabled) {
      days = days.map((dayObject) => {
        const { value } = dayObject;
        const valueNum = typeof value === 'string' ? parseInt(value) : value;
        const referenceParts = {
          month: workingParts.month,
          day: valueNum,
          year: workingParts.year,
        };
        let disabled;
        try {
          /**
           * The `isDateEnabled` implementation is try-catch wrapped
           * to prevent exceptions in the user's function from
           * interrupting the calendar rendering.
           */
          disabled = !isDateEnabled(convertDataToISO(referenceParts));
        }
        catch (e) {
          printIonError('Exception thrown from provided `isDateEnabled` function. Please check your function and try again.', e);
        }
        return Object.assign(Object.assign({}, dayObject), { disabled });
      });
    }
    const shouldRenderYears = forcePresentation !== 'month' && forcePresentation !== 'time';
    const years = shouldRenderYears
      ? getYearColumnData(this.locale, this.defaultParts, this.minParts, this.maxParts, this.parsedYearValues)
      : [];
    /**
     * Certain locales show the day before the month.
     */
    const showMonthFirst = isMonthFirstLocale(this.locale, { month: 'numeric', day: 'numeric' });
    let renderArray = [];
    if (showMonthFirst) {
      renderArray = [
        this.renderMonthPickerColumn(months),
        this.renderDayPickerColumn(days),
        this.renderYearPickerColumn(years),
      ];
    }
    else {
      renderArray = [
        this.renderDayPickerColumn(days),
        this.renderMonthPickerColumn(months),
        this.renderYearPickerColumn(years),
      ];
    }
    return renderArray;
  }
  renderDayPickerColumn(days) {
    var _a;
    if (days.length === 0) {
      return [];
    }
    const { workingParts } = this;
    const activePart = this.getActivePartsWithFallback();
    return (h("ion-picker-column-internal", { class: "day-column", color: this.color, items: days, value: (_a = (workingParts.day !== null ? workingParts.day : this.defaultParts.day)) !== null && _a !== void 0 ? _a : undefined, onIonChange: (ev) => {
        // TODO(FW-1823) Remove this when iOS 14 support is dropped.
        // Due to a Safari 14 issue we need to destroy
        // the scroll listener before we update state
        // and trigger a re-render.
        if (this.destroyCalendarListener) {
          this.destroyCalendarListener();
        }
        this.setWorkingParts(Object.assign(Object.assign({}, workingParts), { day: ev.detail.value }));
        this.setActiveParts(Object.assign(Object.assign({}, activePart), { day: ev.detail.value }));
        // We can re-attach the scroll listener after
        // the working parts have been updated.
        this.initializeCalendarListener();
        ev.stopPropagation();
      } }));
  }
  renderMonthPickerColumn(months) {
    if (months.length === 0) {
      return [];
    }
    const { workingParts } = this;
    const activePart = this.getActivePartsWithFallback();
    return (h("ion-picker-column-internal", { class: "month-column", color: this.color, items: months, value: workingParts.month, onIonChange: (ev) => {
        // TODO(FW-1823) Remove this when iOS 14 support is dropped.
        // Due to a Safari 14 issue we need to destroy
        // the scroll listener before we update state
        // and trigger a re-render.
        if (this.destroyCalendarListener) {
          this.destroyCalendarListener();
        }
        this.setWorkingParts(Object.assign(Object.assign({}, workingParts), { month: ev.detail.value }));
        this.setActiveParts(Object.assign(Object.assign({}, activePart), { month: ev.detail.value }));
        // We can re-attach the scroll listener after
        // the working parts have been updated.
        this.initializeCalendarListener();
        ev.stopPropagation();
      } }));
  }
  renderYearPickerColumn(years) {
    if (years.length === 0) {
      return [];
    }
    const { workingParts } = this;
    const activePart = this.getActivePartsWithFallback();
    return (h("ion-picker-column-internal", { class: "year-column", color: this.color, items: years, value: workingParts.year, onIonChange: (ev) => {
        // TODO(FW-1823) Remove this when iOS 14 support is dropped.
        // Due to a Safari 14 issue we need to destroy
        // the scroll listener before we update state
        // and trigger a re-render.
        if (this.destroyCalendarListener) {
          this.destroyCalendarListener();
        }
        this.setWorkingParts(Object.assign(Object.assign({}, workingParts), { year: ev.detail.value }));
        this.setActiveParts(Object.assign(Object.assign({}, activePart), { year: ev.detail.value }));
        // We can re-attach the scroll listener after
        // the working parts have been updated.
        this.initializeCalendarListener();
        ev.stopPropagation();
      } }));
  }
  renderTimePickerColumns(forcePresentation) {
    if (['date', 'month', 'month-year', 'year'].includes(forcePresentation)) {
      return [];
    }
    /**
     * If a user has not selected a date,
     * then we should show all times. If the
     * user has selected a date (even if it has
     * not been confirmed yet), we should apply
     * the max and min restrictions so that the
     * time picker shows values that are
     * appropriate for the selected date.
     */
    const activePart = this.getActivePart();
    const userHasSelectedDate = activePart !== undefined;
    const { hoursData, minutesData, dayPeriodData } = getTimeColumnsData(this.locale, this.workingParts, this.hourCycle, userHasSelectedDate ? this.minParts : undefined, userHasSelectedDate ? this.maxParts : undefined, this.parsedHourValues, this.parsedMinuteValues);
    return [
      this.renderHourPickerColumn(hoursData),
      this.renderMinutePickerColumn(minutesData),
      this.renderDayPeriodPickerColumn(dayPeriodData),
    ];
  }
  renderHourPickerColumn(hoursData) {
    const { workingParts } = this;
    if (hoursData.length === 0)
      return [];
    const activePart = this.getActivePartsWithFallback();
    return (h("ion-picker-column-internal", { color: this.color, value: activePart.hour, items: hoursData, numericInput: true, onIonChange: (ev) => {
        this.setWorkingParts(Object.assign(Object.assign({}, workingParts), { hour: ev.detail.value }));
        this.setActiveParts(Object.assign(Object.assign({}, activePart), { hour: ev.detail.value }));
        ev.stopPropagation();
      } }));
  }
  renderMinutePickerColumn(minutesData) {
    const { workingParts } = this;
    if (minutesData.length === 0)
      return [];
    const activePart = this.getActivePartsWithFallback();
    return (h("ion-picker-column-internal", { color: this.color, value: activePart.minute, items: minutesData, numericInput: true, onIonChange: (ev) => {
        this.setWorkingParts(Object.assign(Object.assign({}, workingParts), { minute: ev.detail.value }));
        this.setActiveParts(Object.assign(Object.assign({}, activePart), { minute: ev.detail.value }));
        ev.stopPropagation();
      } }));
  }
  renderDayPeriodPickerColumn(dayPeriodData) {
    const { workingParts } = this;
    if (dayPeriodData.length === 0) {
      return [];
    }
    const activePart = this.getActivePartsWithFallback();
    const isDayPeriodRTL = isLocaleDayPeriodRTL(this.locale);
    return (h("ion-picker-column-internal", { style: isDayPeriodRTL ? { order: '-1' } : {}, color: this.color, value: activePart.ampm, items: dayPeriodData, onIonChange: (ev) => {
        const hour = calculateHourFromAMPM(workingParts, ev.detail.value);
        this.setWorkingParts(Object.assign(Object.assign({}, workingParts), { ampm: ev.detail.value, hour }));
        this.setActiveParts(Object.assign(Object.assign({}, activePart), { ampm: ev.detail.value, hour }));
        ev.stopPropagation();
      } }));
  }
  renderWheelView(forcePresentation) {
    const { locale } = this;
    const showMonthFirst = isMonthFirstLocale(locale);
    const columnOrder = showMonthFirst ? 'month-first' : 'year-first';
    return (h("div", { class: {
        [`wheel-order-${columnOrder}`]: true,
      } }, this.renderWheelPicker(forcePresentation)));
  }
  /**
   * Grid Render Methods
   */
  renderCalendarHeader(mode) {
    const expandedIcon = mode === 'ios' ? chevronDown : caretUpSharp;
    const collapsedIcon = mode === 'ios' ? chevronForward : caretDownSharp;
    const prevMonthDisabled = isPrevMonthDisabled(this.workingParts, this.minParts, this.maxParts);
    const nextMonthDisabled = isNextMonthDisabled(this.workingParts, this.maxParts);
    // don't use the inheritAttributes util because it removes dir from the host, and we still need that
    const hostDir = this.el.getAttribute('dir') || undefined;
    return (h("div", { class: "calendar-header" }, h("div", { class: "calendar-action-buttons" }, h("div", { class: "calendar-month-year" }, h("ion-item", { button: true, detail: false, lines: "none", onClick: () => this.toggleMonthAndYearView() }, h("ion-label", null, getMonthAndYear(this.locale, this.workingParts), h("ion-icon", { "aria-hidden": "true", icon: this.showMonthAndYear ? expandedIcon : collapsedIcon, lazy: false, flipRtl: true })))), h("div", { class: "calendar-next-prev" }, h("ion-buttons", null, h("ion-button", { "aria-label": "previous month", disabled: prevMonthDisabled, onClick: () => this.prevMonth() }, h("ion-icon", { dir: hostDir, "aria-hidden": "true", slot: "icon-only", icon: chevronBack, lazy: false, flipRtl: true })), h("ion-button", { "aria-label": "next month", disabled: nextMonthDisabled, onClick: () => this.nextMonth() }, h("ion-icon", { dir: hostDir, "aria-hidden": "true", slot: "icon-only", icon: chevronForward, lazy: false, flipRtl: true }))))), h("div", { class: "calendar-days-of-week", "aria-hidden": "true" }, getDaysOfWeek(this.locale, mode, this.firstDayOfWeek % 7).map((d) => {
      return h("div", { class: "day-of-week" }, d);
    }))));
  }
  renderMonth(month, year) {
    const yearAllowed = this.parsedYearValues === undefined || this.parsedYearValues.includes(year);
    const monthAllowed = this.parsedMonthValues === undefined || this.parsedMonthValues.includes(month);
    const isCalMonthDisabled = !yearAllowed || !monthAllowed;
    const swipeDisabled = isMonthDisabled({
      month,
      year,
      day: null,
    }, {
      // The day is not used when checking if a month is disabled.
      // Users should be able to access the min or max month, even if the
      // min/max date is out of bounds (e.g. min is set to Feb 15, Feb should not be disabled).
      minParts: Object.assign(Object.assign({}, this.minParts), { day: null }),
      maxParts: Object.assign(Object.assign({}, this.maxParts), { day: null }),
    });
    // The working month should never have swipe disabled.
    // Otherwise the CSS scroll snap will not work and the user
    // can free-scroll the calendar.
    const isWorkingMonth = this.workingParts.month === month && this.workingParts.year === year;
    const activePart = this.getActivePartsWithFallback();
    return (h("div", { "aria-hidden": !isWorkingMonth ? 'true' : null, class: {
        'calendar-month': true,
        // Prevents scroll snap swipe gestures for months outside of the min/max bounds
        'calendar-month-disabled': !isWorkingMonth && swipeDisabled,
      } }, h("div", { class: "calendar-month-grid" }, getDaysOfMonth(month, year, this.firstDayOfWeek % 7).map((dateObject, index) => {
      const { day, dayOfWeek } = dateObject;
      const { isDateEnabled, multiple } = this;
      const referenceParts = { month, day, year };
      const isCalendarPadding = day === null;
      const { isActive, isToday, ariaLabel, ariaSelected, disabled, text } = getCalendarDayState(this.locale, referenceParts, this.activePartsClone, this.todayParts, this.minParts, this.maxParts, this.parsedDayValues);
      let isCalDayDisabled = isCalMonthDisabled || disabled;
      if (!isCalDayDisabled && isDateEnabled !== undefined) {
        try {
          /**
           * The `isDateEnabled` implementation is try-catch wrapped
           * to prevent exceptions in the user's function from
           * interrupting the calendar rendering.
           */
          isCalDayDisabled = !isDateEnabled(convertDataToISO(referenceParts));
        }
        catch (e) {
          printIonError('Exception thrown from provided `isDateEnabled` function. Please check your function and try again.', e);
        }
      }
      return (h("button", { tabindex: "-1", "data-day": day, "data-month": month, "data-year": year, "data-index": index, "data-day-of-week": dayOfWeek, disabled: isCalDayDisabled, class: {
          'calendar-day-padding': isCalendarPadding,
          'calendar-day': true,
          'calendar-day-active': isActive,
          'calendar-day-today': isToday,
        }, "aria-hidden": isCalendarPadding ? 'true' : null, "aria-selected": ariaSelected, "aria-label": ariaLabel, onClick: () => {
          if (isCalendarPadding) {
            return;
          }
          this.setWorkingParts(Object.assign(Object.assign({}, this.workingParts), { month,
            day,
            year }));
          // multiple only needs date info, so we can wipe out other fields like time
          if (multiple) {
            this.setActiveParts({
              month,
              day,
              year,
            }, isActive);
          }
          else {
            this.setActiveParts(Object.assign(Object.assign({}, activePart), { month,
              day,
              year }));
          }
        } }, text));
    }))));
  }
  renderCalendarBody() {
    return (h("div", { class: "calendar-body ion-focusable", ref: (el) => (this.calendarBodyRef = el), tabindex: "0" }, generateMonths(this.workingParts).map(({ month, year }) => {
      return this.renderMonth(month, year);
    })));
  }
  renderCalendar(mode) {
    return (h("div", { class: "datetime-calendar", key: "datetime-calendar" }, this.renderCalendarHeader(mode), this.renderCalendarBody()));
  }
  renderTimeLabel() {
    const hasSlottedTimeLabel = this.el.querySelector('[slot="time-label"]') !== null;
    if (!hasSlottedTimeLabel && !this.showDefaultTimeLabel) {
      return;
    }
    return h("slot", { name: "time-label" }, "Time");
  }
  renderTimeOverlay() {
    const use24Hour = is24Hour(this.locale, this.hourCycle);
    const activePart = this.getActivePartsWithFallback();
    return [
      h("div", { class: "time-header" }, this.renderTimeLabel()),
      h("button", { class: {
          'time-body': true,
          'time-body-active': this.isTimePopoverOpen,
        }, "aria-expanded": "false", "aria-haspopup": "true", onClick: async (ev) => {
          const { popoverRef } = this;
          if (popoverRef) {
            this.isTimePopoverOpen = true;
            popoverRef.present(new CustomEvent('ionShadowTarget', {
              detail: {
                ionShadowTarget: ev.target,
              },
            }));
            await popoverRef.onWillDismiss();
            this.isTimePopoverOpen = false;
          }
        } }, getLocalizedTime(this.locale, activePart, use24Hour)),
      h("ion-popover", { alignment: "center", translucent: true, overlayIndex: 1, arrow: false, onWillPresent: (ev) => {
          /**
           * Intersection Observers do not consistently fire between Blink and Webkit
           * when toggling the visibility of the popover and trying to scroll the picker
           * column to the correct time value.
           *
           * This will correctly scroll the element position to the correct time value,
           * before the popover is fully presented.
           */
          const cols = ev.target.querySelectorAll('ion-picker-column-internal');
          // TODO (FW-615): Potentially remove this when intersection observers are fixed in picker column
          cols.forEach((col) => col.scrollActiveItemIntoView());
        }, style: {
          '--offset-y': '-10px',
          '--min-width': 'fit-content',
        },
        // Allow native browser keyboard events to support up/down/home/end key
        // navigation within the time picker.
        keyboardEvents: true, ref: (el) => (this.popoverRef = el) }, this.renderWheelPicker('time')),
    ];
  }
  getHeaderSelectedDateText() {
    const { activeParts, multiple, titleSelectedDatesFormatter } = this;
    const isArray = Array.isArray(activeParts);
    let headerText;
    if (multiple && isArray && activeParts.length !== 1) {
      headerText = `${activeParts.length} days`; // default/fallback for multiple selection
      if (titleSelectedDatesFormatter !== undefined) {
        try {
          headerText = titleSelectedDatesFormatter(convertDataToISO(activeParts));
        }
        catch (e) {
          printIonError('Exception in provided `titleSelectedDatesFormatter`: ', e);
        }
      }
    }
    else {
      // for exactly 1 day selected (multiple set or not), show a formatted version of that
      headerText = getMonthAndDay(this.locale, this.getActivePartsWithFallback());
    }
    return headerText;
  }
  renderHeader(showExpandedHeader = true) {
    const hasSlottedTitle = this.el.querySelector('[slot="title"]') !== null;
    if (!hasSlottedTitle && !this.showDefaultTitle) {
      return;
    }
    return (h("div", { class: "datetime-header" }, h("div", { class: "datetime-title" }, h("slot", { name: "title" }, "Select Date")), showExpandedHeader && h("div", { class: "datetime-selected-date" }, this.getHeaderSelectedDateText())));
  }
  /**
   * Render time picker inside of datetime.
   * Do not pass color prop to segment on
   * iOS mode. MD segment has been customized and
   * should take on the color prop, but iOS
   * should just be the default segment.
   */
  renderTime() {
    const { presentation } = this;
    const timeOnlyPresentation = presentation === 'time';
    return (h("div", { class: "datetime-time" }, timeOnlyPresentation ? this.renderWheelPicker() : this.renderTimeOverlay()));
  }
  /**
   * Renders the month/year picker that is
   * displayed on the calendar grid.
   * The .datetime-year class has additional
   * styles that let us show/hide the
   * picker when the user clicks on the
   * toggle in the calendar header.
   */
  renderCalendarViewMonthYearPicker() {
    return h("div", { class: "datetime-year" }, this.renderWheelView('month-year'));
  }
  /**
   * Render entry point
   * All presentation types are rendered from here.
   */
  renderDatetime(mode) {
    const { presentation, preferWheel } = this;
    /**
     * Certain presentation types have separate grid and wheel displays.
     * If preferWheel is true then we should show a wheel picker instead.
     */
    const hasWheelVariant = presentation === 'date' || presentation === 'date-time' || presentation === 'time-date';
    if (preferWheel && hasWheelVariant) {
      return [this.renderHeader(false), this.renderWheelView(), this.renderFooter()];
    }
    switch (presentation) {
      case 'date-time':
        return [
          this.renderHeader(),
          this.renderCalendar(mode),
          this.renderCalendarViewMonthYearPicker(),
          this.renderTime(),
          this.renderFooter(),
        ];
      case 'time-date':
        return [
          this.renderHeader(),
          this.renderTime(),
          this.renderCalendar(mode),
          this.renderCalendarViewMonthYearPicker(),
          this.renderFooter(),
        ];
      case 'time':
        return [this.renderHeader(false), this.renderTime(), this.renderFooter()];
      case 'month':
      case 'month-year':
      case 'year':
        return [this.renderHeader(false), this.renderWheelView(), this.renderFooter()];
      default:
        return [
          this.renderHeader(),
          this.renderCalendar(mode),
          this.renderCalendarViewMonthYearPicker(),
          this.renderFooter(),
        ];
    }
  }
  render() {
    const { name, value, disabled, el, color, isPresented, readonly, showMonthAndYear, preferWheel, presentation, size, } = this;
    const mode = getIonMode(this);
    const isMonthAndYearPresentation = presentation === 'year' || presentation === 'month' || presentation === 'month-year';
    const shouldShowMonthAndYear = showMonthAndYear || isMonthAndYearPresentation;
    const monthYearPickerOpen = showMonthAndYear && !isMonthAndYearPresentation;
    const hasDatePresentation = presentation === 'date' || presentation === 'date-time' || presentation === 'time-date';
    const hasWheelVariant = hasDatePresentation && preferWheel;
    const hasGrid = hasDatePresentation && !preferWheel;
    renderHiddenInput(true, el, name, formatValue(value), disabled);
    return (h(Host, { "aria-disabled": disabled ? 'true' : null, onFocus: this.onFocus, onBlur: this.onBlur, class: Object.assign({}, createColorClasses(color, {
        [mode]: true,
        ['datetime-presented']: isPresented,
        ['datetime-readonly']: readonly,
        ['datetime-disabled']: disabled,
        'show-month-and-year': shouldShowMonthAndYear,
        'month-year-picker-open': monthYearPickerOpen,
        [`datetime-presentation-${presentation}`]: true,
        [`datetime-size-${size}`]: true,
        [`datetime-prefer-wheel`]: hasWheelVariant,
        [`datetime-grid`]: hasGrid,
      })) }, this.renderDatetime(mode)));
  }
  get el() { return this; }
  static get watchers() { return {
    "disabled": ["disabledChanged"],
    "min": ["minChanged"],
    "max": ["maxChanged"],
    "yearValues": ["yearValuesChanged"],
    "monthValues": ["monthValuesChanged"],
    "dayValues": ["dayValuesChanged"],
    "hourValues": ["hourValuesChanged"],
    "minuteValues": ["minuteValuesChanged"],
    "activeParts": ["activePartsChanged"],
    "value": ["valueChanged"]
  }; }
  static get style() { return {
    ios: datetimeIosCss,
    md: datetimeMdCss
  }; }
}, [33, "ion-datetime", {
    "color": [1],
    "name": [1],
    "disabled": [4],
    "readonly": [4],
    "isDateEnabled": [16],
    "min": [1025],
    "max": [1025],
    "presentation": [1],
    "cancelText": [1, "cancel-text"],
    "doneText": [1, "done-text"],
    "clearText": [1, "clear-text"],
    "yearValues": [8, "year-values"],
    "monthValues": [8, "month-values"],
    "dayValues": [8, "day-values"],
    "hourValues": [8, "hour-values"],
    "minuteValues": [8, "minute-values"],
    "locale": [1],
    "firstDayOfWeek": [2, "first-day-of-week"],
    "titleSelectedDatesFormatter": [16],
    "multiple": [4],
    "value": [1025],
    "showDefaultTitle": [4, "show-default-title"],
    "showDefaultButtons": [4, "show-default-buttons"],
    "showClearButton": [4, "show-clear-button"],
    "showDefaultTimeLabel": [4, "show-default-time-label"],
    "hourCycle": [1, "hour-cycle"],
    "size": [1],
    "preferWheel": [4, "prefer-wheel"],
    "showMonthAndYear": [32],
    "activeParts": [32],
    "workingParts": [32],
    "isPresented": [32],
    "isTimePopoverOpen": [32],
    "confirm": [64],
    "reset": [64],
    "cancel": [64]
  }]);
let datetimeIds = 0;
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ion-datetime", "ion-backdrop", "ion-button", "ion-buttons", "ion-icon", "ion-item", "ion-label", "ion-note", "ion-picker-column-internal", "ion-picker-internal", "ion-popover", "ion-ripple-effect"];
  components.forEach(tagName => { switch (tagName) {
    case "ion-datetime":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Datetime);
      }
      break;
    case "ion-backdrop":
      if (!customElements.get(tagName)) {
        defineCustomElement$c();
      }
      break;
    case "ion-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$b();
      }
      break;
    case "ion-buttons":
      if (!customElements.get(tagName)) {
        defineCustomElement$a();
      }
      break;
    case "ion-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$9();
      }
      break;
    case "ion-item":
      if (!customElements.get(tagName)) {
        defineCustomElement$8();
      }
      break;
    case "ion-label":
      if (!customElements.get(tagName)) {
        defineCustomElement$7();
      }
      break;
    case "ion-note":
      if (!customElements.get(tagName)) {
        defineCustomElement$6();
      }
      break;
    case "ion-picker-column-internal":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "ion-picker-internal":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "ion-popover":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "ion-ripple-effect":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const IonDatetime = Datetime;
const defineCustomElement = defineCustomElement$1;

export { IonDatetime, defineCustomElement };
