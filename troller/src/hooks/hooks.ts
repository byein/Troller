const onChange = (
  modifierFn: (src: string) => void,
  e: React.ChangeEvent<HTMLInputElement>
) => {
  modifierFn(e.currentTarget.value);
};
export default onChange;
