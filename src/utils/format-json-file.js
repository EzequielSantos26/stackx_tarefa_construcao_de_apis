export const formatjsonFile = (filePath, replacer = null, indettaion = 2) => {
  return JSON.stringify(
    filePath, 
    replacer,
    indettaion);
};
