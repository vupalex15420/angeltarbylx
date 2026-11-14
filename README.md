# Angelinventar

Eine kleine deutschsprachige Inventar-App für Angelequipment, optimiert fürs Handy. Keine Installation von Entwicklungstools nötig. Kein Konto, keine Cloud, keine APK und kein Server für Bestandsdaten. Die App startet leer; nur der ausdrücklich gewählte Demo-Button fügt einen fiktiven Eintrag hinzu.

## Bestehende Installation aktualisieren – ohne Datenverlust

1. In deiner bisherigen App **zuerst eine JSON-Sicherung herunterladen** und die Datei außerhalb von GitHub aufbewahren.
2. Dieses ZIP entpacken und die App-Dateien im **gleichen vorhandenen Repository** ersetzen, insbesondere `index.html` und `sw.js`. Die Dateien gehören weiterhin direkt in den bisher veröffentlichten Hauptordner. Website-Adresse, Repository und Browserprofil beibehalten; keine neue Website anlegen, wenn du den bisherigen lokalen Bestand behalten möchtest.
3. Nach abgeschlossenem GitHub-Pages-Deployment die bisherige Adresse mit Internet öffnen, kurz warten, dann normal neu laden. Gegebenenfalls alle geöffneten App-Fenster/Tabs schließen und die installierte App erneut öffnen; bei der bisherigen Version kann ein weiterer normaler Seitenaufruf nötig sein. Der neue Service Worker lädt die aktuelle Oberfläche online und behält einen Offline-Rückfall. Es erfolgt kein erzwungenes Neuladen während deiner Eingabe.
4. Den Bereich **„Auf deinem Handy behalten“** prüfen und **„Lokal speichern“** wählen. Ein Erfolg wird erst nach Schreiben und erneutem Lesen bestätigt; darunter steht der letzte bestätigte Speicherzeitpunkt.

**Für ein Update niemals Website-/Browserdaten löschen, Speicher zurücksetzen oder die App neu installieren.** Dadurch kann lokaler Bestand verloren gehen. Der Schlüssel `angelinventar.v1`, Formatversion 1 und vorhandene Eintrags-IDs bleiben erhalten; eine Datenbankmigration ist nicht nötig. Alte Sicherungen bleiben importierbar. Nicht lesbare vorhandene Bestandsdaten werden nicht überschrieben.

## Lokale Speicherung auf dem Handy

- Hinzufügen, Bearbeiten, Löschen und Import speichern weiterhin automatisch. **„Lokal speichern“** erlaubt zusätzlich einen ausdrücklich ausgelösten Speichervorgang oder einen erneuten Versuch nach einem Speicherfehler.
- Erfolg bedeutet: Die App konnte den aktuellen Bestand in diesem Browserprofil schreiben und unverändert zurücklesen. Normales Schließen und Wiederöffnen derselben Website bzw. installierten PWA verwendet diesen Bestand weiter. Ein Zeitstempel allein ist kein Backup; bei neueren ungespeicherten Änderungen zeigt die App das ausdrücklich an. Bei älteren Beständen ist bis zum ersten neuen Speichern kein Zeitpunkt bekannt.
- **„Gerätespeicher schützen“** fragt den Browser nur nach deinem Klick um persistenten Website-Speicher. Er kann zustimmen, ablehnen, die Funktion nicht anbieten oder einen Fehler melden. Die App zeigt das jeweilige Ergebnis an. Diese Anfrage benötigt einen sicheren Kontext wie HTTPS und ist in eingebetteten Vorschauen möglicherweise nicht erlaubt.
- Der Schutz kann automatische Bereinigung vermindern, verhindert aber **nicht** das bewusste Löschen der Website-Daten, Geräteverlust oder einen Browserwechsel. Keine Garantie unbegrenzter oder dauerhafter Speicherung; keine Verschlüsselung durch die App.
- **„Sicherung als Datei“** lädt eine kompatible JSON-Datei herunter. Den tatsächlichen Download im Browser prüfen. Der Browser entscheidet über Downloadordner beziehungsweise Dateidialog; die App schreibt nicht still in einen beliebigen Android-Ordner.
- PC und Handy haben getrennte lokale Bestände. Für einen Wechsel die Dateisicherung selbst übertragen und mit **„Sicherung laden“** importieren. Derselbe Browser und dieselbe Website-Adresse sind wichtig; die lokale Vorschau teilt diesen Speicher nicht automatisch.
- Bei gesperrtem oder vollem Speicher bleiben Änderungen nur in der geöffneten Ansicht; die App behauptet dann keinen Speichererfolg. Vor dem Schließen als Datei sichern. Bei beschädigtem Altbestand bleibt Überschreiben zum Schutz der alten Browserdaten gesperrt.

