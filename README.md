[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/pAqJXfzR)

05.03.2026: 
-Ich habe das HTML-Grundgerüst eingefügt.
-Ich habe mir einen Titel für meine Website ausgedacht und diesen mit h1 geschrieben. 
-Ich habe angefangen die Unterthemen meiner Website (Titel und Texte) zu machen. --> Für die Untertitel habe ich h2 verwendet und bei den Texten zu meinen Unterthemen habe ich häufig ul benutzt. 

12.3.2026:
-Ich habe ein inhaltsverzeichnis erstellt, bei dem ich ol verwendet habe. 
-Ich habe meine Unterthemen (Titel und Texte) abgeschlossen. --> Ich habe wie bereits oben erwähnt für die Untertitel h2 verwendet und bei den Texten zu meinen Unterthemen habe ich häufig ul benutzt.
-Ich habe ein Bild unter dem Titel der Website eingefügt.
-Ich habe alle h2 und h1 Texte mit color dunkelgrün gemacht. 
-Den Hintergrund der Website habe ich mit background-clor hellgrün gemacht.
-Den Hintergrund aller h2 Texte habe ich mit background-color beige gemacht und die Hintergrundfarbe von allen h1 Texte habe ich mit backgorund-color gelb gemacht.

13.03.2026
-Ich habe style.css mit meinem index.html gelinkt. 
-Ich habe alle meine CSS die ich fälschlicherweise im index.html geschrieben habe, zu style.css verschoben.
-Ich habe ChatGPT gefragt, wie man mit CSS nur die Elemente einer ordered list fett machen kann. Den CSS den ich von ChatGPT bekam, habe ich übernommen. 
-Ich habe dem Bild, welches unter dem Titel meiner Website ist, eine ID gegeben. Mit dieser ID habe ich einen CSS für die Grösse des Bildes erstellt. 
-Ich habe mit Hilfe von ChatGPT mein Inhaltsverzeichnis mit den Untertiteln verbunden, das heisst wenn ich auf ein Element in meinem Inhaltsverzeichnis klicke, bringt es mich zu diesem dazugehörenden Untertitel in der Website. Zudem habe ich mit CSS das Scrollverhalten beim draufklicken smooth gemacht. 
-Ich habe meinen Text überall verlängert.
-Ich habe ein Video unter der Zusammenfassung eingefügt. Ich habe dafür ähnlich programmiert wie beim einfügen eines Bildes, einfach dass ich noch controls hinschreiben musste, damit man das Video abspielen (anklicken) kann. Ich musste die mp4 Datei am gleichen Ort in OneDrive abspeichern wo auch meine Website abgespeichert ist, damit es überhaupt funktioniert. 
-Ich habe meine Texte p mit einem CSS auf die Breite 50% gesetzt. 
-Ich habe meine Texte ul mit einem CSS auf die Breite 50% gesetzt. 
-Ich habe eine Tabelle erstellt mit 2 Zeilen und 3 Spalten. Dafür habe ich die Hilfe von ChatGPT bekommen. Ich habe in die obere Zeile Texte eingefügt und in die untere Bilder. 
-Ich habe eine zweite genau gleiche Tabelle erstellt, diesmal aber mit 2 Zeilen und 4 Spalten. Dafür habe ich die Hilfe von ChatGPT bekommen. Ich habe in die obere Zeile Texte eingefügt und in die untere Bilder. 

Quellen:
-Alle meine Texte über Schildkröten wurden mit https://chatgpt.com erstellt. 
-ChatGPT hat mir einen CSS erstellt, mit dem ich nur die Elemente einer ordered list fett mache. 
-ChatGPT hat mir gezeigt, wie ich die Elemente in meinem Inhaltsverzeichnis anklickbarmache, damit ich direkt zum dazugehörenden Abschnitt in der Website gebracht werde: 

Recherchen:

-Wie mache ich mein Inhaltsverzeichnis anklickbar, damit ich direkt zum dazugehörenden Abschnitt in der Website gebracht werde: 

Der HTML-Tag `<a href="#was-sind-schildkroeten">Was sind Schildkröten?</a>` macht Folgendes:
1. `<a>` ist ein Link. Alles, was zwischen `<a>` und `</a>` steht, wird anklickbar.
2. `href="#was-sind-schildkroeten"` gibt das Ziel des Links an.
Das `#` bedeutet, dass der Link auf derselben Seite zu einem bestimmten Element springt.
Der Text nach `#` entspricht der ID des Elements, zu dem gesprungen werden soll, z. B. `<h2 id="was-sind-schildkroeten">Was sind Schildkröten?</h2>`.
3. Wenn man auf den Link klickt, sucht der Browser das Element mit der angegebenen ID und scrollt automatisch dorthin.
4. Optional kann man mit CSS `html { scroll-behavior: smooth; }` einstellen, dass das Scrollen sanft abläuft, statt abrupt.
Kurz gesagt: Der Link macht einen klickbaren Text, der die Seite zu einem bestimmten Untertitel scrollen lässt.