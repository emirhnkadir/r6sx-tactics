// ===== R6S DATA =====
const R6S_MAPS = [
    'Bank', 'Border', 'Chalet', 'Clubhouse', 'Coastline', 'Consulate',
    'Emerald Plains', 'Kafe Dostoyevsky', 'Kanal', 'Lair', 'Nighthaven Labs',
    'Oregon', 'Outback', 'Skyscraper', 'Theme Park', 'Villa'
];

const R6S_OPERATORS = {
    defenders: [
        'Alibi', 'Aruni', 'Azami', 'Bandit', 'Castle', 'Caveira', 'Clash',
        'Doc', 'Echo', 'Ela', 'Fenrir', 'Frost', 'Goyo', 'Jäger', 'Kaid',
        'Kapkan', 'Lesion', 'Maestro', 'Melusi', 'Mira', 'Mozzie', 'Mute',
        'Oryx', 'Pulse', 'Rook', 'Smoke', 'Tachanka', 'Thorn', 'Thunderbird',
        'Tubarão', 'Valkyrie', 'Vigil', 'Wamai', 'Warden', 'Denari', 'Skopos'
    ],
    attackers: [
        'Ace', 'Amaru', 'Ash', 'Blackbeard', 'Blitz', 'Buck', 'Capitão',
        'Dokkaebi', 'Finka', 'Flores', 'Fuze', 'Glaz', 'Gridlock', 'Grim',
        'Hibana', 'IQ', 'Iana', 'Jackal', 'Kali', 'Lion', 'Maverick',
        'Montagne', 'Nokk', 'Nomad', 'Osa', 'Ram', 'Sledge', 'Striker',
        'Thatcher', 'Thermite', 'Twitch', 'Zero', 'Zofia', 'Brava', 'Sens'
    ]
};

const R6S_CATEGORIES = [
    'Setup', 'Trick', 'Anchor', 'Roam', 'Pixel Peek', 'C4/Nitro',
    'Camera Spots', 'Utility', 'Spawn Peek', 'Claymore Trick',
    'Impact Grenade Trick', 'Grenade Trick', 'Thermite Trick', 'Zero Cam Trick',
    'Duo Attack', 'Grenade Lineup'
];

const R6S_FLOORS = ['B', '1F', '2F', '3F', 'ANY'];
const R6S_ROLES = ['Defender', 'Attacker'];

// Operator icon URLs — using r6operators CDN for reliable badge images
const ICON_BASE = 'https://r6operators.marcopixel.eu/icons/png/';

const OPERATOR_ICONS = {
    // Defenders
    'Alibi': ICON_BASE + 'alibi.png',
    'Aruni': ICON_BASE + 'aruni.png',
    'Azami': ICON_BASE + 'azami.png',
    'Bandit': ICON_BASE + 'bandit.png',
    'Castle': ICON_BASE + 'castle.png',
    'Caveira': ICON_BASE + 'caveira.png',
    'Clash': ICON_BASE + 'clash.png',
    'Doc': ICON_BASE + 'doc.png',
    'Echo': ICON_BASE + 'echo.png',
    'Ela': ICON_BASE + 'ela.png',
    'Fenrir': ICON_BASE + 'fenrir.png',
    'Frost': ICON_BASE + 'frost.png',
    'Goyo': ICON_BASE + 'goyo.png',
    'Jäger': ICON_BASE + 'jager.png',
    'Kaid': ICON_BASE + 'kaid.png',
    'Kapkan': ICON_BASE + 'kapkan.png',
    'Lesion': ICON_BASE + 'lesion.png',
    'Maestro': ICON_BASE + 'maestro.png',
    'Melusi': ICON_BASE + 'melusi.png',
    'Mira': ICON_BASE + 'mira.png',
    'Mozzie': ICON_BASE + 'mozzie.png',
    'Mute': ICON_BASE + 'mute.png',
    'Oryx': ICON_BASE + 'oryx.png',
    'Pulse': ICON_BASE + 'pulse.png',
    'Rook': ICON_BASE + 'rook.png',
    'Smoke': ICON_BASE + 'smoke.png',
    'Tachanka': ICON_BASE + 'tachanka.png',
    'Thorn': ICON_BASE + 'thorn.png',
    'Thunderbird': ICON_BASE + 'thunderbird.png',
    'Tubarão': ICON_BASE + 'tubarao.png',
    'Valkyrie': ICON_BASE + 'valkyrie.png',
    'Vigil': ICON_BASE + 'vigil.png',
    'Wamai': ICON_BASE + 'wamai.png',
    'Warden': ICON_BASE + 'warden.png',
    'Denari': 'https://static.wikia.nocookie.net/rainbowsix/images/8/8d/DENARI_ICON_HIGH_RES.png',
    'Skopos': 'https://static.wikia.nocookie.net/rainbowsix/images/a/a7/Skopos_Icon.png',
    'Solis': 'https://static.wikia.nocookie.net/rainbowsix/images/9/9a/Solis_Icon.png',
    // Attackers
    'Ace': ICON_BASE + 'ace.png',
    'Amaru': ICON_BASE + 'amaru.png',
    'Ash': ICON_BASE + 'ash.png',
    'Blackbeard': ICON_BASE + 'blackbeard.png',
    'Blitz': ICON_BASE + 'blitz.png',
    'Buck': ICON_BASE + 'buck.png',
    'Capitão': ICON_BASE + 'capitao.png',
    'Dokkaebi': ICON_BASE + 'dokkaebi.png',
    'Finka': ICON_BASE + 'finka.png',
    'Flores': ICON_BASE + 'flores.png',
    'Fuze': ICON_BASE + 'fuze.png',
    'Glaz': ICON_BASE + 'glaz.png',
    'Gridlock': ICON_BASE + 'gridlock.png',
    'Grim': ICON_BASE + 'grim.png',
    'Hibana': ICON_BASE + 'hibana.png',
    'IQ': ICON_BASE + 'iq.png',
    'Iana': ICON_BASE + 'iana.png',
    'Jackal': ICON_BASE + 'jackal.png',
    'Kali': ICON_BASE + 'kali.png',
    'Lion': ICON_BASE + 'lion.png',
    'Maverick': ICON_BASE + 'maverick.png',
    'Montagne': ICON_BASE + 'montagne.png',
    'Nokk': ICON_BASE + 'nokk.png',
    'Nomad': ICON_BASE + 'nomad.png',
    'Osa': ICON_BASE + 'osa.png',
    'Ram': ICON_BASE + 'ram.png',
    'Sledge': ICON_BASE + 'sledge.png',
    'Striker': ICON_BASE + 'striker.png',
    'Thatcher': ICON_BASE + 'thatcher.png',
    'Thermite': ICON_BASE + 'thermite.png',
    'Twitch': ICON_BASE + 'twitch.png',
    'Zero': ICON_BASE + 'zero.png',
    'Zofia': ICON_BASE + 'zofia.png',
    'Brava': ICON_BASE + 'brava.png',
    'Sens': ICON_BASE + 'sens.png',
};

// Default R6S logo for "ANY" or unknown operators
const DEFAULT_ICON = 'https://static.wikia.nocookie.net/rainbowsix/images/2/27/RAINBOW.png';

