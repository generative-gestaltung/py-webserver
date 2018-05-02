function log(x) {
  console.log(x)
}

fs = require("fs")

fs.readFile("lfo.txt", "utf8", (err, data) => {
  patch = JSON.parse(data)

  let nodesNew = {}

  for (let p in patch.nodes) {
    let newId = patch.nodes[p].name+patch.nodes[p].id
    nodesNew[newId] = patch.nodes[p]
    nodesNew[newId].id = newId
  }
  patch.nodes = nodesNew

  fs.writeFile ("lfo1.txt", JSON.stringify(patch)) //,null,2))
})
