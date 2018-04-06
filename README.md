//step1 babel

1 >> (TERMINAL) sudo npm uninstall -g live-server
2 >> (TERMINAL) sudo npm install live-server


3 >> (package.json )

        "
                "scripts": {
                "test": "echo \"Error: no test specified\" && exit 1",
>>>>>>>>>>>>>   "server":"live-server public"
                },

        "

4 >> (TERMINAL) npm run server
                
        (http://127.0.0.1:8080/)

5 >> (package.json )

        "
                "scripts": {
                "test": "echo \"Error: no test specified\" && exit 1",
                "server":"live-server public"
>>>>>>>>>>>>>   "babel-build":"npx babel src/app.js --out-file=public/scripts/app.js --presets=env,                    react --watch"
                },

        "   

6 >> (TERMINAL) npm run babel-server

//Step2 webpack

7 >> (TERMINAL) npm install webpack
8 >> (TERMINAL) sudo npm install webpack-cli
9 >> Create file >> webpack.config.js

"
        const path = require('path');

        module.exports = {
                entry: "./src/app.js", // string | object | array
                        // Here the application starts executing
                        // and webpack starts bundling

                output: {
                // options related to how webpack emits results

                path: path.resolve(__dirname, "public"), // string
                // the target directory for all output files
                // must be an absolute path (use the Node.js path module)

                filename: "bundle.js", // string
                // the filename template for entry chunks
                }
        }

"

10 >> 'modify File >> "public/index.html"

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
            <script src="bundle.js"></script>
            </html>
        "
11 >> (Delete Folder) public/scripts
12 >> (package.json )

        "
                "scripts": {
                "test": "echo \"Error: no test specified\" && exit 1",
                "server":"live-server public"
                "babel-build":"npx babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch",
>>>>>>>>>>>>>   "build": "webpack --watch",
                },

        "   
13 >> (Modify file) src/app.js
        "
                document.getElementById('app').innerHTML = "erfan"
        "

14 >> (TERMINAL) npm run webpack
15 >> (TERMINAL) npm run server


//Step2 webpack + babel + REACT

16 >> (TERMINAL) sudo npm  install react react-dom
17 >> (TERMINAL) sudo npm  install babel-loader
18 >> (Modify File)   webpack.config.js

        "
        const path = require('path');

        module.exports = {
                entry: "./src/app.js", // string | object | array
                        // Here the application starts executing
                        // and webpack starts bundling

                output: {
                // options related to how webpack emits results

                path: path.resolve(__dirname, "public"), // string
                // the target directory for all output files
                // must be an absolute path (use the Node.js path module)

                filename: "bundle.js", // string
                // the filename template for entry chunks
                },
 >>>>>>>>>>>>>> module: {
                    // configuration regarding modules
                
                    rules: [
                      // rules for modules (configure loaders, parser options, etc.)
                
                      {
                        test: /\.js$/,
                        exclude: [
                          path.resolve(__dirname, "node_modules")
                        ],
                        // these are matching conditions, each accepting a regular expression or string
                        // test and include have the same behavior, both must be matched
                        // exclude must not be matched (takes preferrence over test and include)
                        // Best practices:
                        // - Use RegExp only in test and for filename matching
                        // - Use arrays of absolute paths in include and exclude
                        // - Try to avoid exclude and prefer include
                        loader: "babel-loader",

                      },
                    ]
                }
        }

        "
19 >> (create File) .babelrc
        "
                {
                "presets":[
                        "env","react"
                ]
                }
        "

20 >> (Modify file) src/app.js
        "
                import ReactDOM from 'react-dom'
                import React from 'react'

                let template  = <p> This is jsx from app.js </p>
                let appRoot   =   document.getElementById('app')

                ReactDOM.render (template,appRoot) 
        "

21 >> (TERMINAL) npm run webpack
22 >> (TERMINAL) npm run server


//step 3  multipage
23 >>  sudo yarn add react-router-dom


