$(function() {
    $('.se-pre-con').hide();
    $('button.save').hide();
    $('button.validate').attr('disabled', 'true');

    $('#con').click(function(event) {
        if ($(this).is(':checked')) {
            $('button.validate').removeAttr('disabled');
        } else {
            $('button.validate').attr('disabled', 'true');
        }
    });
    /**
     * [manageDisabled description]
     * @param  {number} id1 id for removeAttr Disabled
     * @param  {number} id2 id for addAttr Disabled
     * @param  {number} id3 id for addAttr Disabled
     */
    function manageDisabled(id1, id2, id3) {
        $('.radio' + id1).find('*').removeAttr('disabled');

        $('.radio' + id2).find('*').attr('disabled', 'true');
        $('.radio' + id3).find('*').attr('disabled', 'true');

        $('.radio' + id2).find('#do_present').removeAttr('disabled');
        $('.radio' + id3).find('#do_present').removeAttr('disabled');
    }
    // Add Attr disabled in child element of .radio1
    $('.radio1').find('#do_present').click(function() {
        manageDisabled(1, 2, 3);
    });

    $('.radio2').find('*').attr('disabled', 'false');
    $('.radio2').find('#do_present').removeAttr('disabled');
    $('.radio2').find('#do_present').click(function() {
        manageDisabled(2, 1, 3);
    });

    $('.radio3').find('*').attr('disabled', 'false');
    $('.radio3').find('#do_present').removeAttr('disabled');
    $('.radio3').find('#do_present').click(function() {
        manageDisabled(3, 1, 2);
    });



    var $validator = $('#myForm').validate({
        rules: {
            year: {
                required: true
            },
            firstname: {
                required: true,
                minlength: 2
            },
            lastname: {
                required: true,
                minlength: 2
            },
            address_home: {
                required: true,
                minlength: 2
            },
            address_province: 'required',
            address_amphur: 'required',
            address_district: 'required',
            address_zipcode: {
                required: true,
                number: true,
                minlength: 5,
                maxlength: 5
            },

            address: {
                required: true,
                minlength: 2
            },
            province: 'required',
            amphur: 'required',
            district: 'required',
            zipcode: {
                required: true,
                number: true,
                minlength: 5,
                maxlength: 5
            },
            email: {
                required: true,
                email: true,
                minlength: 2
            },
            university: {
                required: true,
                minlength: 2
            },
            university_province: {
                required: true
            },
            department: {
                required: true,
                minlength: 2
            },
            work_name: {
                required: true,
                minlength: 2
            },
            work_position: {
                required: true,
                minlength: 2
            },
            salary: {
                number: true
            },
            work_address: {
                required: true,
                minlength: 2
            },
            work_province: {
                required: true
            },
            work_amphur: {
                required: true
            },
            work_district: {
                required: true
            },
            work_zipcode: {
                required: true,
                number: true,
                minlength: 5,
                maxlength: 5
            },
            parent_firstname: {
                required: true,
                minlength: 2
            },
            parent_lastname: {
                required: true,
                minlength: 2
            },
            parent_status: {
                required: true,
                minlength: 2
            },
            detail_firstname: {
                required: true,
                minlength: 2
            },
            detail_lastname: {
                required: true,
                minlength: 2
            }
        },
        messages: {
            year: {
                required: 'กรุณาเลือกปีการศึกษาของท่าน'
            },
            firstname: {
                required: 'กรุณากรอกชื่อ',
                minlength: 'กรุณากรอกมากกว่า 2 ตัวอักษร'
            },
            lastname: {
                required: 'กรุณากรอกนามสกุล',
                minlength: 'กรุณากรอกมากกว่า 2 ตัวอักษร'
            },
            address_home: {
                required: 'กรุณากรอกที่อยู่',
                minlength: 'กรุณากรอกมากกว่า 2 ตัวอักษร'
            },
            address_province: {
                required: 'กรุณาเลือกจังหวัด'
            },
            address_amphur: {
                required: 'กรุณาเลือกอำเภอ'
            },
            address_district: {
                required: 'กรุณาเลือกตำบล'
            },
            address_zipcode: {
                required: 'กรุณากรอกรหัสไปรษณีย์',
                number: 'กรุณากรอกตัวเลขเท่านั้น',
                minlength: 'กรุณากรอก 5 ตัวอักษรเท่านั้น',
                maxlength: 'กรุณากรอก 5 ตัวอักษรเท่านั้น'
            },

            address: {
                required: 'กรุณากรอกที่อยู่',
                minlength: 'กรุณากรอกมากกว่า 2 ตัวอักษร'
            },
            province: {
                required: 'กรุณาเลือกจังหวัด'
            },
            amphur: {
                required: 'กรุณาเลือกอำเภอ'
            },
            district: {
                required: 'กรุณาเลือกตำบล'
            },
            zipcode: {
                required: 'กรุณากรอกรหัสไปรษณีย์',
                number: 'กรุณากรอกตัวเลขเท่านั้น',
                minlength: 'กรุณากรอก 5 ตัวอักษรเท่านั้น',
                maxlength: 'กรุณากรอก 5 ตัวอักษรเท่านั้น'
            },
            email: {
                required: 'กรุณากรอกอีเมล์',
                email: 'อีเมล์ไม่ถูกต้อง',
                minlength: 'กรุณากรอกมากกว่า 2 ตัวอักษร'
            },
            university: {
                required: 'กรุณากรอกชื่อสถานศึกษา',
                minlength: 'กรุณากรอกมากกว่า 2 ตัวอักษร'
            },
            university_province: {
                required: 'กรุณาเลือกจังหวัด'
            },
            department: {
                required: 'กรุณากรอกแผนกหรือสาขาที่เรียน',
                minlength: 'กรุณากรอกมากกว่า 2 ตัวอักษร'
            },
            work_name: {
                required: 'กรุณากรอกชื่อบริษัทของท่าน',
                minlength: 'กรุณากรอกมากกว่า 2 ตัวอักษร'
            },
            work_position: {
                required: 'กรุณากรอกตำแหน่งงานของท่าน',
                minlength: 'กรุณากรอกมากกว่า 2 ตัวอักษร'
            },
            salary: {
                number: 'กรุณากรอกตัวเลขเท่านั้น'
            },
            work_address: {
                required: 'กรุณากรอกที่อยู่สถานที่ทำงาน',
                minlength: 'กรุณากรอกมากกว่า 2 ตัวอักษร'
            },
            work_province: {
                required: 'กรุณาเลือกจังหวัด',
            },
            work_amphur: {
                required: 'กรุณาเลือกอำเภอ'
            },
            work_district: {
                required: 'กรุณาเลือกตำบล'
            },
            work_zipcode: {
                required: 'กรุณากรอกรหัสไปรษณีย์',
                number: 'กรุณากรอกตัวเลขเท่านั้น',
                minlength: 'กรุณากรอก 5 ตัวอักษรเท่านั้น',
                maxlength: 'กรุณากรอก 5 ตัวอักษรเท่านั้น'
            },
            parent_firstname: {
                required: 'กรุณากรอกชื่อผู้ปกครอง',
                minlength: 'กรุณากรอกมากกว่า 2 ตัวอักษร'
            },
            parent_lastname: {
                required: 'กรุณากรอกนามสกุลผู้ปกครอง',
                minlength: 'กรุณากรอกมากกว่า 2 ตัวอักษร'
            },
            parent_status: {
                required: 'กรุณากรอกสถานะของผู้ปกครอง',
                minlength: 'กรุณากรอกมากกว่า 2 ตัวอักษร'
            },
            detail_firstname: {
                required: 'กรุณากรอกชื่อผู้ให้ข้อมูล',
                minlength: 'กรุณากรอกมากกว่า 2 ตัวอักษร'
            },
            detail_lastname: {
                required: 'กรุณากรอกนามสกุลผู้ให้ข้อมูล',
                minlength: 'กรุณากรอกมากกว่า 2 ตัวอักษร'
            }
        },
        errorClass: "has-error",
        validClass: "has-success",
        /** เมื่อกรอกข้อมูลไม่ครบ */
        highlight: function(element, errorClass, validClass) {
            var $span = '';
            var aria_describedby = element.id;
            $span = '<span class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span><span id="' + aria_describedby + 'InputError" class="sr-only">(error)</span>';
            $(element).nextAll('span').remove();
            $($span).insertAfter($(element));
            $(element).parent('.has-success, div')
                .addClass(errorClass)
                .removeClass(validClass);
            $('button.validate').show();
            $('button.save').hide();
        },
        /** เมื่อกรอกข้อมูลครบ */
        unhighlight: function(element, errorClass, validClass) {
            var $span = '';
            var aria_describedby = element.id;
            $span = '<span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span><span id="' + aria_describedby + 'inputSuccess" class="sr-only">(success)</span>';
            $(element).nextAll('span').remove();
            $($span).insertAfter($(element));
            $(element).parent(".has-error, div")
                .removeClass(errorClass)
                .addClass(validClass);
        },
        submitHandler: function(form) {
            $('button.validate').hide();
            $('button.save').show();
        },
        invalidHandler: function(form) {
            $('button.validate').show();
            $('button.save').hide();
        }
    });

    // $('button.save').click(function() {
    //     var datas = $('#myForm').serializeArray();
    //     var obj = {};
    //     $.each(datas, function(index, val) {
    //         // console.log('key: ' + index + ', val: ' + val.value + '\n'); 
    //         obj[val.name] = val.value;
    //     });

    //     $.ajax({
    //             url: 'php/research.inc.php',
    //             type: 'POST',
    //             data: {
    //                 obj: JSON.stringify(obj)
    //             }
    //         })
    //         .done(function(res) {
    //             if (res != 'success') {

    //             } else {

    //             }
    //         });
    // });
    $('button.save').confirm({
        text: 'ยืนยันการกรอกข้อมูลของท่าน ถูกต้องหรือไม่ ?',
        title: 'ยืนยันข้อมูล',
        confirm: function(button) {
            var datas = $('#myForm').serializeArray();
            var obj = {};
            $.each(datas, function(index, val) {
                // console.log('key: ' + index + ', val: ' + val.value + '\n'); 
                obj[val.name] = val.value;
            });

            $.ajax({
                    url: 'php/research.inc.php',
                    type: 'POST',
                    data: {
                        obj: JSON.stringify(obj)
                    },
                    beforeSend: function() {
                        $('.se-pre-con').show();
                    },
                    complete: function() {
                        $('.se-pre-con').hide();
                    }
                })
                .done(function(res) {
                    if (res == 'success') {
                        window.location.href = 'thank.html';
                    } else {
                        console.log(res);
                        // window.location.href = 'error.html';
                    }
                });
        },
        cancel: function(button) {

        },
        confirmButton: 'ยืนยัน',
        cancelButton: 'ยกเลิก',
        confirmButtonClass: "btn-success",
        cancelButtonClass: "btn-danger",
        dialogClass: "modal-dialog modal-lg" // Bootstrap classes for large modal
    });

    $('button[type=submit]').click(function(event) {
        $('body').find('span.form-control-feedback').remove();
        $('.radio1, .radio2, .radio3').find('label.has-error').remove();
        $('.radio1, .radio2, .radio3').find('.has-error').removeClass('has-error');
        $('.radio1, .radio2, .radio3').find('.has-success').removeClass('has-success');
    });

    $('button[type=reset]').click(function(event) {
        $validator.resetForm();
        $('body').find('span.form-control-feedback').remove();
        $('body').find('div.has-error, div.has-success').removeClass('has-error, has-success');
        $('button.save').hide();
        $('button.validate').show();
        $('button.validate').attr('disabled', 'true');
    });

    $('#myForm').on('keypress', function(e){
        if (e.which == 13) {
            e.preventDefault(); // คือการหยุดการทำงานของ event ที่กำลังทำงาน
            return false;
        }
    });
});
