$(document).ready(function () {
    $(".resume-star").each(function (count, data) {
        // Index
        var max_rate_star = 5;
        var rate_star = Math.floor(Number(data.innerText));
        var half_star = rate_star + (Number(data.innerText) % 1 == 0.5 ? 1 : 0);

        var count_star = 0;

        var div = document.createElement("div");
        var i = null;

        // Fill Star
        for (count_star; count_star < rate_star; count_star++) {
            div.appendChild(createStarElement("fas fa-star"));
        }

        // Half Fill Star
        for (count_star; count_star < half_star; count_star++) {
            div.appendChild(createStarElement("fas fa-star-half-alt"));
        }

        // Not Fill Star
        for (count_star; count_star < max_rate_star; count_star++) {
            div.appendChild(createStarElement("far fa-star"));

        }

        $(data).html(div);

        function createStarElement(className) {
            i = document.createElement("i");
            i.className = className;
            return i;
        }
    });

    $($(".resume-summary")[0].children).each(function (count, data) {
        if ($(".resume-summary")[0].children["length"] != count + 1) {
            $(data.children[0])
                .on("mouseenter", function () {
                    this.style.display = "none";
                    this.parentElement.children[1].style.display = "inline-block";
                })

            $(data.children[1])
                .on("mouseleave", function () {
                    this.style.display = "none";
                    this.parentElement.children[0].style.display = "inline-block";
                })
                .on("click", function () {
                    var temp = document.createElement("textarea");
                    document.body.appendChild(temp);
                    temp.value = this.parentElement.innerText;
                    temp.select();
                    document.execCommand('copy');
                    document.body.removeChild(temp);
                    alert(temp.value + " cliped board!");
                })
        }
    });

    $(".fa-file-download").on("click", function () {
        var path = document.createElement("a");
        path.download = $(this).data("file");
        path.href = "../other/" + $(this).data("file");
        path.click();
    })

    $(".resume-title").each(function (count, data) {
        $(this).on("click", function () {
            this.parentElement.parentElement.lastElementChild.style.display = this.parentElement.parentElement.lastElementChild.style.display == "block" ? "none" : "block";
        });
    });

    $(".resume-images-wrapper").each(function (count, data) {
        $(this.children).each(function (count, data) {
            $(this).on("click", function () {
                var select_image = this;
                $(this.parentElement.children).each(function (count, data) {
                    if (select_image == this) {
                        this.style.width = "50%";
                    } else {
                        this.style.width = "22.5%";
                    }
                });
            });
        });
    });

});