$(document).ready(function(){
    const $map = new Map();
    const $tableDiv = $('#table div');
    $tableDiv.append('<table id="myTable"></table>');
    let $entry = $('<tr></tr>');
    $entry.append(`<th>Movie Titles</th>`).append(`<th>Movie Ratings</th>`).append(`<th>Remove Title</th>`);
    $("table").append($entry);
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


    // function sortTable(){
    //     const $table = $("#table");
    //     let $rows = $table.rows;
    //     let switching = 
    // }
})
