$(document).ready(function(){
    const $map = new Map();
    const $tableDiv = $('#table div');
    $tableDiv.append('<table id="myTable"></table>');
    $('#myTable').append('<tbody></tbody>');
    let $entry = $('<tr></tr>');
    $entry.append(`<th class='ttl'>Movie Titles</th>`).append(`<th class="rtn">Movie Ratings</th>`).append(`<th>Remove Title</th>`);
    $("tbody").append($entry);
    $('tr th').eq(0).on('click', sortTable.bind(this,0)).on('mouseover');
    $('tr th').eq(1).on('click', sortTable.bind(this,1));

    const $minMax = {min:"0",max:"10"};
    $("#ratings").attr($minMax);
    $("#title").attr("minlength","2");
    $('form').on('submit',function(e){
        e.preventDefault();
        if(!$map.has($('input').eq(0).val())){
            $map.set($('input').eq(0).val(),$('input').eq(1).val());
            appendRow();

        } else {
            if($map.get($('input').eq(0).val())!==$('input').eq(1).val()){
                    $map.set($('input').eq(0).val(),$('input').eq(1).val());
                    for(let i=1;i<$('#myTable tr').length;i++){
                        if($('#myTable tr')[i].children[0].innerText === $('input').eq(0).val()){
                            $('#myTable tr')[i].remove();
                        }
                    }
                    appendRow();
            } else {
                alert('Movie already exists in your library!!!');
            }
        }
    });
    function appendRow(){
        let $entry = $('<tr></tr>');
        const $rmv = $("<button></button>").text("Remove").addClass('removeBtn').click(()=>{
            $entry.remove();
            $map.delete($entry[0].children[0].innerText);
        });
        $entry.append(`<td>${$('input').eq(0).val()}</td>`).append(`<td>${$('input').eq(1).val()}</td>`).append($rmv);
        $("table").append($entry);
        $('input').val("");
    }

    function sortTable(n){
        let switching, i, shouldSwitch, dir, switchcount = 0;
        const table = document.getElementById("myTable");
        switching = true;
        dir = "asc"; 

        while (switching) {
          switching = false;
          const rows = table.rows;
          for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;

            let x = rows[i].getElementsByTagName("TD")[n];
            let y = rows[i + 1].getElementsByTagName("TD")[n];
            if (dir == "asc") {
              if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                shouldSwitch= true;
                break;
              }
            } else if (dir == "desc") {
              if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
              }
            }
          }
          if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchcount ++;      
          } else {
            if (switchcount == 0 && dir == "asc") {
              dir = "desc";
              switching = true;
            }
          }
    }}
});