// ===== PRE-LOADED TACTICS =====
const DEFAULT_TACTICS = [
    {
        id: 'pre_1',
        map: 'Bank',
        floor: '2F',
        site: 'Executive Lounge / CEO Office',
        role: 'Defender',
        operator: 'Denari',
        category: 'Setup',
        link: 'https://www.instagram.com/reel/DRdx7EiDDNg/'
    },
    {
        id: 'pre_2',
        map: 'Border',
        floor: '2F',
        site: 'Armory / Archives',
        role: 'Defender',
        operator: 'ANY',
        category: 'Setup',
        link: 'https://www.instagram.com/reel/DUHe0iAD5aV/'
    },
    {
        id: 'pre_3',
        map: 'Chalet',
        floor: 'B',
        site: 'Wine Cellar / Snowmobile Garage',
        role: 'Defender',
        operator: 'ANY',
        category: 'Setup',
        link: 'https://www.instagram.com/reel/DUHfrj3DCD9/'
    },
    {
        id: 'pre_4',
        map: 'Clubhouse',
        floor: 'ANY',
        site: 'ALL SITES',
        role: 'Defender',
        operator: 'Fenrir',
        category: 'Trick',
        link: 'https://www.instagram.com/reel/DUgWZNzEnxM/'
    },
    {
        id: 'pre_5',
        map: 'Oregon',
        floor: 'B',
        site: 'Laundry Room / Supply Room',
        role: 'Defender',
        operator: 'Azami',
        category: 'Trick',
        link: 'https://www.instagram.com/reel/DPSV-logPDa/'
    },
    {
        id: 'pre_6',
        map: 'Kanal',
        floor: '2F',
        site: 'Radar Room / Server Room',
        role: 'Defender',
        operator: 'ANY',
        category: 'Setup',
        link: 'https://www.instagram.com/reel/DUjp6ANFOga/'
    },
    {
        id: 'pre_7',
        map: 'Consulate',
        floor: 'B',
        site: 'Garage / Cafeteria',
        role: 'Defender',
        operator: 'ANY',
        category: 'Setup',
        link: 'https://www.instagram.com/reel/DUjpSDpidjj/'
    },
    {
        id: 'pre_8',
        map: 'Consulate',
        floor: '2F',
        site: 'CEO / Meeting',
        role: 'Defender',
        operator: 'ANY',
        category: 'Setup',
        link: 'https://www.instagram.com/reel/DUjoq14FKjI/'
    },
    {
        id: 'pre_9',
        map: 'Nighthaven Labs',
        floor: '2F',
        site: 'Command Center / Server',
        role: 'Defender',
        operator: 'ANY',
        category: 'Setup',
        link: 'https://www.instagram.com/reel/DUHdjG9Da-W/'
    },
    {
        id: 'pre_10',
        map: 'Coastline',
        floor: '2F',
        site: 'Hookah Lounge / Billiards Room',
        role: 'Defender',
        operator: 'ANY',
        category: 'Setup',
        link: 'https://www.instagram.com/reel/DUEsf0cgWko/'
    },
    {
        id: 'pre_11',
        map: 'Kafe Dostoyevsky',
        floor: '1F',
        site: 'Kitchen / Service',
        role: 'Defender',
        operator: 'Castle',
        category: 'Setup',
        link: 'https://www.instagram.com/reel/DUEl1dxjyOJ/'
    },
    {
        id: 'pre_12',
        map: 'Kafe Dostoyevsky',
        floor: '1F',
        site: 'Kitchen / Bakery',
        role: 'Defender',
        operator: 'Azami',
        category: 'Setup',
        link: 'https://www.instagram.com/reel/DUElVoXEY0w/'
    },
    {
        id: 'pre_13',
        map: 'Kafe Dostoyevsky',
        floor: '3F',
        site: 'Bar / Cocktail Lounge',
        role: 'Defender',
        operator: 'ANY',
        category: 'Setup',
        link: 'https://www.instagram.com/reel/DUCGo4iDisg/'
    },
    {
        id: 'pre_14',
        map: 'Kafe Dostoyevsky',
        floor: '1F',
        site: 'Kitchen / Service',
        role: 'Defender',
        operator: 'ANY',
        category: 'Setup',
        link: 'https://www.instagram.com/reel/DUCF8Hpj3ko/'
    },
    {
        id: 'pre_15',
        map: 'Bank',
        floor: '2F',
        site: 'Executive Lounge / CEO Office',
        role: 'Defender',
        operator: 'ANY',
        category: 'Setup',
        link: 'https://www.instagram.com/reel/DUCE5gZj8sH/'
    },
    {
        id: 'pre_16',
        map: 'Bank',
        floor: 'B',
        site: 'CCTV Room / Lockers',
        role: 'Defender',
        operator: 'ANY',
        category: 'Setup',
        link: 'https://www.instagram.com/reel/DT_UjfMjy5T/'
    },
    {
        id: 'pre_17',
        map: 'Clubhouse',
        floor: 'B',
        site: 'Church / Arsenal Room',
        role: 'Defender',
        operator: 'ANY',
        category: 'Setup',
        link: 'https://www.instagram.com/reel/DT_OswWlHkR/'
    },
    {
        id: 'pre_18',
        map: 'Clubhouse',
        floor: '2F',
        site: 'Gym / Bedroom',
        role: 'Defender',
        operator: 'ANY',
        category: 'Setup',
        link: 'https://www.instagram.com/reel/DT_Mo7EkeOx/'
    },
    {
        id: 'pre_19',
        map: 'Clubhouse',
        floor: '2F',
        site: 'CCTV Room / Cash Room',
        role: 'Defender',
        operator: 'ANY',
        category: 'Setup',
        link: 'https://www.instagram.com/reel/DT9PmCnCepW/'
    },
    {
        id: 'pre_20',
        map: 'Oregon',
        floor: '1F',
        site: 'Kitchen / Dining Hall',
        role: 'Defender',
        operator: 'ANY',
        category: 'Setup',
        link: 'https://www.instagram.com/reel/DT9OtUgD18r/'
    },
    {
        id: 'pre_21',
        map: 'Oregon',
        floor: '2F',
        site: "Kids' Dorms / Bunks",
        role: 'Defender',
        operator: 'ANY',
        category: 'Setup',
        link: 'https://www.instagram.com/reel/DT9MjxLiRPg/'
    },
    {
        id: 'pre_22',
        map: 'Chalet',
        floor: 'B',
        site: 'Wine Cellar / Snowmobile Garage',
        role: 'Defender',
        operator: 'Denari',
        category: 'Trick',
        link: 'https://www.instagram.com/reel/DT6VF1egm_N/'
    },
    {
        id: 'pre_23',
        map: 'Border',
        floor: '2F',
        site: 'Armory Lockers / Archives',
        role: 'Defender',
        operator: 'Azami',
        category: 'Trick',
        link: 'https://www.instagram.com/reel/DVo4A8kgs79/'
    },
    {
        id: 'pre_24',
        map: 'Bank',
        floor: 'ANY',
        site: 'ALL SITES',
        role: 'Attacker',
        operator: 'Nomad',
        category: 'Trick',
        link: 'https://www.instagram.com/reel/DVOffFHgoaK/'
    },
    {
        id: 'pre_25',
        map: 'Clubhouse',
        floor: '2F',
        site: 'CCTV Room / Cash Room',
        role: 'Attacker',
        operator: 'Maverick',
        category: 'Trick',
        link: 'https://www.instagram.com/reel/DVJ42bkgrOy/'
    },
    {
        id: 'pre_26',
        map: 'ANY',
        floor: 'ANY',
        site: 'ALL SITES',
        role: 'Defender',
        operator: 'Fenrir',
        category: 'Trick',
        link: 'https://www.instagram.com/reel/DUya9MfDF2Z/'
    },
    {
        id: 'pre_27',
        map: 'Villa',
        floor: '2F',
        site: 'Aviator Room / Games Room',
        role: 'Defender',
        operator: 'Denari',
        category: 'Trick',
        link: 'https://www.instagram.com/reel/DUv3VfjjBpU/'
    },
    {
        id: 'pre_28',
        map: 'Oregon',
        floor: 'ANY',
        site: 'OUTSIDE / SPAWN',
        role: 'Defender',
        operator: 'ANY',
        category: 'Spawn Peek',
        link: 'https://www.instagram.com/reel/DUtRa_PDB4_/'
    },
    {
        id: 'pre_29',
        map: 'Chalet',
        floor: 'ANY',
        site: 'OUTSIDE / SPAWN',
        role: 'Defender',
        operator: 'ANY',
        category: 'Spawn Peek',
        link: 'https://www.instagram.com/reel/DUs1773jNjp/'
    },
    {
        id: 'pre_30',
        map: 'ANY',
        floor: 'ANY',
        site: 'ALL SITES',
        role: 'Defender',
        operator: 'Valkyrie',
        category: 'Trick',
        link: 'https://www.instagram.com/reel/DUqValeDFI0/'
    },
    {
        id: 'pre_31',
        map: 'ANY',
        floor: 'ANY',
        site: 'ALL SITES',
        role: 'Attacker',
        operator: 'ANY',
        category: 'Claymore Trick',
        link: 'https://www.instagram.com/reel/DUaabQMgvww/'
    },
    // ===== NEW TACTICS (v2) =====
    {
        id: 'pre_32',
        map: 'Clubhouse',
        floor: 'B',
        site: 'Church / Arsenal Room',
        role: 'Defender',
        operator: 'ANY',
        category: 'Impact Grenade Trick',
        link: 'https://www.instagram.com/reel/DUTJtdjgkw0/'
    },
    {
        id: 'pre_33',
        map: 'ANY',
        floor: 'ANY',
        site: 'ALL SITES',
        role: 'Attacker',
        operator: 'Sledge',
        category: 'Grenade Trick',
        link: 'https://www.instagram.com/reel/DUOkOE2Al9h/'
    },
    {
        id: 'pre_34',
        map: 'Coastline',
        floor: '1F',
        site: 'Kitchen / Service Entrance',
        role: 'Attacker',
        operator: 'Thermite',
        category: 'Thermite Trick',
        link: 'https://www.instagram.com/reel/DUOVpdZghv6/'
    },
    {
        id: 'pre_35',
        map: 'Outback',
        floor: 'ANY',
        site: 'Outside / Spawn',
        role: 'Defender',
        operator: 'Azami',
        category: 'Spawn Peek',
        link: 'https://www.instagram.com/reel/DT5VNx7AikW/'
    },
    {
        id: 'pre_36',
        map: 'Border',
        floor: '2F',
        site: 'Armory Lockers / Archives',
        role: 'Attacker',
        operator: 'ANY',
        category: 'Grenade Lineup',
        link: 'https://www.instagram.com/reel/DVo6W9ygMtZ/'
    },
    {
        id: 'pre_37',
        map: 'Oregon',
        floor: '1F',
        site: 'Kitchen / Dining Hall',
        role: 'Attacker',
        operator: 'Thermite',
        category: 'Thermite Trick',
        link: 'https://www.instagram.com/reel/DVmLlSFEeeb/'
    },
    {
        id: 'pre_38',
        map: 'Villa',
        floor: '2F',
        site: 'Trophy Room / Statuary Room',
        role: 'Defender',
        operator: 'Maestro',
        category: 'Setup',
        link: 'https://www.instagram.com/reel/DVADBPxgN4I/'
    },
    {
        id: 'pre_39',
        map: 'Chalet',
        floor: 'B',
        site: 'Wine Cellar / Snowmobile Garage',
        role: 'Defender',
        operator: 'Maestro',
        category: 'Setup',
        link: 'https://www.instagram.com/reel/DU9bMjMAAhr/'
    },
    {
        id: 'pre_40',
        map: 'Coastline',
        floor: '2F',
        site: 'Hookah Lounge / Billiards Room',
        role: 'Defender',
        operator: 'Maestro',
        category: 'Setup',
        link: 'https://www.instagram.com/reel/DU4isjZAPAv/'
    },
    {
        id: 'pre_41',
        map: 'Bank',
        floor: '2F',
        site: 'Executive Lounge / CEO Office',
        role: 'Attacker',
        operator: 'Zero',
        category: 'Zero Cam Trick',
        link: 'https://www.instagram.com/reel/DTDKdS1gJ7e/'
    },
    {
        id: 'pre_42',
        map: 'Clubhouse',
        floor: '2F',
        site: 'CCTV Room / Cash Room',
        role: 'Defender',
        operator: 'Echo',
        category: 'Trick',
        link: 'https://www.instagram.com/reel/DTAlsutAEvx/'
    },
    {
        id: 'pre_43',
        map: 'Chalet',
        floor: 'B',
        site: 'Wine Cellar / Snowmobile Garage',
        role: 'Attacker',
        operator: 'Zero',
        category: 'Trick',
        link: 'https://www.instagram.com/reel/DS9zIv5AJUe/'
    },
    {
        id: 'pre_44',
        map: 'Border',
        floor: '2F',
        site: 'Armory Lockers / Archives',
        role: 'Attacker',
        operator: 'Zero',
        category: 'Trick',
        link: 'https://www.instagram.com/reel/DS7OZ0yAPM_/'
    },
    {
        id: 'pre_45',
        map: 'Kafe Dostoyevsky',
        floor: '1F',
        site: 'Kitchen / Service',
        role: 'Defender',
        operator: 'Azami',
        category: 'Setup',
        link: 'https://www.instagram.com/reel/DSWW_eSgO84/'
    },
    {
        id: 'pre_46',
        map: 'Oregon',
        floor: 'B',
        site: 'Laundry Room / Supply Room',
        role: 'Defender',
        operator: 'Valkyrie',
        category: 'Setup',
        link: 'https://www.instagram.com/reel/DSThoODAGYc/'
    },
    {
        id: 'pre_47',
        map: 'Bank',
        floor: 'B',
        site: 'CCTV Room / Lockers',
        role: 'Defender',
        operator: 'Maestro',
        category: 'Setup',
        link: 'https://www.instagram.com/reel/DSRTkylgPLt/'
    },
    {
        id: 'pre_48',
        map: 'Kafe Dostoyevsky',
        floor: '3F',
        site: 'Bar / Cocktail Lounge',
        role: 'Defender',
        operator: 'Mute',
        category: 'Setup',
        link: 'https://www.instagram.com/reel/DQ-v48UADUD/'
    },
    {
        id: 'pre_49',
        map: 'Villa',
        floor: '2F',
        site: 'Aviator Room / Games Room',
        role: 'Defender',
        operator: 'Maestro',
        category: 'Setup',
        link: 'https://www.instagram.com/reel/DQ5uyUaANPF/'
    },
    {
        id: 'pre_50',
        map: 'Oregon',
        floor: '2F',
        site: "Kids' Dorms / Bunks",
        role: 'Defender',
        operator: 'Fenrir',
        category: 'Setup',
        link: 'https://www.instagram.com/reel/DQqXcGNgPMt/'
    },
    {
        id: 'pre_51',
        map: 'Oregon',
        floor: '2F',
        site: "Kids' Dorms / Bunks",
        role: 'Defender',
        operator: 'Denari',
        category: 'Setup',
        link: 'https://www.instagram.com/reel/DWAWFJYADxn/'
    },
    {
        id: 'pre_52',
        map: 'Clubhouse',
        floor: '2F',
        site: 'CCTV Room / Cash Room',
        role: 'Defender',
        operator: 'Azami',
        category: 'Setup',
        link: 'https://www.instagram.com/reel/DWAC-V9jUfJ/'
    },
    {
        id: 'pre_53',
        map: 'Chalet',
        floor: '2F',
        site: 'Master Bedroom / Office',
        role: 'Defender',
        operator: 'Denari',
        category: 'Setup',
        link: 'https://www.instagram.com/reel/DV_8wL0iGbd/'
    },
    {
        id: 'pre_54',
        map: 'Oregon',
        floor: '2F',
        site: "Kids' Dorms / Bunks",
        role: 'Defender',
        operator: 'Maestro',
        category: 'Trick',
        link: 'https://www.instagram.com/reel/DVsHMT4DL_c/'
    },
    {
        id: 'pre_55',
        map: 'Chalet',
        floor: 'B',
        site: 'Wine Cellar / Snowmobile Garage',
        role: 'Defender',
        operator: 'Azami',
        category: 'Setup',
        link: 'https://www.instagram.com/reel/DVmHaFZD3E7/'
    },
    {
        id: 'pre_56',
        map: 'Clubhouse',
        floor: '2F',
        site: 'CCTV Room / Cash Room',
        role: 'Attacker',
        operator: 'Zero',
        category: 'Zero Cam Trick',
        link: 'https://www.instagram.com/reel/DVO4fSsDTOT/'
    },
    // ===== NEW TACTICS (v3) =====
    {
        id: 'pre_57',
        map: 'Consulate',
        floor: 'B',
        site: 'Garage / Cafeteria',
        role: 'Defender',
        operator: 'Denari',
        category: 'Setup',
        link: 'https://www.instagram.com/reel/DPK5K1NDBIq/'
    },
    {
        id: 'pre_58',
        map: 'Villa',
        floor: '2F',
        site: 'Aviator Room / Games Room',
        role: 'Defender',
        operator: 'Maestro',
        category: 'Setup',
        link: 'https://www.instagram.com/reel/DVtx2s1D_R0/'
    },
    {
        id: 'pre_59',
        map: 'Coastline',
        floor: '2F',
        site: 'Hookah Lounge / Billiards Room',
        role: 'Defender',
        operator: 'Azami',
        category: 'Setup',
        link: 'https://www.instagram.com/reel/DVsOzaSDCw4/'
    },
    {
        id: 'pre_60',
        map: 'Border',
        floor: '2F',
        site: 'Armory Lockers / Archives',
        role: 'Attacker',
        operator: 'Zero',
        category: 'Zero Cam Trick',
        link: 'https://www.instagram.com/reel/DVj5PA2D2m0/'
    },
    {
        id: 'pre_61',
        map: 'Oregon',
        floor: '2F',
        site: "Kids' Dorms / Kitchen",
        role: 'Defender',
        operator: 'Fenrir',
        category: 'Setup',
        link: 'https://www.instagram.com/reel/DVPfQTdj4MQ/'
    },
    {
        id: 'pre_62',
        map: 'Oregon',
        floor: 'B',
        site: 'Laundry Room / Supply Room',
        role: 'Defender',
        operator: 'Azami',
        category: 'Trick',
        link: 'https://www.instagram.com/reel/DVNdGL_AJN3/'
    },
    {
        id: 'pre_63',
        map: 'Oregon',
        floor: '2F',
        site: "Kids' Dorms / Bunks",
        role: 'Attacker',
        operator: 'Maverick & Gridlock',
        category: 'Duo Attack',
        link: 'https://www.instagram.com/reel/DRd46jaDOWZ/'
    },
    {
        id: 'pre_64',
        map: 'Kanal',
        floor: '2F',
        site: 'Radar Room / Server Room',
        role: 'Defender',
        operator: 'Azami',
        category: 'Setup',
        link: 'https://www.instagram.com/reel/DQd_IUkgBKK/'
    },
    {
        id: 'pre_65',
        map: 'Oregon',
        floor: '2F',
        site: "Kids' Dorms / Bunks",
        role: 'Defender',
        operator: 'Frost',
        category: 'Trick',
        link: 'https://www.instagram.com/reel/DQd3dt7jmWE/'
    },
    {
        id: 'pre_66',
        map: 'Oregon',
        floor: '2F',
        site: "Kids' Dorms / Bunks",
        role: 'Defender',
        operator: 'Maestro',
        category: 'Setup',
        link: 'https://www.instagram.com/reel/DQa5gYnDO4T/'
    },
    {
        id: 'pre_67',
        map: 'Coastline',
        floor: '2F',
        site: 'Hookah Lounge / Billiards Room',
        role: 'Defender',
        operator: 'Maestro',
        category: 'Setup',
        link: 'https://www.instagram.com/reel/DWHxUizDKB8/'
    },
    {
        id: 'pre_68',
        map: 'Kafe Dostoyevsky',
        floor: 'ANY',
        site: 'Outside / Spawn',
        role: 'Defender',
        operator: 'ANY',
        category: 'Spawn Peek',
        link: 'https://www.instagram.com/reel/DVzK9qwDLP7/'
    },
    {
        id: 'pre_69',
        map: 'Skyscraper',
        floor: 'ANY',
        site: 'All Sites',
        role: 'Defender',
        operator: 'Azami',
        category: 'Trick',
        link: 'https://www.instagram.com/reel/DVmS6y5kq86/'
    },
    {
        id: 'pre_70',
        map: 'Clubhouse',
        floor: '2F',
        site: 'Gym / Bedroom',
        role: 'Attacker',
        operator: 'Zofia',
        category: 'Trick',
        link: 'https://www.instagram.com/reel/DWKcqyVABv5/'
    },
    {
        id: 'pre_71',
        map: 'Clubhouse',
        floor: '2F',
        site: 'Gym / Bedroom',
        role: 'Attacker',
        operator: 'Capitão',
        category: 'Trick',
        link: 'https://www.instagram.com/reel/DWH--16AHp3/'
    },
    {
        id: 'pre_72',
        map: 'Clubhouse',
        floor: 'B',
        site: 'Church / Arsenal Room',
        role: 'Defender',
        operator: 'Denari',
        category: 'Trick',
        link: 'https://www.instagram.com/reel/DWFwww-gOE9/'
    },
    {
        id: 'pre_73',
        map: 'Nighthaven Labs',
        floor: 'B',
        site: 'Assembly / Animatronics',
        role: 'Attacker',
        operator: 'Buck',
        category: 'Trick',
        link: 'https://www.instagram.com/reel/DWDGY2qgB3E/'
    },
    {
        id: 'pre_74',
        map: 'Coastline',
        floor: '2F',
        site: 'Hookah Lounge / Billiards Room',
        role: 'Defender',
        operator: 'Melusi',
        category: 'Setup',
        link: 'https://www.instagram.com/reel/DV9AYBCgN2F/'
    },
    {
        id: 'pre_75',
        map: 'Oregon',
        floor: '2F',
        site: "Kids' Dorms / Bunks",
        role: 'Defender',
        operator: 'Azami',
        category: 'Trick',
        link: 'https://www.instagram.com/reel/DV68dVAgKI7/'
    },
    {
        id: 'pre_76',
        map: 'Clubhouse',
        floor: '2F',
        site: 'CCTV Room / Cash Room',
        role: 'Attacker',
        operator: 'Zero',
        category: 'Zero Cam Trick',
        link: 'https://www.instagram.com/reel/DV4d4QFgLOx/'
    },
    {
        id: 'pre_77',
        map: 'Coastline',
        floor: 'ANY',
        site: 'All Sites',
        role: 'Attacker',
        operator: 'ANY',
        category: 'Grenade Lineup',
        link: 'https://www.instagram.com/reel/DVr3HBKgHg6/'
    }
];

