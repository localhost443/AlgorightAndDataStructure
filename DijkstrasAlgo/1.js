"use strict";
/* jshint node: true */
class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2, weight) {
    if (this.adjacencyList[vertex1])
      this.adjacencyList[vertex1].push({ node: vertex2, weight });
    if (this.adjacencyList[vertex2])
      this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }
  
}
/**
 * Testing data
 */
let z = new WeightedGraph();
z.addVertex("A");
z.addVertex("B");
z.addVertex("C");
z.addEdge("A", "B", 9);
z.addEdge("A", "C", 5);
z.addEdge("B", "C", 7);
