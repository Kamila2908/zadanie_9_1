var a, h;

function getTriangleArea(a, h) {
    if ( (a > 0) && (h > 0) ) {
        true
    } else {
        console.log ('Nieprawidłowe dane')
    }
    return a*h/2
    
}

console.log(getTriangleArea(10, 6))