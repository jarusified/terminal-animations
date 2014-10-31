module.exports = dashes;

function dashes(){
	op=process.stderr;
	var string = 'delta';
	var ms=100;
	var clear  = '\u001b[2K';
	var cr    = '\u001b[0G';
	var characters= string.split('');
	var done =false;
	var s= 0;
	var delay=10;

	var interval = setInterval(function(){
		if(--delay>=0) return;
		s=++s % characters.length;
		var c= characters[s];
		op.write(c+cr);
		done = true;
	},ms);

	process.on('exit',function(){
		if(done){
			str.write(clear);
		}
	})
}