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
  'border-left': 'solid blue 1px',
  'display': 'inline',
  'float': 'right',
  'cursor': 'pointer',
};
const Box = (props) => <div style={boxStyle}>{props.title}</div>
const BoxNew = (props) => <div style={boxStyle}>{props.title}<Btn title="+"/></div>
const BoxTask = (props) => <div style={boxStyle}>{props.title}<Btn title="x"/></div>
const Btn = (props) => <div style={btnStyle}>{props.title}</div>
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const listItems = numbers.map((number) =>
    <BoxTask title={"Task " + number}/>
);

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
    <Box title="To Do Ha Ha"/>
    <BoxNew title="New"/>
    {listItems}
  </div>
    );
  }
}

ReactDOM.render(
  <ToDo />,
  document.getElementById('root')
);