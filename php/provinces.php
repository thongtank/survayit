<?php
@require_once 'config/autoload.inc.php';

use config\database;
$conndb = new database;

if ($_POST['find'] == 'province') {
    $conndb->query('select * from province where 1;', $rows, $num_rows);
} elseif ($_POST['find'] == 'amphur') {
    $sql = 'select *  FROM `amphur` WHERE `PROVINCE_ID` = ' . $_POST['ref_id'];
    $conndb->query($sql, $rows, $num_rows);
} else {
    $sql = 'select *  FROM `district` WHERE `AMPHUR_ID` = ' . $_POST['ref_id'];
    $conndb->query($sql, $rows, $num_rows);
}

$json = json_encode($rows, true);
echo $json;
