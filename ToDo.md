0. Po wprowadzeniu rekordu - zapisać do localStage'a za pomocą recordSettera


1. Skończyć logikę:
  - Skończyć scoreboard:
    - Zapis danych do locala
    - System przełączania wyświetlania tabel
    - Wpisywanie high score po wygraniu planszy - logika zapisu

2. Dodać stylowanie przestrzeni:
   - tło
   - modal do zmiany kolorów automatu (przypisać podstawowe zmienne do roota):
     - czerwony-żółty
     - czarny-kość słoniowa
     - fioletowy-zielony
     - jasnoszary-czerwony
   - Plakaty reklamujące  CSN, Unsplash i  Hexplorist

3. Dodać sterowanie:
  X Wybór trybu:
    X Klasyczny
    X Obrotowa plansza (tylko dwa pierwsze poziomy)
    X Zmiana położenia bomb:
    X Narastająca liczba bomb
  X Wybór metody wyświetlania podpowiedzi:
    X Cyfry
    X Kolory (symbol kolorów w stylu Windowsa)
    X Wskaźnik (position absolut, miernik w stylu pieca gitarowego)
    X Skaner - klikniesz przycisk na klawce, skanuje kilka pól wokół

4. Opcjonalne:
  - Randomizer
  - Timer
  - Dodać komiksowy napis boom przy odkryciu bomby (bomby wybuchają, zmieniają kolor na czerwony)
  - Obrotowa plansza (tylko dwa pierwsze poziomy):
      - Szybkość (1, 2, 3)
      - Dynamika (Płynnie, skokowo)
  - Zmiana położenia bomb:
    - Częstotliwość w sekundach (2, 5, 10)
    - Częstotliwość w ruchach (3, 5, 7)
    - Liczba zmienianych bomb (1, 2, 3)
  - Narastająca liczba bomb
      - Częstotliwość w ruchach (3, 5, 7)


- timer resetu - co x sekund jest cyknięcie. Jeśli obok odkrytego pola coś się zmieni, zamiast liczby, pojawia się znak zapytania. Trzeba kliknąć go jeszcze raz, żeby się pojawiła liczba
- 
- Przenieść do Reduxa mapę dostępnych pól z wartościami, minedBoard i aktualizaować ją na bieżąco - przyda się do losowania nowych miejsc z bombami


- Znikające pola w mroku?
- Kursor zmienia się na inny kolor przy polach z minami (np. im bardziej czarny, tym więcej wokół, albo zrobić prosty detektor graficzny)
- checker poprawności: auto albo manual
- lista z koordynatami bomb - ułatwi zarządzanie polami (dodaj, odejmij)
- Aktywne wskaźniki - świeci się lampka nad danym okienkiem, a wewnątrz świeci sie światło - gradient. Jak w danym trybie jest nieaktywne, przyciemnia się

Opcjonalne ustawienia:
