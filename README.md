# starting-with-webpack

`npm install webpack --save-dev`

create webpack.config.js

`npm install babel-loader babel-core babel-preset-es2015 --save-dev`


test - tell Webpack to only run this loader on files with the .js extension
include - tell Webpack to only run the loader on files in the starting-with-webpack/app directory. Only transform code we have written not code from other npm modules
loader - tells Webpack which transformation to run on all paths that match test and are in the include.
We add another property called output, with a filename and path. Where transformed code goes.

`npm install html-webpack-plugin --save-dev`

### RUN APP

`npm start`
