function Graph(v) {
    this.vertices = v;
    this.edges = 0;
    this.adj = [];
    for (var i = 0; i < this.vertices; i++) {
        this.adj[i] = [];
        // this.adj[i].push("");  这句话神坑，在广度优先搜索一直错，反查地时候就是这个鬼
    }
    this.addEdge = addEdge;
    this.showGraph = showGraph;
    this.dfs = dfs;
    this.bfs = bfs;
    this.marked = [];//深度搜索是否访问标志
    this.marked_1 = [];//广度搜索是否访问标志
    for (var i = 0; i < this.vertices; i++) {
        this.marked[i] = false;
        this.marked_1[i] = false;
    }

}

function addEdge(v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
}

function showGraph() {
    for (var i = 0; i < this.vertices; i++) {
        console.log(i + "->");
        for (var j = 0; j < this.vertices; j++) {
            if (this.adj[i][j] !== undefined) {
                console.log(this.adj[i][j] + ' ');
            }
        }
        console.log(" ");
    }
}

//深度优先搜索
function dfs(v) {
    this.marked[v] = true;
    if (this.adj[v] !== undefined) {
        console.log("Visited vertex: " + v);
        for (var i = 0; i < this.adj[v].length; i++) {
            var cv = this.adj[v][i];
            if (!this.marked[cv]) {
                this.dfs(cv);
            }
        }
    }
}

function bfs(v) {
    var queue = [];
    queue.push(v);
    this.marked_1[v] = true;
    while (queue.length > 0) {
        var cv = queue.shift();
        if (cv !== undefined) {
            console.log("Visited vertex: "+cv);
        }
       for(var i=0;i<this.adj[cv].length;i++){
           var w=this.adj[cv];
           for(var j=0;j<w.length;j++){
               if(!this.marked_1[w[j]]){
                   this.marked_1[w[j]]=true;
                   queue.push(w[j]);
               }
           }
       }
    }
}


module.exports = Graph;