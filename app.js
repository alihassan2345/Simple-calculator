function foo(e) {
  let getinp = document.getElementById("inp");
  let lastChar = getinp.value.slice(-1);

 
  if ((lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/" || lastChar === "%") && (e === "+" || e === "-" || e === "*" || e === "/" || e === "%")){
    return ;
  }

  getinp.value += e;
}

function eq() {
  let getinp = document.getElementById("inp");
  if (getinp.value === "" || getinp.value === "0") {
    alert("bhai pehle number select kar ");
  } else if (
    getinp.value === "*" ||
    getinp.value === "/" ||
    getinp.value === "%"
  ) {
    alert("bhai pehle number choose kar ");
  } else {
    getinp.value = eval(getinp.value);
  }
}

function clr() {
  let getinp = document.getElementById("inp");
  getinp.value = getinp.value.slice(0, -1);
}

function clral() {
  let getinp = document.getElementById("inp");
  getinp.value = "";
}
