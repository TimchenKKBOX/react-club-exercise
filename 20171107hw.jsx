const boxStyle = {
  'width': '500px',
  'height': '50px',
  'line-height': '50px',
  'margin': '10px auto',
  'border': 'solid blue 1px',
  'text-align': 'center',
};
const btnStyle = {
  'width': '50px',
  'height': '50px',
  'float': 'right',
};
const Box = (props) => <div style={boxStyle}>{props.title}</div>
const BoxNew = (props) => <div style={boxStyle}>{props.title}<Btn title="+"/></div>
const BoxTask = (props) => <div style={boxStyle}>{props.title}<Btn title="x"/></div>
const Btn = (props) => <div style={btnStyle}>{props.title}</div>
const numbers = [1];
const listItems = numbers.map((number) =>
  <BoxTask title={"Task " + number}/>
);

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.onClickAdd = this.onClickAdd.bind(this);
    this.state = {list: [0]};
  }

  onClickAdd() {
    let newItem = this.state.list.length
    this.setState({list: this.state.list.concat([newItem])});
  }

  render() {
    const listItems = this.state.list.map((number) =>
      <BoxTask title={"Task " + number}/>
    );
    return (
      <div>
        <Box title="To Do"/>
        <div style={boxStyle}>New<button style={btnStyle} onClick={this.onClickAdd}> + </button></div>
        {listItems}
      </div>
    );
  }
}

ReactDOM.render(
  <ToDo />,
  document.getElementById('root')
);
