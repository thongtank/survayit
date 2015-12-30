<?php
@require_once 'setting.inc.php';

function file_include($class) {

    $path = str_replace('\\', DS, WWW_ROOT . DS . $class . '.inc.php');
<<<<<<< HEAD
    // print $path . '<br>';
=======
>>>>>>> origin/master
    if (file_exists($path)) {
        include $path;
    }

}

spl_autoload_register('file_include');
