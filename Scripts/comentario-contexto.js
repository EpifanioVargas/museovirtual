$(document).ready(function()
 {
    // Inicializar la base de datos
    var config = {
        apiKey: "AIzaSyA9SHKbWxzp2UmMSugM0unbEn9_SddmQXY",
        authDomain: "independencia-d8de0.firebaseapp.com",
        databaseURL: "https://independencia-d8de0-default-rtdb.firebaseio.com",
        projectId: "independencia-d8de0",
        storageBucket: "independencia-d8de0.appspot.com",
        messagingSenderId: "54368419300",
        appId: "1:54368419300:web:4a3d401b8426b88fed9bf1",
        measurementId: "G-DE4JJN5QZE"
    };
    firebase.initializeApp(config);

    var database = firebase.database();

    var nombre;
    var comentario;


    $("#formularioAlta").change(function()
    {
        nombre=$("#nombre").val();
        comentario=$("#comentario").val();

        if (nombre  && comentario)
        {
            $("#botonGuardar").prop("disabled",false);
        }
        else
        {
            $("#botonGuardar").prop("disabled",true);
        }

    });


    $("#botonGuardar").click(function()
    {
        nombre=$("#nombre").val();
        comentario=$("#comentario").val();

        // Indicamos que la referencia base de nuestra base de datos es productos (algo así como el padre)
        // del que colgarán el resto de nodos hijos.
        /*
        var usersRef = new Firebase('https://samplechat.firebaseio-demo.com/users');
        var fredRef = usersRef.child('fred');
        var fredFirstNameRef = fredRef.child('name/first');
        */
        var referencia=database.ref("comentarios");


        // De la siguiente forma el método sobreescribe los datos
    /*
        referencia.set(
        {
            articulo: articulo,
            descripcion: descripcion,
            precio: precio,
            imagen: imagen
        });
        */

        // Ahora estamos poniendo el articulo como clave en la colección
        // De esta manera podremos añadir nuevos articulos o actualizar uno ya existente.

    /*
        referencia.child(articulo).set(
        {
            descripcion: descripcion,
            precio: precio,
            imagen: imagen
        });
        */

        // Si queremos permitir que hayas artículos con nombres duplicados entonces tendremos
        // que decirle a Firebase que utilice otra clave en lugar del nombre del articulo.
        // Usaremos el método push en lugar de set
        referencia.push(
        {
            nombre: nombre,
            comentario: comentario,
        },function()
        {
            alert('Gracias por agregar un comentario');
        });
    });

});