const DATA_VERSION = 4;

// ===== APP STATE =====
let tactics = [];
let editingId = null;
let deleteTargetId = null;
let isMatchMode = false;
let lastPinnedId = null;

// ===== DOM REFS =====
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const dom = {
    grid: $('#tacticsGrid'),
    emptyState: $('#emptyState'),
    emptyTitle: $('#emptyTitle'),
    emptyMessage: $('#emptyMessage'),
    searchInput: $('#searchInput'),
    searchClear: $('#searchClear'),
    filterMap: $('#filterMap'),
    filterOperator: $('#filterOperator'),
    filterCategory: $('#filterCategory'),
    filterFloor: $('#filterFloor'),
    filterRole: $('#filterRole'),
    filterReset: $('#filterReset'),
    sortSelect: $('#sortSelect'),
    resultsCount: $('#resultsCount'),
    modalOverlay: $('#modalOverlay'),
    modalTitle: $('#modalTitle'),
    tacticForm: $('#tacticForm'),
    inputMap: $('#inputMap'),
    inputCategory: $('#inputCategory'),
    inputSite: $('#inputSite'),
    inputFloor: $('#inputFloor'),
    inputRole: $('#inputRole'),
    inputOperator: $('#inputOperator'),
    inputLink: $('#inputLink'),
    btnSubmitText: $('#btnSubmitText'),
    deleteOverlay: $('#deleteOverlay'),
    deletePreview: $('#deletePreview'),
    importOverlay: $('#importOverlay'),
    importFile: $('#importFile'),
    toast: $('#toast'),
    toastMessage: $('#toastMessage'),
    // Match Mode DOM elements
    matchModeContainer: $('#matchModeContainer'),
    matchModeToggle: $('#matchModeToggle'),
    matchModePanel: $('#matchModePanel'),
    matchModeBadge: $('#matchModeBadge'),
    matchModeDot: $('#matchModeDot'),
    matchMapSelect: $('#matchMapSelect'),
    matchRoleSegmented: $('#matchRoleSegmented'),
    matchFloorSegmented: $('#matchFloorSegmented'),
    btnFloor3F: $('#btnFloor3F')
};

