export const toMonthStart = (input = new Date()) =>
  new Date(input.getFullYear(), input.getMonth(), 1);

export const toIsoDate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export const fromIsoDate = (value: string) => {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year ?? 0, (month ?? 1) - 1, day ?? 1);
};

export const daysInMonth = (input = new Date()) => {
  const year = input.getFullYear();
  const month = input.getMonth();
  return new Date(year, month + 1, 0).getDate();
};

export const normalizeDay = (date: Date) =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate());
