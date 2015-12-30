$(function() {
    $('select#year').change(function(event) {
        var $header = $('h1');
        $header.text('');
        $header.append('I.T. SURVAY ' + $(this).val());
    });

    $.ajax({
            url: 'php/logs/gen.txt', // Read form log
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
            console.log('Year Loaded form log');
        })
        .fail(function() {
            console.log("error");
        });
});
