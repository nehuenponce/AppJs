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

// UTILITIES
// ===================

function checkInputs (precio, descuento) {
    if (Number.isNaN(precio) || precio <= 0) {
        e = document.getElementById('errorPrecio');
        e.innerHTML = 'Ingrese un valor válido para el Precio';
        return false;
    }
    if (Number.isNaN(descuento) || descuento <= 0) {
        e = document.getElementById('errorDiscount');
        e.innerHTML = 'Ingrese un valor válido para el Descuento';
        return false;
    }
    return true;
}

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    
    return precioConDescuento.toFixed(2);
}

function canApplyCoupon(c) {
    const coupons = [
        'CuponBBVA',
        'CuponCoderizatucarrera',
        'CuponYpf'
    ]

    if (!coupons.includes(c)) {
        const e = document.getElementById('errorCoupon');
        e.innerHTML = 'EL CUPON NO ES VÁLIDO'
        return false;
    }

    return true;
}

function getCouponDiscount(c) {
    switch (c) {
        case 'CuponBBVA':
            return 10;
        case 'CuponCoderizatucarrera':
            return 20;
        case 'CuponYpf':
            return 30;
        default:
            return 0;
    }
}

function renderPriceDiscount(r) {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'grid';

    const resultIMG = document.getElementById('resultIMG');
    const resultH2 = document.getElementById('resultH2');        
    const resultH4 = document.getElementById('resultH4');

    resultIMG.src = 'img/precio.png';
    resultH2.innerHTML = 'Precios y descuentos';

    resultH4.innerHTML = `El descuento es de: <strong class="unit"> $ ${r}</strong>`;
}

function onClickButtonPriceDiscount() {
    cleanError('precios-descuentos');

    const price = parseInt(document.getElementById('inputPrice').value);
    const discount = parseInt(document.getElementById('inputDiscount').value);
    const coupon = document.getElementById('inputCoupon').value;
    let precioConDescuento = 0;

    if (checkInputs(price, discount)) {
        precioConDescuento = calcularPrecioConDescuento(price, discount);

        if (coupon != '') {
            if (canApplyCoupon(coupon)) {
                console.log('aca')
                const discountCoupon = getCouponDiscount(coupon);
                precioConDescuento =  calcularPrecioConDescuento(precioConDescuento, discountCoupon);
    
                renderPriceDiscount(precioConDescuento);
            }
        } else {
            renderPriceDiscount(precioConDescuento);
        }

    }    
}