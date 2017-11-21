import {h} from 'hyperapp';
import './index.css';

const AttrInput = ({name, value, update}) => {
  const modifier = Math.ceil((value - 10) /2);
  const oninput = ({target: {value}}) => update(value);

  return <div class={'attribute ' + name}>
    <span class="name">{name}: </span>
    <input value={value} placeholder={name} oninput={oninput}/>
    <span>
      {modifier > 0 ? ' +' : ' '}{modifier}
    </span>
  </div>
};

const Attrs = ({str, dex, con, int, cha, wis, update}) => {
	const updateValue = (key) => (value) => update({key, value});
  
	return (<div class="attributes">
	  <div class="physical">
      <AttrInput name="str" value={str} update={updateValue('str')}/>
      <AttrInput name="dex" value={dex} update={updateValue('dex')}/>
      <AttrInput name="con" value={con} update={updateValue('con')}/>
	  </div>
	  <div class="mental">
      <AttrInput name="int" value={int} update={updateValue('int')}/>
      <AttrInput name="wis" value={wis} update={updateValue('wis')}/>
      <AttrInput name="cha" value={cha} update={updateValue('cha')}/>
	  </div>
	</div>)
};

const actions = {
  updateScore: ({key, value}) => state => {
    return {[key]: value};
  }
};

const state = {
  str: 8,
  dex: 8,
  con: 8,
  int: 8,
  cha: 8,
  wis: 8,
}

export default {
  view: Attrs,
  actions,
  state,
};
