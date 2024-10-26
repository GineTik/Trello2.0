import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getDeadlineDateWithDayOffset = (offsetDays: number) => {
  const deadlineDate = getCurrentDay();
  deadlineDate.setDate(deadlineDate.getDate() + offsetDays);
  return deadlineDate;
};

export const getDeadlineDateWithMonthOffset = (offsetMonth: number) => {
  const deadlineDate = getCurrentDay();
  deadlineDate.setMonth(deadlineDate.getMonth() + offsetMonth);
  return deadlineDate;
};

export function getDaysFromMilliseconds(milliseconds: number) {
  return Math.round(milliseconds / (24 * 60 * 60 * 1000));
}

export function getCurrentDay() {
  const time = Date.now();
  return new Date(time - (time % 86400000));
}
