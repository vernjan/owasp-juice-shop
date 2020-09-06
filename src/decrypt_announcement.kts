import java.nio.file.Files
import java.nio.file.Paths

val lines = Files.readAllLines(Paths.get("../ftp/announcement_encrypted.md"))

val mapping = mutableMapOf<String, Char>()
var letter = '0'

// Just to make it easier to work with, replacing each unique line with a single unique letter
val simplifiedCiphertext = lines.map { line ->
    if (!mapping.containsKey(line)) {
        mapping.put(line, letter)
        println("New mapping: ${line.substring(0, 10)} --> $letter")
        if (letter == 'Z') {
            letter = 'a'
        } else {
            letter++
        }
    }
    mapping.get(line)
}.joinToString("")

println("Simplified ciphertext: $simplifiedCiphertext")

println("Plaintext: " + simplifiedCiphertext
        .replace('5', ' ') // Space is the most common

        .replace('1', 'a') // 8.3 ~ 8.2 A
        .replace('Q', 'b')
        .replace('9', 'c')
        .replace('M', 'd')
        .replace(':', 'e') // 11.6 ~ 12.7 E
        .replace('H', 'f')
        .replace('I', 'g')
        .replace('V', 'h')
        .replace('E', 'i') // 7.1 ~ 7.0 I
        .replace('2', 'j')
        .replace('@', 'k')
        .replace('B', 'l')
        .replace(';', 'm') // 5.6 ~ 5.9 R
        .replace('7', 'n')
        .replace('3', 'o') // 8.2 ~ 7.5 O
        .replace('K', 'p')
        .replace('R', 'q')
        .replace('4', 'r') // 6.0 ~ 6.1 H
        .replace('L', 's') // 6.9 ~ 6.7 N
        .replace('<', 't') // 9.1 ~ 9.1 T
        .replace('8', 'u') // 6.2 ~ 6.3 S
        .replace('P', 'v')
        .replace('O', 'y')
        // Missing w, x, z

        .replace('S', '.')
        .replace('N', ',')
        .replace('=', ':')
        .replace('>', '\n')
//        .replace('C', '-')
//        .replace('Y', '/')
//        .replace('Z', '#')

        .replace('O', 'S')
        .replace('G', 'O')
        .replace('T', 'G')
        .replace('F', 'C')
        .replace('A', 'S')
        .replace('6', 'A')
        .replace('D', 'I')
        .replace('U', 'D')
//        .replace('W', 'U')
//        .replace('X', 'R')
        .replace('J', 'L')
        .replace('0', 'M')
        .replace('?', 'T')
        // Unknown letters" CWXYZ
)
