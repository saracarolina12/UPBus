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