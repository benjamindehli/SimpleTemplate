function getPages( ) {
    return $.getJSON("/SimpleTemplate/data/pages.json").then(function (data) {
        return data.pages;
    });
}

$(document).ready(function(){
    getPages().done(function (pages) {
        var navElement = $("#main-nav ul");
        $.each(pages, function(){
            var title= this.title;
            var id = this.id;
            var url = this.url;
            navElement.append("<li><a href='" + url +"' id='" + id + "' title='" + title + "'>" + title + "</a></li>");
        });
    });

    $("#main-nav").on("click", "a", (function(event){
        event.preventDefault();
        var url = $(this).attr("href");
        var title = $(this).attr("title");
        $("#title").text(title);
        $("#content").load( url );
    }));
});