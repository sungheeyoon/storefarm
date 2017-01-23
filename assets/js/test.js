$("#addTR").click(function() {
    var tbl = $('#table');
    $(tbl).find('tr:last').after("<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td><button class='set'>수정</button><button class='del'>삭제</button></td></tr>");
});

$("#table").on("click", ".set", function() {
    $("td", $(this).closest("tr")).each(function(i, value) {

        $(this).html("<input type=text value='" + $(value).text() + "'>")
        $("td:last", $("input").closest("tr")).html("<button class='ok'>확인</button>")
    });
});
$("#table").on("click", ".ok", function() {
    $("td", $(this).closest("tr")).each(function(i, value) {
        var a = $(value).text()
        a = $(value).find('input[type=text]').val();
        $(this).html("<td>" + a + "</td>")
        $("td:last", $(this).closest("tr")).html("<button class='set'>수정</button><button class='del'>삭제</button>")

    });
});

$("#table").on("click", ".del", function() {
    $("td", $(this).closest("tr")).remove();
});

$("#allCheck").click(function() {
    if ($("#allCheck").prop("checked")) {
        $("input[type=checkbox]").prop("checked", true);
    } else {
        $("input[type=checkbox]").prop("checked", false);
    }
});
