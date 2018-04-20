<?php
    $manifest = json_decode(file_get_contents('dist/manifest.json'), true);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <div id="app"></div>
    <script src="<?php echo $manifest['main.js']; ?>" charset="utf-8"></script>
</body>
</html>
