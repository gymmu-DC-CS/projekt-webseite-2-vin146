[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/pAqJXfzR)

Lerntagebuch

05.03.2026 - Erste Inhalte der Website
1. Was ich versucht habe zu tun
Ich habe das HTML-Grundgerüst eingefügt und angefangen, Inhalte über Schildkröten zu schreiben. Ausserdem habe ich einen Titel und Unterthemen erstellt.
2. Wo ich Hilfe gefunden habe
Eigene Überlegungen und Hilfe von ChatGPT.
3. Was ich daraus gelernt habe
Ich habe gelernt, wie man Überschriften und Inhalte in HTML strukturiert:
•	<h1> wird für den Haupttitel einer Website verwendet.
•	<h2> wird für Untertitel oder Abschnitte benutzt.
•	<p> steht für Paragraph und wird für normalen Text verwendet.
•	<ul> ist eine ungeordnete Liste (Liste mit Punkten).
•	<li> sind die einzelnen Elemente in einer Liste.
4. Wie ich die Idee an mein Projekt angepasst habe
Ich habe <h1> für den Titel meiner Website „Alles über Schildkröten“ verwendet. Die verschiedenen Themenbereiche meiner Website habe ich mit <h2> erstellt und die Texte dazu mit <p> und Listen mit <ul> und <li> strukturiert.

12.03.2026 - Inhaltsverzeichnis, Bilder und CSS
1. Was ich versucht habe zu tun
Ich habe ein Inhaltsverzeichnis erstellt, Bilder eingefügt und meine Website mit CSS gestaltet.
2. Wo ich Hilfe gefunden habe
Hilfe von ChatGPT und eigene Versuche.
3. Was ich daraus gelernt habe
Inhaltsverzeichnis
Ich habe gelernt, wie man ein anklickbares Inhaltsverzeichnis erstellt:
•	<a> steht für Anchor (Anker) und erstellt einen Link.
•	href bedeutet Hypertext Reference und gibt an, wohin der Link führt.
•	Wenn href="#beispiel" geschrieben wird, springt der Link zu einem Element mit dieser ID.
Bilder
Ich habe gelernt, wie man Bilder einfügt:
<img> bedeutet image und zeigt ein Bild an.
Wichtige Merkmale:
•	src = Quelle des Bildes
•	alt = Beschreibung des Bildes
CSS Gestaltung
Mit CSS kann man das Aussehen verändern, z.B.:
•	color verändert die Textfarbe
•	background-color verändert die Hintergrundfarbe
4. Wie ich die Idee an mein Projekt angepasst habe
Ich habe ein Inhaltsverzeichnis mit <ol> erstellt und mit <a> und href anklickbar gemacht. Ausserdem habe ich Bilder über Schildkröten eingefügt und mit CSS Farben für Überschriften und Hintergründe festgelegt.

13.03.2026 - CSS-Datei, Tabellen und Videos
1. Was ich versucht habe zu tun
Ich habe meine CSS-Datei mit meiner HTML-Datei verbunden, Tabellen erstellt und ein Video eingefügt.
2. Wo ich Hilfe gefunden habe
Hilfe von ChatGPT.
3. Was ich daraus gelernt habe
CSS Datei verbinden
Mit folgendem Code wird eine CSS-Datei mit HTML verbunden:
<link rel="stylesheet" href="style.css">
Tabellen
Ich habe gelernt, wie Tabellen funktionieren:
•	<table> erstellt eine Tabelle
•	<tr> bedeutet table row (Tabellenzeile)
•	<th> bedeutet table header (Überschrift einer Spalte)
•	<td> bedeutet table data (normale Tabellenzelle)
Tabellen in CSS
border-collapse: collapse; bedeutet, dass Tabellenlinien zusammengeführt werden, damit nicht doppelte Linien entstehen.
Videos
Videos kann man mit <video> einfügen.
Die Datei wird mit <source> angegeben.
Ich habe MP4-Dateien verwendet, weil dieses Format von fast allen Browsern unterstützt wird.
•	autoplay = Video startet automatisch
•	muted = Video ist stumm
•	loop = Video wiederholt sich ständig
4. Wie ich die Idee an mein Projekt angepasst habe
Ich habe Tabellen erstellt, um Bilder von verschiedenen Schildkrötenarten übersichtlich darzustellen. Ausserdem habe ich ein Video am Ende meiner Website eingefügt.

