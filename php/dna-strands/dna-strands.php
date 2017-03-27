<!-- Description:

Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

DNA_strand("ATTGC") // returns "TAACG"
DNA_strand("GTAT") // returns "CATA" -->
<?php
function DNA_strand($dna) {
  $result = [];
  $dnaArray = str_split($dna);
  foreach ($dnaArray as $givenletter) {
      switch ($givenletter) {
        case "G":
           array_push($result, "C");
           break;
        case "C":
           array_push($result, "G");
           break;
        case "A":
           array_push($result, "T");
           break;
        case "T":
           array_push($result, "A");
           break;
        default:
            echo "Unrecognized symbol: " . $letter;
      }
  }
  $result = join('', $result);
  return $result;
}
?>