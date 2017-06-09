// Make Chrome Great Again !!!!!!!!!!!!!!   Extension by CatFace 
// This was based on the idea of the single word/phrase replacer from Ingraham who hated multiple options apparently. 
//I don't hate multiple options that allow for correct syntax display. So here you go
// June 9 2017 Version 1.1
//Here's our variable. It's an ok variable, I mean maybe a three? Honestly it's sort of pathetic. It wishes it wasn't such a loser.
var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];
//Time to scan the page and replace our leader with most awesome title, really just a fantastic title. The best. Those other titles are trash.
// I'll do some better regex later and clean this up into one or two vars later or I won't, what of it?
        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/president donald trump/gi, 'The Grand Cheeto');
			var replacedText2 = text.replace(/president trump/gi, 'The Grand Cheeto');
			var replacedText3 = text.replace(/donald trump/gi, 'The Grand Cheeto');
			var replacedText4 = text.replace(/trump/gi, 'The Grand Cheeto');

			

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
			else if (replacedText2 !== text) {
                element.replaceChild(document.createTextNode(replacedText2), node);
            }
			else if (replacedText3 !== text) {
                element.replaceChild(document.createTextNode(replacedText3), node);
            }
			else if (replacedText4 !== text) {
                element.replaceChild(document.createTextNode(replacedText4), node);
            }
        }
    }
}
