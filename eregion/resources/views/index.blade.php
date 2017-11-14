<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
        <link href="/css/navs.css" rel="stylesheet" type="text/css">
        <link href="/css/sidebar.css" rel="stylesheet" type="text/css">
        <link href="/css/chooseRegion.css" rel="stylesheet" type="text/css">
        <link href="/css/footer.css" rel="stylesheet" type="text/css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">


        <script
          src="https://code.jquery.com/jquery-3.2.1.js"
          integrity="sha256-DZAnKJ/6XZ9si04Hgrsxu/8s717jcIzLy3oi35EouyE="
          crossorigin="anonymous"></script>

    </head>
    <body>

    @include('layout.navs')
    <div class="container">
        <div class="row">
            @include('layout.sidebar')
            @yield('content')
        </div>
    </div>
       @include('layout.footer')
    <script src="/js/navs.js"></script>
    <script src="/js/sidebar.js"></script>
    <script src="/js/chooseRegion.js"></script>
    </body>
</html>
