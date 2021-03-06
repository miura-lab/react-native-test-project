function s4(): string {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}

export const generateHash = (): string => {
  return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
};

export const isDataNull = (data: any): boolean => {
  return data === null;
};

export function cutOffStringByLength(value: string, length: number): string {
  if (!value) {
    return '';
  }

  return value.length <= length
    ? value
    : value
        .split('')
        .filter((char, charOrder) => charOrder <= length)
        .join('')
        .concat('...');
}