// ===== INIT =====
function init() {
    loadTactics();
    populateFilterDropdowns();
    populateFormDropdowns();
    bindEvents();

    isMatchMode = localStorage.getItem('r6s_match_mode') === 'true';
    if (dom.matchModeToggle) {
        dom.matchModeToggle.checked = isMatchMode;
    }
    const savedSort = localStorage.getItem('r6s_sort_by');
    if (dom.sortSelect && savedSort) {
        dom.sortSelect.value = savedSort;
    }
    updateMatchModeUI();
    syncFilterUI();
    renderTactics();
}

// ===== DATA / STORAGE =====
function loadTactics() {
    const saved = localStorage.getItem('r6s_tactics');
    const savedVersion = parseInt(localStorage.getItem('r6s_data_version') || '0');

    if (saved && savedVersion >= DATA_VERSION) {
        tactics = JSON.parse(saved);
    } else if (saved && savedVersion < DATA_VERSION) {
        // Merge: add new defaults that don't exist in saved data (by link)
        tactics = JSON.parse(saved);
        const existingLinks = new Set(tactics.map(t => t.link));
        const newTactics = DEFAULT_TACTICS.filter(dt => !existingLinks.has(dt.link));
        tactics = [...tactics, ...newTactics];
        // Update existing tactics from defaults (e.g. category changes)
        const defaultsByLink = {};
        DEFAULT_TACTICS.forEach(dt => { defaultsByLink[dt.link] = dt; });
        tactics = tactics.map(t => {
            if (defaultsByLink[t.link] && t.id && t.id.startsWith('pre_')) {
                return { ...t, ...defaultsByLink[t.link] };
            }
            return t;
        });
        localStorage.setItem('r6s_data_version', DATA_VERSION.toString());
        saveTactics();
    } else {
        tactics = [...DEFAULT_TACTICS];
        localStorage.setItem('r6s_data_version', DATA_VERSION.toString());
        saveTactics();
    }

    // Ensure all tactics have isFavorite and createdAt backward-compatible fallback
    const baseTime = Date.now() - tactics.length * 60000;
    let modified = false;
    tactics = tactics.map((t, idx) => {
        let updated = false;
        let isFav = t.isFavorite;
        let cAt = t.createdAt;
        if (typeof isFav !== 'boolean') {
            isFav = false;
            updated = true;
        }
        if (typeof cAt !== 'number' || isNaN(cAt)) {
            cAt = baseTime + idx * 60000;
            updated = true;
        }
        if (updated) {
            modified = true;
            return { ...t, isFavorite: isFav, createdAt: cAt };
        }
        return t;
    });

    if (modified) {
        saveTactics();
    }
}

