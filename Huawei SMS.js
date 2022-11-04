const isAscii = str => /^[\x00-\x7F]+$/.test(str);

let str = "SISE:¡Practica en Sets de TV y Cabinas de Radio reales!HOY matrícula 0, beneficios en TODAS cuotas+CURSO GRATIS.Conversemos: wa.link/qjnv5i"
let word=str.trim().split(" ");
	for (let i = 0; i < word.length; i++) 
	{
		if(! isAscii(word[i]) )
		 {
			console.log(word[i]);
			
		}
	}
console.log(str.length);

	
