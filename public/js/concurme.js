$(document).ready(function () {
	$("#btnConcurMe").on("click", function(event) {
		$("body").addClass("loading");

		$.ajax({
		  type: "POST",
		  url: "/nextsegment",
		  data: {
			loggedIn: true
		  },
		  success: function(data) {
			$("body").removeClass("loading");

			// Save in browser localStorage
			var nextSegment = JSON.stringify(data);
			localStorage.setItem('nextSegment', nextSegment);

			// Prettyprint on the browser
			var indentedOutput = JSON.stringify(JSON.parse(nextSegment), undefined, 4);
			output(syntaxHighlight(indentedOutput));
		  }
		});
	});
});

// Utils
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