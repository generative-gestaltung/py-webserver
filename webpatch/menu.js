function log (x) {
  console.log(x);
}

var PATCHES = ["seq", "lfo"];

var Menu = function() {

  for (let type in NODE_TYPES) {
    for (let name in NODE_TYPES[type]) {
      let sel = document.getElementById ("select_"+type);
      let n = NODE_TYPES[type][name];
      let o = new Option();
      o.value = n.name;
      o.text = n.name;
      sel.options.add(o);
    }
  }
  let sel = document.getElementById ("select_load");
  for (let patchName of PATCHES) {
    let o = new Option();
    o.value = patchName;
    o.text = patchName;
    sel.options.add(o);
  }
}

function addNode (type) {
    let sel = document.getElementById ("select_"+type);
    patchRenderer.addNode (type, sel.value);
}

function save() {
  sendCmd ("SAVE", "xxx.txt");
}

function load() {
  let req = new XMLHttpRequest();
  let sel = document.getElementById ("select_load");
  req.open("GET", "http://localhost:8000/"+sel.value+".txt", true);
  req.send();
  let cnt = 0;
  req.onreadystatechange = ()=> {
    try {
      if (cnt==0) {
        let p = JSON.parse(req.responseText);
        patchRenderer.createPatch(p);
        sendCmd ("LOAD", sel.value+".txt");
      }
      cnt += 1;
    }
    catch(e) {

    }
  }
}


/*
    sel.onchange = (e)=> {
      patchRenderer.addNode (type, sel.options[sel.selectedIndex].text);
    }

    div.appendChild(sel);
    this.menuDiv.appendChild(div);
  }

  let button = document.createElement("button");
  button.onclick = () => {
    console.log(patch);
    sendCmd ("SAVE", "xxx.txt");
  };
  button.innerHTML = "SAVE";
  this.menuDiv.appendChild(button);

  button = document.createElement("button");
  button.onclick = () => {
    let req = new XMLHttpRequest();
    req.open("GET", "http://localhost:8000/xxx.txt", true);
    req.send();
    let cnt = 0;
    req.onreadystatechange = ()=> {
      try {

        if (cnt==0) {
          log(req.responseText)
          let p = JSON.parse(req.responseText);
          patchRenderer.createPatch(p);
        }
        cnt += 1;
      }
      catch(e) {

      }
    }
  };
  button.innerHTML = "LOAD";
  this.menuDiv.appendChild(button);
  */
