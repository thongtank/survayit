<?php
@require_once 'config/autoload.inc.php';

use config\database as db;
$db = new db;

$sql = 'select * from year where 1;';
$res = $db->query($sql, $rows, $num_rows);

if ($res) {
    print json_encode($rows);
}