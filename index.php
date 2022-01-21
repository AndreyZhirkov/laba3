<?php
require_once 'models/ScreenshotModel.php' ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <link rel="stylesheet" href="css/style.css">
    <title>Скриншоты.ру</title>
</head>

<body>
<?php require_once 'templates/modal.php' ?>

<?php
$screenshotModel = new ScreenshotModel();
$screenshots = $screenshotModel->getFirstScreenshots();
?>
<div class="wrapper">
    <div class="container">
        <?php require_once 'templates/header.php' ?>
        <!--        основной контент-->
        <main class="main">
            <div class="screenshots">
                <?php foreach ($screenshots as $screenshot): ?>
                    <div class="screenshot">
                        <a href="detail.php?uuid=<?php echo $screenshot['uuid'] ?>">
                            <img src="data:image/jpeg;base64, <?= base64_encode($screenshot['sblob']) ?>"
                                 height="300px" width="250px" alt=""/>
                            <div class="screenshot__info">
                                <span class="screenshot__upload-date"><?= $screenshot['upload_date'] ?></span>
                            </div>
                        </a>
                    </div>
                <?php endforeach; ?>
            </div>
            <?php $lastId = $screenshots[count($screenshots) - 1]['id'] ?>
            <!-- передаем id последнего прогруженного обзора -->
            <a class="btn btn-load-more"
               last-screenshot-id="<?= $lastId ?>">
                Показать еще
            </a>
        </main>
    </div>
    <?php require_once 'templates/footer.php' ?>
</div>

<script src="js/script.js"></script>
</body>