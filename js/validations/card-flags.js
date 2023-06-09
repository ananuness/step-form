const cardsAccepted = {
  visa: {
    name: 'visa',
    formalName: 'Visa',
    regex: /^4\d/,
    minLength: 16,
    maxLength: 19,
    minLengthWithSpaces: 19,
    maxLengthWithSpaces: 23,
    nameMaxLength: 19,
    cvcLength: 3
  },
  amex: {
    name: 'amex',
    formalName: 'American Express',
    regex: /^3[47]\d/,
    maxLength: 15,
    maxLengthWithSpaces: 17,
    nameMaxLength: 20,
    cvcLength: 4
  },
  mastercard: {
    name: 'mastercard',
    formalName: 'MasterCard',
    regex: /^(?:5[1-5]|222[1-9]|22[3-9][0-9]|2[3-6][0-9][0-9]|27[0-1][0-9]|2720)\d/,
    maxLength: 16,
    maxLengthWithSpaces: 19,
    nameMaxLength: 22,
    cvcLength: 3
  },
  diners: {
    name: 'diners',
    formalName: 'Dinner\'s Club',
    regex: /^(?:36|30[0-5]|3095|3[8-9])\d/,
    maxLength: 14,
    maxLengthWithSpaces: 16,
    nameMaxLength: 19,
    cvcLength: 3
  },
  hipercard: {
    name: 'hipercard',
    formalName: 'Hipercard',
    regex: /^(?:3841[046]0|6(?:06282|37(?:095|5(?:68|99)|6(?:09|12))))/,
    minLength: 14,
    maxLength: 16,
    minLengthWithSpaces: 16,
    maxLengthWithSpaces: 19,
    nameMaxLength: 19,
    cvcLength: 4
  },
  elo: {
    name: 'elo',
    formalName: 'Elo',
    regex: /^4011(78|79)|^43(1274|8935)|^45(1416|7393|763(1|2))|^504175|^627780|^63(6297|6368|6369)|(65003[5-9]|65004[0-9]|65005[01])|(65040[5-9]|6504[1-3][0-9])|(65048[5-9]|65049[0-9]|6505[0-2][0-9]|65053[0-8])|(65054[1-9]|6505[5-8][0-9]|65059[0-8])|(65070[0-9]|65071[0-8])|(65072[0-7])|(65090[1-9]|6509[1-6][0-9]|65097[0-8])|(65165[2-9]|6516[67][0-9])|(65500[0-9]|65501[0-9])|(65502[1-9]|6550[34][0-9]|65505[0-8])|^(506699|5067[0-6][0-9]|50677[0-8])|^(509[0-8][0-9]{2}|5099[0-8][0-9]|50999[0-9])|^65003[1-3]|^(65003[5-9]|65004\d|65005[0-1])|^(65040[5-9]|6504[1-3]\d)|^(65048[5-9]|65049\d|6505[0-2]\d|65053[0-8])|^(65054[1-9]|6505[5-8]\d|65059[0-8])|^(65070\d|65071[0-8])|^65072[0-7]|^(65090[1-9]|65091\d|650920)|^(65165[2-9]|6516[6-7]\d)|^(65500\d|65501\d)|^(65502[1-9]|6550[3-4]\d|65505[0-8])/,
    maxLength: 16,
    maxLengthWithSpaces: 19,
    nameMaxLength: 19,
    cvcLength: 3
  }
}

export const verifyCardType = bin => {
  if (bin.match(cardsAccepted.elo.regex)) {
    return cardsAccepted.elo;
  }
  else if (bin.match(cardsAccepted.hipercard.regex)) {
    return cardsAccepted.hipercard;
  }
  else if (bin.match(cardsAccepted.diners.regex)) {
    return cardsAccepted.diners;
  }
  else if (bin.match(cardsAccepted.amex.regex)) {
    return cardsAccepted.amex;
  }
  else if (bin.match(cardsAccepted.mastercard.regex)) {
    return cardsAccepted.mastercard;
  }
  else if (bin.match(cardsAccepted.visa.regex)) {
    return cardsAccepted.visa;
  }
  else return null;
}

/* elo outra opcao
/^(4011|431274|438935|451416|457393|4576|457631|457632|504175|50(4175|6699|67[0-6][0-9]|677[0-8]|9[0-8][0-9]{2}|99[0-8][0-9]|999[0-9])|627780|636297|636368|636369|(6503[1-3])|(6500(3[5-9]|4[0-9]|5[0-1]))|(6504(0[5-9]|1[0-9]|2[0-9]|3[0-9]))|(650(48[5-9]|49[0-9]|50[0-9]|51[1-9]|52[0-9]|53[0-7]))|(6505(4[0-9]|5[0-9]|6[0-9]|7[0-9]|8[0-9]|9[0-8]))|(6507(0[0-9]|1[0-8]))|(6507(2[0-7]))|(650(90[1-9]|91[0-9]|920))|(6516(5[2-9]|6[0-9]|7[0-9]))|(6550(0[0-9]|1[1-9]))|(6550(2[1-9]|3[0-9]|4[0-9]|5[0-8]))|(506(699|77[0-8]|7[1-6][0-9]))|(509([0-9][0-9][0-9])))/
*/