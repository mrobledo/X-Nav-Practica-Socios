
$(document).ready(function() {

	$( "#tabs" ).tabs();

	// Mensajes myline
	$.getJSON("myline.json", function(data) {
		printMsgs(data.Msgs, "#msgs2");
	});
	// Mensajes timeline
	$.getJSON("timeline.json", function(data) {
		printMsgs(data.Msgs, "#msgs");
	});

	// Refresh on click
	$("#refresh").click(function(){
		$.getJSON("update.json", function(data) {
			printMsgs(data.Msgs, "#newMsgs");
		});
	});

	function printMsgs (msgs, id){ 
        for (var i in msgs){
            $( id ).append("<div>" + '<img id="img" src='+ msgs[i].avatar + ' />' + "  " + msgs[i].autor + ",  Asunto:  " + msgs[i].titulo + "  <div>");
            $( id ).append("<div>" + msgs[i].contenido + "<li>" + msgs[i].fecha + "</li>" + "</div>");
        }
        $(id).accordion({collapsible: true, active:false, heightStyle: "content"});
    };
});
