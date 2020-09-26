<?php

$config = array(

	//name админов. Добавлять строго так, как изначально
	"admin_names" => array(
		"avlogistic.dnepr@gmail.com"

	));
$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$email = trim($_POST["email"]);

$message = "Узнать стоимость \nИмя: $name  \nТелефон: $phone \nE-mail: $email";

$pagetitle = "Новая заявка с сайта АВ Логистик";

mail(implode(", ", $config["admin_names"]), $pagetitle, $message,"Content-type: text/plain; charset=\"utf-8\"");
header("Location:thanks.html");?>