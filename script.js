const character1 = prompt('Defina o nome de um personagem.')
const character2 = prompt('Defina o nome de outro personagem.')
let attackPower = parseInt(prompt(`Digite o valor do poder de ataque de ${character1}:`))
let defensePower = parseInt(prompt(`Quantos pontos de defesa ${character1} tem?`))
let life = parseInt(prompt(`Quantos pontos de vida ${character2} tem?`))
let haveShield = prompt(`${character2} tem um escudo?`)
let difference = 0
let damage = 0
let lifeDamage = 0

if (attackPower > defensePower &&  haveShield === 'Não' || haveShield === 'não') {
    difference = attackPower - defensePower
    damage = difference
    lifeDamage = damage - life
    if (lifeDamage < 0) {
        lifeDamage *= -1
        alert(`${character1} atacou. ${character2} sofreu ${damage} de dano e não possui escudo. Sua vida agora é ${lifeDamage}.`) 
    } else {
        alert(`${character1} atacou. ${character2} sofreu ${damage} de dano e não possui escudo. Sua vida agora é ${lifeDamage}.`) 
    }
    
} else if (attackPower > defensePower && haveShield === 'Sim' || haveShield === 'sim') {
    difference = (attackPower - defensePower) / 2
    damage = difference
    lifeDamage = damage - life
    if (lifeDamage < 0) {
        lifeDamage *= -1
        alert(`${character1} atacou. ${character2} sofreu ${damage} de dano e possui um escudo. Sua vida agora é ${lifeDamage}.`) 
    } else {
        alert(`${character1} atacou. ${character2} sofreu ${damage} de dano e possui um escudo. Sua vida agora é ${lifeDamage}.`) 
    }
} else if (attackPower <= defensePower) {
    alert(`${character1} atacou, mas não afetou ${character2}. Nenhum dano causado!`)
}