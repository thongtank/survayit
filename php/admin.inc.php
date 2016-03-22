<?php
session_start();
require_once 'config/autoload.inc.php';

use config\database as db;

class admin extends db {
    public $id;
    public $username;
    public $pwd;

    public function login() {
        $this->pwd = md5($this->pwd);
        $sql = 'select * FROM `admin` WHERE `admin_username` = "' . $this->username . '" AND `admin_password` = "' . $this->pwd . '";';
        $res = parent::query($sql, $rows, $num_rows, $last_id);
        if ($res) {
            // not found username and password
            if ($num_rows == 0) {
                print 'not found username and password';
            } else {
                $_SESSION['admin_id'] = $rows[0]['id'];
                $this->id = $rows[0]['id'];
                if ($this->set_last_login()) {
                    $_SESSION['admin_username'] = $rows[0]['username'];
                    $_SESSION['admin_pwd'] = $rows[0]['pwd'];
                } else {
                    print 'update last login failed';
                }
            }
        } else {
            print $res;
        }
    }

    public function get_report($stmt) {
        if ($stmt == 'work or study report') {
            $sql = 'select * from research where do_present = "working";';
            $res = parent::query($sql, $rows, $num_rows, $last_id);
            if ($res) {
                print 'Rows: ' . $num_rows;
            } else {
                print $res;
            }
        } else {

        }
    }

    private function set_last_login() {
        $sql = 'UPDATE admin SET last_login = NOW() WHERE id = ' . $this->id;
        $res = parent::query($sql, $rows, $num_rows, $last_id);
        if ($res) {
            return true;
        }
        return false;
    }
}

$admin = new admin;

if (isset($_POST['dowhat']) && $_POST['dowhat'] == 'login') {
    if (!isset($_POST['username']) || !isset($_POST['pwd'])) {
        print 'access without username or password';
        exit;
    }

    if (empty($_POST['username']) || empty($_POST['pwd'])) {
        print 'username or password is empty';
        exit;
    }

    $admin->username = trim($_POST['username']);
    $admin->pwd = trim($_POST['pwd']);
    $admin->login();
} elseif (isset($_POST['dowhat']) && $_POST['dowhat'] == 'report') {
    $admin->get_report();
}
