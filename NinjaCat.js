$(document).ready(function() {
	//sortable
	$("#image_list").sortable();
	//img swap
	$("li").click(function() {
		$(this).children($("img")).toggle();
	});
});