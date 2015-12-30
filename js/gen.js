$(function() {
    $('select#year').change(function(event) {
        var $header = $('h1');
        $header.text('');
        $header.append('I.T. SURVAY ' + $(this).val());
    });

    $.ajax({
<<<<<<< HEAD
            url: 'php/logs/gen.txt', // Read form log
=======
            url: 'php/gen.php',
            type: 'POST',
>>>>>>> origin/master
            dataType: 'json',
            beforeSend: function() {
                $('.se-pre-con').show();
            },
            complete: function() {
                $('.se-pre-con').hide();
            }
        })
        .done(function(data) {
            $.each(data, function(key, val) {
                $('select#year').append('<option value=' + val.year + '>รุ่นที่: ' + val.generation + ' / ' + val.year + '</option>');
            });
<<<<<<< HEAD
            console.log('Year Loaded form log');
=======
            console.log('Year Loaded');
>>>>>>> origin/master
        })
        .fail(function() {
            console.log("error");
        });
});
