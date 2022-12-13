export const phoneValidator = (phoneNumber: string) => {
  const msisdn = phoneNumber;
  const msisdnRegexp = /^((\+595|595|0)9([6-9][1-6])\d{6})$/;
  const validNumber = msisdnRegexp.test(msisdn);
  return { validNumber };
};
