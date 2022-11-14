export default function resolvePlatform(componentName: string, props?: any) {
  //TODO: Update eslint rule for typescript `this` https://www.typescriptlang.org/docs/handbook/functions.html#this-parameters
  return function (componentCallbackProps?: any): JSX.Element {
    return this['resolver'](componentName, {...componentCallbackProps, ...props});
  };
}