14.03.2026 - Layout und Dauerschleifenvideo
1. Was ich versucht habe zu tun
Ich habe ein Dauerschleifenvideo an der Seite der Website eingefügt und Text über ein Video gelegt.
2. Wo ich Hilfe gefunden habe
Hilfe von ChatGPT.
3. Was ich daraus gelernt habe
CSS Selektoren
•	# bedeutet ID-Selektor
→ spricht ein Element mit einer bestimmten ID an
Beispiel:
#video
•	. bedeutet Klassen-Selektor
Beispiel:
.video-text
class wird verwendet, wenn mehrere Elemente den gleichen Stil bekommen sollen.
div Container
<div> bedeutet division und ist ein Container, der Elemente zusammen gruppiert.
So kann man mehrere Dinge gemeinsam gestalten oder positionieren.
Positionierung mit CSS
Für das Dauerschleifenvideo habe ich folgende Eigenschaften verwendet:
•	position: fixed;
→ Video bleibt immer an derselben Stelle, auch beim Scrollen.
•	top, right, left
→ bestimmen Abstände vom Rand.
•	z-index
→ bestimmt, welches Element über einem anderen liegt.
•	object-fit
→ bestimmt, wie ein Video oder Bild in seinen Bereich eingepasst wird.
Text über Video
•	transform: translateX(-50%)
→ verschiebt ein Element, damit es genau zentriert ist.
•	text-shadow
→ fügt einen Schatten hinter dem Text hinzu, damit er besser lesbar ist.
4. Wie ich die Idee an mein Projekt angepasst habe
Ich habe ein Video auf der rechten Seite meiner Website eingefügt, das automatisch und in Dauerschleife läuft. Ausserdem habe ich einen Text über mein Abschiedsvideo gelegt und diesen mit CSS positioniert.

15.03.2026 - Video wechseln per Knopfdruck
1. Was ich versucht habe zu tun
Ich wollte, dass das Dauerschleifenvideo auf der rechten Seite meiner Website per Knopfdruck zwischen drei verschiedenen Videos gewechselt werden kann. Ausserdem wollte ich einen Knopf erstellen und diesen gestalten.
2. Wo ich Hilfe gefunden habe
Hilfe von ChatGPT.
3. Was ich daraus gelernt habe
HTML
•	<button> erstellt einen Knopf, den man anklicken kann:
o	class="video-button" → damit man den Knopf per CSS gestalten kann
o	onclick="wechselVideo()" → ruft die JavaScript-Funktion wechselVideo() auf, wenn der Knopf gedrückt wird.
JavaScript
•	let aktuellesVideo = 1; → Speichert, welches Video aktuell läuft. Wird gebraucht, um zu wissen, welches Video als nächstes abgespielt werden soll.
•	function wechselVideo() { … } → Funktion, die ausgeführt wird, wenn man auf den Knopf klickt. Funktionen in JavaScript sind Blöcke von Code, die bestimmte Aufgaben erledigen.
•	document.getElementById("sideVideo") → sucht das Video-Element mit der ID sideVideo.
•	video.src = "..." → ändert die Videoquelle auf das neue Video.
•	video.play() → startet das Video, nachdem die Quelle gewechselt wurde.
•	if … else if … else → Logik, um zwischen den drei Videos zu wechseln. Nach dem dritten Video springt es wieder zum ersten zurück.
CSS
•	.video-button → Knopf:
o	position: fixed; bottom: 30px; right: 17% → Knopf unten rechts platzieren
o	transform: translateX(50%) → verschiebt den Knopf für exakte Zentrierung
o	padding: 12px 22px; font-size: 16px; → Grösse und Abstand des Knopfes
o	background-color: rgba(0, 0, 0, 0.575); color: white; → Hintergrundfarbe leicht durchsichtig, Text weiss
o	border: none; border-radius: 8px; → kein Rahmen, abgerundete Ecken durch border-radius
o	cursor: pointer; → Mauszeiger zeigt Hand beim Hover
o	z-index: 2; → Knopf liegt über dem Video
•	.video-button:hover → Hover-Effekt:
o	background-color: rgba(0,0,0,0.85); → Knopf wird dunkler, wenn Maus darüber fährt.
Zusammenfassung der wichtigsten Punkte
•	Mit aktuellesVideo weiss JavaScript, welches Video als nächstes abgespielt werden soll.
•	Mit function wechselVideo() wird der Wechsel ausgelöst, wenn man auf den Knopf klickt.
•	Mit CSS border-radius werden die Ecken des Knopfs abgerundet, damit er schöner aussieht.
•	transform, position, z-index, object-fit sorgen dafür, dass Video und Knopf korrekt positioniert und überlagert werden.
4. Wie ich die Idee an mein Projekt angepasst habe
Ich habe den Knopf auf meiner Website platziert, sodass man das rechte Dauerschleifenvideo per Klick zwischen drei Videos wechseln kann. Mit JavaScript wird die Quelle des Videos ausgetauscht. Mit CSS habe ich Knopf und Video positioniert, gestylt und überlagert, sodass alles gut aussieht und funktioniert.

Quellen
•	Texte über Schildkröten und Hilfe zu HTML/CSS: ChatGPT
