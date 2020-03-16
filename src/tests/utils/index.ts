export const findByTestAttr = (component: any, attr: String) => {
  return component.find(`[data-testid="${attr}"]`);
}