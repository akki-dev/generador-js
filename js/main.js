(function () {
    var app = document.getElementById('app');
    var inputCaracteres = document.getElementById('numero-caracter');

    var configuracion = {
        caracteres: parseInt(inputCaracteres.value),
        symbol: true,
        number: true,
        mayus: true,
        minus: true
    };

    var caracteres = {
        number: '0 1 2 3 4 5 6 7 8 9',
        symbol: '! @ # $ % ^ & * ( ) _ - + = { [ } ] ; : < , > . ? /',
        mayus: 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z',
        minus: 'a b c d e f g h i j k l m n o p q r s t u v w x y z'
    };

    app.addEventListener('submit', function (e) {
        e.preventDefault();
    })

    var globa = ['mas', 'menos', 'simbolos', 'numero', 'mayuscula', 'generar', 'password'];
    for (let i = 0; i < globa.length; i++) {
        if (globa[i] == 'password') {
            app.elements.namedItem('input-' + globa[i]).addEventListener('click', function () {
                if (globa[i] == 'password') {
                    copiarPassword();
                }
            });
        } else {
            app.elements.namedItem('btn-' + globa[i]).addEventListener('click', function () {
                if (globa[i] == 'mas') {
                    configuracion.caracteres++;
                    inputCaracteres.value = configuracion.caracteres;
                } else if (globa[i] == 'menos') {
                    if (configuracion.caracteres > 1) {
                        configuracion.caracteres--;
                        inputCaracteres.value = configuracion.caracteres;
                    }
                } else if (globa[i] == 'simbolos') {
                    btnToggle(this);
                    configuracion.symbol = !configuracion.symbol;
                } else if (globa[i] == 'numero') {
                    btnToggle(this);
                    configuracion.number = !configuracion.number;
                } else if (globa[i] == 'mayuscula') {
                    btnToggle(this);
                    configuracion.mayus = !configuracion.mayus;
                } else if (globa[i] == 'generar') {
                    generarPassword();
                }
            });
        }
    }

    function btnToggle(elemento) {
        elemento.classList.toggle('false');
        elemento.childNodes[1].classList.toggle('fa-check');
        elemento.childNodes[1].classList.toggle('fa-times');
    }
    function generarPassword() {
        var caracterFinales = '';
        var password = '';

        for (propiedad in configuracion) {
            if (configuracion[propiedad] == true) {
                caracterFinales += caracteres[propiedad] + ' ';
            }
        }
        caracterFinales = caracterFinales.trim();
        caracterFinales = caracterFinales.split(' ');
        for (var i = 0; i < configuracion.caracteres; i++) {
            password += caracterFinales[Math.floor(Math.random() * caracterFinales.length)];
        }
        app.elements.namedItem('input-password').value = password;
    }

    function copiarPaswoord() {
        app.elements.namedItem('input-password').select();
        document.execCommand('copy');
        document.getElementById('alerta-copi').classList.add('acti');
        setTimeout(function () {
            document.getElementById('alerta-copi').classList.remove('active');
        }, 2000);

    }
    generarPassword();

})();