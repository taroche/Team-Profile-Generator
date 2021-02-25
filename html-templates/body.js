let htmlBody = $(`
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My team</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
</head>

<body class="container text-center bg-light">
    <header class="row">
        <div class="col-12">
            <h1 class="p-3 mb-2 bg-danger text-white">My Team</h1>
        </div>
    </header>
    <main>
        <div class="manager row justify-content-center">
        </div>
        <div class="row engineer justify-content-center">
        </div>
        <div class="row intern justify-content-center">           
        </div>
    </main>
</body>
<html>
`)

module.exports = htmlBody;