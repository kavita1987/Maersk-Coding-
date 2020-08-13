
$(document).ready(function(){
    $("#shuffle").bind('click', shuffle);
    function shuffle(){
        $(".flexBox").each(function(){
            let divs = $(this).find('div');
            for(let i = 0; i < divs.length; i++) $(divs[i]).remove();
            i = divs.length;
            if ( i == 0 ) return false;
            while ( --i ) {
                let j = Math.floor( Math.random() * ( i + 1 ) );
                let tempi = divs[i];
                let tempj = divs[j];
                divs[i] = tempj;
                divs[j] = tempi;
            }
            for(let i = 0; i < divs.length; i++){
                $(divs[i]).appendTo(this)
            };
        });
    }
    $("#sort").bind('click',sorted);
    function sorted() {
        //alert("1");
        $(".flexBox").each(function () {
            let divs = $(this).find('div');
            //alert(divs.length);
           // divs.sort();
            let x=[];
            for(let i = 0; i < divs.length; i++) {
                x.push( divs[i].innerHTML);
                //$(divs[i]).appendTo(this)
            }
            x.sort();
            for(let i = 0; i < x.length; i++) {

                $(divs[i]).text(x[i]);
            }
        });
    }

});
