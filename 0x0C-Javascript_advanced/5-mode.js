function changeMode(size, weight, transform, background, color) {
    function styles() {
        document.querySelector('*').style.fontSize = size;
        document.querySelector('*').style.fontWeight = weight;
        document.querySelector('*').style.textTransform = transform;
        document.querySelector('*').style.background = background;
        document.querySelector('*').style.color = color;
    }
    return styles;
}

function main() {
    var spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    var darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    var screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

    var para = document.createElement("p");
    var node = document.createTextNode("Welcome Holberton!");
    para.appendChild(node);
    document.body.appendChild(para);

    // 1. Create the button spooky
    var button = document.createElement("button");
    button.innerHTML = "Spooky";

    // 2. Append somewhere
    document.body.appendChild(button);

    // 3. Add event handler
    button.addEventListener ("click", function() {
        spooky();
    });

    // 1. Create the button darkmode
     var button2 = document.createElement("button");
     button2.innerHTML = "Dark mode";
 
    // 2. Append somewhere
     document.body.appendChild(button2);
 
    // 3. Add event handler
     button2.addEventListener ("click", function() {
        darkMode();
     });

    // 1. Create the button screamMode
    var button3 = document.createElement("button");
    button3.innerHTML = "Scream mode";

    // 2. Append somewhere
    document.body.appendChild(button3);

    // 3. Add event handler
    button3.addEventListener ("click", function() {
        screamMode();
    });
}

main();