// function scope

function a() {
    var name = 'Eric';
    if (5>4){ // block scope
        console.log(name);
        var fname = 'Joseph';
    }
    for (i = 0; i < 3; i++) { // block scope
        console.log(name);
        console.log(fname);
    }
    console.log(++i)
    var fname = 'Assan';
    console.log(fname);
}
a();