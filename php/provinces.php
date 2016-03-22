<?php
@require_once 'config/autoload.inc.php';

use config\database;
$conndb = new database;

// $_POST['find'] = '';

if ($_POST['find'] == 'province') {
    $conndb->query('select * from province where 1;', $rows, $num_rows, $last_id);
} elseif ($_POST['find'] == 'amphur') {
    $sql = 'select *  FROM `amphur` WHERE `PROVINCE_ID` = ' . $_POST['ref_id'];
    $conndb->query($sql, $rows, $num_rows, $last_id);
} else {
    // $sql = 'select *  FROM `district` WHERE `AMPHUR_ID` = ' . $_POST['ref_id'];
    $sql = 'select *  FROM `district` ';
    $conndb->query($sql, $rows, $num_rows, $last_id);
}

// $json = json_encode($rows, true);
// $handle = fopen('district.txt', 'w');
// fwrite($handle, print_r($json, 1));
// fclose($handle);
// echo $json;
