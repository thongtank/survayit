<?php
include_once 'config/autoload.inc.php';

use config\database;

class report extends database {
    public function get_WorkOrStudyReport() {
        $data = array();
        $arr_working = array();
        $arr_study = array();

        $sql = 'SELECT * FROM research WHERE do_present = "working";';
        $res = $this->query($sql, $rows, $num_rows, $last_id);
        if ($res) {
            $arr_working = array(
                value => $num_rows,
                color => '#455C73',
                highlight => '#34495E',
                label => 'ทำงาน',
            );
        }

        $sql = null;
        $rows = null;
        $num_rows = null;
        $last_id = null;

        $sql = 'SELECT * FROM research WHERE do_present = "study";';
        $res = $this->query($sql, $rows, $num_rows, $last_id);
        if ($res) {
            $arr_study = array(
                value => $num_rows,
                color => '#9B59B6',
                highlight => '#B370CF',
                label => 'ศึกษาต่อ',
            );
        }
        $sql = null;
        $rows = null;
        $num_rows = null;
        $last_id = null;

        array_push($data, $arr_working);
        array_push($data, $arr_study);
        $json_data = json_encode($data);
        // print $json_data;
        return $json_data;
    }
}

$report = new report;

if ($_POST['whatTheReport'] == '1') {
    // echo $report->get_WorkOrStudyReport();
    print $report->get_WorkOrStudyReport();
}