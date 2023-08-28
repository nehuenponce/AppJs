// CALCULOS Y FORMULAS
// ===================
// Codigo cuadrado 

function perimetroCuadrado(lado) { 
    return lado * 4; 
}
function areaCuadrado (lado) {
    return lado * lado
}

// Codigo rectangulo 

function perimetroRectangulo(lado1, lado2) { 
    return lado1 * 2 + lado2 + 2; 
}
function areaRectangulo (lado1, lado2) {
    return lado1 * lado2;
}

// Codigo triangulo

function perimetroTriangulo (ladoTriangulo1, ladoTriangulo2, base) {
    return ladoTriangulo1 + ladoTriangulo2 + base;
}

function areaTriangulo (base, altura) {
    return ((base * altura) / 2).toFixed(2);
}


function esIsosceles(ladoTriangulo1,ladoTriangulo2,base){
    if (ladoTriangulo1 == ladoTriangulo2 && ladoTriangulo1 != base) {
        // formula de altura de un isosceles --> raiz(a^2 - b^2 / 4)
        altura = Math.sqrt((ladoTriangulo1 ** 2) - (base ** 2) / 4 );
        console.log('aca')
        console.log(altura)
        return altura.toFixed(2);
    } else {
        return false;
    }
}

// UTILITIES
// ===================

function cleanError (id) {
    errors = document.getElementById(id).querySelectorAll('.error');
    for (e of errors) {
        e.innerHTML = '';
    }
}

function closeOverlay() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
}

// CALLS
// ==========

// Cuadrado

function checkInputsSquare(l1) {
    if (Number.isNaN(l1) || l1 <= 0) {
        e = document.getElementById('errorCL1');
        e.innerHTML = 'Ingrese un valor válido para el Lado A';
        return false;
    }
    return true;
}

function renderResultSquare(r, calc) {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'grid';

    const unit = calc == 'Area' ? 'cm<span>2</span>' : 'cm';

    const resultIMG = document.getElementById('resultIMG');
    const resultH2 = document.getElementById('resultH2');        
    const resultH4 = document.getElementById('resultH4');

    resultIMG.src = 'img/square.png';
    resultH2.innerHTML = 'Cuadrados';

    resultH4.innerHTML = `El <strong>${calc}</strong> del <strong>cuadrado</strong> es: <strong class="unit"> ${r} ${unit}</strong>`;
}

function calcularPerimetroCuadrado() {
    cleanError('cuadrados');

    const lado = parseInt(document.getElementById('inputCuadrado').value);

    if(checkInputsSquare(lado)) {
        const result = perimetroCuadrado(lado);
        renderResultSquare(result, 'Perimetro');
    }
}

function calcularAreaCuadrado() {
    cleanError('cuadrados');

    const lado = parseInt(document.getElementById('inputCuadrado').value);

    if(checkInputsSquare(lado)) {
        const result = areaCuadrado(lado);
        renderResultSquare(result, 'Area');
    }
}

// Rectangulo

function checkInputsCube(l1, l2) {
    if (Number.isNaN(l1) || l1 <= 0) {
        e = document.getElementById('errorRL1');
        e.innerHTML = 'Ingrese un valor válido para el Lado A';
        return false;
    }
    if (Number.isNaN(l2) || l2 <= 0) {
        e = document.getElementById('errorRL2');
        e.innerHTML = 'Ingrese un valor válido para el Lado B';
        return false;
    }

    return true;
}

function renderResultCube(r, calc) {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'grid';

    const unit = calc == 'Area' ? 'cm<span>2</span>' : 'cm';

    const resultIMG = document.getElementById('resultIMG');
    const resultH2 = document.getElementById('resultH2');        
    const resultH4 = document.getElementById('resultH4');

    resultIMG.src = 'img/rectangulo.webp';
    resultH2.innerHTML = 'Rectangulos';

    resultH4.innerHTML = `El <strong>${calc}</strong> del <strong>rectangulo</strong> es: <strong class="unit"> ${r} ${unit}</strong>`;
}

function calcularPerimetroRectangulo() {
    cleanError('rectangulos');

    const lado1 = parseInt(document.getElementById('inputRectangulo1').value);
    const lado2 = parseInt(document.getElementById('inputRectangulo2').value);

    if(checkInputsCube(lado1, lado2)) {
        const result = perimetroRectangulo(lado1, lado2);
        renderResultCube(result, 'Perimetro');
    }
}

function calcularAreaRectangulo() {
    cleanError('rectangulos');

    const lado1 = parseInt(document.getElementById('inputRectangulo1').value);
    const lado2 = parseInt(document.getElementById('inputRectangulo2').value);

    if(checkInputsCube(lado1, lado2)) {
        const result = areaRectangulo(lado1, lado2);
        renderResultCube(result, 'Area');
    }
}


// Triangulo

function calcularAreaTriangulo() {
    cleanError('triangulos');

    const lado1 = false;
    const lado2 = false;
    const base = parseInt(document.getElementById('inputBase').value);
    const altura = parseInt(document.getElementById('inputAltura').value);

    console.log('aca1')
    console.log(lado1)
    console.log(lado2)
    console.log(base)
    console.log(altura)

    if (checkInputsTriangulo(lado1, lado2, base, altura)) {
        const result = areaTriangulo(base, altura);
        renderResultTriangles(result, 'Area');
    }
}

function calcularPerimetroTriangulo() {
    cleanError('triangulos');

    const lado1 = parseInt(document.getElementById('inputTriangulo1').value);
    const lado2 = parseInt(document.getElementById('inputTriangulo2').value);
    const base = parseInt(document.getElementById('inputBase').value);
    const altura =  false;

    if (checkInputsTriangulo(lado1, lado2, base, altura)) {
        const result = perimetroTriangulo(lado1, lado2, base);

        renderResultTriangles(result, 'Perimetro');
    }    
}

function checkInputsTriangulo (l1, l2, b, h) {
    if (h == false) {
        if (Number.isNaN(l1) || l1 <= 0) {
            e = document.getElementById('errorT1');
            e.innerHTML = 'Ingrese un valor válido para el Lado A';
            return false;
        }

        if (Number.isNaN(l2) || l2 <= 0) {
            e = document.getElementById('errorT2');
            e.innerHTML = 'Ingrese un valor válido para el Lado B';
            return false;
        }

        if (Number.isNaN(b) || b <= 0) {
            e = document.getElementById('errorTBase');
            e.innerHTML = 'Ingrese un valor válido para la Base';
            return false;
        }
        
    } else {
        // Area
        if (Number.isNaN(b) || b <= 0) {
            console.log(32)
            e = document.getElementById('errorTBase');
            e.innerHTML = 'Ingrese un valor válido para la Base';
            return false;
        }

        console.log(h);

        if (Number.isNaN(h) || h <= 0) {
            e = document.getElementById('errorTAltura');
            e.innerHTML = 'Ingrese un valor válido para la Altura';
            return false;
        }

    }
    return true;
}

function renderResultTriangles(r, calc) {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'grid';

    const unit = calc == 'Area' ? 'cm<span>2</span>' : 'cm';

    const resultIMG = document.getElementById('resultIMG');
    const resultH2 = document.getElementById('resultH2');        
    const resultH4 = document.getElementById('resultH4');

    resultIMG.src = 'img/triangulo.png';
    resultH2.innerHTML = 'Triangulos';

    resultH4.innerHTML = `El <strong>${calc}</strong> del <strong>triangulo</strong> es: <strong class="unit"> ${r} ${unit}</strong>`;
}