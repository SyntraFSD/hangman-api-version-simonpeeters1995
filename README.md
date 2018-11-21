# Oefening 04 - TEST
## Voorbereiding:
Clone de git-repository uit github en maak je eigen branch.
1. Kopieer de url via github naar je klembord:  
   ![Copy url](https://raw.githubusercontent.com/SyntraFSD-JS/ex-01/master/images/copy_github.png "Copy url to clipboard")

Gebruik de terminal uit VSCode 
(zorg dat je in de juiste folder, die waar je alle oefeningen opslaat, zit in VSCode)
 om de volgende commands uit te voeren.
(vervang `[naam]` door je eigen naam)

1. `git clone https://github.com/SyntraFSD-JS/ex-03.git ex-04-test`
2. `cd ex-04-test`
3. `git checkout -b [naam]`
4. `git push --set-upstream origin [naam]`

Push regelmatig de changes die je maakt naar github

1. Commit je changes:
   1. Druk `Ctrl-Shift-G` om de Source Control tab te openen
   2. Geef een beschrijving van de changes die je deed en duw `Ctrl-Enter`
2. Push je changes:
   1. Druk `Ctrl-Shift-P` om het Command Palette te openen
   2. Zoek naar `Git: Push` en druk op `Enter` om uit te voeren 
   
Pull regelmatig om opmerkingen of aanpassingen van mij binnen te halen
1. Druk `Ctrl-Shift-P` om het Command Palette te openen
2. Zoek naar `Git: Pull` en druk op `Enter` om uit te voeren 
     
## Structuur
De oefeningen bevinden zich in een aparte map met de naam `ex[oef. nummer]_[oef. naam]`
Daarin zitten alle bestanden die je nodig hebt om de oefening te maken, meestal is dit een `index.html` en een `script.js` bestand.
Het script bestand zal al gelinkt zijn aan het html bestand. Zie:
```html
<script src="script.js"></script>
```
Normaal moet je niet in het html bestand meer werken maar enkel in `script.js`.
Ook daar zal meestal al een basisstructuur aanwezig zijn waarbij in comments staat waar je zelf dingen moet aanvullen.

Om het resultaat van je oefening te bekijken open je het `index.html` bestand in chrome.
In deze module gebruiken we allemaal chrome zodat we allemaal hetzelfde resultaat hebben.

## Oefeningen:
### Oefening 04: Hangman
#### Doel:
Hangman spel:
- Bovenaan in het script staat een `array` met woorden `randomWords` waaruit elk spel 
een willekeurig woord wordt gekozen.
- Html en CSS zijn reeds aanwezig:  
   - Letter knoppen:  
     ```html
     <div id="letter-container">
       <div class="letter">A</div>
       <div class="letter">B</div>
       <div class="letter">C</div>
       <div class="letter">D</div>
       <div class="letter">E</div>
       ...
     </div>
     ```
     Door op deze letters te klikken kan de gebruiker een letter kiezen.
     Elke letter kan slechts eenmaal gekozen worden.
     Wanneer een letter gekozen is krijgt hij ofwel de klasse `failed` als de letter niet werd gevonden,
     of `success` als de letter wel in het woord zat.
   - In de map `/images` vind je 9 images terug die de verschillende stappen van de galg weergeven.  
     Als de spelen een foute letter wordt gekozen moet dus telkens de volgende afbeelding getoond worden.  
     Als afbeelding 9 wordt getoond is het spel afgelopen.
     ```html
       <section id="image-container">
         <img id="image" src="images/hangman01.png" alt="">
       </section>
     ```
   - De `#solution-container` moet elk spel gevuld worden met het correcte aantal `.solution-letter`.  
   Als een nieuw spel begint met een 4-letter woord moet de `#solution-container` er als volgt uitzien:
     ```html
       <section id="solution-container">
         <div class="solution-letter"></div>
         <div class="solution-letter"></div>
         <div class="solution-letter"></div>
         <div class="solution-letter"></div>
       </section>
     ```  
     Wanneer een letter gevonden is vul je deze in de juiste `.solution-letter` in:
     ```html
       <div class="solution-letter">E</div>
     ```
   - Als het spel afgelopen is toon je een gepaste boodschap in `#win-lose-container`.
   Als de speler op deze knop klikt begint er een nieuw spel:  
     ```html
       <section id="win-lose-container">
         You won!
       </section>
     ```
      




   
      
