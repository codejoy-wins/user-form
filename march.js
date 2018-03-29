

$(document).ready(function(){

    $('form').submit(function(){
        var firstname= $('input[name=firstname]').val();
        var lastname= $('input[name=lastname]').val();
        var email= $('input[name=email]').val();
        var contact= $('input[name=phone]').val();
        $('table').append("<tr><td>"+firstname+"</td><td>"+lastname+"</td><td>"+email+"</td><td>"+contact+"</td><tr>")

        return false;
    })


})
