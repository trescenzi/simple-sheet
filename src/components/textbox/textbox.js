export default ({oninput, value, ...rest}) => (
  <div contenteditable {...rest} oninput={({target: {value}}) => oninput(value)}>
    {value || rest.placeholder}
  </div>
);
