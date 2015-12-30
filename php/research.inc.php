<?php
require_once 'config/autoload.inc.php';

// $_POST['obj'] = '{"gender":"1","firstname":"ppppp","lastname":"aaaaaa"}';
$json = json_decode($_POST['obj']);
// ex. to get data
// $json[1]->value

use config\database;

class Research extends database {
    public function set($data, $table) {
<<<<<<< HEAD
        // Write to log
=======
>>>>>>> origin/master
        $handle = fopen('log.txt', 'w+');
        fwrite($handle, print_r($data, 1));
        fclose($handle);

        /** @var array push stdObject to php array */
        foreach ($data as $k => $v) {
            $phpArray[$k] = $v;
        }

        // print_r($phpArray);
        // exit;

        $sizeOfArray = count($phpArray) - 1;
        $fields = '';
        $values = '';
        $sql = '';
        $comma = '';
        $round = 0;
        foreach ($phpArray as $key => $value) {
            $comma = ',';
            if ($round == $sizeOfArray) {
                $comma = '';
            }
            $fields .= $key . '' . $comma;
<<<<<<< HEAD
            $values .= '\'' . trim($value) . '\'' . $comma;
=======
            $values .= '\'' . $value . '\'' . $comma;
>>>>>>> origin/master
            $round++;
        }

        $sql = 'insert into ' . $table . ' (id,' . $fields . ',date) values (NULL,' . $values . ',NOW());';
        return parent::query($sql, $rows, $num_rows);
    }

    public function get() {
        $sql = 'select * from research where 1;';
        parent::query($sql, $rows, $num_rows);
        print_r($rows);
    }
}

$rs = new Research;
$result = $rs->set($json, 'research');
<<<<<<< HEAD
if ($result === true) {
=======
if ($research === true) {
>>>>>>> origin/master
    echo "success";
} else {
    echo $result;
}
