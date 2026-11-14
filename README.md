# Angelinventar

Eine kleine deutschsprachige Inventar-App für Angelequipment, optimiert fürs Handy. Keine Installation von Entwicklungstools nötig. Kein Konto, keine Cloud, keine APK und kein Server für Bestandsdaten. Die App startet leer; nur der ausdrücklich gewählte Demo-Button fügt einen fiktiven Eintrag hinzu.

## Auf GitHub Pages bereitstellen

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
- JSON exportieren startet einen Download. Die Datei sicher und getrennt vom Repository aufbewahren.
- JSON importieren prüft Format, Version, alle Felder, Zahlen und IDs vor einer Änderung. Danach **Zusammenführen** oder **Bestand ersetzen** wählen. Ersetzen verlangt eine zusätzliche Bestätigung. Beim Zusammenführen bleibt bei gleicher ID der bestehende Eintrag erhalten. Einträge mit unterschiedlichen IDs werden nicht anhand des Namens dedupliziert.
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
- Separat gelieferte `Angelinventar.html`: selbstständige Vorschau ohne Manifest, Service Worker oder Netzwerkanfragen.

Zum lokalen PWA-Test kann ein bereits vorhandener statischer Webserver auf localhost verwendet werden, etwa `python -m http.server 8000`. Das direkte Öffnen von `index.html` als Datei aktiviert keinen Service Worker. Für App-Shell-Updates `CACHE_VERSION` in `sw.js` erhöhen. Neue Worker übernehmen ohne erzwungenes Neuladen beim nächsten regulären Aktivierungszyklus; eventuell alle App-Tabs schließen und neu öffnen. Icons und Oberfläche sind im Projekt enthalten; es gibt keine Build-Abhängigkeiten.

## Prüfstand dieser Lieferung

Standalone-HTML: HTML-Validator erfolgreich, keine externen Ressourcen, keine Inline-Eventhandler. JavaScript-Syntax mit Node geprüft. 16 Funktionstest-Gruppen in installiertem Headless-Chromium über das Chrome DevTools Protocol bestanden: Anlegen/Bearbeiten/Löschen, Neuladen mit gespeichertem Bestand, Suche/Filter, berechnete Summen, XSS-Textdarstellung, realer JSON-Download, ungültige Importe, Merge/Abbrechen/zweistufiges Ersetzen, explizite Demo, Quota-Fehler, echter opaker Ursprung mit Arbeitsspeicher-Fallback und PWA-Offline-Neuladen unter einem Projekt-Unterpfad. Mobile Ansicht mit 390 Pixel Breite ohne horizontalen Überlauf geprüft. Playwright war nicht installiert; keine Pakete nachinstalliert. Kein Test auf einem physischen Android-Handy und keine GitHub-Veröffentlichung.