function saveTactics() {
    localStorage.setItem('r6s_tactics', JSON.stringify(tactics));
}

function generateId() {
    return 'tac_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5);
}

// ===== DROPDOWNS =====
function populateFilterDropdowns() {
    // Maps
    const usedMaps = [...new Set(tactics.map(t => t.map))].sort();

    dom.filterMap.innerHTML = '<option value="">🗺️ All Maps</option>';
    if (dom.matchMapSelect) {
        dom.matchMapSelect.innerHTML = '<option value="">🗺️ All Maps (Unlocked)</option>';
    }

    const addMapOpt = (mapVal, textVal) => {
        const opt = document.createElement('option');
        opt.value = mapVal;
        opt.textContent = textVal || mapVal;
        dom.filterMap.appendChild(opt);

        if (dom.matchMapSelect) {
            const matchOpt = document.createElement('option');
            matchOpt.value = mapVal;
            matchOpt.textContent = textVal || mapVal;
            dom.matchMapSelect.appendChild(matchOpt);
        }
    };

    R6S_MAPS.forEach(map => {
        addMapOpt(map);
    });

    // Add any map in tactics not in R6S_MAPS
    usedMaps.forEach(map => {
        if (map !== 'ANY' && !R6S_MAPS.includes(map)) {
            addMapOpt(map);
        }
    });

    if (usedMaps.includes('ANY')) {
        addMapOpt('ANY', 'ANY (general)');
    }

    // Operators
    const allOps = [...R6S_OPERATORS.defenders, ...R6S_OPERATORS.attackers].sort();
    const addedOps = new Set();
    allOps.forEach(op => {
        if (!addedOps.has(op)) {
            const opt = document.createElement('option');
            opt.value = op;
            opt.textContent = op;
            dom.filterOperator.appendChild(opt);
            addedOps.add(op);
        }
    });
    // Add ANY option
    const optAny = document.createElement('option');
    optAny.value = 'ANY';
    optAny.textContent = 'ANY (general)';
    dom.filterOperator.appendChild(optAny);

    // Categories
    R6S_CATEGORIES.forEach(cat => {
        const opt = document.createElement('option');
        opt.value = cat;
        opt.textContent = cat;
        dom.filterCategory.appendChild(opt);
    });
}

function populateFormDropdowns() {
    // Maps for form
    R6S_MAPS.forEach(map => {
        const opt = document.createElement('option');
        opt.value = map;
        opt.textContent = map;
        dom.inputMap.appendChild(opt);
    });
    const anyMapOpt = document.createElement('option');
    anyMapOpt.value = 'ANY';
    anyMapOpt.textContent = 'ANY (All maps)';
    dom.inputMap.appendChild(anyMapOpt);

    // Categories for form
    R6S_CATEGORIES.forEach(cat => {
        const opt = document.createElement('option');
        opt.value = cat;
        opt.textContent = cat;
        dom.inputCategory.appendChild(opt);
    });

    // Operators for form
    const optGroupDef = document.createElement('optgroup');
    optGroupDef.label = '🛡️ Defense';
    R6S_OPERATORS.defenders.sort().forEach(op => {
        const opt = document.createElement('option');
        opt.value = op;
        opt.textContent = op;
        optGroupDef.appendChild(opt);
    });

    const optGroupAtk = document.createElement('optgroup');
    optGroupAtk.label = '⚔️ Attack';
    R6S_OPERATORS.attackers.sort().forEach(op => {
        const opt = document.createElement('option');
        opt.value = op;
        opt.textContent = op;
        optGroupAtk.appendChild(opt);
    });

    const optAny = document.createElement('option');
    optAny.value = 'ANY';
    optAny.textContent = 'ANY (general)';
    dom.inputOperator.appendChild(optAny);
    dom.inputOperator.appendChild(optGroupDef);
    dom.inputOperator.appendChild(optGroupAtk);
}

// ===== EVENTS =====
function bindEvents() {
    // Add button
    $('#btnAdd').addEventListener('click', openAddModal);

    // Search
    dom.searchInput.addEventListener('input', () => {
        dom.searchClear.classList.toggle('hidden', !dom.searchInput.value);
        updateFilterResetBtn();
        renderTactics();
    });
    dom.searchClear.addEventListener('click', () => {
        dom.searchInput.value = '';
        dom.searchClear.classList.add('hidden');
        updateFilterResetBtn();
        renderTactics();
    });

    // Filters
    [dom.filterMap, dom.filterOperator, dom.filterCategory, dom.filterFloor, dom.filterRole].forEach(sel => {
        sel.addEventListener('change', () => {
            syncFilterUI();
            renderTactics();
        });
    });

    // Sort
    if (dom.sortSelect) {
        dom.sortSelect.addEventListener('change', () => {
            localStorage.setItem('r6s_sort_by', dom.sortSelect.value);
            syncFilterUI();
            renderTactics();
        });
    }

    dom.filterReset.addEventListener('click', resetFilters);

    // Match Mode Toggle
    if (dom.matchModeToggle) {
        dom.matchModeToggle.addEventListener('change', () => {
            isMatchMode = dom.matchModeToggle.checked;
            localStorage.setItem('r6s_match_mode', isMatchMode ? 'true' : 'false');
            updateMatchModeUI();
            renderTactics();
        });
    }

    // Match Mode Map Select (Map Lock)
    if (dom.matchMapSelect) {
        dom.matchMapSelect.addEventListener('change', () => {
            dom.filterMap.value = dom.matchMapSelect.value;
            syncFilterUI();
            renderTactics();
        });
    }

    // Match Mode Quick Role Toggle (Segmented control)
    if (dom.matchRoleSegmented) {
        dom.matchRoleSegmented.addEventListener('click', (e) => {
            const btn = e.target.closest('.segment-btn');
            if (!btn) return;
            const targetRole = btn.dataset.role !== undefined ? btn.dataset.role : '';
            if (targetRole === '') {
                dom.filterRole.value = '';
            } else {
                dom.filterRole.value = (dom.filterRole.value === targetRole) ? '' : targetRole;
            }
            syncFilterUI();
            renderTactics();
        });
    }

    // Match Mode Quick Floor Toggle (Segmented control)
    if (dom.matchFloorSegmented) {
        dom.matchFloorSegmented.addEventListener('click', (e) => {
            const btn = e.target.closest('.segment-btn');
            if (!btn) return;
            const targetFloor = btn.dataset.floor !== undefined ? btn.dataset.floor : '';
            if (targetFloor === '') {
                dom.filterFloor.value = '';
            } else {
                dom.filterFloor.value = (dom.filterFloor.value === targetFloor) ? '' : targetFloor;
            }
            syncFilterUI();
            renderTactics();
        });
    }

    // Clickable Badges delegation on tactics grid
    dom.grid.addEventListener('click', (e) => {
        handleBadgeClick(e);
    });

    // Modal
    $('#modalClose').addEventListener('click', closeModal);
    $('#btnCancel').addEventListener('click', closeModal);
    dom.modalOverlay.addEventListener('click', (e) => {
        if (e.target === dom.modalOverlay) closeModal();
    });

    // Form submit
    dom.tacticForm.addEventListener('submit', handleFormSubmit);

    // Delete modal
    $('#btnDeleteCancel').addEventListener('click', closeDeleteModal);
    $('#btnDeleteConfirm').addEventListener('click', confirmDelete);
    dom.deleteOverlay.addEventListener('click', (e) => {
        if (e.target === dom.deleteOverlay) closeDeleteModal();
    });

    // Import/Export
    $('#btnExport').addEventListener('click', exportData);
    $('#btnImport').addEventListener('click', () => dom.importOverlay.classList.remove('hidden'));
    $('#importClose').addEventListener('click', () => dom.importOverlay.classList.add('hidden'));
    $('#btnImportCancel').addEventListener('click', () => dom.importOverlay.classList.add('hidden'));
    $('#btnImportConfirm').addEventListener('click', importData);
    dom.importOverlay.addEventListener('click', (e) => {
        if (e.target === dom.importOverlay) dom.importOverlay.classList.add('hidden');
    });

    // Keyboard
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
            closeDeleteModal();
            dom.importOverlay.classList.add('hidden');
        }
    });
}

function updateMatchModeUI() {
    if (!dom.matchModePanel) return;
    dom.matchModePanel.classList.toggle('hidden', !isMatchMode);
    if (dom.matchModeBadge) {
        dom.matchModeBadge.textContent = isMatchMode ? 'ACTIVE' : 'OFF';
        dom.matchModeBadge.classList.toggle('active', isMatchMode);
    }
    if (dom.matchModeDot) {
        dom.matchModeDot.classList.toggle('active', isMatchMode);
    }
    if (dom.matchModeContainer) {
        dom.matchModeContainer.classList.toggle('active', isMatchMode);
    }
}

function updateFilterResetBtn() {
    const hasFilters = Boolean(
        dom.filterMap.value ||
        dom.filterOperator.value ||
        dom.filterCategory.value ||
        dom.filterFloor.value ||
        dom.filterRole.value ||
        (dom.searchInput && dom.searchInput.value.trim().length > 0)
    );
    dom.filterReset.classList.toggle('hidden', !hasFilters);
}

function syncFilterUI() {
    // 1. Dropdown active states
    [dom.filterMap, dom.filterOperator, dom.filterCategory, dom.filterFloor, dom.filterRole].forEach(sel => {
        sel.classList.toggle('active', !!sel.value);
    });

    if (dom.sortSelect) {
        dom.sortSelect.classList.toggle('active', dom.sortSelect.value !== 'newest');
    }

    // 2. Map Lock in Match Mode
    if (dom.matchMapSelect) {
        dom.matchMapSelect.value = dom.filterMap.value;
        dom.matchMapSelect.classList.toggle('active', !!dom.filterMap.value);
    }

    // 3. Quick Role in Match Mode
    if (dom.matchRoleSegmented) {
        const curRole = dom.filterRole.value;
        dom.matchRoleSegmented.querySelectorAll('.segment-btn').forEach(btn => {
            const btnRole = btn.dataset.role || '';
            btn.classList.toggle('active', btnRole === curRole);
        });
    }

    // 4. Quick Floor in Match Mode
    if (dom.matchFloorSegmented) {
        const curFloor = dom.filterFloor.value;
        dom.matchFloorSegmented.querySelectorAll('.segment-btn').forEach(btn => {
            const btnFloor = btn.dataset.floor || '';
            btn.classList.toggle('active', btnFloor === curFloor);
        });
        if (dom.btnFloor3F) {
            const isKafe = dom.filterMap.value === 'Kafe Dostoyevsky';
            const is3F = curFloor === '3F';
            dom.btnFloor3F.style.display = (isKafe || is3F) ? 'inline-flex' : 'none';
        }
    }

    // 5. Update Clear Filters button
    updateFilterResetBtn();
}

function resetFilters() {
    dom.filterMap.value = '';
    dom.filterOperator.value = '';
    dom.filterCategory.value = '';
    dom.filterFloor.value = '';
    dom.filterRole.value = '';
    dom.searchInput.value = '';
    dom.searchClear.classList.add('hidden');
    syncFilterUI();
    renderTactics();
}

function handleBadgeClick(e) {
    const badge = e.target.closest('.badge-clickable');
    if (!badge) return;

    if (e.target.closest('.btn-card-edit') || e.target.closest('.btn-card-delete') || e.target.closest('.btn-card-fav') || e.target.closest('.card-video-btn')) {
        return;
    }

    const type = badge.dataset.badgeType;
    const value = badge.dataset.badgeValue;
    if (!type || value === undefined) return;

    toggleFilter(type, value);
}

function toggleFilter(type, value) {
    switch (type) {
        case 'map':
            dom.filterMap.value = (dom.filterMap.value === value) ? '' : value;
            break;
        case 'floor':
            dom.filterFloor.value = (dom.filterFloor.value === value) ? '' : value;
            break;
        case 'role':
            dom.filterRole.value = (dom.filterRole.value === value) ? '' : value;
            break;
        case 'operator':
            dom.filterOperator.value = (dom.filterOperator.value === value) ? '' : value;
            break;
        case 'category':
            dom.filterCategory.value = (dom.filterCategory.value === value) ? '' : value;
            break;
    }
    syncFilterUI();
    renderTactics();
}

// ===== RENDERING =====
function getFilteredTactics() {
    const search = dom.searchInput.value.toLowerCase().trim();
    const mapFilter = dom.filterMap.value;
    const opFilter = dom.filterOperator.value;
    const catFilter = dom.filterCategory.value;
    const floorFilter = dom.filterFloor.value;
    const roleFilter = dom.filterRole.value;
    const sortVal = dom.sortSelect ? dom.sortSelect.value : 'newest';

    return tactics.filter(t => {
        if (sortVal === 'favOnly' && !t.isFavorite) return false;
        if (mapFilter) {
            const tMap = (t.map || '').trim();
            if (isMatchMode) {
                // Map Lock: show selected map + ANY general tactics
                if (tMap !== mapFilter && tMap.toUpperCase() !== 'ANY') return false;
            } else {
                if (tMap !== mapFilter) return false;
            }
        }
        if (opFilter && t.operator !== opFilter) return false;
        if (catFilter && t.category !== catFilter) return false;
        if (floorFilter && t.floor !== floorFilter) return false;
        if (roleFilter && t.role !== roleFilter) return false;
        if (search) {
            const searchStr = `${t.map} ${t.site} ${t.operator} ${t.category} ${t.floor || ''} ${t.role || ''}`.toLowerCase();
            if (!searchStr.includes(search)) return false;
        }
        return true;
    });
}

