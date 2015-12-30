$(function() {
    $('div.se-pre-con').hide();
    var $adminForm = $('#adminForm');
    $adminForm.validate({
        rules: {
            username: {
                required: true,
                minlength: 2,
                maxlength: 5
            },
            pwd: {
                required: true,
                minlength: 6,
                maxlength: 10
            }
        },
        messages: {
            username: {
                required: 'กรุณากรอกชื่อผู้ใช้',
                minlength: 'ชื่อผู้ใช้ต้องมากกว่า 2 ตัวอักษรขึ้นไป'
            },
            pwd: {
                required: 'กรุณากรอกรหัสผ่าน',
                minlength: 'ชื่อผู้ใช้ต้องมากกว่า 6 ตัวอักษรขึ้นไป'
            }
        },
        errorClass: "has-error",
        validClass: "has-success",
        submitHandler: function(form) {
            var username = $('#username').val();
            var pwd = $('#pwd').val();
            $.ajax({
                    url: '../php/admin.inc.php',
                    type: 'POST',
                    data: {
                        username: username,
                        pwd: pwd,
                        dowhat: 'login'
                    },
                    beforeSend: function() {
                        $('.se-pre-con').show();
                    },
                    complete: function() {
                        $('.se-pre-con').hide();
                    }
                })
                .done(function(data) {
                    if (data === '') {
                        window.location = '/survayit/admin/management';
                    } else {
                        if (data == 'not found username and password') {
                            alert('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
                        } else {
                            console.log(data);
                        }
                    }
                });
        }
    });
});
