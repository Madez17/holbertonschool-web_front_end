const createElement = (data) => {
    var para = document.createElement("p");
    var node = document.createTextNode(data);
    para.appendChild(node);
    document.body.appendChild(para);
};

const queryWikipedia = (callback) => {
    var oReq = new XMLHttpRequest();
    oReq.open("GET", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*", false);
    oReq.send(null);
    if (oReq.status == 200) {
        data = JSON.parse(oReq.response);
        callback(data.query.pages['21721040']['extract']);
    }
};
queryWikipedia(createElement);