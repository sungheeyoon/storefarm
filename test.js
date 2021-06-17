$(function() {
    $("#addTR").click(function() {

        var row = "<tr class='test'>";
        row += "<td>a</td>";
        row += "<td><span>Remove</span></td>";
        row += "<td>ㅁ</td>"
        row += "<td>A</td>"
        row += "<td>A</td>"
        row += "<td>A</td>"
        row += "<td>A</td>"
        row += "<td>A</td>"
        row += "<td>A</td>"
        row += "<td class='b'>A</td>";
        row += "<td><button class='set'>수정</button><button class='del'>삭제</button></td>"
        row += "</tr>";

        $("#table").append(row);


    });
    //테이블 수정버튼
    $("#table").on("click", ".set", function() {
        $("td", $(this).closest("tr")).each(function(i, value) {
            $(value).html("<input type=text value='" + $(value).text() + "'>")
            $("td:last", $("input").closest("tr")).html("<button class='ok'>확인</button>")
        });
    });
    //수정후 저장 버튼
    $("#table").on("click", ".ok", function() {
        $("td", $(this).closest("tr")).each(function(i, value) {
            console.log(value)
            $(value).html("<td>" + $('input[type=text]', $(value)).val() + "</td>")
            $("td:last", $(value).closest("tr")).html("<button class='set'>수정</button><button class='del'>삭제</button>")

        });
    });


    //테이블삭제
    $("#table").on("click", ".del", function() {
        $("td", $(this).closest("tr")).each(function(i, value) {
            value.remove();
        });
    });

});

//체크박스 기능
$(function() {
    $("#allCheck").click(function() {
        if ($("#allCheck").prop("checked")) {
            $("input[type=checkbox]").prop("checked", true);
        } else {
            $("input[type=checkbox]").prop("checked", false);
        }
    });
});
