export const numberWithCommas = (value: number, decimals: number) => {
  return value
    ?.toFixed(decimals)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
