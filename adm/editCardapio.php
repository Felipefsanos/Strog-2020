<?php

function loadJson() {
    $string = file_get_contents("cardapio.json");
	$json = json_decode($string, true);
	
	return $json;
}

function getGrupoPratos($json) {
    $str = "";
	$str .= "<ul>";
	for($i = 0; $i < count($json); $i++) {
        $str .= "<li data-id='".$i."'>" . $json[$i][0] . "<br>".getPratos($json[$i][1])."</li>";
    }
	$str .= "</ul>";
	
	return $str;
}
function getPratos($json) {
   	$str = "";
	$str .= "<ul>";
	for($i = 0; $i < count($json); $i++) {
        $str .= "<li data-id='".$i."'>" . $json[$i][0][0];
		/*$str .= "<br><ul>";
		$str .= "	<li data-id='".$i."'>Descrição: " . $json[$i][0][3]."</li>";
		$str .= "	<li data-id='".$i."'>Opções: " . $json[$i][0][4]."</li>";
		$str .= "	<li data-id='".$i."'>Sub Titulo: " . $json[$i][0][5]."</li>";
		$str .= "	<li data-id='".$i."'>Peso: " . $json[$i][0][6]."</li>";
		$str .= "	<li data-id='".$i."'>Peso Super:" . $json[$i][0][7]."</li>";
		$str .= "	<li data-id='".$i."'>Preços:<br>".getPrecos($json[$i][1])."</li>";
		
		$str .= "</ul>";*/
		$str .= "</li>";
    }
	$str .= "</ul>";
	return $str;
}
function getPrecos($json) {
   	$str = "";
	$str .= "<ul>";
	for($i = 0; $i < count($json); $i++) {
        $str .= "<li data-id='".$i."'>".$json[$i][0]." | ".$json[$i][1]."<br>".getPrecosItem($json[$i])."</li>";
    }
	$str .= "</ul>";
	return $str;
}
function getPrecosItem($json) {
   	$str = "";
	$str .= "<ul>";
	for($i = 2; $i < count($json); $i++) {
        $str .= "<li data-id='".$i."'>" . $json[$i]. "</li>";
    }
	$str .= "</ul>";
	return $str;
}

//echo getGrupoPratos(loadJson());

/*
$myfile = fopen("cardapio.json", "w") or die("Unable to open file!");



$txt .=']'."\n";
fwrite($myfile, $txt);

fclose($myfile);
*/


?>