Offizielle Erläuterung zum Speicherschutz: https://developer.mozilla.org/en-US/docs/Web/API/StorageManager/persist

## Erstmalig auf GitHub Pages bereitstellen

1. ZIP entpacken. Auf GitHub ein neues Repository anlegen, beispielsweise `angelinventar`. Bei GitHub Free ist Pages für öffentliche Repositorys verfügbar. Der Pages-Auftritt ist öffentlich zugänglich, auch wenn ein Tarif die Veröffentlichung aus einem privaten Repository erlaubt.
2. **Den Inhalt** dieses Ordners direkt in den Hauptordner des Repositorys hochladen: `index.html`, `manifest.webmanifest`, `sw.js`, `icons/`, `.nojekyll` und diese README. Nicht einen zusätzlichen ZIP-Unterordner hochladen. Die versteckte Datei `.nojekyll` ebenfalls übernehmen.
3. Unter **Settings → Pages → Build and deployment → Source → Deploy from a branch** auswählen. Danach **main → /(root) → Save** wählen. Falls der Standardbranch anders heißt, diesen auswählen.
4. Die von GitHub angezeigte Pages-Adresse nach der abgeschlossenen Veröffentlichung öffnen. Bei einem Projekt heißt sie typischerweise `https://BENUTZERNAME.github.io/angelinventar/`. Alle PWA-Pfade sind relativ und unterstützen diesen Projekt-Unterpfad.

Offizielle Anleitung: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site?from_column=20423&from=20423

**Keine persönlichen Sicherungen und keine Inventardaten in GitHub hochladen.** Das Projekt enthält keine echten Bestandsdaten. Ein leeres Repository beziehungsweise die hier gelieferten App-Dateien sind ausreichend. Diese Lieferung erstellt kein Repository und veröffentlicht keine Website.

## Auf Android installieren

Die veröffentlichte **HTTPS-Adresse** in Chrome für Android öffnen. Im Menü **Mehr (⋮)** nach **Installieren und Verknüpfung erstellen → Installieren** oder einem sinngemäßen Eintrag wie **App installieren / Zum Startbildschirm hinzufügen** suchen. Bezeichnungen und Verfügbarkeit unterscheiden sich je nach Browser und Version. Ein HTML-Dateianhang oder eine eingebettete Vorschau ist keine installierbare PWA. Bei Bedarf die Seite nach dem ersten Aufruf erneut öffnen.

Offizielle Chrome-Anleitung: https://support.google.com/chrome/answer/9658361?hl=en&co=GENIE.Platform%3DAndroid

Die App-Shell wird beim ersten erfolgreichen Online-Aufruf zwischengespeichert und kann danach über dieselbe Adresse offline funktionieren. Der erste Aufruf benötigt Internet. Installation und Offline-Nutzung hängen von den Browserfunktionen ab. Kein APK-Download, keine native Android-App. Ein tatsächlicher Handytest oder eine Veröffentlichung ist mit dieser Lieferung nicht verbunden.

## Benutzung

- Equipment hinzufügen, bearbeiten und mit app-interner Rückfrage löschen.
- Kategorien: Ruten, Rollen, Köder, Schnüre, Zubehör.
- Felder: Name, Marke, Modell, Menge, Lagerort, Zustand, Kaufpreis pro Stück und Notizen.
- Suche berücksichtigt Name, Marke, Modell, Lagerort, Notizen und Zustand. Kategorie und Suche lassen sich kombinieren.
- Die Übersicht zeigt stets den gesamten Bestand, nicht nur gefilterte Ergebnisse. Kaufwert = Menge × Kaufpreis pro Stück; fehlende Preise tragen nichts bei. Kaufwert ist keine Bewertung des aktuellen Marktwerts.
- „Sicherung als Datei“ (JSON-Export) startet einen Download. Die Datei sicher und getrennt vom Repository aufbewahren.
- „Sicherung laden“ (JSON-Import) prüft Format, Version, alle Felder, Zahlen und IDs vor einer Änderung. Danach **Zusammenführen** oder **Bestand ersetzen** wählen. Ersetzen verlangt eine zusätzliche Bestätigung. Beim Zusammenführen bleibt bei gleicher ID der bestehende Eintrag erhalten. Einträge mit unterschiedlichen IDs werden nicht anhand des Namens dedupliziert.
- Maximal 10.000 Einträge, Importdatei höchstens 10 MB. Mengen: ganze Zahlen von 1 bis 1.000.000. Preis: optional, 0 bis 10.000.000 Euro mit höchstens zwei Nachkommastellen.

## Daten und wichtige Sicherungshinweise

