<<<<<<< HEAD
// LOAD Province, Aumphur and District from log not database
$(function() {
    $.ajax({
            url: 'php/logs/provinces.txt',
=======
$(function() {
    $.ajax({
            method: 'POST',
            url: 'php/provinces.php',
            data: {
                find: 'province'
            },
>>>>>>> origin/master
            dataType: "json",
            beforeSend: function() {
                $('.se-pre-con').show();
            },
            complete: function() {
                $('.se-pre-con').hide();
            }
        })
        .done(function(res) {
            $('select#province').html('<option value="">เลือกจังหวัด</option>');
            $('select#address_province').html('<option value="">เลือกจังหวัด</option>');
            $('select#work_province').html('<option value="">เลือกจังหวัด</option>');
            $('select#university_province').html('<option value="">เลือกจังหวัด</option>');
            // province คือ จังหวัดของที่อยู่ที่สามารถติดต่อได้
            // address_province คือ จังหวัดของที่อยู่ตามทะเบียนบ้าน
            // work_province คือ จังหวัดของที่ทำงาน
            // university_province คือ จังหวัดของสถานที่ศึกษาต่อ
            $.each(res, function(index, val) {
                $('select#province').append('<option value="' + val.PROVINCE_ID + '">' + val.PROVINCE_NAME + '</option>');
                $('select#address_province').append('<option value="' + val.PROVINCE_ID + '">' + val.PROVINCE_NAME + '</option>');
                $('select#work_province').append('<option value="' + val.PROVINCE_ID + '">' + val.PROVINCE_NAME + '</option>');
                $('select#university_province').append('<option value="' + val.PROVINCE_ID + '">' + val.PROVINCE_NAME + '</option>');
            });

            console.log('Province Loaded');
        });

    /** Province Change Zone */
    $('select#province').change(function() {
        getProvinceDetail($('select#amphur'), $(this).val(), 'amphur');
    });
    $('select#address_province').change(function() {
        getProvinceDetail($('select#address_amphur'), $(this).val(), 'amphur');
    });
    $('select#work_province').change(function() {
        getProvinceDetail($('select#work_amphur'), $(this).val(), 'amphur');
    });

    /** Amphur Change Zone */
    $('select#amphur').change(function() {
        getProvinceDetail($('select#district'), $(this).val(), 'district');
    });
    $('select#address_amphur').change(function() {
        getProvinceDetail($('select#address_district'), $(this).val(), 'district');
    });
    $('select#work_amphur').change(function() {
        getProvinceDetail($('select#work_district'), $(this).val(), 'district');
    });

    /**
     * Filter Amphur and District
     * @param  {text} element element of filter select
     * @param  {number} id      id of province/amphur
     * @param  {text} table   table of survay's database
     * @return {}         
     */
    function getProvinceDetail(element, id, table) {
<<<<<<< HEAD
        var path = '';
        if (table == 'amphur') {
            path = 'php/logs/amphur.txt';
        } else {
            path = 'php/logs/district.txt';
        }

        $.ajax({
                url: path,
                dataType: 'json',
=======
        $.ajax({
                url: 'php/provinces.php',
                type: 'POST',
                dataType: 'json',
                data: {
                    find: table,
                    ref_id: id
                },
>>>>>>> origin/master
                beforeSend: function() {
                    $('.se-pre-con').show();
                },
                complete: function() {
                    $('.se-pre-con').hide();
                }
            })
            .done(function(res) {
                if (table == 'amphur') {
                    element.html('<option value="">เลือกอำเภอ</option>');
<<<<<<< HEAD
                    /*
                    $.each(res, function(index, val) {
                        element.append('<option value="' + val.AMPHUR_ID + '">' + val.AMPHUR_NAME + '</option>');
                    });
                    */
                    $.each(res, function(index, val) {
                        if (val.PROVINCE_ID == id) {
                            element.append('<option value="' + val.AMPHUR_ID + '">' + val.AMPHUR_NAME + '</option>');
                        }
                    });
                } else {
                    element.html('<option value="">เลือกตำบล</option>');
                    $.each(res, function(index, val) {
                        if (val.AMPHUR_ID == id) {
                            element.append('<option value="' + val.DISTRICT_ID + '">' + val.DISTRICT_NAME + '</option>');
                        }
=======
                    $.each(res, function(index, val) {
                        element.append('<option value="' + val.AMPHUR_ID + '">' + val.AMPHUR_NAME + '</option>');
                    });
                } else {
                    element.html('<option value="">เลือกตำบล</option>');
                    $.each(res, function(index, val) {
                        element.append('<option value="' + val.DISTRICT_ID + '">' + val.DISTRICT_NAME + '</option>');
>>>>>>> origin/master
                    });
                }

            })
            .error(function(res) {
                console.log('error:' + res);
            });
    }
});
