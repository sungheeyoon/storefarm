$(function() {
  $("#addTR").click(function () {
    var row = "<tr>";
      row += "<td><input type='text' name='idx[]' value='' /></td>";
      row += "<td><span>Remove</span></td>";
      row += "<td><button>버튼</button></td>"
      row += "</tr>";
    $("#table").append(row);
  });

  $("#table").on("click", "span", function() {
    $(this).closest("tr").remove();
  });
});
