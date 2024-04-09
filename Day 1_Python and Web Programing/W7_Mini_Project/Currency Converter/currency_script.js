/* Button Event */

const convert = async (event) => {
  event.preventDefault()
  const fromCurrencyDropdown = document.getElementById('fromCurrency')
  const fromCurrency = fromCurrencyDropdown.value

  // Get the selected 'to' currency
  const toCurrencyDropdown = document.getElementById('toCurrency')
  const toCurrency = toCurrencyDropdown.value

  // Get the value entered by the user
  const currencyValueInput = document.querySelector('[name="CurrencyValue"]')
  const currencyValue = currencyValueInput.value
  await getData(fromCurrency, currencyValue, toCurrency)
}

const getData = async (
  currencyFrom = 'USD',
  amount = 1,
  currencyTo = 'USD'
) => {
  let url = ` https://v6.exchangerate-api.com/v6/ee78bacd4b6376d74ca2267f/latest/${currencyFrom.toUpperCase()}`

  let options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(),
  }
  try {
    const resolve = await fetch(url, options)
    const data = await resolve.json()
    // console.log(data)
    const convertedAmount =
      data.conversion_rates[currencyTo.toUpperCase()] * amount
    console.log(convertedAmount)
    displayResults(convertedAmount, currencyTo)
  } catch (error) {
    console.log('something went wrong')
  }
}

const displayResults = (convertedAmount, currencyTo) => {
  let result = document.querySelector('.result')
  result.textContent = `Converted Amount: ${convertedAmount} ${currencyTo}`
}

/*api returning for 1 USD
{
  result: 'success',
  documentation: 'https://www.exchangerate-api.com/docs',
  terms_of_use: 'https://www.exchangerate-api.com/terms',
  time_last_update_unix: 1712620802,
  time_last_update_utc: 'Tue, 09 Apr 2024 00:00:02 +0000',
  time_next_update_unix: 1712707202,
  time_next_update_utc: 'Wed, 10 Apr 2024 00:00:02 +0000',
  base_code: 'USD',
  conversion_rates: {
    USD: 1,
    AED: 3.6725,
    AFN: 71.3528,
    ALL: 94.5169,
    AMD: 388.7899,
    ANG: 1.79,
    AOA: 844.0208,
    ARS: 864.25,
    AUD: 1.5152,
    AWG: 1.79,
    AZN: 1.7007,
    BAM: 1.8028,
    BBD: 2,
    BDT: 109.7367,
    BGN: 1.8033,
    BHD: 0.376,
    BIF: 2860.0695,
    BMD: 1,
    BND: 1.3484,
    BOB: 6.9187,
    BRL: 5.0552,
    BSD: 1,
    BTN: 83.3121,
    BWP: 13.6342,
    BYN: 3.2667,
    BZD: 2,
    CAD: 1.3581,
    CDF: 2767.0136,
    CHF: 0.9054,
    CLP: 947.854,
    CNY: 7.2386,
    COP: 3758.905,
    CRC: 506.3823,
    CUP: 24,
    CVE: 101.6375,
    CZK: 23.3545,
    DJF: 177.721,
    DKK: 6.873,
    DOP: 59.2026,
    DZD: 134.6262,
    EGP: 47.5626,
    ERN: 15,
    ETB: 56.7808,
    EUR: 0.9217,
    FJD: 2.2405,
    FKP: 0.7907,
    FOK: 6.8759,
    GBP: 0.7906,
    GEL: 2.6773,
    GGP: 0.7907,
    GHS: 13.4625,
    GIP: 0.7907,
    GMD: 65.2967,
    GNF: 8569.5122,
    GTQ: 7.7893,
    GYD: 209.1738,
    HKD: 7.832,
    HNL: 24.6873,
    HRK: 6.945,
    HTG: 132.7202,
    HUF: 359.2409,
    IDR: 15862.4418,
    ILS: 3.6902,
    IMP: 0.7907,
    INR: 83.3046,
    IQD: 1312.9446,
    IRR: 41919.1012,
    ISK: 138.8234,
    JEP: 0.7907,
    JMD: 154.7683,
    JOD: 0.709,
    JPY: 151.8114,
    KES: 130.2501,
    KGS: 89.2358,
    KHR: 4042.8568,
    KID: 1.515,
    KMF: 453.4747,
    KRW: 1353.6511,
    KWD: 0.3075,
    KYD: 0.8333,
    KZT: 445.5643,
    LAK: 20848.2988,
    LBP: 89500,
    LKR: 298.7686,
    LRD: 193.9366,
    LSL: 18.6251,
    LYD: 4.8362,
    MAD: 10.0427,
    MDL: 17.6836,
    MGA: 4338.4749,
    MKD: 56.8304,
    MMK: 2102.5161,
    MNT: 3389.6215,
    MOP: 8.0667,
    MRU: 39.7133,
    MUR: 46.1576,
    MVR: 15.43,
    MWK: 1744.1232,
    MXN: 16.3436,
    MYR: 4.7523,
    MZN: 63.8909,
    NAD: 18.6251,
    NGN: 1250.9366,
    NIO: 36.812,
    NOK: 10.6863,
    NPR: 133.2993,
    NZD: 1.658,
    OMR: 0.3845,
    PAB: 1,
    PEN: 3.6787,
    PGK: 3.7799,
    PHP: 56.5748,
    PKR: 278.4924,
    PLN: 3.9388,
    PYG: 7343.644,
    QAR: 3.64,
    RON: 4.5876,
    RSD: 108.0463,
    RUB: 92.492,
    RWF: 1287.7895,
    SAR: 3.75,
    SBD: 8.5075,
    SCR: 13.5687,
    SDG: 454.1758,
    SEK: 10.5663,
    SGD: 1.3482,
    SHP: 0.7907,
    SLE: 23.2143,
    SLL: 23214.2609,
    SOS: 571.1352,
    SRD: 35.0663,
    SSP: 1560.7917,
    STN: 22.583,
    SYP: 12900.7764,
    SZL: 18.6251,
    THB: 36.6999,
    TJS: 10.9463,
    TMT: 3.5,
    TND: 3.1218,
    TOP: 2.34,
    TRY: 32.1213,
    TTD: 6.7571,
    TVD: 1.515,
    TWD: 32.1088,
    TZS: 2580.0676,
    UAH: 38.9981,
    UGX: 3824.4074,
    UYU: 38.2728,
    UZS: 12734.3237,
    VES: 36.1809,
    VND: 24978.9471,
    VUV: 120.539,
    WST: 2.7518,
    XAF: 604.6329,
    XCD: 2.7,
    XDR: 0.7551,
    XOF: 604.6329,
    XPF: 109.9951,
    YER: 250.3196,
    ZAR: 18.6291,
    ZMW: 24.6674,
    ZWL: 13.5616
  }
}*/
