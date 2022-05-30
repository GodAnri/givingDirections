export function getNodes(map) {
    switch(map){
        case 'newyork':
            return [
                {
                    id: 1,
                    x: 149,
                    y: 639,
                    neighbours: [2,6,7]
                },
                {
                    id: 2,
                    x: 149,
                    y: 1089,
                    neighbours: [1,3,6]
                },
                {
                    id: 3,
                    x: 149,
                    y: 1160,
                    neighbours: [2,4,9]
                },
                {
                    id: 4,
                    x: 149,
                    y: 1611,
                    neighbours: [3,5,10]
                },
                {
                    id: 5,
                    x: 149,
                    y: 1767,
                    neighbours: [4,11]
                },
                {
                    id: 6,
                    x: 345,
                    y: 1089,
                    neighbours: [1,2,8,9]
                },
                {
                    id: 7,
                    x: 405,
                    y: 644,
                    neighbours: [1,8,12]
                },
                {
                    id: 8,
                    x: 401,
                    y: 1089,
                    neighbours: [1,6,7,9,13]
                },
                {
                    id: 9,
                    x: 397,
                    y: 1168,
                    neighbours: [3,6,8,10,14,15]
                },
                {
                    id: 10,
                    x: 397,
                    y: 1611,
                    neighbours: [4,9,11,15]
                },
                {
                    id: 11,
                    x: 397,
                    y: 1772,
                    neighbours: [5,10,16]
                },
                {
                    id: 12,
                    x: 651,
                    y: 651,
                    neighbours: [7,13,18]
                },
                {
                    id: 13,
                    x: 654,
                    y: 1093,
                    neighbours: [8,12,14,20]
                },
                {
                    id: 14,
                    x: 656,
                    y: 1173,
                    neighbours: [9,13,15,20]
                },
                {
                    id: 15,
                    x: 652,
                    y: 1615,
                    neighbours: [9,10,14,16,23]
                },
                {
                    id: 16,
                    x: 653,
                    y: 1776,
                    neighbours: [11,15,24]
                },
                {
                    id: 17,
                    x: 794,
                    y: 134,
                    neighbours: [19,25]
                },
                {
                    id: 18,
                    x: 766,
                    y: 766,
                    neighbours: [12,19,21]
                },
                {
                    id: 19,
                    x: 809,
                    y: 727,
                    neighbours: [17,18,26]
                },
                {
                    id: 20,
                    x: 706,
                    y: 1135,
                    neighbours: [13,14,21]
                },
                {
                    id: 21,
                    x: 784,
                    y: 1139,
                    neighbours: [18,20,22,28]
                },
                {
                    id: 22,
                    x: 855,
                    y: 1513,
                    neighbours: [21,23,28]
                },
                {
                    id: 23,
                    x: 903,
                    y: 1626,
                    neighbours: [15,22,24,31]
                },
                {
                    id: 24,
                    x: 902,
                    y: 1780,
                    neighbours: [16,23,32]
                },
                {
                    id: 25,
                    x: 1201,
                    y: 106,
                    neighbours: [17,26,34]
                },
                {
                    id: 26,
                    x: 1230,
                    y: 633,
                    neighbours: [19,25,27]
                },
                {
                    id: 27,
                    x: 1303,
                    y: 679,
                    neighbours: [26,28,35]
                },
                {
                    id: 28,
                    x: 1062,
                    y: 1196,
                    neighbours: [21,22,27,29]
                },
                {
                    id: 29,
                    x: 1205,
                    y: 1201,
                    neighbours: [28,30,33]
                },
                {
                    id: 30,
                    x: 1324,
                    y: 1157,
                    neighbours: [29,36,37]
                },
                {
                    id: 31,
                    x: 1144,
                    y: 1626,
                    neighbours: [23,32,33]
                },
                {
                    id: 32,
                    x: 1146,
                    y: 1782,
                    neighbours: [24,31,41]
                },
                {
                    id: 33,
                    x: 1366,
                    y: 1630,
                    neighbours: [29,31,40]
                },
                {
                    id: 34,
                    x: 1438,
                    y: 121,
                    neighbours: [25,35,42]
                },
                {
                    id: 35,
                    x: 1436,
                    y: 653,
                    neighbours: [27,34,36,43]
                },
                {
                    id: 36,
                    x: 1435,
                    y: 1106,
                    neighbours: [30,35,37,44]
                },
                {
                    id: 37,
                    x: 1433,
                    y: 1183,
                    neighbours: [30,36,38,45]
                },
                {
                    id: 38,
                    x: 1431,
                    y: 1402,
                    neighbours: [37,39,46]
                },
                {
                    id: 39,
                    x: 1433,
                    y: 1479,
                    neighbours: [38,40,47]
                },
                {
                    id: 40,
                    x: 1433,
                    y: 1630,
                    neighbours: [33,39,41,48]
                },
                {
                    id: 41,
                    x: 1430,
                    y: 1788,
                    neighbours: [32,40,49]
                },
                {
                    id: 42,
                    x: 1720,
                    y: 122,
                    neighbours: [34,43,50]
                },
                {
                    id: 43,
                    x: 1723,
                    y: 660,
                    neighbours: [35,42,44,51]
                },
                {
                    id: 44,
                    x: 1718,
                    y: 1109,
                    neighbours: [36,43,45,52]
                },
                {
                    id: 45,
                    x: 1718,
                    y: 1187,
                    neighbours: [37,44,46,53]
                },
                {
                    id: 46,
                    x: 1716,
                    y: 1403,
                    neighbours: [38,45,47,54]
                },
                {
                    id: 47,
                    x: 1718,
                    y: 1485,
                    neighbours: [39,46,48,55]
                },
                {
                    id: 48,
                    x: 1716,
                    y: 1634,
                    neighbours: [40,47,49,56]
                },
                {
                    id: 49,
                    x: 1715,
                    y: 1788,
                    neighbours: [41,48,57]
                },
                {
                    id: 50,
                    x: 2015,
                    y: 123,
                    neighbours: [42,51]
                },
                {
                    id: 51,
                    x: 2010,
                    y: 665,
                    neighbours: [43,50,52]
                },
                {
                    id: 52,
                    x: 2005,
                    y: 1111,
                    neighbours: [44,51,53]
                },
                {
                    id: 53,
                    x: 2004,
                    y: 1192,
                    neighbours: [45,52,54]
                },
                {
                    id: 54,
                    x: 2002,
                    y: 1408,
                    neighbours: [46,53,55]
                },
                {
                    id: 55,
                    x: 2002,
                    y: 1489,
                    neighbours: [47,54,56]
                },
                {
                    id: 56,
                    x: 2000,
                    y: 1637,
                    neighbours: [48,55,57]
                },
                {
                    id: 57,
                    x: 2000,
                    y: 1790,
                    neighbours: [49,56]
                }
            ];
        case 'london':
            return [
                {
                    id: 1,
                    x: 152,
                    y: 727,
                    neighbours: [2,6]
                },
                {
                    id: 2,
                    x: 260,
                    y: 835,
                    neighbours: [1,3,7]
                },
                {
                    id: 3,
                    x: 355,
                    y: 920,
                    neighbours: [2,4,8,9]
                },
                {
                    id: 4,
                    x: 107,
                    y: 970,
                    neighbours: [3,5]
                },
                {
                    id: 5,
                    x: 162,
                    y: 1435,
                    neighbours: [4,9]
                },
                {
                    id: 6,
                    x: 394,
                    y: 658,
                    neighbours: [1,7,18]
                },
                {
                    id: 7,
                    x: 432,
                    y: 796,
                    neighbours: [2,6,8,16]
                },
                {
                    id: 8,
                    x: 459,
                    y: 906,
                    neighbours: [3,7,11]
                },
                {
                    id: 9,
                    x: 494,
                    y: 1237,
                    neighbours: [3,5,10,12,24]
                },
                {
                    id: 10,
                    x: 590,
                    y: 1383,
                    neighbours: [9,13,15]
                },
                {
                    id: 11,
                    x: 690,
                    y: 880,
                    neighbours: [8,12,17]
                },
                {
                    id: 12,
                    x: 824,
                    y: 1030,
                    neighbours: [9,11,17]
                },
                {
                    id: 13,
                    x: 1021,
                    y: 1308,
                    neighbours: [10,14,25,26]
                },
                {
                    id: 14,
                    x: 1001,
                    y: 1500,
                    neighbours: [13,15,27]
                },
                {
                    id: 15,
                    x: 929,
                    y: 1685,
                    neighbours: [10,14,29]
                },
                {
                    id: 16,
                    x: 864,
                    y: 636,
                    neighbours: [7,17,20]
                },
                {
                    id: 17,
                    x: 982,
                    y: 828,
                    neighbours: [11,12,16,22]
                },
                {
                    id: 18,
                    x: 1071,
                    y: 390,
                    neighbours: [6,19,38]
                },
                {
                    id: 19,
                    x: 1120,
                    y: 459,
                    neighbours: [18,20,39]
                },
                {
                    id: 20,
                    x: 1133,
                    y: 500,
                    neighbours: [16,19,21]
                },
                {
                    id: 21,
                    x: 1275,
                    y: 778,
                    neighbours: [20,22,39]
                },
                {
                    id: 22,
                    x: 1110,
                    y: 807,
                    neighbours: [17,21,23]
                },
                {
                    id: 23,
                    x: 1147,
                    y: 925,
                    neighbours: [22,24,40]
                },
                {
                    id: 24,
                    x: 1113,
                    y: 985,
                    neighbours: [9,23,25]
                },
                {
                    id: 25,
                    x: 1144,
                    y: 1033,
                    neighbours: [13,24,26,41]
                },
                {
                    id: 26,
                    x: 1298,
                    y: 1257,
                    neighbours: [13,25,27]
                },
                {
                    id: 27,
                    x: 1397,
                    y: 1376,
                    neighbours: [14,26,28,41]
                },
                {
                    id: 28,
                    x: 1478,
                    y: 1476,
                    neighbours: [27,29,30]
                },
                {
                    id: 29,
                    x: 1412,
                    y: 1616,
                    neighbours: [15,28]
                },
                {
                    id: 30,
                    x: 1770,
                    y: 1508,
                    neighbours: [28,31,32]
                },
                {
                    id: 31,
                    x: 1992,
                    y: 1070,
                    neighbours: [30,32,35,36]
                },
                {
                    id: 32,
                    x: 1740,
                    y: 1028,
                    neighbours: [30,31,33,41]
                },
                {
                    id: 33,
                    x: 1770,
                    y: 970,
                    neighbours: [32,34,35,37]
                },
                {
                    id: 34,
                    x: 1711,
                    y: 946,
                    neighbours: [33,38,39]
                },
                {
                    id: 35,
                    x: 1990,
                    y: 890,
                    neighbours: [31,33,36]
                },
                {
                    id: 36,
                    x: 2025,
                    y: 868,
                    neighbours: [31,35,37]
                },
                {
                    id: 37,
                    x: 1922,
                    y: 638,
                    neighbours: [33,36,38]
                },
                {
                    id: 38,
                    x: 1726,
                    y: 524,
                    neighbours: [18,34,37]
                },
                {
                    id: 39,
                    x: 1394,
                    y: 808,
                    neighbours: [20,21,34,40]
                },
                {
                    id: 40,
                    x: 1405,
                    y: 905,
                    neighbours: [23,39,41]
                },
                {
                    id: 41,
                    x: 1415,
                    y: 987,
                    neighbours: [25,27,32,40]
                }
            ];
        case 'paris':
            return [

            ];
        default:
            return [];    
        }

}