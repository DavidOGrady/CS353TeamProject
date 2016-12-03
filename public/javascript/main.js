console.log("got into main");
var xmlhttp = new XMLHttpRequest();
var url = "javascripts/Notes.txt";

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        console.log("got in to the xml crap");
        loadnotes(myArr);
    }
};
//myFunction(myArr);
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(arr) {
    var out = "";
    var i;
    arr.notearr.forEach(function(item){
        out +=  item.notedata + " ";
    })

    document.getElementById("id01").innerHTML = out;
    out = "<br><br><br>";
    document.getElementById("id02").innerHTML = out;
    out = "";
    arr.notearr.forEach(function(item){
        out += item.noteid + " ";
    })
    document.getElementById("id02").innerHTML = out;
}
var count = 0;
function loadnotes(arr){
    var notebody = "";

        arr.notearr.forEach(function (item) {
            if(count<5) {
                console.log("got into loadnotes(arr)")
                var newID = 'drag' + count;
                $('<div/>').attr({
                    'class': 'draggable',
                    'id': 'drag' + count,
                    'style':'z-index:0'

                }).css("top",item.top).css("left",item.left).draggable().appendTo('body')
                $('#drag' + count).append('<textarea>'+item.notedata+'</textarea>');
                $('textarea').attr({
                    'id': count,
                    'onclick': 'SaveData()',

                })
                count++;
            }})

}
$(function() {
    $("#createNote").click(function () {
        count++;
        var newID = 'drag'+count;
        $('<div/>').attr({
            'class': 'draggable',
            'id': 'drag'+count,
            'style':'z-index:0'

        }).draggable().appendTo('body')
        $('#drag'+count).append('<textarea>text</textarea>');
        $('textarea').attr({
            'id':count,
            'onclick':'SaveData()'
        })
    });
    $('.draggable').draggable();

});
