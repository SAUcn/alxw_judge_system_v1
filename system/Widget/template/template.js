// JavaScript Document
var template = function (tpl, callback) {
		if (callback == undefined)
			callback = function () {};
		var self = this;
		var str = "";
		var ajax = $.ajax({
				url : "Template/Template.json.php?action=getTemplate&tpl=" + tpl,
				async : true,
				type : "GET",
				dataType :"text",
				success : function (d) {
						self.str = d;
						callback();
					}
			});
		var compile = function(html, options) {
				var re = /<%(.+?)%>/g, 
					reExp = /(^( )?(var|if|for|else|switch|case|break|{|}|;))(.*)?/g, 
					code = 'with(obj) { var r=[];\n', 
					cursor = 0, 
					result;
				var add = function(line, js) {
					js? (code += line.match(reExp) ? line + '\n' : 'r.push(' + line + ');\n') :
						(code += line != '' ? 'r.push("' + line.replace(/"/g, '\\"') + '");\n' : '');
					return add;
				}
				while(match = re.exec(html)) {
					add(html.slice(cursor, match.index))(match[1], true);
					cursor = match.index + match[0].length;
				}
				add(html.substr(cursor, html.length - cursor));
				code = (code + 'return r.join(""); }').replace(/[\r\t\n]/g, '');
				try { result = new Function('obj', code).apply(options, [options]); }
				catch(err) { console.error("'" + err.message + "'", " in \n\nCode:\n", code, "\n"); }
				return result;
			};
		this.option = function (opt) {
				self.str = compile(self.str, opt);
				return this;
			};
		this.output = function () {
				return self.str;
			};
	};