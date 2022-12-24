export const numberWithCommas = (value: number) => {
  return value
    ?.toFixed(2)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
