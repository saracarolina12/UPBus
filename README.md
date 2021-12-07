# React_UPBus


# Client - Front 
    1. Acceder al directorio correcto: 
        cd Client-Front
    2. Instalar dependencias: 
        npm i 
    3. Correr proyecto: 
        npm start (localhost:3000)

# Server - Back
    1. Acceder al directorio correcto:
        cd Server-Back
    2. Instalar dependencias:
        npm i
    3. Correr proyecto:
        npm run corre (localhost:8000) 

    Para ver cómo se añaden usuarios al registrarse:
        Opción #1:
                MongoDB: https://account.mongodb.com/account/login?nds=true
                    Cuenta MongoDB (cuenta gmail): 
                        -usuario: upbusags@gmail.com
                        -contraseña: upbus123!

                    -Ingresar a la sección: 
                        Atlas -> Databases -> Browse Collections -> myFirstDataBase -> users

        Opción #2: //se requiere tener corriendo el server
                Postman: 
                    ver usuarios existentes:
                        - [GET] -> http://localhost:8000/user -> Params ->   SEND
                    crear nuevo usuario:
                        - [POST] -> http://localhost:8000/user -> Body -> raw -> [JSON]
                        - Añadir en forma de json la información del usuario
                            ejemplo:
                                    {
                                        "ID": "0101011",
                                        "password": "holamundo"
                                    }
                        - SEND
        Opción #3: //se requiere tener corriendo el server
                Navegador:
                    -Acceder en tu navegador a:
                            http://localhost:8000/user

# Configuración de ubicación

    1. Acceder a la "Configuración de privacidad de ubicación" dentro de windows.
    2. Activar la opción permite que las aplicaciones accedan a tu ubicación.
    3. Activar la ubicación precisa para la aplicación "Mapas".
    4. Da click en "Establecer ubicación predeterminada".
    5. Da click en "Cambiar".
    6. Da click en "Elegir ubicación".
    7. Coloca tu ubicación en el mapa:
        arrastrando manualmente
        con el botón "Mostrar mi ubicación"
    8. Da click en establecer.