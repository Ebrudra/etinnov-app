// usageStore.ts
let totalUsageValue = 0;

export const setTotalUsageValue = (value: number) => {
  totalUsageValue = value;
};

export const getTotalUsageValue = () => {
  return totalUsageValue;
};
