ace.define("ace/mode/kevscript_completion",["require","exports","module"],function(e,t,n){"use strict";function r(){}(function(){this.getCompletions=function(e,t,n,r,i){if(!t.$worker)return[];var s=t.getTokenAt(n.row,n.column);if(!s)return[];setTimeout(function(){t.$worker.call("getCompletions",[n,r],function(e){i(null,e)})},0)}}).call(r.prototype),t.KevScriptCompletion=r})