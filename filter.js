<script>
function showFunction() {
    document.getElementById("myList").style
    .display = "block";
}
function filterFunction() {
    var filter, input, ul, li, a, i, text;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myList");
    li = ul.getElementsByTagName("li");
    for (i = 0 ; i < li.length ; i++) {
        a = li[i].getElementsByTagName("a")[0];
        text = a.textContent || a.innerText;
        if (text.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
</script>
