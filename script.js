$(document).ready(function(){
    $('#table div').append('<table id="myTable"></table>');
    // $("table").addClass('.');
    let $entry = $('<tr></tr>');
    $entry.append(`<th>Movie Titles</th>`).append(`<th>Movie Ratings</th>`).append(`<th>Remove Title</th>`);
    $("table").append($entry);
    const minMax = {min:"0",max:"10"};
    $("input#ratings").attr(minMax);
    $("input#title").attr("minlength","2");
    //$("table thead").css("display","none");
    $('form').on('submit',function(e){
        e.preventDefault();
        let $entry = $('<tr></tr>');
        const $rmv = $("<button></button>").text("Remove").addClass('removeBtn').click(()=>$entry.remove());;
        $entry.append(`<td>${$('input').eq(0).val()}</td>`).append(`<td>${$('input').eq(1).val()}</td>`).append($rmv);
        $("table").append($entry);
        $('input').val("");
    })
})
