const countries = [
  {
    "objectId": "sv7fjDVISU",
    "code": "AD",
    "name": "Andorra"
  },
  {
    "objectId": "VqASvLCk8S",
    "code": "AE",
    "name": "United Arab Emirates"
  },
  {
    "objectId": "MEzedNnNVw",
    "code": "AF",
    "name": "Afghanistan"
  },
  {
    "objectId": "I8RkNYNHa4",
    "code": "AG",
    "name": "Antigua and Barbuda"
  },
  {
    "objectId": "8iGu4upB6j",
    "code": "AI",
    "name": "Anguilla"
  },
  {
    "objectId": "8rTBsf4ObQ",
    "code": "AL",
    "name": "Albania"
  },
  {
    "objectId": "hVs5HyPvID",
    "code": "AM",
    "name": "Armenia"
  },
  {
    "objectId": "khAszEtDXl",
    "code": "AO",
    "name": "Angola"
  },
  {
    "objectId": "Fs3xs9NlJa",
    "code": "AQ",
    "name": "Antarctica"
  },
  {
    "objectId": "emj7gm2L4O",
    "code": "AR",
    "name": "Argentina"
  },
  {
    "objectId": "s6ejWUPV5j",
    "code": "AS",
    "name": "American Samoa"
  },
  {
    "objectId": "sbCG0KlS9w",
    "code": "AT",
    "name": "Austria"
  },
  {
    "objectId": "8lauBzPLI5",
    "code": "AU",
    "name": "Australia"
  },
  {
    "objectId": "qCMlm28jY0",
    "code": "AW",
    "name": "Aruba"
  },
  {
    "objectId": "uvRzGTBaqW",
    "code": "AX",
    "name": "Åland"
  },
  {
    "objectId": "mDMzJJXtB2",
    "code": "AZ",
    "name": "Azerbaijan"
  },
  {
    "objectId": "OWstcXnnAs",
    "code": "BA",
    "name": "Bosnia and Herzegovina"
  },
  {
    "objectId": "27DB6uofpp",
    "code": "BB",
    "name": "Barbados"
  },
  {
    "objectId": "AWnxgoUzw0",
    "code": "BD",
    "name": "Bangladesh"
  },
  {
    "objectId": "TySeDEiFtc",
    "code": "BE",
    "name": "Belgium"
  },
  {
    "objectId": "buIC80yx3R",
    "code": "BF",
    "name": "Burkina Faso"
  },
  {
    "objectId": "LHOE9MSsmI",
    "code": "BG",
    "name": "Bulgaria"
  },
  {
    "objectId": "gXKD3sCcJI",
    "code": "BH",
    "name": "Bahrain"
  },
  {
    "objectId": "qEgnSc4sip",
    "code": "BI",
    "name": "Burundi"
  },
  {
    "objectId": "zVrvUTYEeC",
    "code": "BJ",
    "name": "Benin"
  },
  {
    "objectId": "akNOeSv404",
    "code": "BL",
    "name": "Saint Barthélemy"
  },
  {
    "objectId": "nj3z9SHzzq",
    "code": "BM",
    "name": "Bermuda"
  },
  {
    "objectId": "W1DBYJ0DT4",
    "code": "BN",
    "name": "Brunei"
  },
  {
    "objectId": "PdgGA5Y5Tt",
    "code": "BO",
    "name": "Bolivia"
  },
  {
    "objectId": "lP9UmD2WgK",
    "code": "BQ",
    "name": "Bonaire"
  },
  {
    "objectId": "qq2ryXaIYG",
    "code": "BR",
    "name": "Brazil"
  },
  {
    "objectId": "5xyA61UG1h",
    "code": "BS",
    "name": "Bahamas"
  },
  {
    "objectId": "ZvhrzA2APU",
    "code": "BT",
    "name": "Bhutan"
  },
  {
    "objectId": "3K9cHA3Xp8",
    "code": "BV",
    "name": "Bouvet Island"
  },
  {
    "objectId": "9l8d95idZG",
    "code": "BW",
    "name": "Botswana"
  },
  {
    "objectId": "5oTW0cNpxA",
    "code": "BY",
    "name": "Belarus"
  },
  {
    "objectId": "v9SGqANrU2",
    "code": "BZ",
    "name": "Belize"
  },
  {
    "objectId": "mTtBWeeHCo",
    "code": "CA",
    "name": "Canada"
  },
  {
    "objectId": "Ovzp6Ca4tr",
    "code": "CC",
    "name": "Cocos [Keeling] Islands"
  },
  {
    "objectId": "7UlxnC5LyT",
    "code": "CD",
    "name": "Democratic Republic of the Congo"
  },
  {
    "objectId": "CAFBhOmYoF",
    "code": "CF",
    "name": "Central African Republic"
  },
  {
    "objectId": "5jipXp430E",
    "code": "CG",
    "name": "Republic of the Congo"
  },
  {
    "objectId": "c2ZdW21DZq",
    "code": "CH",
    "name": "Switzerland"
  },
  {
    "objectId": "egoIFgkxC3",
    "code": "CI",
    "name": "Ivory Coast"
  },
  {
    "objectId": "2Icy8PIAyj",
    "code": "CK",
    "name": "Cook Islands"
  },
  {
    "objectId": "dnDRHIFqGe",
    "code": "CL",
    "name": "Chile"
  },
  {
    "objectId": "pUFZ2RIIvG",
    "code": "CM",
    "name": "Cameroon"
  },
  {
    "objectId": "jPsWdF78Gn",
    "code": "CN",
    "name": "China"
  },
  {
    "objectId": "R3I0XpBMHj",
    "code": "CO",
    "name": "Colombia"
  },
  {
    "objectId": "CcOW7twmeX",
    "code": "CR",
    "name": "Costa Rica"
  },
  {
    "objectId": "YNRVNxzcFx",
    "code": "CU",
    "name": "Cuba"
  },
  {
    "objectId": "LrFc6CEfje",
    "code": "CV",
    "name": "Cape Verde"
  },
  {
    "objectId": "6RJs1GA7WP",
    "code": "CW",
    "name": "Curacao"
  },
  {
    "objectId": "8tlFatlW3B",
    "code": "CX",
    "name": "Christmas Island"
  },
  {
    "objectId": "1KRscl4VTZ",
    "code": "CY",
    "name": "Cyprus"
  },
  {
    "objectId": "FIdcKBVyI3",
    "code": "CZ",
    "name": "Czech Republic"
  },
  {
    "objectId": "cXVjaWqsnY",
    "code": "DE",
    "name": "Germany"
  },
  {
    "objectId": "DKDsqKRrNW",
    "code": "DJ",
    "name": "Djibouti"
  },
  {
    "objectId": "3SYcv5XaFE",
    "code": "DK",
    "name": "Denmark"
  },
  {
    "objectId": "K9EoQTanO6",
    "code": "DM",
    "name": "Dominica"
  },
  {
    "objectId": "BkDVxFnLbN",
    "code": "DO",
    "name": "Dominican Republic"
  },
  {
    "objectId": "8XKDe93BnC",
    "code": "DZ",
    "name": "Algeria"
  },
  {
    "objectId": "w42L24Frj9",
    "code": "EC",
    "name": "Ecuador"
  },
  {
    "objectId": "kGAoZ5pH7T",
    "code": "EE",
    "name": "Estonia"
  },
  {
    "objectId": "hFkwjKITta",
    "code": "EG",
    "name": "Egypt"
  },
  {
    "objectId": "cRUrTJH6np",
    "code": "EH",
    "name": "Western Sahara"
  },
  {
    "objectId": "rVI3whtxQX",
    "code": "ER",
    "name": "Eritrea"
  },
  {
    "objectId": "5Vs8zprtNC",
    "code": "ES",
    "name": "Spain"
  },
  {
    "objectId": "RG4CMN42m1",
    "code": "ET",
    "name": "Ethiopia"
  },
  {
    "objectId": "nfHDWPtgDF",
    "code": "FI",
    "name": "Finland"
  },
  {
    "objectId": "0iYnsd3adu",
    "code": "FJ",
    "name": "Fiji"
  },
  {
    "objectId": "xoqwbHS99Z",
    "code": "FK",
    "name": "Falkland Islands"
  },
  {
    "objectId": "Y3YvNEgaqp",
    "code": "FM",
    "name": "Micronesia"
  },
  {
    "objectId": "D1Tu0ghkZ3",
    "code": "FO",
    "name": "Faroe Islands"
  },
  {
    "objectId": "vBQFvgbzPX",
    "code": "FR",
    "name": "France"
  },
  {
    "objectId": "2aC5hV2kfd",
    "code": "GA",
    "name": "Gabon"
  },
  {
    "objectId": "asMYxtQNZx",
    "code": "GB",
    "name": "United Kingdom"
  },
  {
    "objectId": "8DHNNAHDXI",
    "code": "GD",
    "name": "Grenada"
  },
  {
    "objectId": "J7QoCukbse",
    "code": "GE",
    "name": "Georgia"
  },
  {
    "objectId": "0FjIYpVd8h",
    "code": "GF",
    "name": "French Guiana"
  },
  {
    "objectId": "k96wKD7ZpG",
    "code": "GG",
    "name": "Guernsey"
  },
  {
    "objectId": "vCIN9WyEHn",
    "code": "GH",
    "name": "Ghana"
  },
  {
    "objectId": "usW9VKCd8N",
    "code": "GI",
    "name": "Gibraltar"
  },
  {
    "objectId": "S3kieBKF1Q",
    "code": "GL",
    "name": "Greenland"
  },
  {
    "objectId": "DGGLf2Q1tS",
    "code": "GM",
    "name": "Gambia"
  },
  {
    "objectId": "l2E7bFn2O6",
    "code": "GN",
    "name": "Guinea"
  },
  {
    "objectId": "j5lw2HxbXZ",
    "code": "GP",
    "name": "Guadeloupe"
  },
  {
    "objectId": "hzdCZRHhIY",
    "code": "GQ",
    "name": "Equatorial Guinea"
  },
  {
    "objectId": "zuCmaUX1g9",
    "code": "GR",
    "name": "Greece"
  },
  {
    "objectId": "SyJ1XgC9NA",
    "code": "GS",
    "name": "South Georgia and the South Sandwich Islands"
  },
  {
    "objectId": "Rkb0Ji6GtG",
    "code": "GT",
    "name": "Guatemala"
  },
  {
    "objectId": "E1fDBUFjuu",
    "code": "GU",
    "name": "Guam"
  },
  {
    "objectId": "HhLTUnF1fz",
    "code": "GW",
    "name": "Guinea-Bissau"
  },
  {
    "objectId": "uyLj6RP9AZ",
    "code": "GY",
    "name": "Guyana"
  },
  {
    "objectId": "KtRJin3dy9",
    "code": "HK",
    "name": "Hong Kong"
  },
  {
    "objectId": "obivyMu1QI",
    "code": "HM",
    "name": "Heard Island and McDonald Islands"
  },
  {
    "objectId": "pM1H87l6Bm",
    "code": "HN",
    "name": "Honduras"
  },
  {
    "objectId": "uj5JYO5BE3",
    "code": "HR",
    "name": "Croatia"
  },
  {
    "objectId": "QLFfURjWpu",
    "code": "HT",
    "name": "Haiti"
  },
  {
    "objectId": "f5WB3Ij653",
    "code": "HU",
    "name": "Hungary"
  },
  {
    "objectId": "pOykqMaxZB",
    "code": "ID",
    "name": "Indonesia"
  },
  {
    "objectId": "FSUOeNw5vK",
    "code": "IE",
    "name": "Ireland"
  },
  {
    "objectId": "4lBFb6Wpq5",
    "code": "IL",
    "name": "Israel"
  },
  {
    "objectId": "AheHxSBPbE",
    "code": "IM",
    "name": "Isle of Man"
  },
  {
    "objectId": "DlHQBjd2Ke",
    "code": "IN",
    "name": "India"
  },
  {
    "objectId": "WUeznxS4oA",
    "code": "IO",
    "name": "British Indian Ocean Territory"
  },
  {
    "objectId": "nvhpnKO5rE",
    "code": "IQ",
    "name": "Iraq"
  },
  {
    "objectId": "wv4OCjRaNi",
    "code": "IR",
    "name": "Iran"
  },
  {
    "objectId": "5VTtzmVSWN",
    "code": "IS",
    "name": "Iceland"
  },
  {
    "objectId": "hOu7Is3jvO",
    "code": "IT",
    "name": "Italy"
  },
  {
    "objectId": "cbmMpY1LjE",
    "code": "JE",
    "name": "Jersey"
  },
  {
    "objectId": "iRCCJGZ3RJ",
    "code": "JM",
    "name": "Jamaica"
  },
  {
    "objectId": "AVGAFwTSFb",
    "code": "JO",
    "name": "Jordan"
  },
  {
    "objectId": "UN9yBtQstI",
    "code": "JP",
    "name": "Japan"
  },
  {
    "objectId": "hWGVevpYaK",
    "code": "KE",
    "name": "Kenya"
  },
  {
    "objectId": "KoZCNHDS5X",
    "code": "KG",
    "name": "Kyrgyzstan"
  },
  {
    "objectId": "EpBnGVkBLF",
    "code": "KH",
    "name": "Cambodia"
  },
  {
    "objectId": "qCcuxOqgkB",
    "code": "KI",
    "name": "Kiribati"
  },
  {
    "objectId": "SJvwuMEme7",
    "code": "KM",
    "name": "Comoros"
  },
  {
    "objectId": "wHnODFxZFO",
    "code": "KN",
    "name": "Saint Kitts and Nevis"
  },
  {
    "objectId": "cbUYyXWdUS",
    "code": "KP",
    "name": "North Korea"
  },
  {
    "objectId": "H27W1K2Jx0",
    "code": "KR",
    "name": "South Korea"
  },
  {
    "objectId": "qlkgJorlNV",
    "code": "KW",
    "name": "Kuwait"
  },
  {
    "objectId": "4lgb4MnCu4",
    "code": "KY",
    "name": "Cayman Islands"
  },
  {
    "objectId": "nRlkwMtWiB",
    "code": "KZ",
    "name": "Kazakhstan"
  },
  {
    "objectId": "eaNpdUY6IC",
    "code": "LA",
    "name": "Laos"
  },
  {
    "objectId": "P2wZxWNxtr",
    "code": "LB",
    "name": "Lebanon"
  },
  {
    "objectId": "GOaMR5GKXm",
    "code": "LC",
    "name": "Saint Lucia"
  },
  {
    "objectId": "f83FzMh6Ty",
    "code": "LI",
    "name": "Liechtenstein"
  },
  {
    "objectId": "9N0Bhm2Ge4",
    "code": "LK",
    "name": "Sri Lanka"
  },
  {
    "objectId": "ZoFyPeNM5E",
    "code": "LR",
    "name": "Liberia"
  },
  {
    "objectId": "fl5yo1HfMR",
    "code": "LS",
    "name": "Lesotho"
  },
  {
    "objectId": "9kbcTFZyKo",
    "code": "LT",
    "name": "Lithuania"
  },
  {
    "objectId": "5LNFOuO2Wh",
    "code": "LU",
    "name": "Luxembourg"
  },
  {
    "objectId": "SRLc1TCwHn",
    "code": "LV",
    "name": "Latvia"
  },
  {
    "objectId": "FgwdDPUXmJ",
    "code": "LY",
    "name": "Libya"
  },
  {
    "objectId": "Smz1hTRSIU",
    "code": "MA",
    "name": "Morocco"
  },
  {
    "objectId": "nE8gX0MFSZ",
    "code": "MC",
    "name": "Monaco"
  },
  {
    "objectId": "bmYANF81hv",
    "code": "MD",
    "name": "Moldova"
  },
  {
    "objectId": "wY0pApCtUt",
    "code": "ME",
    "name": "Montenegro"
  },
  {
    "objectId": "ta7ARILnW0",
    "code": "MF",
    "name": "Saint Martin"
  },
  {
    "objectId": "09fXl7u3FD",
    "code": "MG",
    "name": "Madagascar"
  },
  {
    "objectId": "ZTZhlMFIyJ",
    "code": "MH",
    "name": "Marshall Islands"
  },
  {
    "objectId": "dAH4X1RHQb",
    "code": "MK",
    "name": "North Macedonia"
  },
  {
    "objectId": "jreQzrjZx6",
    "code": "ML",
    "name": "Mali"
  },
  {
    "objectId": "cz9fi68eVU",
    "code": "MM",
    "name": "Myanmar [Burma]"
  },
  {
    "objectId": "76H3yHIo7U",
    "code": "MN",
    "name": "Mongolia"
  },
  {
    "objectId": "larowCNukg",
    "code": "MO",
    "name": "Macao"
  },
  {
    "objectId": "cljDTSxy5A",
    "code": "MP",
    "name": "Northern Mariana Islands"
  },
  {
    "objectId": "zA1OoRvjvL",
    "code": "MQ",
    "name": "Martinique"
  },
  {
    "objectId": "1hYnFHML5d",
    "code": "MR",
    "name": "Mauritania"
  },
  {
    "objectId": "zowYF6xHFj",
    "code": "MS",
    "name": "Montserrat"
  },
  {
    "objectId": "HEXUplP1Se",
    "code": "MT",
    "name": "Malta"
  },
  {
    "objectId": "cxnFBlqeWx",
    "code": "MU",
    "name": "Mauritius"
  },
  {
    "objectId": "ovfuQeRszZ",
    "code": "MV",
    "name": "Maldives"
  },
  {
    "objectId": "clpCIxZu1P",
    "code": "MW",
    "name": "Malawi"
  },
  {
    "objectId": "jbrIeE76hr",
    "code": "MX",
    "name": "Mexico"
  },
  {
    "objectId": "SHOmq2VQlZ",
    "code": "MY",
    "name": "Malaysia"
  },
  {
    "objectId": "9CVfAKT2WO",
    "code": "MZ",
    "name": "Mozambique"
  },
  {
    "objectId": "cJ8QXx4aDG",
    "code": "NA",
    "name": "Namibia"
  },
  {
    "objectId": "7Ewydti2W5",
    "code": "NC",
    "name": "New Caledonia"
  },
  {
    "objectId": "lpk34LaX1T",
    "code": "NE",
    "name": "Niger"
  },
  {
    "objectId": "NHfUsjuEP3",
    "code": "NF",
    "name": "Norfolk Island"
  },
  {
    "objectId": "oqts6mjw76",
    "code": "NG",
    "name": "Nigeria"
  },
  {
    "objectId": "sCGe1vsv7x",
    "code": "NI",
    "name": "Nicaragua"
  },
  {
    "objectId": "9FyUSGZNnf",
    "code": "NL",
    "name": "Netherlands"
  },
  {
    "objectId": "T6MXJLAUjG",
    "code": "NO",
    "name": "Norway"
  },
  {
    "objectId": "uq5oiRuEKm",
    "code": "NP",
    "name": "Nepal"
  },
  {
    "objectId": "dhD7xYDFi6",
    "code": "NR",
    "name": "Nauru"
  },
  {
    "objectId": "QJRUbL4g9z",
    "code": "NU",
    "name": "Niue"
  },
  {
    "objectId": "2vGNu7Yn7D",
    "code": "NZ",
    "name": "New Zealand"
  },
  {
    "objectId": "ta4EmTNWmu",
    "code": "OM",
    "name": "Oman"
  },
  {
    "objectId": "fjNf3u1Mx1",
    "code": "PA",
    "name": "Panama"
  },
  {
    "objectId": "8IhgzPlSIn",
    "code": "PE",
    "name": "Peru"
  },
  {
    "objectId": "Ms1BrT4Gl8",
    "code": "PF",
    "name": "French Polynesia"
  },
  {
    "objectId": "uonlBdxrxQ",
    "code": "PG",
    "name": "Papua New Guinea"
  },
  {
    "objectId": "pmnzGTREty",
    "code": "PH",
    "name": "Philippines"
  },
  {
    "objectId": "YE4pRFqDqA",
    "code": "PK",
    "name": "Pakistan"
  },
  {
    "objectId": "bejQecXKxm",
    "code": "PL",
    "name": "Poland"
  },
  {
    "objectId": "iiFNu3iWEe",
    "code": "PM",
    "name": "Saint Pierre and Miquelon"
  },
  {
    "objectId": "wo6WYeq2XC",
    "code": "PN",
    "name": "Pitcairn Islands"
  },
  {
    "objectId": "Gk9CYF6qoa",
    "code": "PR",
    "name": "Puerto Rico"
  },
  {
    "objectId": "yP5OXMfgmQ",
    "code": "PS",
    "name": "Palestine"
  },
  {
    "objectId": "EZzqrmo1am",
    "code": "PT",
    "name": "Portugal"
  },
  {
    "objectId": "9r4GHFt1Gt",
    "code": "PW",
    "name": "Palau"
  },
  {
    "objectId": "4GJnHdhGyv",
    "code": "PY",
    "name": "Paraguay"
  },
  {
    "objectId": "fadJTpiTZO",
    "code": "QA",
    "name": "Qatar"
  },
  {
    "objectId": "ZRHFFbzHPq",
    "code": "RE",
    "name": "Réunion"
  },
  {
    "objectId": "5QOfVVtfWk",
    "code": "RO",
    "name": "Romania"
  },
  {
    "objectId": "AqY4dkqJok",
    "code": "RS",
    "name": "Serbia"
  },
  {
    "objectId": "vg1c2CxgQ3",
    "code": "RU",
    "name": "Russia"
  },
  {
    "objectId": "vtGcP4T5wj",
    "code": "RW",
    "name": "Rwanda"
  },
  {
    "objectId": "PqGe1JXHMY",
    "code": "SA",
    "name": "Saudi Arabia"
  },
  {
    "objectId": "7LyrWI5wCC",
    "code": "SB",
    "name": "Solomon Islands"
  },
  {
    "objectId": "vRMloHTZn5",
    "code": "SC",
    "name": "Seychelles"
  },
  {
    "objectId": "uPVdFzQ71M",
    "code": "SD",
    "name": "Sudan"
  },
  {
    "objectId": "220UohZbeo",
    "code": "SE",
    "name": "Sweden"
  },
  {
    "objectId": "AnLxFNCcFS",
    "code": "SG",
    "name": "Singapore"
  },
  {
    "objectId": "S4rLvSxvNl",
    "code": "SH",
    "name": "Saint Helena"
  },
  {
    "objectId": "oQQC8mAbuz",
    "code": "SI",
    "name": "Slovenia"
  },
  {
    "objectId": "HmcygKfUvr",
    "code": "SJ",
    "name": "Svalbard and Jan Mayen"
  },
  {
    "objectId": "2PuVugMMXs",
    "code": "SK",
    "name": "Slovakia"
  },
  {
    "objectId": "xzEkRDMtUU",
    "code": "SL",
    "name": "Sierra Leone"
  },
  {
    "objectId": "80T3vlLgy2",
    "code": "SM",
    "name": "San Marino"
  },
  {
    "objectId": "loX389odU1",
    "code": "SN",
    "name": "Senegal"
  },
  {
    "objectId": "0ncikAUv2i",
    "code": "SO",
    "name": "Somalia"
  },
  {
    "objectId": "iNVlDu9rb9",
    "code": "SR",
    "name": "Suriname"
  },
  {
    "objectId": "ICkEMQPTMM",
    "code": "SS",
    "name": "South Sudan"
  },
  {
    "objectId": "0fiEmgrqKa",
    "code": "ST",
    "name": "São Tomé and Príncipe"
  },
  {
    "objectId": "neXLLQcOcE",
    "code": "SV",
    "name": "El Salvador"
  },
  {
    "objectId": "nc6YPq9LzZ",
    "code": "SX",
    "name": "Sint Maarten"
  },
  {
    "objectId": "aCjqJX3che",
    "code": "SY",
    "name": "Syria"
  },
  {
    "objectId": "uVLeKcyCeh",
    "code": "SZ",
    "name": "Swaziland"
  },
  {
    "objectId": "bzZECrPB6P",
    "code": "TC",
    "name": "Turks and Caicos Islands"
  },
  {
    "objectId": "8lQ5LYAawJ",
    "code": "TD",
    "name": "Chad"
  },
  {
    "objectId": "9yGMMYfLDC",
    "code": "TF",
    "name": "French Southern Territories"
  },
  {
    "objectId": "LlF4qcKuXw",
    "code": "TG",
    "name": "Togo"
  },
  {
    "objectId": "k2lukc4AyV",
    "code": "TH",
    "name": "Thailand"
  },
  {
    "objectId": "temdDhXHMy",
    "code": "TJ",
    "name": "Tajikistan"
  },
  {
    "objectId": "xxYK5gIxUh",
    "code": "TK",
    "name": "Tokelau"
  },
  {
    "objectId": "uy6B519CzE",
    "code": "TL",
    "name": "East Timor"
  },
  {
    "objectId": "qURMHRB5Bh",
    "code": "TM",
    "name": "Turkmenistan"
  },
  {
    "objectId": "6FCCfIIcf0",
    "code": "TN",
    "name": "Tunisia"
  },
  {
    "objectId": "jYnYAs4gVv",
    "code": "TO",
    "name": "Tonga"
  },
  {
    "objectId": "r1dBFhG3I7",
    "code": "TR",
    "name": "Turkey"
  },
  {
    "objectId": "CseuLCM1Du",
    "code": "TT",
    "name": "Trinidad and Tobago"
  },
  {
    "objectId": "R9v6O9hXN8",
    "code": "TV",
    "name": "Tuvalu"
  },
  {
    "objectId": "UnNh8r7cvJ",
    "code": "TW",
    "name": "Taiwan"
  },
  {
    "objectId": "UIOtsTw0oX",
    "code": "TZ",
    "name": "Tanzania"
  },
  {
    "objectId": "CzhIuuHOMH",
    "code": "UA",
    "name": "Ukraine"
  },
  {
    "objectId": "VrjHD4Le7A",
    "code": "UG",
    "name": "Uganda"
  },
  {
    "objectId": "9noh09Cgce",
    "code": "UM",
    "name": "U.S. Minor Outlying Islands"
  },
  {
    "objectId": "BXkZTl2omc",
    "code": "US",
    "name": "United States"
  },
  {
    "objectId": "R0GyWd9YXw",
    "code": "UY",
    "name": "Uruguay"
  },
  {
    "objectId": "E4wHs4HoxE",
    "code": "UZ",
    "name": "Uzbekistan"
  },
  {
    "objectId": "HkXpCV8aEI",
    "code": "VA",
    "name": "Vatican City"
  },
  {
    "objectId": "SaCgGB3Wn9",
    "code": "VC",
    "name": "Saint Vincent and the Grenadines"
  },
  {
    "objectId": "RJHFlkiRRU",
    "code": "VE",
    "name": "Venezuela"
  },
  {
    "objectId": "mNiifJ3CK4",
    "code": "VG",
    "name": "British Virgin Islands"
  },
  {
    "objectId": "qMGd0YmE4G",
    "code": "VI",
    "name": "U.S. Virgin Islands"
  },
  {
    "objectId": "MFNxWtOZIm",
    "code": "VN",
    "name": "Vietnam"
  },
  {
    "objectId": "z3FhnVKZEk",
    "code": "VU",
    "name": "Vanuatu"
  },
  {
    "objectId": "t6iLvc2Vki",
    "code": "WF",
    "name": "Wallis and Futuna"
  },
  {
    "objectId": "FgCSmJ0kEH",
    "code": "WS",
    "name": "Samoa"
  },
  {
    "objectId": "IAwJVS7NjJ",
    "code": "XK",
    "name": "Kosovo"
  },
  {
    "objectId": "9tt1nNL4xu",
    "code": "YE",
    "name": "Yemen"
  },
  {
    "objectId": "987PhBD5EQ",
    "code": "YT",
    "name": "Mayotte"
  },
  {
    "objectId": "LQBwxAvUsE",
    "code": "ZA",
    "name": "South Africa"
  },
  {
    "objectId": "Hf8Po3Jb1p",
    "code": "ZM",
    "name": "Zambia"
  },
  {
    "objectId": "hvaqvemFp8",
    "code": "ZW",
    "name": "Zimbabwe"
  }
];

module.exports = countries;