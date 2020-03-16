export const findByTestAttr = (component: any, attr: String) =>
  component.find(`[data-test='${attr}']`);
