const res = document.getElementById("res");

function button0() {
  res.innerHTML += 0;
}

function button1() {
  res.innerHTML += 1;
}

function buttonClr() {
  res.innerHTML = '';
}

function buttonSum() {
  res.innerHTML += '+';
}

function buttonSub() {
  res.innerHTML += '-';
}

function buttonMul() {
  res.innerHTML += '*';
}

function buttonDiv() {
  res.innerHTML += '/';
}

function buttonEql() {
  const oReg = /[^\+|\-|\*|\/]/;
  const nReg = /\+|\-|\*|\//;
  let o = res.innerText.split(oReg);
  let eFlag =
    nReg.test(o[o.length - 1]) ||
    o.some((o, i) => (i === 0 && nReg.test(o)) || o.length > 1);

  if (!eFlag) {
    const n = res.innerText.split(nReg).map(n => parseInt(n, 2));
    o = o.filter(e => nReg.test(e)).map((e, i) => n[i] + e)
    o.push(n[n.length - 1]);
    o = o.toString().replace(/,/g, '');

    res.innerText = eval(o).toString(2);
  } else {
    mathError();
  }
}

function mathError() {
  throw "Math Error!";
}







/*
function createDiv(id, component) {
  var div = document.createElement('div');
  div.id = id;
  component.appendChild(div);
  return div;
}

function createButton(id, innerHTML, component, func) {
  var btn = document.createElement('button');
  btn.id = id;
  btn.innerHTML = innerHTML;
  btn.onclick = function () {
    func(innerHTML)
  };
  component.append(btn);
  return btn;
}

var operand = "";
var operand1 = "";
var operator = "";

var body = document.body;
var res = createDiv("res", body);
var btns = createDiv("btns", body);

var func0Or1 = function (value) {
  operand += value;
  res.innerHTML += value;
};

var funcClr = function () {
  operand = "";
  operand1 = "";
  operator = "";
  res.innerHTML = "";
};

var funcOper1 = function (oper) {
  res.innerHTML += oper;
  operand1 = operand;
  operand = "";
  operator = oper;
};

var funcEql = function () {
  var calc = parseInt(operand1, 2) + operator + parseInt(operand, 2);
  res.innerHTML = eval(calc).toString(2);
};

var btn0 = createButton("btn0", "0", btns, func0Or1);
var btn1 = createButton("btn1", "1", btns, func0Or1);
var btnClr = createButton("btnClr", "C", btns, funcClr);
var btnEql = createButton("btnEql", "=", btns, funcEql);
var btnSum = createButton("btnSum", "+", btns, funcOper1);
var btnSub = createButton("btnSub", "-", btns, funcOper1);
var btnMul = createButton("btnMul", "*", btns, funcOper1);
var btnDiv = createButton("btnDiv", "/", btns, funcOper1);
*/