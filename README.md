1 >> (TERMINAL) npm init
2 >> (TERMINAL) sudo npm install --save-dev babel-preset-env
3 >> (TERMINAL) sudo npm install --save-dev babel-cli
4 >> (TERMINAL) sudo npm install --save-dev babel-preset-react

5 >> 'Create a "public" Folder'

6 >> 'Create File >> public/script/app.js'
        "
        "
7 >> 'Create File >> public/script/react.development.js'
        Download >> https://unpkg.com/react@16.2.0/umd/react.development.js

8 >> 'Create File >> public/script/react-dom.development.js'
        Download >> https://unpkg.com/react-dom@16.2.0/umd/react-dom.development.js       

9 >> 'Create File >> "public/index.html"

       "
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="utf-8" />
                <title>app</title>
            </head>
            <body>
                <div id='app'></div>
            </body>
            <script src="scripts/react.development.js"></script>
            <script src="scripts/react-dom.development.js"></script>
            <script src="scripts/app.js"></script>
            </html>
        "

10>> 'Create File >> "src/app.js"
        "
            document.getElementById('app').innerHTML='app'
        "
11>> (TERMINAL) npx babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

10>> (TERMINAL) git clone https://github.com/tapio/live-server.git
                cd live-server
                sudo npm install -g
                live-server -v
                live-server public 
(http://127.0.0.1:8080/)



