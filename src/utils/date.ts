import dayjs from "dayjs";

export const dateFormat = (date: Date, type: string) => {
  const dateFormatted = dayjs(date).format(type);
  return dateFormatted;
};
