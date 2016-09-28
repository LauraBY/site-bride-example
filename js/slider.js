$(document).ready(function() {
    var images = $(".slidershow img");
    var thumbs = $(".thumbs img"); // селектор
    var start = 0;
    var end = 9;
    var i = start;
    var delay = 4000;

    var prev = function() {
        i -= 1;

        if (i < start) {
            i = end;
        }

        images.removeClass("active");
        $(images[i]).addClass("active");

        thumbs.removeClass("active");
        $(thumbs[i]).addClass("active");

        timeoutId = window.setTimeout(next, delay);
    }

    var next = function() {
        // определяем индекс(i) картинки , которая показывается следующей.
        i += 1;
        if (i > end) {
            i = start;
        }

        // у всех картинок удаляем класс "active" и вешаем по найденному индексу класс "active"
        images.removeClass("active");
        $(images[i]).addClass("active"); //$(foo)(без кавычек) получаем объект jquery, т.к. работаем с его методами
        //  у всех миниатюр удаляем класс "active" и вешаем по найденному индексу класс "active"
        thumbs.removeClass("active");
        $(thumbs[i]).addClass("active");

        timeoutId = window.setTimeout(next, delay); //вызываем функцию с задержкой
    }

    var show = function(index) {
        i = index

        images.removeClass("active");
        $(images[i]).addClass("active");

        timeoutId = window.setTimeout(next, delay);
    }

    $(".slidershow .prev").click(function() {
        window.clearTimeout(timeoutId)
        prev();
        return false;
    });
    $(".slidershow .next").click(function() {
        window.clearTimeout(timeoutId)
        next();
        return false;
    });
    thumbs.click(function() {
        thumbs.removeClass("active");
        // this - элемент на который сработало событие(клик)
        $(this).addClass("active");

        window.clearTimeout(timeoutId);
        var index = thumbs.index($(this));
        show(index);

        // console.log($(this).data("imgid"));
    });


    // начало работы перелистывания слайдера. Где timeoutId -идентификатор задержки выполнения
    // выполнения кода(события), которое выполняется через 4 сек.
    var timeoutId = window.setTimeout(next, delay);
});
