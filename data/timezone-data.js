const timezones = [
  ['Pacific/Niue', 'NU', 'Niue', 'Oceania'],
  ['Pacific/Midway', 'UM', 'United States Minor Outlying Islands', 'Oceania'],
  ['Pacific/Pago_Pago', 'AS', 'American Samoa', 'Oceania'],
  ['Pacific/Rarotonga', 'CK', 'Cook Islands', 'Oceania'],
  ['America/Adak', 'US', 'United States', 'North America'],
  ['Pacific/Honolulu', 'US', 'United States', 'North America'],
  ['Pacific/Tahiti', 'PF', 'French Polynesia', 'Oceania'],
  ['Pacific/Marquesas', 'PF', 'French Polynesia', 'Oceania'],
  ['America/Anchorage', 'US', 'United States', 'North America'],
  ['Pacific/Gambier', 'PF', 'French Polynesia', 'Oceania'],
  ['America/Los_Angeles', 'US', 'United States', 'North America'],
  ['America/Tijuana', 'MX', 'Mexico', 'North America'],
  ['America/Vancouver', 'CA', 'Canada', 'North America'],
  ['Pacific/Pitcairn', 'PN', 'Pitcairn', 'Oceania'],
  ['America/Hermosillo', 'MX', 'Mexico', 'North America'],
  ['America/Edmonton', 'CA', 'Canada', 'North America'],
  ['America/Ciudad_Juarez', 'MX', 'Mexico', 'North America'],
  ['America/Denver', 'US', 'United States', 'North America'],
  ['America/Phoenix', 'US', 'United States', 'North America'],
  ['America/Whitehorse', 'CA', 'Canada', 'North America'],
  ['America/Belize', 'BZ', 'Belize', 'North America'],
  ['America/Chicago', 'US', 'United States', 'North America'],
  ['America/Guatemala', 'GT', 'Guatemala', 'North America'],
  ['America/Managua', 'NI', 'Nicaragua', 'North America'],
  ['America/Mexico_City', 'MX', 'Mexico', 'North America'],
  ['America/Matamoros', 'MX', 'Mexico', 'North America'],
  ['America/Costa_Rica', 'CR', 'Costa Rica', 'North America'],
  ['America/El_Salvador', 'SV', 'El Salvador', 'North America'],
  ['America/Regina', 'CA', 'Canada', 'North America'],
  ['America/Tegucigalpa', 'HN', 'Honduras', 'North America'],
  ['America/Winnipeg', 'CA', 'Canada', 'North America'],
  ['Pacific/Easter', 'CL', 'Chile', 'South America'],
  ['Pacific/Galapagos', 'EC', 'Ecuador', 'South America'],
  ['America/Rio_Branco', 'BR', 'Brazil', 'South America'],
  ['America/Bogota', 'CO', 'Colombia', 'South America'],
  ['America/Havana', 'CU', 'Cuba', 'North America'],
  ['America/Atikokan', 'CA', 'Canada', 'North America'],
  ['America/Cancun', 'MX', 'Mexico', 'North America'],
  ['America/Grand_Turk', 'TC', 'Turks and Caicos Islands', 'North America'],
  ['America/Cayman', 'KY', 'Cayman Islands', 'North America'],
  ['America/Jamaica', 'JM', 'Jamaica', 'North America'],
  ['America/Nassau', 'BS', 'Bahamas', 'North America'],
  ['America/New_York', 'US', 'United States', 'North America'],
  ['America/Panama', 'PA', 'Panama', 'North America'],
  ['America/Port-au-Prince', 'HT', 'Haiti', 'North America'],
  ['America/Toronto', 'CA', 'Canada', 'North America'],
  ['America/Guayaquil', 'EC', 'Ecuador', 'South America'],
  ['America/Lima', 'PE', 'Peru', 'South America'],
  ['America/Manaus', 'BR', 'Brazil', 'South America'],
  ['America/St_Kitts', 'KN', 'Saint Kitts and Nevis', 'North America'],
  ['America/Blanc-Sablon', 'CA', 'Canada', 'North America'],
  ['America/Montserrat', 'MS', 'Montserrat', 'North America'],
  ['America/Barbados', 'BB', 'Barbados', 'North America'],
  ['America/Port_of_Spain', 'TT', 'Trinidad and Tobago', 'North America'],
  ['America/Martinique', 'MQ', 'Martinique', 'North America'],
  ['America/St_Lucia', 'LC', 'Saint Lucia', 'North America'],
  ['America/St_Barthelemy', 'BL', 'Saint Barthelemy', 'North America'],
  ['America/Halifax', 'CA', 'Canada', 'North America'],
  ['Atlantic/Bermuda', 'BM', 'Bermuda', 'North America'],
  [
    'America/St_Vincent',
    'VC',
    'Saint Vincent and the Grenadines',
    'North America'
  ],
  [
    'America/Kralendijk',
    'BQ',
    'Bonaire, Saint Eustatius and Saba ',
    'North America'
  ],
  ['America/Guadeloupe', 'GP', 'Guadeloupe', 'North America'],
  ['America/Marigot', 'MF', 'Saint Martin', 'North America'],
  ['America/Aruba', 'AW', 'Aruba', 'North America'],
  ['America/Lower_Princes', 'SX', 'Sint Maarten', 'North America'],
  ['America/Tortola', 'VG', 'British Virgin Islands', 'North America'],
  ['America/Dominica', 'DM', 'Dominica', 'North America'],
  ['America/St_Thomas', 'VI', 'U.S. Virgin Islands', 'North America'],
  ['America/Grenada', 'GD', 'Grenada', 'North America'],
  ['America/Antigua', 'AG', 'Antigua and Barbuda', 'North America'],
  ['America/Puerto_Rico', 'PR', 'Puerto Rico', 'North America'],
  ['America/Santo_Domingo', 'DO', 'Dominican Republic', 'North America'],
  ['America/Anguilla', 'AI', 'Anguilla', 'North America'],
  ['America/Thule', 'GL', 'Greenland', 'North America'],
  ['America/Curacao', 'CW', 'Curacao', 'North America'],
  ['America/La_Paz', 'BO', 'Bolivia', 'South America'],
  ['America/Santiago', 'CL', 'Chile', 'South America'],
  ['America/Guyana', 'GY', 'Guyana', 'South America'],
  ['America/Caracas', 'VE', 'Venezuela', 'South America'],
  ['America/St_Johns', 'CA', 'Canada', 'North America'],
  ['America/Argentina/Buenos_Aires', 'AR', 'Argentina', 'South America'],
  ['America/Sao_Paulo', 'BR', 'Brazil', 'South America'],
  ['Antarctica/Palmer', 'AQ', 'Antarctica', 'Antarctica'],
  ['America/Punta_Arenas', 'CL', 'Chile', 'South America'],
  ['Atlantic/Stanley', 'FK', 'Falkland Islands', 'South America'],
  ['America/Cayenne', 'GF', 'French Guiana', 'South America'],
  ['America/Asuncion', 'PY', 'Paraguay', 'South America'],
  ['America/Miquelon', 'PM', 'Saint Pierre and Miquelon', 'North America'],
  ['America/Paramaribo', 'SR', 'Suriname', 'South America'],
  ['America/Montevideo', 'UY', 'Uruguay', 'South America'],
  ['America/Nuuk', 'GL', 'Greenland', 'North America'],
  ['America/Noronha', 'BR', 'Brazil', 'South America'],
  [
    'Atlantic/South_Georgia',
    'GS',
    'South Georgia and the South Sandwich Islands',
    'Antarctica'
  ],
  ['Atlantic/Azores', 'PT', 'Portugal', 'Europe'],
  ['Atlantic/Cape_Verde', 'CV', 'Cabo Verde', 'Africa'],
  ['Africa/Abidjan', 'CI', 'Ivory Coast', 'Africa'],
  ['Africa/Bamako', 'ML', 'Mali', 'Africa'],
  ['Africa/Bissau', 'GW', 'Guinea-Bissau', 'Africa'],
  ['Africa/Conakry', 'GN', 'Guinea', 'Africa'],
  ['Africa/Dakar', 'SN', 'Senegal', 'Africa'],
  ['America/Danmarkshavn', 'GL', 'Greenland', 'North America'],
  ['Europe/Isle_of_Man', 'IM', 'Isle of Man', 'Europe'],
  ['Europe/Dublin', 'IE', 'Ireland', 'Europe'],
  ['Africa/Freetown', 'SL', 'Sierra Leone', 'Africa'],
  ['Atlantic/St_Helena', 'SH', 'Saint Helena', 'Africa'],
  ['Africa/Accra', 'GH', 'Ghana', 'Africa'],
  ['Africa/Lome', 'TG', 'Togo', 'Africa'],
  ['Europe/London', 'GB', 'United Kingdom', 'Europe'],
  ['Africa/Monrovia', 'LR', 'Liberia', 'Africa'],
  ['Africa/Nouakchott', 'MR', 'Mauritania', 'Africa'],
  ['Africa/Ouagadougou', 'BF', 'Burkina Faso', 'Africa'],
  ['Atlantic/Reykjavik', 'IS', 'Iceland', 'Europe'],
  ['Europe/Jersey', 'JE', 'Jersey', 'Europe'],
  ['Europe/Guernsey', 'GG', 'Guernsey', 'Europe'],
  ['Africa/Banjul', 'GM', 'Gambia', 'Africa'],
  ['Africa/Sao_Tome', 'ST', 'Sao Tome and Principe', 'Africa'],
  ['Antarctica/Troll', 'AQ', 'Antarctica', 'Antarctica'],
  ['Africa/Casablanca', 'MA', 'Morocco', 'Africa'],
  ['Africa/El_Aaiun', 'EH', 'Western Sahara', 'Africa'],
  ['Atlantic/Canary', 'ES', 'Spain', 'Europe'],
  ['Europe/Lisbon', 'PT', 'Portugal', 'Europe'],
  ['Atlantic/Faroe', 'FO', 'Faroe Islands', 'Europe'],
  ['Africa/Windhoek', 'NA', 'Namibia', 'Africa'],
  ['Africa/Algiers', 'DZ', 'Algeria', 'Africa'],
  ['Europe/Amsterdam', 'NL', 'The Netherlands', 'Europe'],
  ['Europe/Andorra', 'AD', 'Andorra', 'Europe'],
  ['Europe/Belgrade', 'RS', 'Serbia', 'Europe'],
  ['Europe/Berlin', 'DE', 'Germany', 'Europe'],
  ['Europe/Bratislava', 'SK', 'Slovakia', 'Europe'],
  ['Europe/Brussels', 'BE', 'Belgium', 'Europe'],
  ['Europe/Budapest', 'HU', 'Hungary', 'Europe'],
  ['Europe/Copenhagen', 'DK', 'Denmark', 'Europe'],
  ['Europe/Gibraltar', 'GI', 'Gibraltar', 'Europe'],
  ['Europe/Ljubljana', 'SI', 'Slovenia', 'Europe'],
  ['Arctic/Longyearbyen', 'SJ', 'Svalbard and Jan Mayen', 'Europe'],
  ['Europe/Luxembourg', 'LU', 'Luxembourg', 'Europe'],
  ['Europe/Madrid', 'ES', 'Spain', 'Europe'],
  ['Europe/Monaco', 'MC', 'Monaco', 'Europe'],
  ['Europe/Oslo', 'NO', 'Norway', 'Europe'],
  ['Europe/Paris', 'FR', 'France', 'Europe'],
  ['Europe/Podgorica', 'ME', 'Montenegro', 'Europe'],
  ['Europe/Prague', 'CZ', 'Czechia', 'Europe'],
  ['Europe/Rome', 'IT', 'Italy', 'Europe'],
  ['Europe/San_Marino', 'SM', 'San Marino', 'Europe'],
  ['Europe/Malta', 'MT', 'Malta', 'Europe'],
  ['Europe/Sarajevo', 'BA', 'Bosnia and Herzegovina', 'Europe'],
  ['Europe/Skopje', 'MK', 'North Macedonia', 'Europe'],
  ['Europe/Stockholm', 'SE', 'Sweden', 'Europe'],
  ['Europe/Tirane', 'AL', 'Albania', 'Europe'],
  ['Africa/Tunis', 'TN', 'Tunisia', 'Africa'],
  ['Europe/Vaduz', 'LI', 'Liechtenstein', 'Europe'],
  ['Europe/Vatican', 'VA', 'Vatican', 'Europe'],
  ['Europe/Vienna', 'AT', 'Austria', 'Europe'],
  ['Europe/Warsaw', 'PL', 'Poland', 'Europe'],
  ['Europe/Zagreb', 'HR', 'Croatia', 'Europe'],
  ['Europe/Zurich', 'CH', 'Switzerland', 'Europe'],
  ['Africa/Bangui', 'CF', 'Central African Republic', 'Africa'],
  ['Africa/Malabo', 'GQ', 'Equatorial Guinea', 'Africa'],
  ['Africa/Brazzaville', 'CG', 'Republic of the Congo', 'Africa'],
  ['Africa/Porto-Novo', 'BJ', 'Benin', 'Africa'],
  ['Africa/Douala', 'CM', 'Cameroon', 'Africa'],
  ['Africa/Kinshasa', 'CD', 'Democratic Republic of the Congo', 'Africa'],
  ['Africa/Lagos', 'NG', 'Nigeria', 'Africa'],
  ['Africa/Libreville', 'GA', 'Gabon', 'Africa'],
  ['Africa/Luanda', 'AO', 'Angola', 'Africa'],
  ['Africa/Ndjamena', 'TD', 'Chad', 'Africa'],
  ['Africa/Niamey', 'NE', 'Niger', 'Africa'],
  ['Africa/Bujumbura', 'BI', 'Burundi', 'Africa'],
  ['Africa/Gaborone', 'BW', 'Botswana', 'Africa'],
  ['Africa/Harare', 'ZW', 'Zimbabwe', 'Africa'],
  ['Africa/Juba', 'SS', 'South Sudan', 'Africa'],
  ['Africa/Khartoum', 'SD', 'Sudan', 'Africa'],
  ['Africa/Kigali', 'RW', 'Rwanda', 'Africa'],
  ['Africa/Blantyre', 'MW', 'Malawi', 'Africa'],
  ['Africa/Lubumbashi', 'CD', 'Democratic Republic of the Congo', 'Africa'],
  ['Africa/Lusaka', 'ZM', 'Zambia', 'Africa'],
  ['Africa/Maputo', 'MZ', 'Mozambique', 'Africa'],
  ['Europe/Athens', 'GR', 'Greece', 'Europe'],
  ['Asia/Beirut', 'LB', 'Lebanon', 'Asia'],
  ['Europe/Bucharest', 'RO', 'Romania', 'Europe'],
  ['Africa/Cairo', 'EG', 'Egypt', 'Africa'],
  ['Europe/Chisinau', 'MD', 'Moldova', 'Europe'],
  ['Asia/Hebron', 'PS', 'Palestinian Territory', 'Asia'],
  ['Europe/Helsinki', 'FI', 'Finland', 'Europe'],
  ['Europe/Kaliningrad', 'RU', 'Russia', 'Europe'],
  ['Europe/Kyiv', 'UA', 'Ukraine', 'Europe'],
  ['Europe/Mariehamn', 'AX', 'Aland Islands', 'Europe'],
  ['Asia/Nicosia', 'CY', 'Cyprus', 'Europe'],
  ['Europe/Riga', 'LV', 'Latvia', 'Europe'],
  ['Europe/Sofia', 'BG', 'Bulgaria', 'Europe'],
  ['Europe/Tallinn', 'EE', 'Estonia', 'Europe'],
  ['Africa/Tripoli', 'LY', 'Libya', 'Africa'],
  ['Europe/Vilnius', 'LT', 'Lithuania', 'Europe'],
  ['Asia/Jerusalem', 'IL', 'Israel', 'Asia'],
  ['Africa/Johannesburg', 'ZA', 'South Africa', 'Africa'],
  ['Africa/Mbabane', 'SZ', 'Eswatini', 'Africa'],
  ['Africa/Maseru', 'LS', 'Lesotho', 'Africa'],
  ['Asia/Kuwait', 'KW', 'Kuwait', 'Asia'],
  ['Asia/Bahrain', 'BH', 'Bahrain', 'Asia'],
  ['Asia/Baghdad', 'IQ', 'Iraq', 'Asia'],
  ['Asia/Qatar', 'QA', 'Qatar', 'Asia'],
  ['Asia/Riyadh', 'SA', 'Saudi Arabia', 'Asia'],
  ['Asia/Aden', 'YE', 'Yemen', 'Asia'],
  ['Asia/Amman', 'JO', 'Jordan', 'Asia'],
  ['Asia/Damascus', 'SY', 'Syria', 'Asia'],
  ['Africa/Addis_Ababa', 'ET', 'Ethiopia', 'Africa'],
  ['Indian/Antananarivo', 'MG', 'Madagascar', 'Africa'],
  ['Africa/Asmara', 'ER', 'Eritrea', 'Africa'],
  ['Africa/Dar_es_Salaam', 'TZ', 'Tanzania', 'Africa'],
  ['Africa/Djibouti', 'DJ', 'Djibouti', 'Africa'],
  ['Africa/Kampala', 'UG', 'Uganda', 'Africa'],
  ['Indian/Mayotte', 'YT', 'Mayotte', 'Africa'],
  ['Africa/Mogadishu', 'SO', 'Somalia', 'Africa'],
  ['Indian/Comoro', 'KM', 'Comoros', 'Africa'],
  ['Africa/Nairobi', 'KE', 'Kenya', 'Africa'],
  ['Europe/Minsk', 'BY', 'Belarus', 'Europe'],
  ['Europe/Moscow', 'RU', 'Russia', 'Europe'],
  ['Europe/Simferopol', 'UA', 'Ukraine', 'Europe'],
  ['Antarctica/Syowa', 'AQ', 'Antarctica', 'Antarctica'],
  ['Europe/Istanbul', 'TR', 'Turkey', 'Asia'],
  ['Asia/Tehran', 'IR', 'Iran', 'Asia'],
  ['Asia/Yerevan', 'AM', 'Armenia', 'Asia'],
  ['Asia/Baku', 'AZ', 'Azerbaijan', 'Asia'],
  ['Asia/Tbilisi', 'GE', 'Georgia', 'Asia'],
  ['Asia/Dubai', 'AE', 'United Arab Emirates', 'Asia'],
  ['Asia/Muscat', 'OM', 'Oman', 'Asia'],
  ['Indian/Mauritius', 'MU', 'Mauritius', 'Africa'],
  ['Indian/Reunion', 'RE', 'Reunion', 'Africa'],
  ['Europe/Samara', 'RU', 'Russia', 'Europe'],
  ['Indian/Mahe', 'SC', 'Seychelles', 'Africa'],
  ['Asia/Kabul', 'AF', 'Afghanistan', 'Asia'],
  ['Indian/Kerguelen', 'TF', 'French Southern Territories', 'Antarctica'],
  ['Indian/Maldives', 'MV', 'Maldives', 'Asia'],
  ['Antarctica/Mawson', 'AQ', 'Antarctica', 'Antarctica'],
  ['Asia/Karachi', 'PK', 'Pakistan', 'Asia'],
  ['Asia/Dushanbe', 'TJ', 'Tajikistan', 'Asia'],
  ['Asia/Ashgabat', 'TM', 'Turkmenistan', 'Asia'],
  ['Asia/Tashkent', 'UZ', 'Uzbekistan', 'Asia'],
  ['Asia/Almaty', 'KZ', 'Kazakhstan', 'Asia'],
  ['Asia/Yekaterinburg', 'RU', 'Russia', 'Europe'],
  ['Asia/Colombo', 'LK', 'Sri Lanka', 'Asia'],
  ['Asia/Kolkata', 'IN', 'India', 'Asia'],
  ['Asia/Kathmandu', 'NP', 'Nepal', 'Asia'],
  ['Asia/Dhaka', 'BD', 'Bangladesh', 'Asia'],
  ['Asia/Thimphu', 'BT', 'Bhutan', 'Asia'],
  ['Asia/Urumqi', 'CN', 'China', 'Asia'],
  ['Indian/Chagos', 'IO', 'British Indian Ocean Territory', 'Asia'],
  ['Asia/Bishkek', 'KG', 'Kyrgyzstan', 'Asia'],
  ['Asia/Omsk', 'RU', 'Russia', 'Europe'],
  ['Indian/Cocos', 'CC', 'Cocos Islands', 'Asia'],
  ['Asia/Yangon', 'MM', 'Myanmar', 'Asia'],
  ['Indian/Christmas', 'CX', 'Christmas Island', 'Oceania'],
  ['Antarctica/Davis', 'AQ', 'Antarctica', 'Antarctica'],
  ['Asia/Hovd', 'MN', 'Mongolia', 'Asia'],
  ['Asia/Bangkok', 'TH', 'Thailand', 'Asia'],
  ['Asia/Ho_Chi_Minh', 'VN', 'Vietnam', 'Asia'],
  ['Asia/Phnom_Penh', 'KH', 'Cambodia', 'Asia'],
  ['Asia/Vientiane', 'LA', 'Laos', 'Asia'],
  ['Asia/Novosibirsk', 'RU', 'Russia', 'Europe'],
  ['Asia/Jakarta', 'ID', 'Indonesia', 'Asia'],
  ['Antarctica/Casey', 'AQ', 'Antarctica', 'Antarctica'],
  ['Australia/Perth', 'AU', 'Australia', 'Oceania'],
  ['Asia/Brunei', 'BN', 'Brunei', 'Asia'],
  ['Asia/Makassar', 'ID', 'Indonesia', 'Asia'],
  ['Asia/Macau', 'MO', 'Macao', 'Asia'],
  ['Asia/Shanghai', 'CN', 'China', 'Asia'],
  ['Asia/Hong_Kong', 'HK', 'Hong Kong', 'Asia'],
  ['Asia/Irkutsk', 'RU', 'Russia', 'Europe'],
  ['Asia/Kuala_Lumpur', 'MY', 'Malaysia', 'Asia'],
  ['Asia/Manila', 'PH', 'Philippines', 'Asia'],
  ['Asia/Singapore', 'SG', 'Singapore', 'Asia'],
  ['Asia/Taipei', 'TW', 'Taiwan', 'Asia'],
  ['Asia/Ulaanbaatar', 'MN', 'Mongolia', 'Asia'],
  ['Australia/Eucla', 'AU', 'Australia', 'Oceania'],
  ['Asia/Dili', 'TL', 'Timor Leste', 'Oceania'],
  ['Asia/Jayapura', 'ID', 'Indonesia', 'Asia'],
  ['Asia/Tokyo', 'JP', 'Japan', 'Asia'],
  ['Asia/Pyongyang', 'KP', 'North Korea', 'Asia'],
  ['Asia/Seoul', 'KR', 'South Korea', 'Asia'],
  ['Pacific/Palau', 'PW', 'Palau', 'Oceania'],
  ['Asia/Chita', 'RU', 'Russia', 'Europe'],
  ['Australia/Adelaide', 'AU', 'Australia', 'Oceania'],
  ['Australia/Darwin', 'AU', 'Australia', 'Oceania'],
  ['Australia/Brisbane', 'AU', 'Australia', 'Oceania'],
  ['Australia/Sydney', 'AU', 'Australia', 'Oceania'],
  ['Pacific/Guam', 'GU', 'Guam', 'Oceania'],
  ['Pacific/Saipan', 'MP', 'Northern Mariana Islands', 'Oceania'],
  ['Pacific/Chuuk', 'FM', 'Micronesia', 'Oceania'],
  ['Antarctica/DumontDUrville', 'AQ', 'Antarctica', 'Antarctica'],
  ['Pacific/Port_Moresby', 'PG', 'Papua New Guinea', 'Oceania'],
  ['Asia/Vladivostok', 'RU', 'Russia', 'Europe'],
  ['Australia/Lord_Howe', 'AU', 'Australia', 'Oceania'],
  ['Pacific/Bougainville', 'PG', 'Papua New Guinea', 'Oceania'],
  ['Pacific/Kosrae', 'FM', 'Micronesia', 'Oceania'],
  ['Pacific/Noumea', 'NC', 'New Caledonia', 'Oceania'],
  ['Pacific/Norfolk', 'NF', 'Norfolk Island', 'Oceania'],
  ['Asia/Sakhalin', 'RU', 'Russia', 'Europe'],
  ['Pacific/Guadalcanal', 'SB', 'Solomon Islands', 'Oceania'],
  ['Pacific/Efate', 'VU', 'Vanuatu', 'Oceania'],
  ['Pacific/Fiji', 'FJ', 'Fiji', 'Oceania'],
  ['Pacific/Tarawa', 'KI', 'Kiribati', 'Oceania'],
  ['Pacific/Majuro', 'MH', 'Marshall Islands', 'Oceania'],
  ['Pacific/Nauru', 'NR', 'Nauru', 'Oceania'],
  ['Pacific/Auckland', 'NZ', 'New Zealand', 'Oceania'],
  ['Antarctica/McMurdo', 'AQ', 'Antarctica', 'Antarctica'],
  ['Asia/Kamchatka', 'RU', 'Russia', 'Europe'],
  ['Pacific/Funafuti', 'TV', 'Tuvalu', 'Oceania'],
  ['Pacific/Wake', 'UM', 'United States Minor Outlying Islands', 'Oceania'],
  ['Pacific/Wallis', 'WF', 'Wallis and Futuna', 'Oceania'],
  ['Pacific/Chatham', 'NZ', 'New Zealand', 'Oceania'],
  ['Pacific/Apia', 'WS', 'Samoa', 'Oceania'],
  ['Pacific/Kanton', 'KI', 'Kiribati', 'Oceania'],
  ['Pacific/Fakaofo', 'TK', 'Tokelau', 'Oceania'],
  ['Pacific/Tongatapu', 'TO', 'Tonga', 'Oceania'],
  ['Pacific/Kiritimati', 'KI', 'Kiribati', 'Oceania']
]

export default timezones
