# UP-Bus
Web App that helps UP students find another UP student that can take them to campus.
![click](https://user-images.githubusercontent.com/54753356/179035707-f518344e-fe0d-4206-9de9-742c17536e01.jpeg)


## Client-Front
    1. Access the correct directory:
        cd Client-Front
    2. Install dependencies:
        npm i
    3. Run project:
        npm start (localhost:3000)

## Server-Back
    1. Access the correct directory:
        cd Server-Back
    2. Install dependencies:
        npm i
    3. Run project:
        npm run server (localhost:8000)

    To see how users are added when registering:
        Option 1:
                MongoDB: https://account.mongodb.com/account/login?nds=true
                    MongoDB account (gmail account):
                        -user: upbusags@gmail.com
                        -password: upbus123!

                    -Enter the section:
                        Atlas -> Databases -> Browse Collections -> myFirstDataBase -> users

        Option #2: //it is required to have the server running
                post-man:
                    view existing users:
                        - [GET] -> http://localhost:8000/user -> Params -> SEND
                    create new user:
                        - [POST] -> http://localhost:8000/user -> Body -> raw -> [JSON]
                        - Add user information as json
                            example:
                                    {
                                        "ID": "0101011",
                                        "password": "helloworld"
                                    }
                        - SEND
        Option #3: //it is required to have the server running
                Browser:
                    -Access in your browser to:
                            http://localhost:8000/user

# Location settings

    1. Access the "Location Privacy Settings" within windows.
    2. Activating the option allows applications to access your location.
    3. Activate the precise location for the "Maps" application.
    4. Click on "Set default location".
    5. Click on "Change".
    6. Click on "Choose location".
    7. Put your location on the map:
        dragging manually
        with the button "Show my location"
    8. Click on set.
