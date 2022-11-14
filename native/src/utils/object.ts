/**
 * Get a value by path in any object.
 * i.e. obj = {foo: {bar: { asdf: 'test'}}}, path = 'foo.bar.asdf' then you will get 'test'
 * @param obj - The object to search for a value in
 * @param path - The path to search in the object
 * @param defaultValue - Default value if the path is not found in the object
 */
export const get = (obj: any, path: string, defaultValue: any) => {
  // If the given object is already undefined
  if (obj === undefined) {
    return defaultValue;
  }

  const splitPath = path.replace(/\[/g, '.').replace(/]/g, '').split('.');

  splitPath.forEach(function (level) {
    if (obj === undefined) {
      return defaultValue;
    }
    obj = obj[level];
  });

  // check that the current value we want to return is still undefined
  if (obj === undefined) {
    return defaultValue;
  }

  return obj;
};
