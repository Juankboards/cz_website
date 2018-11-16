var delayLoop;

function addClass(node, options) {
    var classes = node.className.split(" ");
    options.forEach(function(classToAdd) {
        if(!classes.includes(classToAdd))
            node.className += " " + classToAdd;
        })
}

function removeClass(node, options) {
    var classes = node.className.split(" ").filter(function(clss) {
        return !options.includes(clss);
    });

    node.className = classes.join(" ");
}

function modifySiblings(siblings, calledNode, modification, options) {
    siblings.forEach(function(node) {
        if(node.nodeType==1 && node!=calledNode) {
            modification(node, options);
        }
    })
}

function loopFunction(node, counter, fn, options) {
    if(!counter)
        return;
    
    console.log(counter)
    fn(node, counter, options);
    delayLoop = setTimeout(loopFunction.bind(this,node, counter - 1, fn, options), 500);
}

function changeImg(node, counter, options) {
    node.style.backgroundImage = "url(img/" + node.id + "/" +node.id + counter + ".jpg)";
}

function setOriginalImg(node) {
    clearTimeout(delayLoop);
    node.style.backgroundImage = "url(img/" + node.id + ".jpg)";
}