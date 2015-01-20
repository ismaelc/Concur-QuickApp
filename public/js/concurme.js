$(document).ready(function () {
	$("#btnGetAllSegments").on("click",  function(event) { getAllSegments(true); });
	$("#btnUpcomingSegment").on("click", function(event) { getAllSegments(false); });
});

// Utils
function getAllSegments(requestAllSegments) {

	$("body").addClass("loading");

	// if 'allSegments' is false, just returns one upcoming segment;
	// if true, return all segments but only upcoming segment will have coordinates
	$.ajax({
	  type: "POST",
	  url: "/segments",
	  data: {
		loggedIn: true,
		allSegments: requestAllSegments
	  },
	  success: function(data) {
		$("body").removeClass("loading");

		// Save in browser localStorage
		var concurSegment = JSON.stringify(data);
		localStorage.setItem('concurSegment', concurSegment);

		// Prettyprint on the browser
		var indentedOutput = JSON.stringify(JSON.parse(concurSegment), undefined, 4);
		output(syntaxHighlight(indentedOutput));
	  }
	});
}

function output(inp) {
    document.body.appendChild(document.createElement('pre')).innerHTML = inp;
}

function syntaxHighlight(json) {
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
}