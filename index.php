<html><head><title>mobfox</title><meta http-equiv="refresh" content="<?php echo rand(3,5); ?>;url=?p=<?php echo rand(1,999); ?>">
</head><body>

<?php echo $_SERVER['HTTP_X_FORWARDED_FOR'];?>
<?php
$date = date_create();
$url = "$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
$mob1 = "http://my.mobfox.com/ad_sdk.js?cb=".date_timestamp_get($date)."&referrer=".$url."&width=320&height=50&invh=6e0afb572f61cba3a8530fa09c8e13bc&type=banner";
$mob2 = "http://my.mobfox.com/ad_sdk.js?cb=".date_timestamp_get($date)."&referrer=".$url."&width=300&height=250&invh=6e0afb572f61cba3a8530fa09c8e13bc&type=banner";
$mob3 = "http://my.mobfox.com/ad_sdk.js?cb=".date_timestamp_get($date)."&referrer=".$url."&width=300&height=250&invh=6e0afb572f61cba3a8530fa09c8e13bc&type=banner";
$mob4 = "http://my.mobfox.com/ad_sdk.js?cb=".date_timestamp_get($date)."&referrer=".$url."&width=320&height=50&invh=6e0afb572f61cba3a8530fa09c8e13bc&type=banner";

?>

<!--
    INVENTORY HASH: 6e0afb572f61cba3a8530fa09c8e13bc
    TYPE: banner
    SIZE: 320x50
-->

<script class="mobfoxConfig" src="<?php echo $mob1 ?>"></script>
</td>
</tr>
<tr>
<td>

<!--
    INVENTORY HASH: 6e0afb572f61cba3a8530fa09c8e13bc
    TYPE: banner
    SIZE: 300x250
-->

<script class="mobfoxConfig" src="<?php echo $mob2 ?>"></script>



<!--
    INVENTORY HASH: 6e0afb572f61cba3a8530fa09c8e13bc
    TYPE: banner
    SIZE: 300x250
-->

<script class="mobfoxConfig" src="<?php echo $mob3 ?>"></script>
</td>
</tr>
<tr>
<td>

<!--
    INVENTORY HASH: 6e0afb572f61cba3a8530fa09c8e13bc
    TYPE: banner
    SIZE: 320x50
-->

<script class="mobfoxConfig" src="<?php echo $mob4 ?>"></script>

</body></html>