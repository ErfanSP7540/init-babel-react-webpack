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
                module: {
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