function renderTactics() {
    const filtered = getFilteredTactics();
    const favCount = tactics.filter(t => t.isFavorite).length;

    // Update count with pinned indicator
    const favText = favCount > 0 ? ` • ${favCount} pinned ⭐` : '';
    dom.resultsCount.textContent = `${filtered.length} / ${tactics.length} tactics showing${favText}`;

    // Empty state
    if (tactics.length === 0) {
        dom.grid.classList.add('hidden');
        dom.emptyState.classList.remove('hidden');
        dom.emptyTitle.textContent = 'No tactics yet';
        dom.emptyMessage.textContent = 'Click the "Add" button above to add your first tactic!';
        return;
    }

    if (filtered.length === 0) {
        dom.grid.classList.add('hidden');
        dom.emptyState.classList.remove('hidden');
        dom.emptyTitle.textContent = 'No results found';
        dom.emptyMessage.textContent = 'Try changing your filters or updating your search term.';
        return;
    }

    dom.emptyState.classList.add('hidden');
    dom.grid.classList.remove('hidden');

    const sortMethod = (dom.sortSelect && dom.sortSelect.value) ? dom.sortSelect.value : 'newest';

    filtered.sort((a, b) => {
        // KESİN KURAL: isFavorite === true her zaman en üstte
        const favA = a.isFavorite ? 1 : 0;
        const favB = b.isFavorite ? 1 : 0;
        if (favA !== favB) {
            return favB - favA; // 1 (favori) daima önce gelir
        }

        // İkisi de favori veya ikisi de favori değil -> seçilen metoda göre sırala
        if (sortMethod === 'az') {
            const mapA = (a.map || '').toUpperCase() === 'ANY' ? 'ZZZ' : (a.map || '').toUpperCase();
            const mapB = (b.map || '').toUpperCase() === 'ANY' ? 'ZZZ' : (b.map || '').toUpperCase();
            if (mapA !== mapB) {
                return mapA.localeCompare(mapB);
            }
            const opA = (a.operator || '').toUpperCase() === 'ANY' || (a.operator || '').toUpperCase() === 'GENERAL' ? 'ZZZ' : (a.operator || '').toUpperCase();
            const opB = (b.operator || '').toUpperCase() === 'ANY' || (b.operator || '').toUpperCase() === 'GENERAL' ? 'ZZZ' : (b.operator || '').toUpperCase();
            if (opA !== opB) {
                return opA.localeCompare(opB);
            }
            return (a.site || '').localeCompare(b.site || '');
        } else {
            // 'newest' (veya 'favOnly'): createdAt azalan (en yeni en üstte)
            const timeA = typeof a.createdAt === 'number' ? a.createdAt : 0;
            const timeB = typeof b.createdAt === 'number' ? b.createdAt : 0;
            if (timeB !== timeA) {
                return timeB - timeA;
            }
            return (b.id || '').localeCompare(a.id || '');
        }
    });

    dom.grid.innerHTML = filtered.map((t, i) => {
        const platform = detectPlatform(t.link);
        const categoryColor = getCategoryColor(t.category);
        const operatorIcon = getOperatorIcon(t.operator);
        const roleIcon = t.role === 'Attacker' ? '⚔️' : '🛡️';
        const floorLabel = t.floor && t.floor !== 'ANY' ? t.floor : '';

        const isMapActive = dom.filterMap.value && dom.filterMap.value === t.map;
        const isFloorActive = dom.filterFloor.value && dom.filterFloor.value === t.floor;
        const isRoleActive = dom.filterRole.value && dom.filterRole.value === t.role;
        const isOpActive = dom.filterOperator.value && dom.filterOperator.value === t.operator;
        const isCatActive = dom.filterCategory.value && dom.filterCategory.value === t.category;
        const isJustPinned = t.id === lastPinnedId;

        return `
        <div class="tactic-card ${t.isFavorite ? 'is-favorite' : ''} ${isJustPinned ? 'just-pinned' : ''}" style="--card-accent: ${categoryColor}; animation-delay: ${Math.min(i * 0.03, 0.3)}s">
            <div class="card-header">
                <div class="card-header-left">
                    <img class="card-op-icon ${t.operator && t.operator !== 'ANY' ? 'badge-clickable' : ''} ${isOpActive ? 'is-active' : ''}" 
                         src="${operatorIcon}" 
                         alt="${escapeHtml(t.operator)}" 
                         ${t.operator && t.operator !== 'ANY' ? `data-badge-type="operator" data-badge-value="${escapeHtml(t.operator)}" title="Filter by operator: ${escapeHtml(t.operator)}"` : ''} 
                         onerror="this.style.display='none'">
                    <div>
                        <div class="card-map">
                            <span class="badge-clickable badge-map ${isMapActive ? 'is-active' : ''}" 
                                  data-badge-type="map" 
                                  data-badge-value="${escapeHtml(t.map)}" 
                                  title="Filter by map: ${escapeHtml(t.map)}">${escapeHtml(t.map)}</span>
                            ${floorLabel ? `
                            <span class="badge-clickable badge-floor ${isFloorActive ? 'is-active' : ''}" 
                                  data-badge-type="floor" 
                                  data-badge-value="${escapeHtml(t.floor)}" 
                                  title="Filter by floor: ${escapeHtml(t.floor)}">${escapeHtml(floorLabel)}</span>` : ''}
                            ${t.isFavorite ? `<span class="badge-pinned" title="Pinned to top">⭐ PINNED</span>` : ''}
                        </div>
                        ${t.site ? `<div class="card-site-inline">${escapeHtml(t.site)}</div>` : ''}
                    </div>
                </div>
                <div class="card-actions">
                    <button class="btn-card-fav ${t.isFavorite ? 'is-fav' : ''}" 
                            onclick="toggleFavorite('${t.id}', event)" 
                            title="${t.isFavorite ? 'Remove from favorites' : 'Pin to favorites'}">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="${t.isFavorite ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                        </svg>
                    </button>
                    <button class="btn-card-edit" onclick="openEditModal('${t.id}')" title="Edit">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                    </button>
                    <button class="btn-card-delete" onclick="openDeleteModal('${t.id}')" title="Delete">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>
                    </button>
                </div>
            </div>
            <div class="card-tags">
                ${t.role ? `
                <span class="tag badge-clickable ${isRoleActive ? 'is-active' : ''}" 
                      data-badge-type="role" 
                      data-badge-value="${escapeHtml(t.role)}" 
                      title="Filter by role: ${escapeHtml(t.role)}"
                      style="background:${t.role === 'Attacker' ? 'rgba(239,83,80,0.12)' : 'rgba(66,165,245,0.12)'};color:${t.role === 'Attacker' ? '#ef5350' : '#42a5f5'};border:1px solid ${t.role === 'Attacker' ? 'rgba(239,83,80,0.25)' : 'rgba(66,165,245,0.25)'}">
                    ${roleIcon} ${t.role}
                </span>` : ''}
                ${t.operator && t.operator !== 'ANY' ? `
                <span class="tag tag-operator badge-clickable ${isOpActive ? 'is-active' : ''}" 
                      data-badge-type="operator" 
                      data-badge-value="${escapeHtml(t.operator)}" 
                      title="Filter by operator: ${escapeHtml(t.operator)}">
                    <img class="tag-op-icon" src="${operatorIcon}" alt="" onerror="this.style.display='none'"> ${escapeHtml(t.operator)}
                </span>` : ''}
                <span class="tag tag-category badge-clickable ${isCatActive ? 'is-active' : ''}" 
                      data-badge-type="category" 
                      data-badge-value="${escapeHtml(t.category)}" 
                      data-category="${escapeHtml(t.category)}" 
                      title="Filter by category: ${escapeHtml(t.category)}">
                    ${escapeHtml(t.category)}
                </span>
            </div>
            <a href="${escapeHtml(t.link)}" target="_blank" rel="noopener noreferrer" class="card-video-btn ${platform.class}" title="Watch video on ${platform.name}">
                <span class="btn-video-brand">
                    ${platform.class === 'youtube' ? `
                    <svg class="btn-platform-svg yt-svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                    ` : `
                    <svg class="btn-platform-svg ig-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    `}
                    <span>Watch on ${platform.name}</span>
                </span>
                <span class="btn-external-arrow">↗</span>
            </a>
        </div>`;
    }).join('');
}

// ===== HELPERS =====
function detectPlatform(url) {
    if (!url) return { name: 'Instagram', icon: '📸', class: 'instagram' };
    if (url.includes('youtube.com') || url.includes('youtu.be')) return { name: 'YouTube', icon: '▶️', class: 'youtube' };
    return { name: 'Instagram', icon: '📸', class: 'instagram' };
}

function getCategoryColor(category) {
    const colors = {
        'Setup': '#fbc02d',
        'Trick': '#ab47bc',
        'Anchor': '#66bb6a',
        'Roam': '#ffa726',
        'Pixel Peek': '#ef5350',
        'C4/Nitro': '#ff7043',
        'Camera Spots': '#26c6da',
        'Utility': '#78909c',
        'Spawn Peek': '#ff5252',
        'Claymore Trick': '#ffb74d',
        'Impact Grenade Trick': '#ff8a65',
        'Grenade Trick': '#dce775',
        'Thermite Trick': '#ff5722',
        'Zero Cam Trick': '#00bcd4',
        'Duo Attack': '#ba68c8',
        'Grenade Lineup': '#aed581'
    };
    return colors[category] || '#ffa726';
}

function getOperatorIcon(operator) {
    return OPERATOR_ICONS[operator] || DEFAULT_ICON;
}

function shortenUrl(url) {
    try {
        const u = new URL(url);
        return u.hostname + u.pathname.substring(0, 25) + (u.pathname.length > 25 ? '...' : '');
    } catch {
        return url.substring(0, 40);
    }
}

function escapeHtml(str) {
    if (!str) return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

// ===== MODAL =====
function openAddModal() {
    editingId = null;
    dom.modalTitle.textContent = 'Add New Tactic';
    dom.btnSubmitText.textContent = 'Save';
    dom.tacticForm.reset();
    dom.modalOverlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function openEditModal(id) {
    const tactic = tactics.find(t => t.id === id);
    if (!tactic) return;

    editingId = id;
    dom.modalTitle.textContent = 'Edit Tactic';
    dom.btnSubmitText.textContent = 'Update';

    dom.inputMap.value = tactic.map || '';
    dom.inputCategory.value = tactic.category || '';
    dom.inputFloor.value = tactic.floor || 'ANY';
    dom.inputRole.value = tactic.role || 'Defender';
    dom.inputSite.value = tactic.site || '';
    dom.inputOperator.value = tactic.operator || '';
    dom.inputLink.value = tactic.link || '';

    dom.modalOverlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    dom.modalOverlay.classList.add('hidden');
    document.body.style.overflow = '';
    editingId = null;
}

function handleFormSubmit(e) {
    e.preventDefault();

    const data = {
        map: dom.inputMap.value,
        floor: dom.inputFloor.value,
        site: dom.inputSite.value,
        role: dom.inputRole.value,
        operator: dom.inputOperator.value || 'ANY',
        category: dom.inputCategory.value,
        link: dom.inputLink.value
    };

    if (editingId) {
        const idx = tactics.findIndex(t => t.id === editingId);
        if (idx !== -1) {
            tactics[idx] = {
                ...tactics[idx],
                ...data,
                isFavorite: typeof tactics[idx].isFavorite === 'boolean' ? tactics[idx].isFavorite : false,
                createdAt: typeof tactics[idx].createdAt === 'number' ? tactics[idx].createdAt : Date.now()
            };
            showToast('Tactic updated! ✅', 'success');
        }
    } else {
        data.id = generateId();
        data.isFavorite = false;
        data.createdAt = Date.now();
        tactics.unshift(data);
        showToast('New tactic added! 🎯', 'success');
    }

    saveTactics();
    closeModal();
    renderTactics();
}

function detectFloor(site) {
    if (!site) return 'ANY';
    const s = site.toUpperCase();
    if (s.includes('BASEMENT') || s.startsWith('B ')) return 'B';
    return 'ANY';
}

function detectRole(operator) {
    if (!operator || operator === 'ANY' || operator === 'general') return 'Defender';
    if (R6S_OPERATORS.attackers.includes(operator)) return 'Attacker';
    return 'Defender';
}

// ===== FAVORITE (PIN) =====
function toggleFavorite(id, e) {
    if (e) {
        e.stopPropagation();
        e.preventDefault();
    }
    const tactic = tactics.find(t => t.id === id);
    if (!tactic) return;

    tactic.isFavorite = !tactic.isFavorite;
    if (tactic.isFavorite) {
        lastPinnedId = id;
    } else if (lastPinnedId === id) {
        lastPinnedId = null;
    }
    saveTactics();
    renderTactics();
    showToast(tactic.isFavorite ? 'Pinned to favorites ⭐' : 'Removed from favorites', tactic.isFavorite ? 'success' : 'info');
}

// ===== DELETE =====
function openDeleteModal(id) {
    deleteTargetId = id;
    const tactic = tactics.find(t => t.id === id);
    if (!tactic) return;

    dom.deletePreview.innerHTML = `<strong>${escapeHtml(tactic.map)}</strong> — ${escapeHtml(tactic.site || 'general')} ${tactic.operator !== 'ANY' ? `(${escapeHtml(tactic.operator)})` : ''}`;
    dom.deleteOverlay.classList.remove('hidden');
}

function closeDeleteModal() {
    dom.deleteOverlay.classList.add('hidden');
    deleteTargetId = null;
}

function confirmDelete() {
    if (!deleteTargetId) return;
    tactics = tactics.filter(t => t.id !== deleteTargetId);
    saveTactics();
    closeDeleteModal();
    renderTactics();
    showToast('Tactic deleted 🗑️', 'error');
}

// ===== IMPORT / EXPORT =====
function exportData() {
    const blob = new Blob([JSON.stringify(tactics, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `r6s_tactics_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('Data exported successfully! 📦', 'success');
}

function importData() {
    const file = dom.importFile.files[0];
    if (!file) {
        showToast('Please select a file!', 'error');
        return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const data = JSON.parse(e.target.result);
            if (!Array.isArray(data)) throw new Error('Invalid format');

            // Merge — add IDs, isFavorite and createdAt to any missing
            data.forEach((t, i) => {
                if (!t.id) t.id = generateId();
                if (typeof t.isFavorite !== 'boolean') t.isFavorite = false;
                if (typeof t.createdAt !== 'number') t.createdAt = Date.now() - (data.length - i) * 1000;
            });

            tactics = [...data, ...tactics];
            // Remove duplicates by link
            const seen = new Set();
            tactics = tactics.filter(t => {
                if (seen.has(t.link)) return false;
                seen.add(t.link);
                return true;
            });

            saveTactics();
            dom.importOverlay.classList.add('hidden');
            renderTactics();
            showToast(`${data.length} tactics imported! ✅`, 'success');
        } catch (err) {
            showToast('Could not read file! Select a valid JSON file.', 'error');
        }
    };
    reader.readAsText(file);
}

// ===== TOAST =====
function showToast(message, type = 'success') {
    dom.toast.className = `toast ${type}`;
    dom.toastMessage.textContent = message;
    dom.toast.classList.remove('hidden');

    clearTimeout(window._toastTimer);
    window._toastTimer = setTimeout(() => {
        dom.toast.classList.add('hidden');
    }, 2500);
}

// ===== MAKE FUNCTIONS GLOBAL FOR ONCLICK =====
window.openEditModal = openEditModal;
window.openDeleteModal = openDeleteModal;
window.toggleFavorite = toggleFavorite;

// ===== START =====
document.addEventListener('DOMContentLoaded', init);
