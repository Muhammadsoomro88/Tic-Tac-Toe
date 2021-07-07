var move = 1;
var play = true;

$('table tr td').click(function(){
    if($(this).text()=="" && play){
        if((move%2)==1){
            $(this).append("X");
            $(this).css('color', 'green');
        }
        else{
            $(this).append("O");
            $(this).css('color', '#e85a47');
        }
        move++;
        if(findWinner()!=-1 && findWinner!= ""){
            if(findWinner()=="X"){
                $('body').append('<h2>Winner X</h2>');
                setTimeout("location.reload(true);", 1000);
            }
            else if(findWinner()=="O"){
                $('body').append('<h2>Winner O</h2>');
                setTimeout("location.reload(true);", 1000);
            }
        }
        else if(findWinner==-1){
            $('body').append('<h2>No Winner</h2>');
            setTimeout("location.reload(true);", 1000);
        }
    }
});

function findWinner(){
    sp1 = $('table tr:nth-child(1) td:nth-child(1)').text();
    sp2 = $('table tr:nth-child(1) td:nth-child(2)').text();
    sp3 = $('table tr:nth-child(1) td:nth-child(3)').text();
    sp4 = $('table tr:nth-child(2) td:nth-child(1)').text();
    sp5 = $('table tr:nth-child(2) td:nth-child(2)').text();
    sp6 = $('table tr:nth-child(2) td:nth-child(3)').text();
    sp7 = $('table tr:nth-child(3) td:nth-child(1)').text();
    sp8 = $('table tr:nth-child(3) td:nth-child(2)').text();
    sp9 = $('table tr:nth-child(3) td:nth-child(3)').text();

    //rows
    if((sp1==sp2) && (sp2==sp3)){
        return sp3;
    }
    if((sp4==sp5) && (sp5==sp6)){
        return sp6;
    }
    if((sp7==sp8) && (sp8==sp9)){
        return sp9;
    }
    else if((sp1==sp4) && (sp4==sp7)){
        return sp7;
    }
    else if((sp2==sp5) && (sp5==sp8)){
        return sp8;
    }
    else if((sp3==sp6) && (sp6==sp9)){
        return sp9;
    }
    else if((sp1==sp5) && (sp5==sp9)){
        return sp9;
    }
    else if((sp3==sp5) && (sp5==sp7)){
        return sp7;
    }

    //no winner
    return -1;
}