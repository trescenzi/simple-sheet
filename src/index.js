import {app, h} from 'hyperapp';
import Attributes from './components/attributes/';

const state = {
	name: '',
  attributes: Attributes.state,
};

const actions = {
  attributes: Attributes.actions,
  setName: (name) => {name},
}

app({
	state,
  view: (state) => (actions) => (
  <div>
  	<input
      value={state.name}
      oninput={({target: {value}}) => actions.setName(value)}
      placeholder='name'>
    </input>
    <Attributes.view {...state.attributes} update={actions.attributes.updateScore} />
  </div>
  ),
  actions,
}, document.querySelector('#app'));

