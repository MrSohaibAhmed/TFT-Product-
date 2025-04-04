export const generateRandomString = (): string => {
  const characters = 'abcdefghijklmnopqrstuvwxyz';
  let result = '';
  for (let i = 0; i < 9; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }
  return result;
};
export const generateRandomNumber = (): string => {
  const characters = '0123456789';
  let result = '';
  for (let i = 0; i < 9; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }
  return result;
};

export const getCurrentTimestampInSeconds = (
  timestampInISOString: string
): string => {
  const timestampInMilliseconds: number = Date.parse(timestampInISOString);
  const timestampInSeconds: number = timestampInMilliseconds / 1000;
  return timestampInSeconds.toFixed(6) + 's';
};
