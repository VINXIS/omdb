<?php
    include_once 'connection.php';
    include_once 'functions.php';
    include_once 'userConnect.php';

    session_start();
    $timeAtPageLoad = microtime(true);

    $mode = isset($_COOKIE["mode"]) ? $_COOKIE["mode"] : 0;

    if ($loggedIn && $user["banned"]) {
        die(".");
    }

    // Should be database'd instead
    $maintenance = false;
    if ($maintenance && $userName != "Apo11o"){
        require("maintenance.php");
        die("");
    }
?>
