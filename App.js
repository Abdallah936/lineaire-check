import "./App.css";

const array = [10, 12, 13, 6];
const array2 = [10, 13, 16, 15];
//element commun 10,13   *2 = 46
let count = 0;
var array11 = array.filter(trier1);
var array21 = array2.filter(trier1);
var array12 = array.filter(trier2);
var array22 = array2.filter(trier2);
var arrays = array11.concat(array12, array21, array22);
for (let i = 0; i < arrays.length; i++) {
  count += arrays[i];
}

function App() {
  return (
    <div className="App">
      <h1> count is {count}</h1>
    </div>
  );
}

export default App;

function trier1(element) {
  return element === 10;
}
function trier2(element) {
  return element === 13;
}
