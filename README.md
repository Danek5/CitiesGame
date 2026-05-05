# CitiesGame

Jednoducha slepa mapa Ceske republiky v cistem JavaScriptu.  
Hra obsahuje vice skupin otazek (mesta, pamatky, vodni plochy, pohori) a statistiku uspesnosti.

## Spusteni

1. Otevri `index.html` v prohlizeci.
2. Vyber skupiny, ktere chces trenovat.
3. Nastav obtiznost:
   - `lehka`
   - `stredni`
   - `tezka`
4. Klikni na tlacitko pro start hry.

## Ovladani ve hre

- `Mys` - kliknuti do mapy (tvuj tip polohy).
- `Sipka vlevo / vpravo` - predchozi / dalsi polozka.
- `P` nebo `Numpad Enter` - odhaleni polohy a vyhodnoceni tipu.
- `J` - zobrazeni/skryti nazvu.
- `Mezernik` - zapnuti/vypnuti blikani pismenek.
- `M` - zobrazeni/skryti vsech poloh z aktivniho vyberu.
- `R` - nove promichani poradi.

## Jak funguje vyhodnoceni

- U bodovych polozek (napr. mesta) se pouziva kruh podle obtiznosti.
- U pohori (polygony NP/CHKO) se pouzivaji realne hranice a stejny polomer tolerance jako u bodovych polozek (`difficultyRadius`).
- Uspesnost se zobrazuje jako `x/y (z%)`.

## Poznamky

- Mapa je nastavena na rozmer `1320 x 680`.
- Seznamy polozek jsou v `game.js` v objektu `datasets`.