Die App nutzt `localStorage` unter `angelinventar.v1`. Daten bleiben lokal im Browserprofil dieser Website; es gibt keine Cloud-Synchronisierung, kein Login und keine Verschlüsselung durch die App. Andere Personen mit Zugriff auf dieses Browserprofil können auf den Bestand zugreifen. Das Hosting lädt nur öffentliche App-Dateien; Inventardaten werden von der App nicht gesendet.

**Browserdaten löschen, Privatmodus beenden, Browser wechseln, Website-Adresse wechseln oder Gerät verlieren kann das Inventar verlieren lassen.** Regelmäßig per JSON exportieren und auf einem anderen sicheren Speicher sichern. Eine installierte PWA ist kein Backup. Vorschau, Dateiaufruf und veröffentlichte Website teilen in der Regel keinen Speicher. Ein Gerätewechsel überträgt Daten nicht automatisch: Export und bewusster Import sind erforderlich.

Alle Zugriffe auf lokalen Speicher sind abgefangen. Bei gesperrtem, vollem oder nicht lesbarem Speicher erscheint eine sichtbare Warnung; Änderungen liegen dann nur im Arbeitsspeicher dieser geöffneten Ansicht. Vor dem Schließen exportieren. Nicht lesbare vorhandene Daten werden in diesem Zustand nicht überschrieben. Bei gleichzeitiger Nutzung mehrerer Tabs kann der letzte Speichervorgang gewinnen; bevorzugt nur einen Tab bearbeiten.

## Dateien und Technik

- `index.html`: gesamte App ohne externe Bibliotheken, Fonts oder Bilder.
- `manifest.webmanifest`: relativer Startpfad und 192-/512-Pixel-PNG-Icons mit maskierbarem Sicherheitsrand.
- `sw.js`: ausschließlich eigene App-Shell-Dateien; keine Inventardaten und keine externen Antworten im Cache. Registrierung nur über HTTPS oder localhost. Veraltete Caches werden nur mit dem eigenen projektbezogenen Präfix gelöscht.
- `.nojekyll`: statische Bereitstellung ohne Jekyll.
- Separat gelieferte `Angelinventar-lokalspeicher.html`: selbstständige Vorschau ohne Manifest, Service Worker oder Netzwerkanfragen.

Zum lokalen PWA-Test kann ein bereits vorhandener statischer Webserver auf localhost verwendet werden, etwa `python -m http.server 8000`. Das direkte Öffnen von `index.html` als Datei aktiviert keinen Service Worker. Für App-Shell-Updates `CACHE_VERSION` in `sw.js` erhöhen. Die aktuelle Cacheversion ist `v2-lokalspeicher`. Neue Worker übernehmen nach erfolgreichem App-Shell-Download ohne erzwungenes Neuladen der Oberfläche. Die Oberfläche normal neu laden oder alle App-Tabs schließen und neu öffnen. Online werden die eigenen App-Shell-Dateien bevorzugt neu geladen; offline dient der eigene Cache als Rückfall. Nur veraltete Caches mit demselben projektbezogenen Angelinventar-Präfix werden entfernt, nie `localStorage` oder fremde Caches. Icons und Oberfläche sind im Projekt enthalten; es gibt keine Build-Abhängigkeiten.

## Prüfstand dieser Lieferung

Standalone-HTML: HTML-Validator erfolgreich, keine externen Ressourcen, keine Inline-Eventhandler. JavaScript-Syntax mit Node geprüft. **25 Funktionstest-Gruppen** in installiertem Headless-Chromium über das Chrome DevTools Protocol bestanden: bisheriger CRUD-/Import-/Export-Kern einschließlich negativer/ungültiger Zahlen und XSS-Textdarstellung; tatsächlich gecachtes gehostetes v1-Projekt auf diese Version aktualisiert, ohne Inventar-IDs oder Daten zu verlieren; manuelles Schreiben mit Leseprüfung und Zeitstempel; erfolgreiches Wiederherstellen nach vollständigem Browser-Prozessende und Neustart mit demselben Profil; Quota-Fehler und erneuter Speicherversuch; simuliert nicht übernommene Schreibvorgänge; beschädigten Altbestand bei Laden, Autosave und manuellem Speichern nicht überschrieben; echter opaker Ursprung mit Arbeitsspeicher-Fallback; Offline-Neuladen und Offline-Speichern unter Projekt-Unterpfad. Zustimmung, Ablehnung, fehlende API und Fehler beim optionalen Speicherschutz wurden mit simulierten API-Antworten geprüft, nicht als echte Browser-Berechtigungsentscheidung behauptet. Fremde Caches blieben erhalten. Mobile Ansicht mit 390 Pixel Breite ohne horizontalen Überlauf geprüft. Playwright war nicht installiert; keine Pakete nachinstalliert. Kein Test auf einem physischen Android-Handy und keine GitHub-Veröffentlichung.
