function run(param){
    param();
}

run( function(){  // This is called passing a function into another function (function is passed)
    console.log('function passed');
} );