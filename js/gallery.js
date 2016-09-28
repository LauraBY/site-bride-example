$(document).ready(function() {
    $(".gallery a").click(function() {
        $(".gallery a").removeClass("active");
        $(this).addClass("active");

        var id = $(this).attr('id');

        if (id !== "gallery-all") {

            $(".gallery figure").hide();

            $(".gallery figure." + id).show();
        } else {

            $(".gallery figure").show();
        }

        return false; // убираем стандартное событие перехода по ссылке
    });
});
