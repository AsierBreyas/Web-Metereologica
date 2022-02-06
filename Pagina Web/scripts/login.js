$('button').on('click', function (){
    if($('#usuario').val() === 'Madao' && $('#contraseña').val() === 'Madao'){
        location.replace('http://185.60.40.210/2daw3/asierf/metereologiaProxy/web.html');
    }
});