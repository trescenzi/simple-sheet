import Textbox from './textbox';
export default ({oninput, ...rest}) => (
  Textbox({...rest,
    oninput: (value) => parseInt(value),
  })
);
