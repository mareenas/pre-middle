function myFunc() {

    return new Promise(function(resolve) {

        setTimeout(function() {
            console.log("first");

            $.get('http://give.livingtree.com/aeries-api/list-transactions', function(data) {
                console.log('second');
                resolve();
            });

        }, 3000);

        setInterval(function() {
            console.log(new Date());
        }, 1000);


    });

}