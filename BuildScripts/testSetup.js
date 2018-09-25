//register babel to transpile before mocha runs test file
require("babel-register")();

//Tell mocha to treat css as emplty funciton to skip css testing.
require.extensions[".css"]=function(){};
