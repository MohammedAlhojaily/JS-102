let obj = {
    title: "How to write a function in an object",

    function1 : function(){
        return console.log("first function");
    },
    function2: () => {
        return console.log("second function");
    },
    function3(){
        return console.log("third function");
    }
}

obj.function1();
obj.function2();
obj.function3();