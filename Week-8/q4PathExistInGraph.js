class Graph {
    constructor(V) {
      this.V = V;
  
      this.g = new Array(V + 1);
      for (let i = 0; i < V + 1; i++) {
        this.g[i] = new Array(V + 1);
  
        for (let j = 0; j < V + 1; j++) {
          this.g[i][j] = 0;
        }
      }
  
      for (let i = 1; i <= V; i++) this.g[i][i] = 1;
    }
  
    addEdge(v, w) {
      this.g[v][w] = 1;
      this.g[w][v] = 1;
    }
  
  
    isReachable(s, d) {
      if (this.g[s][d] == 1) return true;
      else return false;
    }
  
    // Function to compute the path
    computePaths() {
      for (let k = 1; k <= this.V; k++) {
        for (let i = 1; i <= this.V; i++) {
          for (let j = 1; j <= this.V; j++)
            this.g[i][j] =
              this.g[i][j] | (this.g[i][k] != 0 && this.g[k][j] != 0 ? 1 : 0);
        }
      }
    }
  }
  
  let gr = new Graph(4);
  gr.addEdge(0, 1);
  gr.addEdge(0, 2);
  gr.addEdge(0, 3);
  gr.addEdge(1, 2);
  gr.addEdge(2, 4);
  gr.computePaths();
  
  let u = 4,
    v = 3;
  if (gr.isReachable(u, v)) {
    console.log("Path Exist");
  } else {
    document.write("Path Doesn't Exist");
  }