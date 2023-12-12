class Graph {
  constructor() {
    this.adjList = {};
  }

  addVertex(vertex) {
    if (!this.adjList[vertex]) {
      this.adjList[vertex] = new Set();
    } else {
      console.log(`Vertex already exists in the Graph.`);
    }
  }

  addEdge(v1, v2) {
    if (!this.adjList[v1]) {
      this.addVertex(v1);
    }
    if (!this.adjList[v2]) {
      this.addVertex(v2);
    }

    this.adjList[v1].add(v2);
    this.adjList[v2].add(v1);
  }

  removeEdge(v1, v2) {
    this.adjList[v1].delete(v2);
    this.adjList[v2].delete(v1);
  }

  removeVertex(v) {
    if (!this.adjList[v]) {
      return;
    }
    for (let adjVert of this.adjList[v]) {
      this.removeEdge(v, adjVert);
    }
    delete this.adjList[v];
  }

  hasEdge(v1, v2) {
    return this.adjList[v1].has(v2) && this.adjList[v2].has(v1);
  }

  display() {
    for (let vertex in this.adjList) {
      console.log(`${vertex} --> ${[...this.adjList[vertex]]}`);
    }
  }

  bfs(startingNode) {
    let visited = {};

    let q = [];

    visited[startingNode] = true;
    q.push(startingNode);

    while (q.length) {
      let qElem = q.shift();
      console.log(qElem);

      let list = this.AdjList.get(qElem);

      for (let i in list) {
        let neigh = list[i];

        if (!visited[neigh]) {
          visited[neigh] = true;
          q.push(neigh);
        }
      }
    }
  }
}

let graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdge("A", "B");
graph.addEdge("B", "C");

graph.display();
console.log(graph.hasEdge("A", "B"));
console.log(graph.hasEdge("A", "C"));

graph.removeVertex("B");

graph.display();
