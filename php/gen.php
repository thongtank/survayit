<?php
@require_once 'config/autoload.inc.php';

use config\database as db;
$db = new db;

$sql = 'select * from year where 1;';
$res = $db->query($sql, $rows, $num_rows);

if ($res) {
    $json = json_encode($rows);
    $handle = fopen('logs/gen.txt', 'w');
    fwrite($handle, print_r($json, 1));
    fclose($handle);
    // print json_encode($rows);
}