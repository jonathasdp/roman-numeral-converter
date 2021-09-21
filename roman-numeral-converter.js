function convertToRoman(num) {
  // Mapeia os símbolos romanos.
  let romanSymbols = {
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M",
  };

  // Inicia o array do resultado.
  let result = [];

  // Transforma o número informado em um array de números.
  let str = num.toString().split("");

  // Percorre o array de números.
  for (let i = 0; i < str.length; i++) {
    // Armazena as variáveis referente a classe decimal e as unidades.
    let classe = Math.pow(10, str.length - i - 1);
    let unity = parseInt(str[i]);

    // Realize o switch pelo unidade em questão para tratar de acordo com o mapeamento da classe decimal.
    switch (unity) {
      case 2:
      case 3:
        for (let j = 0; j < unity; j++) {
          result.push(romanSymbols[classe]);
        }
        break;
      case 4:
      case 9:
        result.push(romanSymbols[classe]);
        result.push(romanSymbols[classe * unity + classe]);
        break;
      case 6:
      case 7:
      case 8:
        result.push(romanSymbols[classe * 5]);
        for (let j = 0; j < unity - 5; j++) {
          result.push(romanSymbols[classe]);
        }
        break;
      default:
        result.push(romanSymbols[classe * unity]);
        break;
    }
  }

  // Junta os número do array em uma única string.
  return result.join("");
}
