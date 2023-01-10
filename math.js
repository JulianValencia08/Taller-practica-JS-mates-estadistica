console.group('Cuadrado')

const ladoCuadrado = 5; 
const perimetroCuadrado = ladoCuadrado * 4; 
const areaCuadrado = ladoCuadrado ** 2

console.log({
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado
});

function calcularCuadrado(ladoCuadrado){
    return {
        perimetro: ladoCuadrado * 4,
        area: ladoCuadrado * ladoCuadrado
    }
}
console.groupEnd('Cuadrado')
console.group('Triangulo')
const ladoTriangulo1 =  6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;
const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2;

function calcularTriangulo(ladoTriangulo1, ladoTriangulo2, ladoTrianguloBase, alturaTriangulo){
    
    return {
        perimetro: ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase,
        area: (ladoTrianguloBase * alturaTriangulo) / 2
    }
}
function calcularAlturaTriangulo(ladosEqui, base){
    if(ladosEqui == base){
        console.warn('Este no es un triangulo isoceles')
    }
    else {
        return Math.sqrt(ladosEqui**2 - ((base**2) / 4))
    }
}
function calcularAlturaTrianguloEscaleno(lado1, lado2, base){
    if(lado1 == lado2 || lado1 == base || lado2 == base){
        console.warn('Este no es un triangulo escaleno');
    }else {
        const semiPerimetro = (lado1 + lado2 + base) / 2;
        const h = (2 / lado1) * (Math.sqrt((semiPerimetro)*(semiPerimetro - lado1)*(semiPerimetro - lado2)*(semiPerimetro - base)))
        return parseInt(h.toFixed(0));
    }
    
}

console.log({
    ladoTriangulo1,
    ladoTriangulo2,
    ladoTrianguloBase,
    alturaTriangulo,
    perimetroTriangulo,
    areaTriangulo
});
console.groupEnd('Triangulo')
console.group('circulo')
const radio = 3;    
const diametro = radio * 2;
const PI = 3.1416
const circuferencia = diametro * PI;
const areaCirculo = (radio ** 2) * PI

console.log({
    radio,
    diametro,
    PI,
    circuferencia,
    areaCirculo
});

function calcularCirculo(radio, ){
    const diametro = radio * 2;
    const radioAlCuadrado = Math.pow(radio, 2); 

    return {
        circuferencia: diametro * Math.PI,
        area: radioAlCuadrado * Math.PI.toFixed(100)
    };
}

console.groupEnd('circulo')