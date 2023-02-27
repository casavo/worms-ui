export const getTypeDelimitedWithPipe = (values: string[]) => values.map((v) => `"${v}"`).join('|');
