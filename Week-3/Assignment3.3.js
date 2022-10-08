function createIncrement() {
    let count = 0;                              //let count is only called once and just because the datatype
                                                // is let it dosnt reassign or increment



    function increment() {
        count = count + 1;                      //because count is not found in its own scope it goes searching for the -
                                                // parent scope the lexical scope and it increments. this count is only -
                                                //accessiable inside this function
    }

    let message = `Count is${count}`;           // the count is 0 because the count which it can access is the first
                                                //count and not the count insde the function



    function log() {
        console.log(message);
    }



    return [increment, log];
}



const [increment, log] = createIncrement();
increment();
increment();
increment();
log();
