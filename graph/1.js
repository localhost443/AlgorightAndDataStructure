class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    return this;
  }
  addEdge(a, b) {
    if (this.adjacencyList[a]) this.adjacencyList[a].push(b);
    if (this.adjacencyList[b]) this.adjacencyList[b].push(a);
    return this;
  }
  removeEdge(a, b) {
    let x = this.adjacencyList[a].indexOf(b);
    this.adjacencyList[a].splice(x, 1);
    x = this.adjacencyList[b].indexOf(a);
    this.adjacencyList[b].splice(x, 1);
    return this;
  }
  removeVortex(vortex) {
    for (const anything in this.adjacencyList) {
      if (anything !== vortex) {
        if (this.adjacencyList.hasOwnProperty(anything)) {
          this.adjacencyList[anything] = this.adjacencyList[anything].filter(
            (name) => name !== vortex
          );
        }
      }
    }
    delete this.adjacencyList[vortex];
    return this;
  }
  DFS(vertex) {
    let visited = {};
    let result = [];
    self = this.adjacencyList;
    (function DFSRecursive(vertex) {
      if (!vertex) return undefined;
      visited[vertex] = true;
      result.push(vertex);
      self[vertex].forEach((n) => {
        if (!visited[n]) {
          return DFSRecursive(n);
        }
      });
    })(vertex);
    return result;
  }
  DFSET(vertex) {
    let visited = {};
    let result = [];
    let stack = [vertex];
  }
}

let a = new Graph();
a.addVertex("A");
a.addVertex("B");
a.addVertex("C");
a.addVertex("D");
a.addVertex("E");
a.addVertex("F");
a.addEdge("A", "B");
a.addEdge("A", "C");
a.addEdge("B", "D");
a.addEdge("C", "E");
a.addEdge("D", "E");
a.addEdge("D", "F");
a.addEdge("E", "F");
a.DFS("A");
