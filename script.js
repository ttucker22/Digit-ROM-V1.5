// Finger DIP Joint data
const DIPData = [
    { flexion: '<-30', dtFlexion: 45, extension: '<-70', dtExtension: 45, ankylosis: '<-30', dtAnkylosis: 45 },
    { flexion: -30, dtFlexion: 45, extension: -70, dtExtension: 45, ankylosis: -30, dtAnkylosis: 45 },
    { flexion: -29, dtFlexion: 45, extension: -69, dtExtension: 44, ankylosis: -29, dtAnkylosis: 45 },
    { flexion: -28, dtFlexion: 44, extension: -68, dtExtension: 43, ankylosis: -28, dtAnkylosis: 44 },
    { flexion: -27, dtFlexion: 44, extension: -67, dtExtension: 43, ankylosis: -27, dtAnkylosis: 44 },
    { flexion: -26, dtFlexion: 44, extension: -66, dtExtension: 42, ankylosis: -26, dtAnkylosis: 44 },
    { flexion: -25, dtFlexion: 44, extension: -65, dtExtension: 41, ankylosis: -25, dtAnkylosis: 44 },
    { flexion: -24, dtFlexion: 43, extension: -64, dtExtension: 40, ankylosis: -24, dtAnkylosis: 43 },
    { flexion: -23, dtFlexion: 43, extension: -63, dtExtension: 39, ankylosis: -23, dtAnkylosis: 43 },
    { flexion: -22, dtFlexion: 43, extension: -62, dtExtension: 39, ankylosis: -22, dtAnkylosis: 43 },
    { flexion: -21, dtFlexion: 42, extension: -61, dtExtension: 38, ankylosis: -21, dtAnkylosis: 42 },
    { flexion: -20, dtFlexion: 42, extension: -60, dtExtension: 37, ankylosis: -20, dtAnkylosis: 42 },
    { flexion: -19, dtFlexion: 42, extension: -59, dtExtension: 36, ankylosis: -19, dtAnkylosis: 42 },
    { flexion: -18, dtFlexion: 41, extension: -58, dtExtension: 35, ankylosis: -18, dtAnkylosis: 41 },
    { flexion: -17, dtFlexion: 41, extension: -57, dtExtension: 35, ankylosis: -17, dtAnkylosis: 41 },
    { flexion: -16, dtFlexion: 41, extension: -56, dtExtension: 34, ankylosis: -16, dtAnkylosis: 41 },
    { flexion: -15, dtFlexion: 41, extension: -55, dtExtension: 33, ankylosis: -15, dtAnkylosis: 41 },
    { flexion: -14, dtFlexion: 40, extension: -54, dtExtension: 32, ankylosis: -14, dtAnkylosis: 40 },
    { flexion: -13, dtFlexion: 40, extension: -53, dtExtension: 31, ankylosis: -13, dtAnkylosis: 40 },
    { flexion: -12, dtFlexion: 40, extension: -52, dtExtension: 31, ankylosis: -12, dtAnkylosis: 40 },
    { flexion: -11, dtFlexion: 39, extension: -51, dtExtension: 30, ankylosis: -11, dtAnkylosis: 39 },
    { flexion: -10, dtFlexion: 39, extension: -50, dtExtension: 29, ankylosis: -10, dtAnkylosis: 39 },
    { flexion: -9, dtFlexion: 39, extension: -49, dtExtension: 28, ankylosis: -9, dtAnkylosis: 39 },
    { flexion: -8, dtFlexion: 38, extension: -48, dtExtension: 27, ankylosis: -8, dtAnkylosis: 38 },
    { flexion: -7, dtFlexion: 38, extension: -47, dtExtension: 26, ankylosis: -7, dtAnkylosis: 38 },
    { flexion: -6, dtFlexion: 38, extension: -46, dtExtension: 25, ankylosis: -6, dtAnkylosis: 38 },
    { flexion: -5, dtFlexion: 38, extension: -45, dtExtension: 25, ankylosis: -5, dtAnkylosis: 38 },
    { flexion: -4, dtFlexion: 37, extension: -44, dtExtension: 24, ankylosis: -4, dtAnkylosis: 37 },
    { flexion: -3, dtFlexion: 37, extension: -43, dtExtension: 23, ankylosis: -3, dtAnkylosis: 37 },
    { flexion: -2, dtFlexion: 37, extension: -42, dtExtension: 22, ankylosis: -2, dtAnkylosis: 37 },
    { flexion: -1, dtFlexion: 36, extension: -41, dtExtension: 21, ankylosis: -1, dtAnkylosis: 36 },
    { flexion: 0, dtFlexion: 36, extension: -40, dtExtension: 20, ankylosis: 0, dtAnkylosis: 36 },
    { flexion: 1, dtFlexion: 36, extension: -39, dtExtension: 19, ankylosis: 1, dtAnkylosis: 36 },
    { flexion: 2, dtFlexion: 35, extension: -38, dtExtension: 18, ankylosis: 2, dtAnkylosis: 35 },
    { flexion: 3, dtFlexion: 35, extension: -37, dtExtension: 18, ankylosis: 3, dtAnkylosis: 35 },
    { flexion: 4, dtFlexion: 34, extension: -36, dtExtension: 17, ankylosis: 4, dtAnkylosis: 35 },
    { flexion: 5, dtFlexion: 34, extension: -35, dtExtension: 16, ankylosis: 5, dtAnkylosis: 35 },
    { flexion: 6, dtFlexion: 33, extension: -34, dtExtension: 15, ankylosis: 6, dtAnkylosis: 34 },
    { flexion: 7, dtFlexion: 33, extension: -33, dtExtension: 14, ankylosis: 7, dtAnkylosis: 34 },
    { flexion: 8, dtFlexion: 32, extension: -32, dtExtension: 14, ankylosis: 8, dtAnkylosis: 34 },
    { flexion: 9, dtFlexion: 32, extension: -31, dtExtension: 13, ankylosis: 9, dtAnkylosis: 33 },
    { flexion: 10, dtFlexion: 31, extension: -30, dtExtension: 12, ankylosis: 10, dtAnkylosis: 33 },
    { flexion: 11, dtFlexion: 31, extension: -29, dtExtension: 11, ankylosis: 11, dtAnkylosis: 33 },
    { flexion: 12, dtFlexion: 30, extension: -28, dtExtension: 10, ankylosis: 12, dtAnkylosis: 32 },
    { flexion: 13, dtFlexion: 30, extension: -27, dtExtension: 10, ankylosis: 13, dtAnkylosis: 32 },
    { flexion: 14, dtFlexion: 29, extension: -26, dtExtension: 9, ankylosis: 14, dtAnkylosis: 32 },
    { flexion: 15, dtFlexion: 29, extension: -25, dtExtension: 8, ankylosis: 15, dtAnkylosis: 32 },
    { flexion: 16, dtFlexion: 28, extension: -24, dtExtension: 7, ankylosis: 16, dtAnkylosis: 31 },
    { flexion: 17, dtFlexion: 28, extension: -23, dtExtension: 6, ankylosis: 17, dtAnkylosis: 31 },
    { flexion: 18, dtFlexion: 27, extension: -22, dtExtension: 6, ankylosis: 18, dtAnkylosis: 31 },
    { flexion: 19, dtFlexion: 27, extension: -21, dtExtension: 5, ankylosis: 19, dtAnkylosis: 30 },
    { flexion: 20, dtFlexion: 26, extension: -20, dtExtension: 4, ankylosis: 20, dtAnkylosis: 30 },
    { flexion: 21, dtFlexion: 26, extension: -19, dtExtension: 4, ankylosis: 21, dtAnkylosis: 30 },
    { flexion: 22, dtFlexion: 25, extension: -18, dtExtension: 4, ankylosis: 22, dtAnkylosis: 31 },
    { flexion: 23, dtFlexion: 25, extension: -17, dtExtension: 3, ankylosis: 23, dtAnkylosis: 31 },
    { flexion: 24, dtFlexion: 24, extension: -16, dtExtension: 3, ankylosis: 24, dtAnkylosis: 31 },
    { flexion: 25, dtFlexion: 24, extension: -15, dtExtension: 3, ankylosis: 25, dtAnkylosis: 32 },
    { flexion: 26, dtFlexion: 23, extension: -14, dtExtension: 3, ankylosis: 26, dtAnkylosis: 32 },
    { flexion: 27, dtFlexion: 23, extension: -13, dtExtension: 3, ankylosis: 27, dtAnkylosis: 32 },
    { flexion: 28, dtFlexion: 22, extension: -12, dtExtension: 2, ankylosis: 28, dtAnkylosis: 32 },
    { flexion: 29, dtFlexion: 22, extension: -11, dtExtension: 2, ankylosis: 29, dtAnkylosis: 33 },
    { flexion: 30, dtFlexion: 21, extension: -10, dtExtension: 2, ankylosis: 30, dtAnkylosis: 33 },
    { flexion: 31, dtFlexion: 20, extension: -9, dtExtension: 2, ankylosis: 31, dtAnkylosis: 33 },
    { flexion: 32, dtFlexion: 20, extension: -8, dtExtension: 2, ankylosis: 32, dtAnkylosis: 33 },
    { flexion: 33, dtFlexion: 19, extension: -7, dtExtension: 1, ankylosis: 33, dtAnkylosis: 34 },
    { flexion: 34, dtFlexion: 19, extension: -6, dtExtension: 1, ankylosis: 34, dtAnkylosis: 34 },
    { flexion: 35, dtFlexion: 18, extension: -5, dtExtension: 1, ankylosis: 35, dtAnkylosis: 34 },
    { flexion: 36, dtFlexion: 17, extension: -4, dtExtension: 1, ankylosis: 36, dtAnkylosis: 34 },
    { flexion: 37, dtFlexion: 17, extension: -3, dtExtension: 1, ankylosis: 37, dtAnkylosis: 34 },
    { flexion: 38, dtFlexion: 16, extension: -2, dtExtension: 0, ankylosis: 38, dtAnkylosis: 34 },
    { flexion: 39, dtFlexion: 16, extension: -1, dtExtension: 0, ankylosis: 39, dtAnkylosis: 35 },
    { flexion: 40, dtFlexion: 15, extension: 0, dtExtension: 0, ankylosis: 40, dtAnkylosis: 35 },
    { flexion: 41, dtFlexion: 15, extension: 1, dtExtension: 0, ankylosis: 41, dtAnkylosis: 35 },
    { flexion: 42, dtFlexion: 14, extension: 2, dtExtension: 0, ankylosis: 42, dtAnkylosis: 36 },
    { flexion: 43, dtFlexion: 14, extension: 3, dtExtension: 0, ankylosis: 43, dtAnkylosis: 36 },
    { flexion: 44, dtFlexion: 13, extension: 4, dtExtension: 0, ankylosis: 44, dtAnkylosis: 37 },
    { flexion: 45, dtFlexion: 13, extension: 5, dtExtension: 0, ankylosis: 45, dtAnkylosis: 37 },
    { flexion: 46, dtFlexion: 12, extension: 6, dtExtension: 0, ankylosis: 46, dtAnkylosis: 37 },
    { flexion: 47, dtFlexion: 12, extension: 7, dtExtension: 0, ankylosis: 47, dtAnkylosis: 38 },
    { flexion: 48, dtFlexion: 11, extension: 8, dtExtension: 0, ankylosis: 48, dtAnkylosis: 38 },
    { flexion: 49, dtFlexion: 11, extension: 9, dtExtension: 0, ankylosis: 49, dtAnkylosis: 39 },
    { flexion: 50, dtFlexion: 10, extension: 10, dtExtension: 0, ankylosis: 50, dtAnkylosis: 39 },
    { flexion: 51, dtFlexion: 10, extension: 11, dtExtension: 0, ankylosis: 51, dtAnkylosis: 39 },
    { flexion: 52, dtFlexion: 9, extension: 12, dtExtension: 0, ankylosis: 52, dtAnkylosis: 40 },
    { flexion: 53, dtFlexion: 9, extension: 13, dtExtension: 0, ankylosis: 53, dtAnkylosis: 40 },
    { flexion: 54, dtFlexion: 8, extension: 14, dtExtension: 0, ankylosis: 54, dtAnkylosis: 40 },
    { flexion: 55, dtFlexion: 8, extension: 15, dtExtension: 0, ankylosis: 55, dtAnkylosis: 41 },
    { flexion: 56, dtFlexion: 7, extension: 16, dtExtension: 0, ankylosis: 56, dtAnkylosis: 41 },
    { flexion: 57, dtFlexion: 7, extension: 17, dtExtension: 0, ankylosis: 57, dtAnkylosis: 41 },
    { flexion: 58, dtFlexion: 6, extension: 18, dtExtension: 0, ankylosis: 58, dtAnkylosis: 41 },
    { flexion: 59, dtFlexion: 6, extension: 19, dtExtension: 0, ankylosis: 59, dtAnkylosis: 42 },
    { flexion: 60, dtFlexion: 5, extension: 20, dtExtension: 0, ankylosis: 60, dtAnkylosis: 42 },
    { flexion: 61, dtFlexion: 5, extension: 21, dtExtension: 0, ankylosis: 61, dtAnkylosis: 42 },
    { flexion: 62, dtFlexion: 4, extension: 22, dtExtension: 0, ankylosis: 62, dtAnkylosis: 43 },
    { flexion: 63, dtFlexion: 4, extension: 23, dtExtension: 0, ankylosis: 63, dtAnkylosis: 43 },
    { flexion: 64, dtFlexion: 3, extension: 24, dtExtension: 0, ankylosis: 64, dtAnkylosis: 43 },
    { flexion: 65, dtFlexion: 3, extension: 25, dtExtension: 0, ankylosis: 65, dtAnkylosis: 44 },
    { flexion: 66, dtFlexion: 2, extension: 26, dtExtension: 0, ankylosis: 66, dtAnkylosis: 44 },
    { flexion: 67, dtFlexion: 2, extension: 27, dtExtension: 0, ankylosis: 67, dtAnkylosis: 44 },
    { flexion: 68, dtFlexion: 1, extension: 28, dtExtension: 0, ankylosis: 68, dtAnkylosis: 44 },
    { flexion: 69, dtFlexion: 1, extension: 29, dtExtension: 0, ankylosis: 69, dtAnkylosis: 45 },
    { flexion: 70, dtFlexion: 0, extension: 30, dtExtension: 0, ankylosis: 70, dtAnkylosis: 45 },
    { flexion: '>70', dtFlexion: 0, extension: '>30', dtExtension: 0, ankylosis: '>70', dtAnkylosis: 45 }
];

// Finger PIP Joint data
const PIPData = [
    { flexion: '<-30', dtFlexion: 80, extension: '<-100', dtExtension: 80, ankylosis: '<-30', dtAnkylosis: 80 },
    { flexion: -30, dtFlexion: 80, extension: -100, dtExtension: 80, ankylosis: -30, dtAnkylosis: 80 },
    { flexion: -29, dtFlexion: 79, extension: -99, dtExtension: 79, ankylosis: -29, dtAnkylosis: 79 },
    { flexion: -28, dtFlexion: 79, extension: -98, dtExtension: 78, ankylosis: -28, dtAnkylosis: 79 },
    { flexion: -27, dtFlexion: 78, extension: -97, dtExtension: 77, ankylosis: -27, dtAnkylosis: 78 },
    { flexion: -26, dtFlexion: 77, extension: -96, dtExtension: 76, ankylosis: -26, dtAnkylosis: 77 },
    { flexion: -25, dtFlexion: 76, extension: -95, dtExtension: 75, ankylosis: -25, dtAnkylosis: 76 },
    { flexion: -24, dtFlexion: 76, extension: -94, dtExtension: 73, ankylosis: -24, dtAnkylosis: 76 },
    { flexion: -23, dtFlexion: 75, extension: -93, dtExtension: 72, ankylosis: -23, dtAnkylosis: 75 },
    { flexion: -22, dtFlexion: 74, extension: -92, dtExtension: 71, ankylosis: -22, dtAnkylosis: 74 },
    { flexion: -21, dtFlexion: 74, extension: -91, dtExtension: 70, ankylosis: -21, dtAnkylosis: 74 },
    { flexion: -20, dtFlexion: 73, extension: -90, dtExtension: 69, ankylosis: -20, dtAnkylosis: 73 },
    { flexion: -19, dtFlexion: 72, extension: -89, dtExtension: 68, ankylosis: -19, dtAnkylosis: 72 },
    { flexion: -18, dtFlexion: 72, extension: -88, dtExtension: 67, ankylosis: -18, dtAnkylosis: 72 },
    { flexion: -17, dtFlexion: 71, extension: -87, dtExtension: 66, ankylosis: -17, dtAnkylosis: 71 },
    { flexion: -16, dtFlexion: 70, extension: -86, dtExtension: 65, ankylosis: -16, dtAnkylosis: 70 },
    { flexion: -15, dtFlexion: 69, extension: -85, dtExtension: 64, ankylosis: -15, dtAnkylosis: 69 },
    { flexion: -14, dtFlexion: 69, extension: -84, dtExtension: 62, ankylosis: -14, dtAnkylosis: 69 },
    { flexion: -13, dtFlexion: 68, extension: -83, dtExtension: 61, ankylosis: -13, dtAnkylosis: 68 },
    { flexion: -12, dtFlexion: 67, extension: -82, dtExtension: 60, ankylosis: -12, dtAnkylosis: 67 },
    { flexion: -11, dtFlexion: 67, extension: -81, dtExtension: 59, ankylosis: -11, dtAnkylosis: 67 },
    { flexion: -10, dtFlexion: 66, extension: -80, dtExtension: 58, ankylosis: -10, dtAnkylosis: 66 },
    { flexion: -9, dtFlexion: 65, extension: -79, dtExtension: 57, ankylosis: -9, dtAnkylosis: 65 },
    { flexion: -8, dtFlexion: 65, extension: -78, dtExtension: 56, ankylosis: -8, dtAnkylosis: 65 },
    { flexion: -7, dtFlexion: 64, extension: -77, dtExtension: 55, ankylosis: -7, dtAnkylosis: 64 },
    { flexion: -6, dtFlexion: 64, extension: -76, dtExtension: 54, ankylosis: -6, dtAnkylosis: 64 },
    { flexion: -5, dtFlexion: 63, extension: -75, dtExtension: 53, ankylosis: -5, dtAnkylosis: 63 },
    { flexion: -4, dtFlexion: 62, extension: -74, dtExtension: 51, ankylosis: -4, dtAnkylosis: 62 },
    { flexion: -3, dtFlexion: 62, extension: -73, dtExtension: 50, ankylosis: -3, dtAnkylosis: 62 },
    { flexion: -2, dtFlexion: 61, extension: -72, dtExtension: 49, ankylosis: -2, dtAnkylosis: 61 },
    { flexion: -1, dtFlexion: 60, extension: -71, dtExtension: 48, ankylosis: -1, dtAnkylosis: 60 },
    { flexion: 0, dtFlexion: 60, extension: -70, dtExtension: 47, ankylosis: 0, dtAnkylosis: 60 },
    { flexion: 1, dtFlexion: 59, extension: -69, dtExtension: 46, ankylosis: 1, dtAnkylosis: 60 },
    { flexion: 2, dtFlexion: 59, extension: -68, dtExtension: 45, ankylosis: 2, dtAnkylosis: 59 },
    { flexion: 3, dtFlexion: 58, extension: -67, dtExtension: 44, ankylosis: 3, dtAnkylosis: 59 },
    { flexion: 4, dtFlexion: 58, extension: -66, dtExtension: 43, ankylosis: 4, dtAnkylosis: 59 },
    { flexion: 5, dtFlexion: 57, extension: -65, dtExtension: 42, ankylosis: 5, dtAnkylosis: 58 },
    { flexion: 6, dtFlexion: 56, extension: -64, dtExtension: 40, ankylosis: 6, dtAnkylosis: 58 },
    { flexion: 7, dtFlexion: 56, extension: -63, dtExtension: 39, ankylosis: 7, dtAnkylosis: 58 },
    { flexion: 8, dtFlexion: 55, extension: -62, dtExtension: 38, ankylosis: 8, dtAnkylosis: 58 },
    { flexion: 9, dtFlexion: 55, extension: -61, dtExtension: 37, ankylosis: 9, dtAnkylosis: 57 },
    { flexion: 10, dtFlexion: 54, extension: -60, dtExtension: 36, ankylosis: 10, dtAnkylosis: 57 },
    { flexion: 11, dtFlexion: 53, extension: -59, dtExtension: 35, ankylosis: 11, dtAnkylosis: 57 },
    { flexion: 12, dtFlexion: 53, extension: -58, dtExtension: 34, ankylosis: 12, dtAnkylosis: 57 },
    { flexion: 13, dtFlexion: 52, extension: -57, dtExtension: 33, ankylosis: 13, dtAnkylosis: 56 },
    { flexion: 14, dtFlexion: 52, extension: -56, dtExtension: 32, ankylosis: 14, dtAnkylosis: 56 },
    { flexion: 15, dtFlexion: 51, extension: -55, dtExtension: 31, ankylosis: 15, dtAnkylosis: 56 },
    { flexion: 16, dtFlexion: 50, extension: -54, dtExtension: 29, ankylosis: 16, dtAnkylosis: 56 },
    { flexion: 17, dtFlexion: 50, extension: -53, dtExtension: 28, ankylosis: 17, dtAnkylosis: 56 },
    { flexion: 18, dtFlexion: 49, extension: -52, dtExtension: 27, ankylosis: 18, dtAnkylosis: 55 },
    { flexion: 19, dtFlexion: 49, extension: -51, dtExtension: 26, ankylosis: 19, dtAnkylosis: 55 },
    { flexion: 20, dtFlexion: 48, extension: -50, dtExtension: 25, ankylosis: 20, dtAnkylosis: 55 },
    { flexion: 21, dtFlexion: 47, extension: -49, dtExtension: 24, ankylosis: 21, dtAnkylosis: 55 },
    { flexion: 22, dtFlexion: 47, extension: -48, dtExtension: 23, ankylosis: 22, dtAnkylosis: 55 },
    { flexion: 23, dtFlexion: 46, extension: -47, dtExtension: 22, ankylosis: 23, dtAnkylosis: 54 },
    { flexion: 24, dtFlexion: 46, extension: -46, dtExtension: 21, ankylosis: 24, dtAnkylosis: 54 },
    { flexion: 25, dtFlexion: 45, extension: -45, dtExtension: 20, ankylosis: 25, dtAnkylosis: 54 },
    { flexion: 26, dtFlexion: 44, extension: -44, dtExtension: 18, ankylosis: 26, dtAnkylosis: 54 },
    { flexion: 27, dtFlexion: 44, extension: -43, dtExtension: 17, ankylosis: 27, dtAnkylosis: 54 },
    { flexion: 28, dtFlexion: 43, extension: -42, dtExtension: 16, ankylosis: 28, dtAnkylosis: 53 },
    { flexion: 29, dtFlexion: 43, extension: -41, dtExtension: 15, ankylosis: 29, dtAnkylosis: 53 },
    { flexion: 30, dtFlexion: 42, extension: -40, dtExtension: 14, ankylosis: 30, dtAnkylosis: 53 },
    { flexion: 31, dtFlexion: 41, extension: -39, dtExtension: 14, ankylosis: 31, dtAnkylosis: 53 },
    { flexion: 32, dtFlexion: 41, extension: -38, dtExtension: 13, ankylosis: 32, dtAnkylosis: 52 },
    { flexion: 33, dtFlexion: 40, extension: -37, dtExtension: 13, ankylosis: 33, dtAnkylosis: 52 },
    { flexion: 34, dtFlexion: 40, extension: -36, dtExtension: 13, ankylosis: 34, dtAnkylosis: 52 },
    { flexion: 35, dtFlexion: 39, extension: -35, dtExtension: 13, ankylosis: 35, dtAnkylosis: 51 },
    { flexion: 36, dtFlexion: 38, extension: -34, dtExtension: 12, ankylosis: 36, dtAnkylosis: 51 },
    { flexion: 37, dtFlexion: 38, extension: -33, dtExtension: 12, ankylosis: 37, dtAnkylosis: 51 },
    { flexion: 38, dtFlexion: 37, extension: -32, dtExtension: 12, ankylosis: 38, dtAnkylosis: 51 },
    { flexion: 39, dtFlexion: 37, extension: -31, dtExtension: 11, ankylosis: 39, dtAnkylosis: 50 },
    { flexion: 40, dtFlexion: 36, extension: -30, dtExtension: 11, ankylosis: 40, dtAnkylosis: 50 },
    { flexion: 41, dtFlexion: 35, extension: -29, dtExtension: 11, ankylosis: 41, dtAnkylosis: 51 },
    { flexion: 42, dtFlexion: 35, extension: -28, dtExtension: 10, ankylosis: 42, dtAnkylosis: 51 },
    { flexion: 43, dtFlexion: 34, extension: -27, dtExtension: 10, ankylosis: 43, dtAnkylosis: 52 },
    { flexion: 44, dtFlexion: 34, extension: -26, dtExtension: 9, ankylosis: 44, dtAnkylosis: 52 },
    { flexion: 45, dtFlexion: 33, extension: -25, dtExtension: 9, ankylosis: 45, dtAnkylosis: 53 },
    { flexion: 46, dtFlexion: 32, extension: -24, dtExtension: 9, ankylosis: 46, dtAnkylosis: 53 },
    { flexion: 47, dtFlexion: 32, extension: -23, dtExtension: 8, ankylosis: 47, dtAnkylosis: 54 },
    { flexion: 48, dtFlexion: 31, extension: -22, dtExtension: 8, ankylosis: 48, dtAnkylosis: 54 },
    { flexion: 49, dtFlexion: 31, extension: -21, dtExtension: 7, ankylosis: 49, dtAnkylosis: 55 },
    { flexion: 50, dtFlexion: 30, extension: -20, dtExtension: 7, ankylosis: 50, dtAnkylosis: 55 },
    { flexion: 51, dtFlexion: 29, extension: -19, dtExtension: 7, ankylosis: 51, dtAnkylosis: 56 },
    { flexion: 52, dtFlexion: 29, extension: -18, dtExtension: 6, ankylosis: 52, dtAnkylosis: 56 },
    { flexion: 53, dtFlexion: 28, extension: -17, dtExtension: 6, ankylosis: 53, dtAnkylosis: 57 },
    { flexion: 54, dtFlexion: 28, extension: -16, dtExtension: 5, ankylosis: 54, dtAnkylosis: 57 },
    { flexion: 55, dtFlexion: 27, extension: -15, dtExtension: 5, ankylosis: 55, dtAnkylosis: 58 },
    { flexion: 56, dtFlexion: 26, extension: -14, dtExtension: 5, ankylosis: 56, dtAnkylosis: 58 },
    { flexion: 57, dtFlexion: 26, extension: -13, dtExtension: 4, ankylosis: 57, dtAnkylosis: 59 },
    { flexion: 58, dtFlexion: 25, extension: -12, dtExtension: 4, ankylosis: 58, dtAnkylosis: 59 },
    { flexion: 59, dtFlexion: 25, extension: -11, dtExtension: 3, ankylosis: 59, dtAnkylosis: 60 },
    { flexion: 60, dtFlexion: 24, extension: -10, dtExtension: 3, ankylosis: 60, dtAnkylosis: 60 },
    { flexion: 61, dtFlexion: 23, extension: -9, dtExtension: 3, ankylosis: 61, dtAnkylosis: 61 },
    { flexion: 62, dtFlexion: 23, extension: -8, dtExtension: 2, ankylosis: 62, dtAnkylosis: 61 },
    { flexion: 63, dtFlexion: 22, extension: -7, dtExtension: 2, ankylosis: 63, dtAnkylosis: 62 },
    { flexion: 64, dtFlexion: 22, extension: -6, dtExtension: 2, ankylosis: 64, dtAnkylosis: 62 },
    { flexion: 65, dtFlexion: 21, extension: -5, dtExtension: 2, ankylosis: 65, dtAnkylosis: 63 },
    { flexion: 66, dtFlexion: 20, extension: -4, dtExtension: 1, ankylosis: 66, dtAnkylosis: 63 },
    { flexion: 67, dtFlexion: 20, extension: -3, dtExtension: 1, ankylosis: 67, dtAnkylosis: 64 },
    { flexion: 68, dtFlexion: 19, extension: -2, dtExtension: 1, ankylosis: 68, dtAnkylosis: 64 },
    { flexion: 69, dtFlexion: 19, extension: -1, dtExtension: 0, ankylosis: 69, dtAnkylosis: 65 },
    { flexion: 70, dtFlexion: 18, extension: 0, dtExtension: 0, ankylosis: 70, dtAnkylosis: 65 },
    { flexion: 71, dtFlexion: 17, extension: 1, dtExtension: 0, ankylosis: 71, dtAnkylosis: 66 },
    { flexion: 72, dtFlexion: 17, extension: 2, dtExtension: 0, ankylosis: 72, dtAnkylosis: 66 },
    { flexion: 73, dtFlexion: 16, extension: 3, dtExtension: 0, ankylosis: 73, dtAnkylosis: 67 },
    { flexion: 74, dtFlexion: 16, extension: 4, dtExtension: 0, ankylosis: 74, dtAnkylosis: 67 },
    { flexion: 75, dtFlexion: 15, extension: 5, dtExtension: 0, ankylosis: 75, dtAnkylosis: 68 },
    { flexion: 76, dtFlexion: 14, extension: 6, dtExtension: 0, ankylosis: 76, dtAnkylosis: 68 },
    { flexion: 77, dtFlexion: 14, extension: 7, dtExtension: 0, ankylosis: 77, dtAnkylosis: 69 },
    { flexion: 78, dtFlexion: 13, extension: 8, dtExtension: 0, ankylosis: 78, dtAnkylosis: 69 },
    { flexion: 79, dtFlexion: 13, extension: 9, dtExtension: 0, ankylosis: 79, dtAnkylosis: 70 },
    { flexion: 80, dtFlexion: 12, extension: 10, dtExtension: 0, ankylosis: 80, dtAnkylosis: 70 },
    { flexion: 81, dtFlexion: 11, extension: 11, dtExtension: 0, ankylosis: 81, dtAnkylosis: 71 },
    { flexion: 82, dtFlexion: 11, extension: 12, dtExtension: 0, ankylosis: 82, dtAnkylosis: 71 },
    { flexion: 83, dtFlexion: 10, extension: 13, dtExtension: 0, ankylosis: 83, dtAnkylosis: 72 },
    { flexion: 84, dtFlexion: 10, extension: 14, dtExtension: 0, ankylosis: 84, dtAnkylosis: 72 },
    { flexion: 85, dtFlexion: 9, extension: 15, dtExtension: 0, ankylosis: 85, dtAnkylosis: 73 },
    { flexion: 86, dtFlexion: 8, extension: 16, dtExtension: 0, ankylosis: 86, dtAnkylosis: 73 },
    { flexion: 87, dtFlexion: 8, extension: 17, dtExtension: 0, ankylosis: 87, dtAnkylosis: 74 },
    { flexion: 88, dtFlexion: 7, extension: 18, dtExtension: 0, ankylosis: 88, dtAnkylosis: 74 },
    { flexion: 89, dtFlexion: 7, extension: 19, dtExtension: 0, ankylosis: 89, dtAnkylosis: 75 },
    { flexion: 90, dtFlexion: 6, extension: 20, dtExtension: 0, ankylosis: 90, dtAnkylosis: 75 },
    { flexion: 91, dtFlexion: 5, extension: 21, dtExtension: 0, ankylosis: 91, dtAnkylosis: 76 },
    { flexion: 92, dtFlexion: 5, extension: 22, dtExtension: 0, ankylosis: 92, dtAnkylosis: 76 },
    { flexion: 93, dtFlexion: 4, extension: 23, dtExtension: 0, ankylosis: 93, dtAnkylosis: 77 },
    { flexion: 94, dtFlexion: 4, extension: 24, dtExtension: 0, ankylosis: 94, dtAnkylosis: 77 },
    { flexion: 95, dtFlexion: 3, extension: 25, dtExtension: 0, ankylosis: 95, dtAnkylosis: 78 },
    { flexion: 96, dtFlexion: 2, extension: 26, dtExtension: 0, ankylosis: 96, dtAnkylosis: 78 },
    { flexion: 97, dtFlexion: 2, extension: 27, dtExtension: 0, ankylosis: 97, dtAnkylosis: 79 },
    { flexion: 98, dtFlexion: 1, extension: 28, dtExtension: 0, ankylosis: 98, dtAnkylosis: 79 },
    { flexion: 99, dtFlexion: 1, extension: 29, dtExtension: 0, ankylosis: 99, dtAnkylosis: 80 },
    { flexion: 100, dtFlexion: 0, extension: 30, dtExtension: 0, ankylosis: 100, dtAnkylosis: 80 },
    { flexion: '>100', dtFlexion: 0, extension: '>30', dtExtension: 0, ankylosis: '>100', dtAnkylosis: 80 }
];

// Finger MP Joint data
const FINGERMPData = [
    { flexion: '<-20', dtFlexion: 60, extension: '<-90', dtExtension: 100, ankylosis: '<-20', dtAnkylosis: 60 },
    { flexion: -20, dtFlexion: 60, extension: -90, dtExtension: 100, ankylosis: -20, dtAnkylosis: 60 },
    { flexion: -19, dtFlexion: 59, extension: -89, dtExtension: 99, ankylosis: -19, dtAnkylosis: 60 },
    { flexion: -18, dtFlexion: 59, extension: -88, dtExtension: 97, ankylosis: -18, dtAnkylosis: 59 },
    { flexion: -17, dtFlexion: 58, extension: -87, dtExtension: 96, ankylosis: -17, dtAnkylosis: 59 },
    { flexion: -16, dtFlexion: 58, extension: -86, dtExtension: 94, ankylosis: -16, dtAnkylosis: 59 },
    { flexion: -15, dtFlexion: 57, extension: -85, dtExtension: 93, ankylosis: -15, dtAnkylosis: 58 },
    { flexion: -14, dtFlexion: 56, extension: -84, dtExtension: 91, ankylosis: -14, dtAnkylosis: 58 },
    { flexion: -13, dtFlexion: 56, extension: -83, dtExtension: 90, ankylosis: -13, dtAnkylosis: 58 },
    { flexion: -12, dtFlexion: 55, extension: -82, dtExtension: 88, ankylosis: -12, dtAnkylosis: 58 },
    { flexion: -11, dtFlexion: 55, extension: -81, dtExtension: 87, ankylosis: -11, dtAnkylosis: 57 },
    { flexion: -10, dtFlexion: 54, extension: -80, dtExtension: 85, ankylosis: -10, dtAnkylosis: 57 },
    { flexion: -9, dtFlexion: 54, extension: -79, dtExtension: 84, ankylosis: -9, dtAnkylosis: 57 },
    { flexion: -8, dtFlexion: 53, extension: -78, dtExtension: 82, ankylosis: -8, dtAnkylosis: 56 },
    { flexion: -7, dtFlexion: 53, extension: -77, dtExtension: 81, ankylosis: -7, dtAnkylosis: 56 },
    { flexion: -6, dtFlexion: 52, extension: -76, dtExtension: 79, ankylosis: -6, dtAnkylosis: 56 },
    { flexion: -5, dtFlexion: 52, extension: -75, dtExtension: 78, ankylosis: -5, dtAnkylosis: 55 },
    { flexion: -4, dtFlexion: 51, extension: -74, dtExtension: 77, ankylosis: -4, dtAnkylosis: 55 },
    { flexion: -3, dtFlexion: 51, extension: -73, dtExtension: 75, ankylosis: -3, dtAnkylosis: 55 },
    { flexion: -2, dtFlexion: 50, extension: -72, dtExtension: 74, ankylosis: -2, dtAnkylosis: 55 },
    { flexion: -1, dtFlexion: 50, extension: -71, dtExtension: 72, ankylosis: -1, dtAnkylosis: 54 },
    { flexion: 0, dtFlexion: 49, extension: -70, dtExtension: 71, ankylosis: 0, dtAnkylosis: 54 },
    { flexion: 1, dtFlexion: 49, extension: -69, dtExtension: 70, ankylosis: 1, dtAnkylosis: 54 },
    { flexion: 2, dtFlexion: 48, extension: -68, dtExtension: 68, ankylosis: 2, dtAnkylosis: 53 },
    { flexion: 3, dtFlexion: 48, extension: -67, dtExtension: 67, ankylosis: 3, dtAnkylosis: 53 },
    { flexion: 4, dtFlexion: 47, extension: -66, dtExtension: 65, ankylosis: 4, dtAnkylosis: 53 },
    { flexion: 5, dtFlexion: 47, extension: -65, dtExtension: 64, ankylosis: 5, dtAnkylosis: 52 },
    { flexion: 6, dtFlexion: 46, extension: -64, dtExtension: 62, ankylosis: 6, dtAnkylosis: 52 },
    { flexion: 7, dtFlexion: 46, extension: -63, dtExtension: 61, ankylosis: 7, dtAnkylosis: 52 },
    { flexion: 8, dtFlexion: 45, extension: -62, dtExtension: 59, ankylosis: 8, dtAnkylosis: 52 },
    { flexion: 9, dtFlexion: 45, extension: -61, dtExtension: 58, ankylosis: 9, dtAnkylosis: 51 },
    { flexion: 10, dtFlexion: 44, extension: -60, dtExtension: 56, ankylosis: 10, dtAnkylosis: 51 },
    { flexion: 11, dtFlexion: 43, extension: -59, dtExtension: 55, ankylosis: 11, dtAnkylosis: 51 },
    { flexion: 12, dtFlexion: 43, extension: -58, dtExtension: 53, ankylosis: 12, dtAnkylosis: 50 },
    { flexion: 13, dtFlexion: 42, extension: -57, dtExtension: 52, ankylosis: 13, dtAnkylosis: 50 },
    { flexion: 14, dtFlexion: 42, extension: -56, dtExtension: 50, ankylosis: 14, dtAnkylosis: 50 },
    { flexion: 15, dtFlexion: 41, extension: -55, dtExtension: 49, ankylosis: 15, dtAnkylosis: 49 },
    { flexion: 16, dtFlexion: 40, extension: -54, dtExtension: 47, ankylosis: 16, dtAnkylosis: 49 },
    { flexion: 17, dtFlexion: 40, extension: -53, dtExtension: 46, ankylosis: 17, dtAnkylosis: 49 },
    { flexion: 18, dtFlexion: 39, extension: -52, dtExtension: 44, ankylosis: 18, dtAnkylosis: 49 },
    { flexion: 19, dtFlexion: 39, extension: -51, dtExtension: 43, ankylosis: 19, dtAnkylosis: 48 },
    { flexion: 20, dtFlexion: 38, extension: -50, dtExtension: 41, ankylosis: 20, dtAnkylosis: 48 },
    { flexion: 21, dtFlexion: 38, extension: -49, dtExtension: 40, ankylosis: 21, dtAnkylosis: 48 },
    { flexion: 22, dtFlexion: 37, extension: -48, dtExtension: 38, ankylosis: 22, dtAnkylosis: 47 },
    { flexion: 23, dtFlexion: 37, extension: -47, dtExtension: 37, ankylosis: 23, dtAnkylosis: 47 },
    { flexion: 24, dtFlexion: 36, extension: -46, dtExtension: 35, ankylosis: 24, dtAnkylosis: 47 },
    { flexion: 25, dtFlexion: 36, extension: -45, dtExtension: 34, ankylosis: 25, dtAnkylosis: 46 },
    { flexion: 26, dtFlexion: 35, extension: -44, dtExtension: 33, ankylosis: 26, dtAnkylosis: 46 },
    { flexion: 27, dtFlexion: 35, extension: -43, dtExtension: 31, ankylosis: 27, dtAnkylosis: 46 },
    { flexion: 28, dtFlexion: 34, extension: -42, dtExtension: 30, ankylosis: 28, dtAnkylosis: 46 },
    { flexion: 29, dtFlexion: 34, extension: -41, dtExtension: 28, ankylosis: 29, dtAnkylosis: 45 },
    { flexion: 30, dtFlexion: 33, extension: -40, dtExtension: 27, ankylosis: 30, dtAnkylosis: 45 },
    { flexion: 31, dtFlexion: 32, extension: -39, dtExtension: 26, ankylosis: 31, dtAnkylosis: 46 },
    { flexion: 32, dtFlexion: 32, extension: -38, dtExtension: 24, ankylosis: 32, dtAnkylosis: 47 },
    { flexion: 33, dtFlexion: 31, extension: -37, dtExtension: 23, ankylosis: 33, dtAnkylosis: 48 },
    { flexion: 34, dtFlexion: 31, extension: -36, dtExtension: 21, ankylosis: 34, dtAnkylosis: 49 },
    { flexion: 35, dtFlexion: 30, extension: -35, dtExtension: 20, ankylosis: 35, dtAnkylosis: 50 },
    { flexion: 36, dtFlexion: 29, extension: -34, dtExtension: 18, ankylosis: 36, dtAnkylosis: 50 },
    { flexion: 37, dtFlexion: 29, extension: -33, dtExtension: 17, ankylosis: 37, dtAnkylosis: 51 },
    { flexion: 38, dtFlexion: 28, extension: -32, dtExtension: 15, ankylosis: 38, dtAnkylosis: 52 },
    { flexion: 39, dtFlexion: 28, extension: -31, dtExtension: 14, ankylosis: 39, dtAnkylosis: 53 },
    { flexion: 40, dtFlexion: 27, extension: -30, dtExtension: 12, ankylosis: 40, dtAnkylosis: 54 },
    { flexion: 41, dtFlexion: 27, extension: -29, dtExtension: 12, ankylosis: 41, dtAnkylosis: 55 },
    { flexion: 42, dtFlexion: 26, extension: -28, dtExtension: 12, ankylosis: 42, dtAnkylosis: 56 },
    { flexion: 43, dtFlexion: 26, extension: -27, dtExtension: 11, ankylosis: 43, dtAnkylosis: 57 },
    { flexion: 44, dtFlexion: 25, extension: -26, dtExtension: 11, ankylosis: 44, dtAnkylosis: 58 },
    { flexion: 45, dtFlexion: 25, extension: -25, dtExtension: 11, ankylosis: 45, dtAnkylosis: 59 },
    { flexion: 46, dtFlexion: 24, extension: -24, dtExtension: 11, ankylosis: 46, dtAnkylosis: 59 },
    { flexion: 47, dtFlexion: 24, extension: -23, dtExtension: 11, ankylosis: 47, dtAnkylosis: 60 },
    { flexion: 48, dtFlexion: 23, extension: -22, dtExtension: 10, ankylosis: 48, dtAnkylosis: 61 },
    { flexion: 49, dtFlexion: 23, extension: -21, dtExtension: 10, ankylosis: 49, dtAnkylosis: 62 },
    { flexion: 50, dtFlexion: 22, extension: -20, dtExtension: 10, ankylosis: 50, dtAnkylosis: 63 },
    { flexion: 51, dtFlexion: 22, extension: -19, dtExtension: 10, ankylosis: 51, dtAnkylosis: 64 },
    { flexion: 52, dtFlexion: 21, extension: -18, dtExtension: 9, ankylosis: 52, dtAnkylosis: 65 },
    { flexion: 53, dtFlexion: 21, extension: -17, dtExtension: 9, ankylosis: 53, dtAnkylosis: 66 },
    { flexion: 54, dtFlexion: 20, extension: -16, dtExtension: 9, ankylosis: 54, dtAnkylosis: 67 },
    { flexion: 55, dtFlexion: 20, extension: -15, dtExtension: 9, ankylosis: 55, dtAnkylosis: 68 },
    { flexion: 56, dtFlexion: 19, extension: -14, dtExtension: 8, ankylosis: 56, dtAnkylosis: 69 },
    { flexion: 57, dtFlexion: 19, extension: -13, dtExtension: 8, ankylosis: 57, dtAnkylosis: 70 },
    { flexion: 58, dtFlexion: 18, extension: -12, dtExtension: 8, ankylosis: 58, dtAnkylosis: 71 },
    { flexion: 59, dtFlexion: 18, extension: -11, dtExtension: 7, ankylosis: 59, dtAnkylosis: 72 },
    { flexion: 60, dtFlexion: 17, extension: -10, dtExtension: 7, ankylosis: 60, dtAnkylosis: 73 },
    { flexion: 61, dtFlexion: 16, extension: -9, dtExtension: 7, ankylosis: 61, dtAnkylosis: 74 },
    { flexion: 62, dtFlexion: 16, extension: -8, dtExtension: 7, ankylosis: 62, dtAnkylosis: 75 },
    { flexion: 63, dtFlexion: 15, extension: -7, dtExtension: 6, ankylosis: 63, dtAnkylosis: 76 },
    { flexion: 64, dtFlexion: 15, extension: -6, dtExtension: 6, ankylosis: 64, dtAnkylosis: 77 },
    { flexion: 65, dtFlexion: 14, extension: -5, dtExtension: 6, ankylosis: 65, dtAnkylosis: 78 },
    { flexion: 66, dtFlexion: 13, extension: -4, dtExtension: 6, ankylosis: 66, dtAnkylosis: 78 },
    { flexion: 67, dtFlexion: 13, extension: -3, dtExtension: 6, ankylosis: 67, dtAnkylosis: 79 },
    { flexion: 68, dtFlexion: 12, extension: -2, dtExtension: 5, ankylosis: 68, dtAnkylosis: 80 },
    { flexion: 69, dtFlexion: 12, extension: -1, dtExtension: 5, ankylosis: 69, dtAnkylosis: 81 },
    { flexion: 70, dtFlexion: 11, extension: 0, dtExtension: 5, ankylosis: 70, dtAnkylosis: 82 },
    { flexion: 71, dtFlexion: 11, extension: 1, dtExtension: 5, ankylosis: 71, dtAnkylosis: 83 },
    { flexion: 72, dtFlexion: 10, extension: 2, dtExtension: 5, ankylosis: 72, dtAnkylosis: 84 },
    { flexion: 73, dtFlexion: 10, extension: 3, dtExtension: 4, ankylosis: 73, dtAnkylosis: 85 },
    { flexion: 74, dtFlexion: 9, extension: 4, dtExtension: 4, ankylosis: 74, dtAnkylosis: 86 },
    { flexion: 75, dtFlexion: 9, extension: 5, dtExtension: 4, ankylosis: 75, dtAnkylosis: 87 },
    { flexion: 76, dtFlexion: 8, extension: 6, dtExtension: 4, ankylosis: 76, dtAnkylosis: 87 },
    { flexion: 77, dtFlexion: 8, extension: 7, dtExtension: 4, ankylosis: 77, dtAnkylosis: 88 },
    { flexion: 78, dtFlexion: 7, extension: 8, dtExtension: 3, ankylosis: 78, dtAnkylosis: 89 },
    { flexion: 79, dtFlexion: 7, extension: 9, dtExtension: 3, ankylosis: 79, dtAnkylosis: 90 },
    { flexion: 80, dtFlexion: 6, extension: 10, dtExtension: 3, ankylosis: 80, dtAnkylosis: 91 },
    { flexion: 81, dtFlexion: 5, extension: 11, dtExtension: 3, ankylosis: 81, dtAnkylosis: 92 },
    { flexion: 82, dtFlexion: 5, extension: 12, dtExtension: 2, ankylosis: 82, dtAnkylosis: 93 },
    { flexion: 83, dtFlexion: 4, extension: 13, dtExtension: 2, ankylosis: 83, dtAnkylosis: 94 },
    { flexion: 84, dtFlexion: 4, extension: 14, dtExtension: 2, ankylosis: 84, dtAnkylosis: 95 },
    { flexion: 85, dtFlexion: 3, extension: 15, dtExtension: 2, ankylosis: 85, dtAnkylosis: 96 },
    { flexion: 86, dtFlexion: 2, extension: 16, dtExtension: 1, ankylosis: 86, dtAnkylosis: 96 },
    { flexion: 87, dtFlexion: 2, extension: 17, dtExtension: 1, ankylosis: 87, dtAnkylosis: 97 },
    { flexion: 88, dtFlexion: 1, extension: 18, dtExtension: 1, ankylosis: 88, dtAnkylosis: 98 },
    { flexion: 89, dtFlexion: 1, extension: 19, dtExtension: 0, ankylosis: 89, dtAnkylosis: 99 },
    { flexion: 90, dtFlexion: 0, extension: 20, dtExtension: 0, ankylosis: 90, dtAnkylosis: 100 },
    { flexion: '>90', dtFlexion: 0, extension: '>20', dtExtension: 0, ankylosis: '>90', dtAnkylosis: 100 }
];

// Thumb IP Joint data
const IPData = [
    { flexion: '<-30', dtFlexion: 15, extension: '<-80', dtExtension: 15, ankylosis: '<-30', dtAnkylosis: 15 },
    { flexion: -30, dtFlexion: 15, extension: -80, dtExtension: 15, ankylosis: -30, dtAnkylosis: 15 },
    { flexion: -29, dtFlexion: 15, extension: -79, dtExtension: 15, ankylosis: -29, dtAnkylosis: 15 },
    { flexion: -28, dtFlexion: 15, extension: -78, dtExtension: 15, ankylosis: -28, dtAnkylosis: 15 },
    { flexion: -27, dtFlexion: 14, extension: -77, dtExtension: 14, ankylosis: -27, dtAnkylosis: 14 },
    { flexion: -26, dtFlexion: 14, extension: -76, dtExtension: 14, ankylosis: -26, dtAnkylosis: 14 },
    { flexion: -25, dtFlexion: 14, extension: -75, dtExtension: 14, ankylosis: -25, dtAnkylosis: 14 },
    { flexion: -24, dtFlexion: 14, extension: -74, dtExtension: 14, ankylosis: -24, dtAnkylosis: 14 },
    { flexion: -23, dtFlexion: 14, extension: -73, dtExtension: 14, ankylosis: -23, dtAnkylosis: 14 },
    { flexion: -22, dtFlexion: 13, extension: -72, dtExtension: 13, ankylosis: -22, dtAnkylosis: 13 },
    { flexion: -21, dtFlexion: 13, extension: -71, dtExtension: 13, ankylosis: -21, dtAnkylosis: 13 },
    { flexion: -20, dtFlexion: 13, extension: -70, dtExtension: 13, ankylosis: -20, dtAnkylosis: 13 },
    { flexion: -19, dtFlexion: 13, extension: -69, dtExtension: 13, ankylosis: -19, dtAnkylosis: 13 },
    { flexion: -18, dtFlexion: 13, extension: -68, dtExtension: 13, ankylosis: -18, dtAnkylosis: 13 },
    { flexion: -17, dtFlexion: 12, extension: -67, dtExtension: 12, ankylosis: -17, dtAnkylosis: 12 },
    { flexion: -16, dtFlexion: 12, extension: -66, dtExtension: 12, ankylosis: -16, dtAnkylosis: 12 },
    { flexion: -15, dtFlexion: 12, extension: -65, dtExtension: 12, ankylosis: -15, dtAnkylosis: 12 },
    { flexion: -14, dtFlexion: 12, extension: -64, dtExtension: 12, ankylosis: -14, dtAnkylosis: 12 },
    { flexion: -13, dtFlexion: 12, extension: -63, dtExtension: 12, ankylosis: -13, dtAnkylosis: 12 },
    { flexion: -12, dtFlexion: 11, extension: -62, dtExtension: 11, ankylosis: -12, dtAnkylosis: 11 },
    { flexion: -11, dtFlexion: 11, extension: -61, dtExtension: 11, ankylosis: -11, dtAnkylosis: 11 },
    { flexion: -10, dtFlexion: 11, extension: -60, dtExtension: 11, ankylosis: -10, dtAnkylosis: 11 },
    { flexion: -9, dtFlexion: 11, extension: -59, dtExtension: 11, ankylosis: -9, dtAnkylosis: 11 },
    { flexion: -8, dtFlexion: 10, extension: -58, dtExtension: 11, ankylosis: -8, dtAnkylosis: 11 },
    { flexion: -7, dtFlexion: 10, extension: -57, dtExtension: 10, ankylosis: -7, dtAnkylosis: 10 },
    { flexion: -6, dtFlexion: 10, extension: -56, dtExtension: 10, ankylosis: -6, dtAnkylosis: 10 },
    { flexion: -5, dtFlexion: 10, extension: -55, dtExtension: 10, ankylosis: -5, dtAnkylosis: 10 },
    { flexion: -4, dtFlexion: 9, extension: -54, dtExtension: 10, ankylosis: -4, dtAnkylosis: 10 },
    { flexion: -3, dtFlexion: 9, extension: -53, dtExtension: 10, ankylosis: -3, dtAnkylosis: 10 },
    { flexion: -2, dtFlexion: 9, extension: -52, dtExtension: 9, ankylosis: -2, dtAnkylosis: 9 },
    { flexion: -1, dtFlexion: 8, extension: -51, dtExtension: 9, ankylosis: -1, dtAnkylosis: 9 },
    { flexion: 0, dtFlexion: 8, extension: -50, dtExtension: 9, ankylosis: 0, dtAnkylosis: 9 },
    { flexion: 1, dtFlexion: 8, extension: -49, dtExtension: 9, ankylosis: 1, dtAnkylosis: 9 },
    { flexion: 2, dtFlexion: 8, extension: -48, dtExtension: 9, ankylosis: 2, dtAnkylosis: 9 },
    { flexion: 3, dtFlexion: 7, extension: -47, dtExtension: 8, ankylosis: 3, dtAnkylosis: 9 },
    { flexion: 4, dtFlexion: 7, extension: -46, dtExtension: 8, ankylosis: 4, dtAnkylosis: 9 },
    { flexion: 5, dtFlexion: 7, extension: -45, dtExtension: 8, ankylosis: 5, dtAnkylosis: 9 },
    { flexion: 6, dtFlexion: 7, extension: -44, dtExtension: 8, ankylosis: 6, dtAnkylosis: 8 },
    { flexion: 7, dtFlexion: 7, extension: -43, dtExtension: 8, ankylosis: 7, dtAnkylosis: 8 },
    { flexion: 8, dtFlexion: 6, extension: -42, dtExtension: 7, ankylosis: 8, dtAnkylosis: 8 },
    { flexion: 9, dtFlexion: 6, extension: -41, dtExtension: 7, ankylosis: 9, dtAnkylosis: 8 },
    { flexion: 10, dtFlexion: 6, extension: -40, dtExtension: 7, ankylosis: 10, dtAnkylosis: 8 },
    { flexion: 11, dtFlexion: 6, extension: -39, dtExtension: 7, ankylosis: 11, dtAnkylosis: 8 },
    { flexion: 12, dtFlexion: 6, extension: -38, dtExtension: 7, ankylosis: 12, dtAnkylosis: 8 },
    { flexion: 13, dtFlexion: 5, extension: -37, dtExtension: 6, ankylosis: 13, dtAnkylosis: 8 },
    { flexion: 14, dtFlexion: 5, extension: -36, dtExtension: 6, ankylosis: 14, dtAnkylosis: 8 },
    { flexion: 15, dtFlexion: 5, extension: -35, dtExtension: 6, ankylosis: 15, dtAnkylosis: 8 },
    { flexion: 16, dtFlexion: 5, extension: -34, dtExtension: 6, ankylosis: 16, dtAnkylosis: 7 },
    { flexion: 17, dtFlexion: 5, extension: -33, dtExtension: 6, ankylosis: 17, dtAnkylosis: 7 },
    { flexion: 18, dtFlexion: 4, extension: -32, dtExtension: 5, ankylosis: 18, dtAnkylosis: 7 },
    { flexion: 19, dtFlexion: 4, extension: -31, dtExtension: 5, ankylosis: 19, dtAnkylosis: 7 },
    { flexion: 20, dtFlexion: 4, extension: -30, dtExtension: 5, ankylosis: 20, dtAnkylosis: 7 },
    { flexion: 21, dtFlexion: 4, extension: -29, dtExtension: 5, ankylosis: 21, dtAnkylosis: 7 },
    { flexion: 22, dtFlexion: 4, extension: -28, dtExtension: 5, ankylosis: 22, dtAnkylosis: 7 },
    { flexion: 23, dtFlexion: 4, extension: -27, dtExtension: 4, ankylosis: 23, dtAnkylosis: 8 },
    { flexion: 24, dtFlexion: 4, extension: -26, dtExtension: 4, ankylosis: 24, dtAnkylosis: 8 },
    { flexion: 25, dtFlexion: 4, extension: -25, dtExtension: 4, ankylosis: 25, dtAnkylosis: 8 },
    { flexion: 26, dtFlexion: 4, extension: -24, dtExtension: 4, ankylosis: 26, dtAnkylosis: 8 },
    { flexion: 27, dtFlexion: 4, extension: -23, dtExtension: 4, ankylosis: 27, dtAnkylosis: 8 },
    { flexion: 28, dtFlexion: 4, extension: -22, dtExtension: 3, ankylosis: 28, dtAnkylosis: 9 },
    { flexion: 29, dtFlexion: 4, extension: -21, dtExtension: 3, ankylosis: 29, dtAnkylosis: 9 },
    { flexion: 30, dtFlexion: 4, extension: -20, dtExtension: 3, ankylosis: 30, dtAnkylosis: 9 },
    { flexion: 31, dtFlexion: 4, extension: -19, dtExtension: 3, ankylosis: 31, dtAnkylosis: 9 },
    { flexion: 32, dtFlexion: 4, extension: -18, dtExtension: 3, ankylosis: 32, dtAnkylosis: 9 },
    { flexion: 33, dtFlexion: 4, extension: -17, dtExtension: 3, ankylosis: 33, dtAnkylosis: 9 },
    { flexion: 34, dtFlexion: 4, extension: -16, dtExtension: 3, ankylosis: 34, dtAnkylosis: 9 },
    { flexion: 35, dtFlexion: 4, extension: -15, dtExtension: 3, ankylosis: 35, dtAnkylosis: 10 },
    { flexion: 36, dtFlexion: 3, extension: -14, dtExtension: 2, ankylosis: 36, dtAnkylosis: 10 },
    { flexion: 37, dtFlexion: 3, extension: -13, dtExtension: 2, ankylosis: 37, dtAnkylosis: 10 },
    { flexion: 38, dtFlexion: 3, extension: -12, dtExtension: 2, ankylosis: 38, dtAnkylosis: 10 },
    { flexion: 39, dtFlexion: 3, extension: -11, dtExtension: 2, ankylosis: 39, dtAnkylosis: 10 },
    { flexion: 40, dtFlexion: 3, extension: -10, dtExtension: 2, ankylosis: 40, dtAnkylosis: 10 },
    { flexion: 41, dtFlexion: 3, extension: -9, dtExtension: 2, ankylosis: 41, dtAnkylosis: 10 },
    { flexion: 42, dtFlexion: 3, extension: -8, dtExtension: 2, ankylosis: 42, dtAnkylosis: 10 },
    { flexion: 43, dtFlexion: 3, extension: -7, dtExtension: 2, ankylosis: 43, dtAnkylosis: 10 },
    { flexion: 44, dtFlexion: 3, extension: -6, dtExtension: 2, ankylosis: 44, dtAnkylosis: 10 },
    { flexion: 45, dtFlexion: 3, extension: -5, dtExtension: 2, ankylosis: 45, dtAnkylosis: 11 },
    { flexion: 46, dtFlexion: 2, extension: -4, dtExtension: 1, ankylosis: 46, dtAnkylosis: 11 },
    { flexion: 47, dtFlexion: 2, extension: -3, dtExtension: 1, ankylosis: 47, dtAnkylosis: 11 },
    { flexion: 48, dtFlexion: 2, extension: -2, dtExtension: 1, ankylosis: 48, dtAnkylosis: 11 },
    { flexion: 49, dtFlexion: 2, extension: -1, dtExtension: 1, ankylosis: 49, dtAnkylosis: 11 },
    { flexion: 50, dtFlexion: 2, extension: 0, dtExtension: 1, ankylosis: 50, dtAnkylosis: 11 },
    { flexion: 51, dtFlexion: 2, extension: 1, dtExtension: 1, ankylosis: 51, dtAnkylosis: 11 },
    { flexion: 52, dtFlexion: 2, extension: 2, dtExtension: 1, ankylosis: 52, dtAnkylosis: 11 },
    { flexion: 53, dtFlexion: 2, extension: 3, dtExtension: 1, ankylosis: 53, dtAnkylosis: 11 },
    { flexion: 54, dtFlexion: 2, extension: 4, dtExtension: 1, ankylosis: 54, dtAnkylosis: 11 },
    { flexion: 55, dtFlexion: 2, extension: 5, dtExtension: 1, ankylosis: 55, dtAnkylosis: 12 },
    { flexion: 56, dtFlexion: 1, extension: 6, dtExtension: 0, ankylosis: 56, dtAnkylosis: 12 },
    { flexion: 57, dtFlexion: 1, extension: 7, dtExtension: 0, ankylosis: 57, dtAnkylosis: 12 },
    { flexion: 58, dtFlexion: 1, extension: 8, dtExtension: 0, ankylosis: 58, dtAnkylosis: 12 },
    { flexion: 59, dtFlexion: 1, extension: 9, dtExtension: 0, ankylosis: 59, dtAnkylosis: 12 },
    { flexion: 60, dtFlexion: 1, extension: 10, dtExtension: 0, ankylosis: 60, dtAnkylosis: 12 },
    { flexion: 61, dtFlexion: 1, extension: 11, dtExtension: 0, ankylosis: 61, dtAnkylosis: 12 },
    { flexion: 62, dtFlexion: 1, extension: 12, dtExtension: 0, ankylosis: 62, dtAnkylosis: 12 },
    { flexion: 63, dtFlexion: 1, extension: 13, dtExtension: 0, ankylosis: 63, dtAnkylosis: 13 },
    { flexion: 64, dtFlexion: 1, extension: 14, dtExtension: 0, ankylosis: 64, dtAnkylosis: 13 },
    { flexion: 65, dtFlexion: 1, extension: 15, dtExtension: 0, ankylosis: 65, dtAnkylosis: 13 },
    { flexion: 66, dtFlexion: 1, extension: 16, dtExtension: 0, ankylosis: 66, dtAnkylosis: 13 },
    { flexion: 67, dtFlexion: 1, extension: 17, dtExtension: 0, ankylosis: 67, dtAnkylosis: 13 },
    { flexion: 68, dtFlexion: 1, extension: 18, dtExtension: 0, ankylosis: 68, dtAnkylosis: 14 },
    { flexion: 69, dtFlexion: 1, extension: 19, dtExtension: 0, ankylosis: 69, dtAnkylosis: 14 },
    { flexion: 70, dtFlexion: 1, extension: 20, dtExtension: 0, ankylosis: 70, dtAnkylosis: 14 },
    { flexion: 71, dtFlexion: 1, extension: 21, dtExtension: 0, ankylosis: 71, dtAnkylosis: 14 },
    { flexion: 72, dtFlexion: 1, extension: 22, dtExtension: 0, ankylosis: 72, dtAnkylosis: 14 },
    { flexion: 73, dtFlexion: 1, extension: 23, dtExtension: 0, ankylosis: 73, dtAnkylosis: 14 },
    { flexion: 74, dtFlexion: 1, extension: 24, dtExtension: 0, ankylosis: 74, dtAnkylosis: 14 },
    { flexion: 75, dtFlexion: 1, extension: 25, dtExtension: 0, ankylosis: 75, dtAnkylosis: 15 },
    { flexion: 76, dtFlexion: 0, extension: 26, dtExtension: 0, ankylosis: 76, dtAnkylosis: 15 },
    { flexion: 77, dtFlexion: 0, extension: 27, dtExtension: 0, ankylosis: 77, dtAnkylosis: 15 },
    { flexion: 78, dtFlexion: 0, extension: 28, dtExtension: 0, ankylosis: 78, dtAnkylosis: 15 },
    { flexion: 79, dtFlexion: 0, extension: 29, dtExtension: 0, ankylosis: 79, dtAnkylosis: 15 },
    { flexion: 80, dtFlexion: 0, extension: 30, dtExtension: 0, ankylosis: 80, dtAnkylosis: 15 },
    { flexion: '>80', dtFlexion: 0, extension: '>30', dtExtension: 0, ankylosis: '>80', dtAnkylosis: 15 }
];

// Thumb MP Joint data
const THUMBMPData = [
    { flexion: '<-40', dtFlexion: 10, extension: '<-60', dtExtension: 10, ankylosis: '<-40', dtAnkylosis: 10 },
    { flexion: -40, dtFlexion: 10, extension: -60, dtExtension: 10, ankylosis: -40, dtAnkylosis: 10 },
    { flexion: -39, dtFlexion: 10, extension: -59, dtExtension: 10, ankylosis: -39, dtAnkylosis: 10 },
    { flexion: -38, dtFlexion: 10, extension: -58, dtExtension: 10, ankylosis: -38, dtAnkylosis: 10 },
    { flexion: -37, dtFlexion: 10, extension: -57, dtExtension: 9, ankylosis: -37, dtAnkylosis: 10 },
    { flexion: -36, dtFlexion: 10, extension: -56, dtExtension: 9, ankylosis: -36, dtAnkylosis: 10 },
    { flexion: -35, dtFlexion: 10, extension: -55, dtExtension: 9, ankylosis: -35, dtAnkylosis: 10 },
    { flexion: -34, dtFlexion: 9, extension: -54, dtExtension: 9, ankylosis: -34, dtAnkylosis: 9 },
    { flexion: -33, dtFlexion: 9, extension: -53, dtExtension: 9, ankylosis: -33, dtAnkylosis: 9 },
    { flexion: -32, dtFlexion: 9, extension: -52, dtExtension: 8, ankylosis: -32, dtAnkylosis: 9 },
    { flexion: -31, dtFlexion: 9, extension: -51, dtExtension: 8, ankylosis: -31, dtAnkylosis: 9 },
    { flexion: -30, dtFlexion: 9, extension: -50, dtExtension: 8, ankylosis: -30, dtAnkylosis: 9 },
    { flexion: -29, dtFlexion: 9, extension: -49, dtExtension: 8, ankylosis: -29, dtAnkylosis: 9 },
    { flexion: -28, dtFlexion: 9, extension: -48, dtExtension: 7, ankylosis: -28, dtAnkylosis: 9 },
    { flexion: -27, dtFlexion: 9, extension: -47, dtExtension: 7, ankylosis: -27, dtAnkylosis: 9 },
    { flexion: -26, dtFlexion: 9, extension: -46, dtExtension: 7, ankylosis: -26, dtAnkylosis: 9 },
    { flexion: -25, dtFlexion: 9, extension: -45, dtExtension: 7, ankylosis: -25, dtAnkylosis: 9 },
    { flexion: -24, dtFlexion: 8, extension: -44, dtExtension: 6, ankylosis: -24, dtAnkylosis: 8 },
    { flexion: -23, dtFlexion: 8, extension: -43, dtExtension: 6, ankylosis: -23, dtAnkylosis: 8 },
    { flexion: -22, dtFlexion: 8, extension: -42, dtExtension: 6, ankylosis: -22, dtAnkylosis: 8 },
    { flexion: -21, dtFlexion: 8, extension: -41, dtExtension: 5, ankylosis: -21, dtAnkylosis: 8 },
    { flexion: -20, dtFlexion: 8, extension: -40, dtExtension: 5, ankylosis: -20, dtAnkylosis: 8 },
    { flexion: -19, dtFlexion: 8, extension: -39, dtExtension: 5, ankylosis: -19, dtAnkylosis: 8 },
    { flexion: -18, dtFlexion: 8, extension: -38, dtExtension: 5, ankylosis: -18, dtAnkylosis: 8 },
    { flexion: -17, dtFlexion: 8, extension: -37, dtExtension: 4, ankylosis: -17, dtAnkylosis: 8 },
    { flexion: -16, dtFlexion: 8, extension: -36, dtExtension: 4, ankylosis: -16, dtAnkylosis: 8 },
    { flexion: -15, dtFlexion: 8, extension: -35, dtExtension: 4, ankylosis: -15, dtAnkylosis: 8 },
    { flexion: -14, dtFlexion: 7, extension: -34, dtExtension: 4, ankylosis: -14, dtAnkylosis: 7 },
    { flexion: -13, dtFlexion: 7, extension: -33, dtExtension: 4, ankylosis: -13, dtAnkylosis: 7 },
    { flexion: -12, dtFlexion: 7, extension: -32, dtExtension: 3, ankylosis: -12, dtAnkylosis: 7 },
    { flexion: -11, dtFlexion: 7, extension: -31, dtExtension: 3, ankylosis: -11, dtAnkylosis: 7 },
    { flexion: -10, dtFlexion: 7, extension: -30, dtExtension: 3, ankylosis: -10, dtAnkylosis: 7 },
    { flexion: -9, dtFlexion: 7, extension: -29, dtExtension: 3, ankylosis: -9, dtAnkylosis: 7 },
    { flexion: -8, dtFlexion: 7, extension: -28, dtExtension: 3, ankylosis: -8, dtAnkylosis: 7 },
    { flexion: -7, dtFlexion: 7, extension: -27, dtExtension: 2, ankylosis: -7, dtAnkylosis: 7 },
    { flexion: -6, dtFlexion: 7, extension: -26, dtExtension: 2, ankylosis: -6, dtAnkylosis: 7 },
    { flexion: -5, dtFlexion: 7, extension: -25, dtExtension: 2, ankylosis: -5, dtAnkylosis: 7 },
    { flexion: -4, dtFlexion: 6, extension: -24, dtExtension: 2, ankylosis: -4, dtAnkylosis: 6 },
    { flexion: -3, dtFlexion: 6, extension: -23, dtExtension: 2, ankylosis: -3, dtAnkylosis: 6 },
    { flexion: -2, dtFlexion: 6, extension: -22, dtExtension: 1, ankylosis: -2, dtAnkylosis: 6 },
    { flexion: -1, dtFlexion: 6, extension: -21, dtExtension: 1, ankylosis: -1, dtAnkylosis: 6 },
    { flexion: 0, dtFlexion: 6, extension: -20, dtExtension: 1, ankylosis: 0, dtAnkylosis: 6 },
    { flexion: 1, dtFlexion: 6, extension: -19, dtExtension: 1, ankylosis: 1, dtAnkylosis: 6 },
    { flexion: 2, dtFlexion: 6, extension: -18, dtExtension: 1, ankylosis: 2, dtAnkylosis: 6 },
    { flexion: 3, dtFlexion: 6, extension: -17, dtExtension: 1, ankylosis: 3, dtAnkylosis: 6 },
    { flexion: 4, dtFlexion: 6, extension: -16, dtExtension: 1, ankylosis: 4, dtAnkylosis: 6 },
    { flexion: 5, dtFlexion: 6, extension: -15, dtExtension: 1, ankylosis: 5, dtAnkylosis: 6 },
    { flexion: 6, dtFlexion: 5, extension: -14, dtExtension: 1, ankylosis: 6, dtAnkylosis: 6 },
    { flexion: 7, dtFlexion: 5, extension: -13, dtExtension: 1, ankylosis: 7, dtAnkylosis: 6 },
    { flexion: 8, dtFlexion: 5, extension: -12, dtExtension: 1, ankylosis: 8, dtAnkylosis: 6 },
    { flexion: 9, dtFlexion: 5, extension: -11, dtExtension: 1, ankylosis: 9, dtAnkylosis: 6 },
    { flexion: 10, dtFlexion: 5, extension: -10, dtExtension: 1, ankylosis: 10, dtAnkylosis: 6 },
    { flexion: 11, dtFlexion: 5, extension: -9, dtExtension: 1, ankylosis: 11, dtAnkylosis: 6 },
    { flexion: 12, dtFlexion: 5, extension: -8, dtExtension: 1, ankylosis: 12, dtAnkylosis: 6 },
    { flexion: 13, dtFlexion: 5, extension: -7, dtExtension: 1, ankylosis: 13, dtAnkylosis: 6 },
    { flexion: 14, dtFlexion: 5, extension: -6, dtExtension: 1, ankylosis: 14, dtAnkylosis: 6 },
    { flexion: 15, dtFlexion: 5, extension: -5, dtExtension: 1, ankylosis: 15, dtAnkylosis: 6 },
    { flexion: 16, dtFlexion: 4, extension: -4, dtExtension: 0, ankylosis: 16, dtAnkylosis: 5 },
    { flexion: 17, dtFlexion: 4, extension: -3, dtExtension: 0, ankylosis: 17, dtAnkylosis: 5 },
    { flexion: 18, dtFlexion: 4, extension: -2, dtExtension: 0, ankylosis: 18, dtAnkylosis: 5 },
    { flexion: 19, dtFlexion: 4, extension: -1, dtExtension: 0, ankylosis: 19, dtAnkylosis: 5 },
    { flexion: 20, dtFlexion: 4, extension: -0, dtExtension: 0, ankylosis: 20, dtAnkylosis: 5 },
    { flexion: 21, dtFlexion: 4, extension: 1, dtExtension: 0, ankylosis: 21, dtAnkylosis: 5 },
    { flexion: 22, dtFlexion: 4, extension: 2, dtExtension: 0, ankylosis: 22, dtAnkylosis: 5 },
    { flexion: 23, dtFlexion: 4, extension: 3, dtExtension: 0, ankylosis: 23, dtAnkylosis: 5 },
    { flexion: 24, dtFlexion: 4, extension: 4, dtExtension: 0, ankylosis: 24, dtAnkylosis: 5 },
    { flexion: 25, dtFlexion: 4, extension: 5, dtExtension: 0, ankylosis: 25, dtAnkylosis: 6 },
    { flexion: 26, dtFlexion: 3, extension: 6, dtExtension: 0, ankylosis: 26, dtAnkylosis: 6 },
    { flexion: 27, dtFlexion: 3, extension: 7, dtExtension: 0, ankylosis: 27, dtAnkylosis: 6 },
    { flexion: 28, dtFlexion: 3, extension: 8, dtExtension: 0, ankylosis: 28, dtAnkylosis: 6 },
    { flexion: 29, dtFlexion: 3, extension: 9, dtExtension: 0, ankylosis: 29, dtAnkylosis: 6 },
    { flexion: 30, dtFlexion: 3, extension: 10, dtExtension: 0, ankylosis: 30, dtAnkylosis: 6 },
    { flexion: 31, dtFlexion: 3, extension: 11, dtExtension: 0, ankylosis: 31, dtAnkylosis: 6 },
    { flexion: 32, dtFlexion: 3, extension: 12, dtExtension: 0, ankylosis: 32, dtAnkylosis: 6 },
    { flexion: 33, dtFlexion: 3, extension: 13, dtExtension: 0, ankylosis: 33, dtAnkylosis: 6 },
    { flexion: 34, dtFlexion: 3, extension: 14, dtExtension: 0, ankylosis: 34, dtAnkylosis: 6 },
    { flexion: 35, dtFlexion: 3, extension: 15, dtExtension: 0, ankylosis: 35, dtAnkylosis: 7 },
    { flexion: 36, dtFlexion: 2, extension: 16, dtExtension: 0, ankylosis: 36, dtAnkylosis: 7 },
    { flexion: 37, dtFlexion: 2, extension: 17, dtExtension: 0, ankylosis: 37, dtAnkylosis: 7 },
    { flexion: 38, dtFlexion: 2, extension: 18, dtExtension: 0, ankylosis: 38, dtAnkylosis: 7 },
    { flexion: 39, dtFlexion: 2, extension: 19, dtExtension: 0, ankylosis: 39, dtAnkylosis: 7 },
    { flexion: 40, dtFlexion: 2, extension: 20, dtExtension: 0, ankylosis: 40, dtAnkylosis: 7 },
    { flexion: 41, dtFlexion: 2, extension: 21, dtExtension: 0, ankylosis: 41, dtAnkylosis: 7 },
    { flexion: 42, dtFlexion: 2, extension: 22, dtExtension: 0, ankylosis: 42, dtAnkylosis: 7 },
    { flexion: 43, dtFlexion: 2, extension: 23, dtExtension: 0, ankylosis: 43, dtAnkylosis: 8 },
    { flexion: 44, dtFlexion: 2, extension: 24, dtExtension: 0, ankylosis: 44, dtAnkylosis: 8 },
    { flexion: 45, dtFlexion: 2, extension: 25, dtExtension: 0, ankylosis: 45, dtAnkylosis: 8 },
    { flexion: 46, dtFlexion: 1, extension: 26, dtExtension: 0, ankylosis: 46, dtAnkylosis: 8 },
    { flexion: 47, dtFlexion: 1, extension: 27, dtExtension: 0, ankylosis: 47, dtAnkylosis: 8 },
    { flexion: 48, dtFlexion: 1, extension: 28, dtExtension: 0, ankylosis: 48, dtAnkylosis: 9 },
    { flexion: 49, dtFlexion: 1, extension: 29, dtExtension: 0, ankylosis: 49, dtAnkylosis: 9 },
    { flexion: 50, dtFlexion: 1, extension: 30, dtExtension: 0, ankylosis: 50, dtAnkylosis: 9 },
    { flexion: 51, dtFlexion: 1, extension: 31, dtExtension: 0, ankylosis: 51, dtAnkylosis: 9 },
    { flexion: 52, dtFlexion: 1, extension: 32, dtExtension: 0, ankylosis: 52, dtAnkylosis: 9 },
    { flexion: 53, dtFlexion: 1, extension: 33, dtExtension: 0, ankylosis: 53, dtAnkylosis: 9 },
    { flexion: 54, dtFlexion: 1, extension: 34, dtExtension: 0, ankylosis: 54, dtAnkylosis: 9 },
    { flexion: 55, dtFlexion: 1, extension: 35, dtExtension: 0, ankylosis: 55, dtAnkylosis: 10 },
    { flexion: 56, dtFlexion: 0, extension: 36, dtExtension: 0, ankylosis: 56, dtAnkylosis: 10 },
    { flexion: 57, dtFlexion: 0, extension: 37, dtExtension: 0, ankylosis: 57, dtAnkylosis: 10 },
    { flexion: 58, dtFlexion: 0, extension: 38, dtExtension: 0, ankylosis: 58, dtAnkylosis: 10 },
    { flexion: 59, dtFlexion: 0, extension: 39, dtExtension: 0, ankylosis: 59, dtAnkylosis: 10 },
    { flexion: 60, dtFlexion: 0, extension: 40, dtExtension: 0, ankylosis: 60, dtAnkylosis: 10 },
    { flexion: '>60', dtFlexion: 0, extension: '>40', dtExtension: 0, ankylosis: '>60', dtAnkylosis: 10 }
];

// Thumb CMC Joint Radial Abduction data
const RADIALABDUCTIONData = [
    { radialAbduction: 0, dtAbnormalMotion: 10, dtAnkylosis: 10 },
    { radialAbduction: 1, dtAbnormalMotion: 10, dtAnkylosis: 10 },   
    { radialAbduction: 2, dtAbnormalMotion: 10, dtAnkylosis: 10 },
    { radialAbduction: 3, dtAbnormalMotion: 10, dtAnkylosis: 10 },
    { radialAbduction: 4, dtAbnormalMotion: 10, dtAnkylosis: 10 },
    { radialAbduction: 5, dtAbnormalMotion: 10, dtAnkylosis: 10 },    
    { radialAbduction: 6, dtAbnormalMotion: 10, dtAnkylosis: 10 },
    { radialAbduction: 7, dtAbnormalMotion: 10, dtAnkylosis: 10 },
    { radialAbduction: 8, dtAbnormalMotion: 10, dtAnkylosis: 10 },
    { radialAbduction: 9, dtAbnormalMotion: 10, dtAnkylosis: 10 },
    { radialAbduction: 10, dtAbnormalMotion: 10, dtAnkylosis: 10 },
    { radialAbduction: 11, dtAbnormalMotion: 10, dtAnkylosis: 10 },
    { radialAbduction: 12, dtAbnormalMotion: 10, dtAnkylosis: 10 },
    { radialAbduction: 13, dtAbnormalMotion: 10, dtAnkylosis: 10 },    
    { radialAbduction: 14, dtAbnormalMotion: 10, dtAnkylosis: 10 },
    { radialAbduction: 15, dtAbnormalMotion: 10, dtAnkylosis: 10 },
    { radialAbduction: 16, dtAbnormalMotion: 10, dtAnkylosis: 10 },
    { radialAbduction: 17, dtAbnormalMotion: 10, dtAnkylosis: 10 },
    { radialAbduction: 18, dtAbnormalMotion: 9, dtAnkylosis: 10 },
    { radialAbduction: 19, dtAbnormalMotion: 9, dtAnkylosis: 10 },
    { radialAbduction: 20, dtAbnormalMotion: 9, dtAnkylosis: 10 },
    { radialAbduction: 21, dtAbnormalMotion: 9, dtAnkylosis: 10 },
    { radialAbduction: 22, dtAbnormalMotion: 8, dtAnkylosis: 9 },
    { radialAbduction: 23, dtAbnormalMotion: 8, dtAnkylosis: 9 },
    { radialAbduction: 24, dtAbnormalMotion: 7, dtAnkylosis: 8 },
    { radialAbduction: 25, dtAbnormalMotion: 7, dtAnkylosis: 8 },
    { radialAbduction: 26, dtAbnormalMotion: 7, dtAnkylosis: 8 },
    { radialAbduction: 27, dtAbnormalMotion: 6, dtAnkylosis: 7 },
    { radialAbduction: 28, dtAbnormalMotion: 6, dtAnkylosis: 7 },
    { radialAbduction: 29, dtAbnormalMotion: 5, dtAnkylosis: 6 },
    { radialAbduction: 30, dtAbnormalMotion: 5, dtAnkylosis: 6 },
    { radialAbduction: 31, dtAbnormalMotion: 5, dtAnkylosis: 6 },
    { radialAbduction: 32, dtAbnormalMotion: 4, dtAnkylosis: 6 },
    { radialAbduction: 33, dtAbnormalMotion: 4, dtAnkylosis: 6 },
    { radialAbduction: 34, dtAbnormalMotion: 3, dtAnkylosis: 6 },
    { radialAbduction: 35, dtAbnormalMotion: 3, dtAnkylosis: 6 },
    { radialAbduction: 36, dtAbnormalMotion: 3, dtAnkylosis: 6 },
    { radialAbduction: 37, dtAbnormalMotion: 3, dtAnkylosis: 6 },
    { radialAbduction: 38, dtAbnormalMotion: 2, dtAnkylosis: 7 },
    { radialAbduction: 39, dtAbnormalMotion: 2, dtAnkylosis: 7 },
    { radialAbduction: 40, dtAbnormalMotion: 2, dtAnkylosis: 7 },
    { radialAbduction: 41, dtAbnormalMotion: 2, dtAnkylosis: 7 },
    { radialAbduction: 42, dtAbnormalMotion: 1, dtAnkylosis: 7 },
    { radialAbduction: 43, dtAbnormalMotion: 1, dtAnkylosis: 8 },
    { radialAbduction: 44, dtAbnormalMotion: 0, dtAnkylosis: 8 },
    { radialAbduction: 45, dtAbnormalMotion: 0, dtAnkylosis: 8 },
    { radialAbduction: 46, dtAbnormalMotion: 0, dtAnkylosis: 8 },
    { radialAbduction: 47, dtAbnormalMotion: 0, dtAnkylosis: 8 },
    { radialAbduction: 48, dtAbnormalMotion: 0, dtAnkylosis: 9 },
    { radialAbduction: 49, dtAbnormalMotion: 0, dtAnkylosis: 9 },
    { radialAbduction: 50, dtAbnormalMotion: 0, dtAnkylosis: 9 },
    { radialAbduction: '>50', dtAbnormalMotion: 0, dtAnkylosis: 9 }
];

// Thumb CMC Joint Adduction data
const ADDUCTIONData = [
    { cm: '>8', dtAbnormalMotion: 20, dtAnkylosis: 20 },
    { cm: 8, dtAbnormalMotion: 20, dtAnkylosis: 20 },
    { cm: 7.9, dtAbnormalMotion: 19, dtAnkylosis: 20 },
    { cm: 7.8, dtAbnormalMotion: 19, dtAnkylosis: 20 },
    { cm: 7.7, dtAbnormalMotion: 18, dtAnkylosis: 20 },
    { cm: 7.6, dtAbnormalMotion: 17, dtAnkylosis: 20 },
    { cm: 7.5, dtAbnormalMotion: 17, dtAnkylosis: 20 },
    { cm: 7.4, dtAbnormalMotion: 16, dtAnkylosis: 19 },
    { cm: 7.3, dtAbnormalMotion: 15, dtAnkylosis: 19 },
    { cm: 7.2, dtAbnormalMotion: 14, dtAnkylosis: 19 },
    { cm: 7.1, dtAbnormalMotion: 14, dtAnkylosis: 19 },
    { cm: 7, dtAbnormalMotion: 13, dtAnkylosis: 19 },
    { cm: 6.9, dtAbnormalMotion: 13, dtAnkylosis: 19 },
    { cm: 6.8, dtAbnormalMotion: 12, dtAnkylosis: 19 },
    { cm: 6.7, dtAbnormalMotion: 12, dtAnkylosis: 18 },
    { cm: 6.6, dtAbnormalMotion: 11, dtAnkylosis: 18 },
    { cm: 6.5, dtAbnormalMotion: 11, dtAnkylosis: 18 },
    { cm: 6.4, dtAbnormalMotion: 10, dtAnkylosis: 18 },
    { cm: 6.3, dtAbnormalMotion: 10, dtAnkylosis: 18 },
    { cm: 6.2, dtAbnormalMotion: 9, dtAnkylosis: 17 },
    { cm: 6.1, dtAbnormalMotion: 9, dtAnkylosis: 17 },
    { cm: 6, dtAbnormalMotion: 8, dtAnkylosis: 17 },
    { cm: 5.9, dtAbnormalMotion: 8, dtAnkylosis: 17 },
    { cm: 5.8, dtAbnormalMotion: 8, dtAnkylosis: 17 },
    { cm: 5.7, dtAbnormalMotion: 7, dtAnkylosis: 16 },
    { cm: 5.6, dtAbnormalMotion: 7, dtAnkylosis: 16 },
    { cm: 5.5, dtAbnormalMotion: 7, dtAnkylosis: 16 },
    { cm: 5.4, dtAbnormalMotion: 7, dtAnkylosis: 16 },
    { cm: 5.3, dtAbnormalMotion: 7, dtAnkylosis: 16 },
    { cm: 5.2, dtAbnormalMotion: 6, dtAnkylosis: 15 },
    { cm: 5.1, dtAbnormalMotion: 6, dtAnkylosis: 15 },
    { cm: 5, dtAbnormalMotion: 6, dtAnkylosis: 15 },
    { cm: 4.9, dtAbnormalMotion: 6, dtAnkylosis: 15 },
    { cm: 4.8, dtAbnormalMotion: 6, dtAnkylosis: 14 },
    { cm: 4.7, dtAbnormalMotion: 5, dtAnkylosis: 14 },
    { cm: 4.6, dtAbnormalMotion: 5, dtAnkylosis: 13 },
    { cm: 4.5, dtAbnormalMotion: 5, dtAnkylosis: 13 },
    { cm: 4.4, dtAbnormalMotion: 5, dtAnkylosis: 12 },
    { cm: 4.3, dtAbnormalMotion: 5, dtAnkylosis: 12 },
    { cm: 4.2, dtAbnormalMotion: 5, dtAnkylosis: 11 },
    { cm: 4.1, dtAbnormalMotion: 4, dtAnkylosis: 11 },
    { cm: 4, dtAbnormalMotion: 4, dtAnkylosis: 10 },
    { cm: 3.9, dtAbnormalMotion: 4, dtAnkylosis: 11 },
    { cm: 3.8, dtAbnormalMotion: 4, dtAnkylosis: 11 },
    { cm: 3.7, dtAbnormalMotion: 4, dtAnkylosis: 12 },
    { cm: 3.6, dtAbnormalMotion: 4, dtAnkylosis: 12 },
    { cm: 3.5, dtAbnormalMotion: 4, dtAnkylosis: 13 },
    { cm: 3.4, dtAbnormalMotion: 3, dtAnkylosis: 13 },
    { cm: 3.3, dtAbnormalMotion: 3, dtAnkylosis: 14 },
    { cm: 3.2, dtAbnormalMotion: 3, dtAnkylosis: 14 },
    { cm: 3.1, dtAbnormalMotion: 3, dtAnkylosis: 15 },
    { cm: 3, dtAbnormalMotion: 3, dtAnkylosis: 15 },
    { cm: 2.9, dtAbnormalMotion: 3, dtAnkylosis: 15 },
    { cm: 2.8, dtAbnormalMotion: 3, dtAnkylosis: 15 },
    { cm: 2.7, dtAbnormalMotion: 2, dtAnkylosis: 16 },
    { cm: 2.6, dtAbnormalMotion: 2, dtAnkylosis: 16 },
    { cm: 2.5, dtAbnormalMotion: 2, dtAnkylosis: 16 },
    { cm: 2.4, dtAbnormalMotion: 2, dtAnkylosis: 16 },
    { cm: 2.3, dtAbnormalMotion: 2, dtAnkylosis: 16 },
    { cm: 2.2, dtAbnormalMotion: 1, dtAnkylosis: 17 },
    { cm: 2.1, dtAbnormalMotion: 1, dtAnkylosis: 17 },
    { cm: 2, dtAbnormalMotion: 1, dtAnkylosis: 17 },
    { cm: 1.9, dtAbnormalMotion: 1, dtAnkylosis: 17 },
    { cm: 1.8, dtAbnormalMotion: 1, dtAnkylosis: 17 },
    { cm: 1.7, dtAbnormalMotion: 1, dtAnkylosis: 18 },
    { cm: 1.6, dtAbnormalMotion: 1, dtAnkylosis: 18 },
    { cm: 1.5, dtAbnormalMotion: 1, dtAnkylosis: 18 },
    { cm: 1.4, dtAbnormalMotion: 0, dtAnkylosis: 18 },
    { cm: 1.3, dtAbnormalMotion: 0, dtAnkylosis: 18 },
    { cm: 1.2, dtAbnormalMotion: 0, dtAnkylosis: 19 },
    { cm: 1.1, dtAbnormalMotion: 0, dtAnkylosis: 19 },
    { cm: 1, dtAbnormalMotion: 0, dtAnkylosis: 19 },
    { cm: 0.9, dtAbnormalMotion: 0, dtAnkylosis: 19 },
    { cm: 0.8, dtAbnormalMotion: 0, dtAnkylosis: 19 },
    { cm: 0.7, dtAbnormalMotion: 0, dtAnkylosis: 19 },
    { cm: 0.6, dtAbnormalMotion: 0, dtAnkylosis: 19 },
    { cm: 0.5, dtAbnormalMotion: 0, dtAnkylosis: 20 },
    { cm: 0.4, dtAbnormalMotion: 0, dtAnkylosis: 20 },
    { cm: 0.3, dtAbnormalMotion: 0, dtAnkylosis: 20 },
    { cm: 0.2, dtAbnormalMotion: 0, dtAnkylosis: 20 },
    { cm: 0.1, dtAbnormalMotion: 0, dtAnkylosis: 20 },
    { cm: 0, dtAbnormalMotion: 0, dtAnkylosis: 20 }
  ];

  // Thumb CMC Joint Opposition data
const OPPOSITIONData = [
    { cm: '>8', dtAbnormalMotion: 0, dtAnkylosis: 29 },
    { cm: 8, dtAbnormalMotion: 0, dtAnkylosis: 29 },
    { cm: 7.9, dtAbnormalMotion: 0, dtAnkylosis: 29 },
    { cm: 7.8, dtAbnormalMotion: 0, dtAnkylosis: 29 },
    { cm: 7.7, dtAbnormalMotion: 0, dtAnkylosis: 28 },
    { cm: 7.6, dtAbnormalMotion: 0, dtAnkylosis: 28 },
    { cm: 7.5, dtAbnormalMotion: 1, dtAnkylosis: 28 },
    { cm: 7.4, dtAbnormalMotion: 1, dtAnkylosis: 28 },
    { cm: 7.3, dtAbnormalMotion: 1, dtAnkylosis: 28 },
    { cm: 7.2, dtAbnormalMotion: 1, dtAnkylosis: 27 },
    { cm: 7.1, dtAbnormalMotion: 1, dtAnkylosis: 27 },
    { cm: 7, dtAbnormalMotion: 1, dtAnkylosis: 27 },
    { cm: 6.9, dtAbnormalMotion: 1, dtAnkylosis: 27 },
    { cm: 6.8, dtAbnormalMotion: 1, dtAnkylosis: 26 },
    { cm: 6.7, dtAbnormalMotion: 2, dtAnkylosis: 26 },
    { cm: 6.6, dtAbnormalMotion: 2, dtAnkylosis: 26 },
    { cm: 6.5, dtAbnormalMotion: 2, dtAnkylosis: 26 },
    { cm: 6.4, dtAbnormalMotion: 2, dtAnkylosis: 25 },
    { cm: 6.3, dtAbnormalMotion: 2, dtAnkylosis: 25 },
    { cm: 6.2, dtAbnormalMotion: 3, dtAnkylosis: 25 },
    { cm: 6.1, dtAbnormalMotion: 3, dtAnkylosis: 24 },
    { cm: 6, dtAbnormalMotion: 3, dtAnkylosis: 24 },
    { cm: 5.9, dtAbnormalMotion: 3, dtAnkylosis: 24 },
    { cm: 5.8, dtAbnormalMotion: 3, dtAnkylosis: 24 },
    { cm: 5.7, dtAbnormalMotion: 4, dtAnkylosis: 23 },
    { cm: 5.6, dtAbnormalMotion: 4, dtAnkylosis: 23 },
    { cm: 5.5, dtAbnormalMotion: 4, dtAnkylosis: 23 },
    { cm: 5.4, dtAbnormalMotion: 4, dtAnkylosis: 23 },
    { cm: 5.3, dtAbnormalMotion: 4, dtAnkylosis: 23 },
    { cm: 5.2, dtAbnormalMotion: 5, dtAnkylosis: 22 },
    { cm: 5.1, dtAbnormalMotion: 5, dtAnkylosis: 22 },
    { cm: 5, dtAbnormalMotion: 5, dtAnkylosis: 22 },
    { cm: 4.9, dtAbnormalMotion: 5, dtAnkylosis: 23 },
    { cm: 4.8, dtAbnormalMotion: 6, dtAnkylosis: 23 },
    { cm: 4.7, dtAbnormalMotion: 6, dtAnkylosis: 24 },
    { cm: 4.6, dtAbnormalMotion: 7, dtAnkylosis: 24 },
    { cm: 4.5, dtAbnormalMotion: 7, dtAnkylosis: 25 },
    { cm: 4.4, dtAbnormalMotion: 7, dtAnkylosis: 25 },
    { cm: 4.3, dtAbnormalMotion: 8, dtAnkylosis: 26 },
    { cm: 4.2, dtAbnormalMotion: 8, dtAnkylosis: 26 },
    { cm: 4.1, dtAbnormalMotion: 9, dtAnkylosis: 27 },
    { cm: 4, dtAbnormalMotion: 9, dtAnkylosis: 27 },
    { cm: 3.9, dtAbnormalMotion: 9, dtAnkylosis: 27 },
    { cm: 3.8, dtAbnormalMotion: 10, dtAnkylosis: 28 },
    { cm: 3.7, dtAbnormalMotion: 10, dtAnkylosis: 28 },
    { cm: 3.6, dtAbnormalMotion: 11, dtAnkylosis: 29 },
    { cm: 3.5, dtAbnormalMotion: 11, dtAnkylosis: 29 },
    { cm: 3.4, dtAbnormalMotion: 11, dtAnkylosis: 29 },
    { cm: 3.3, dtAbnormalMotion: 12, dtAnkylosis: 30 },
    { cm: 3.2, dtAbnormalMotion: 12, dtAnkylosis: 30 },
    { cm: 3.1, dtAbnormalMotion: 13, dtAnkylosis: 31 },
    { cm: 3, dtAbnormalMotion: 13, dtAnkylosis: 31 },
    { cm: 2.9, dtAbnormalMotion: 14, dtAnkylosis: 32 },
    { cm: 2.8, dtAbnormalMotion: 15, dtAnkylosis: 32 },
    { cm: 2.7, dtAbnormalMotion: 16, dtAnkylosis: 33 },
    { cm: 2.6, dtAbnormalMotion: 17, dtAnkylosis: 33 },
    { cm: 2.5, dtAbnormalMotion: 18, dtAnkylosis: 34 },
    { cm: 2.4, dtAbnormalMotion: 18, dtAnkylosis: 34 },
    { cm: 2.3, dtAbnormalMotion: 19, dtAnkylosis: 35 },
    { cm: 2.2, dtAbnormalMotion: 20, dtAnkylosis: 35 },
    { cm: 2.1, dtAbnormalMotion: 21, dtAnkylosis: 36 },
    { cm: 2, dtAbnormalMotion: 22, dtAnkylosis: 36 },
    { cm: 1.9, dtAbnormalMotion: 23, dtAnkylosis: 36 },
    { cm: 1.8, dtAbnormalMotion: 24, dtAnkylosis: 37 },
    { cm: 1.7, dtAbnormalMotion: 25, dtAnkylosis: 37 },
    { cm: 1.6, dtAbnormalMotion: 26, dtAnkylosis: 38 },
    { cm: 1.5, dtAbnormalMotion: 27, dtAnkylosis: 38 },
    { cm: 1.4, dtAbnormalMotion: 27, dtAnkylosis: 38 },
    { cm: 1.3, dtAbnormalMotion: 28, dtAnkylosis: 39 },
    { cm: 1.2, dtAbnormalMotion: 29, dtAnkylosis: 39 },
    { cm: 1.1, dtAbnormalMotion: 30, dtAnkylosis: 40 },
    { cm: 1, dtAbnormalMotion: 31, dtAnkylosis: 40 },
    { cm: 0.9, dtAbnormalMotion: 32, dtAnkylosis: 41 },
    { cm: 0.8, dtAbnormalMotion: 34, dtAnkylosis: 41 },
    { cm: 0.7, dtAbnormalMotion: 35, dtAnkylosis: 42 },
    { cm: 0.6, dtAbnormalMotion: 37, dtAnkylosis: 42 },
    { cm: 0.5, dtAbnormalMotion: 38, dtAnkylosis: 43 },
    { cm: 0.4, dtAbnormalMotion: 39, dtAnkylosis: 43 },
    { cm: 0.3, dtAbnormalMotion: 41, dtAnkylosis: 44 },
    { cm: 0.2, dtAbnormalMotion: 42, dtAnkylosis: 44 },
    { cm: 0.1, dtAbnormalMotion: 44, dtAnkylosis: 45 },
    { cm: 0, dtAbnormalMotion: 45, dtAnkylosis: 45 }
  ];

// Wrap the entire script in an immediately invoked function expression (IIFE)
(function() {
    console.log('Script started');

    // Utility function for rounding
    function roundHalfUp(num) {
        return Math.round(num * 100) / 100;
    }

    // Finger impairment calculation functions
function lookupfingerDTImpairment(angle, jointType, motionType) {
    console.log(`lookupfingerDTImpairment called with: angle=${angle}, jointType=${jointType}, motionType=${motionType}`);
    try {
        let data;
        if (jointType === 'DIP') {
            data = DIPData;
        } else if (jointType === 'PIP') {
            data = PIPData;
        } else if (jointType === 'MP') {
            data = FINGERMPData;
        } else {
            throw new Error('Invalid joint type');
        }

        let dtImpairment = null;
        
        // Handle special cases for ankylosis
        if (motionType === 'ankylosis') {
            if (jointType === 'DIP' && angle > 70) return 45;
            if (jointType === 'PIP' && angle > 100) return 80;
            if (jointType === 'MP' && angle > 90) return 100;
        }

        for (let i = 0; i < data.length; i++) {
            const row = data[i];
            if (motionType === 'flexion' && (angle <= row.flexion || row.flexion === '<-30' && angle < -30)) {
                dtImpairment = row.dtFlexion;
                break;
            } else if (motionType === 'extension' && (angle <= row.extension || row.extension === '<-70' && angle < -70)) {
                dtImpairment = row.dtExtension;
                break;
            } else if (motionType === 'ankylosis' && (angle <= row.ankylosis || row.ankylosis === '<-30' && angle < -30)) {
                dtImpairment = row.dtAnkylosis;
                break;
            }
        }

        if (dtImpairment === null) {
            throw new Error('Angle out of range');
        }

        console.log(`lookupfingerDTImpairment result: ${dtImpairment}`);
        return dtImpairment;
    } catch (error) {
        console.error('Error in lookupfingerDTImpairment:', error);
        return 0;
    }
}

function combinefingerImpairments(impairments) {
    console.log('combinefingerImpairments called with:', impairments);
    try {
        let combinedSteps = [];
        let result = 0;

        for (let i = 0; i < impairments.length; i++) {
            let imp = impairments[i];
            if (i === 0) {
                result = imp;
            } else {
                result = result + imp * (1 - result / 100);
                result = Math.round(result); // Round after each combination
            }
            combinedSteps.push(imp);
            console.log(`Step ${i + 1}: Combining with ${imp}, Result: ${result}`);
        }

        console.log('combinefingerImpairments final result:', result);
        return { combined: result, combinedSteps };
    } catch (error) {
        console.error('Error in combinefingerImpairments:', error);
        return { combined: 0, combinedSteps: [] };
    }
}

    function addImpairments(impairments) {
        console.log('addImpairments called with:', impairments);
        try {
            let result = impairments.reduce((acc, imp) => acc + imp, 0);
            console.log('addImpairments result:', result);
            return result;
        } catch (error) {
            console.error('Error in addImpairments:', error);
            return 0;
        }
    }

    function convertToHD(dt, fingerType) {
        console.log(`convertToHD called with: dt=${dt}, fingerType=${fingerType}`);
        try {
            const conversionFactor = fingerType === 'index' || fingerType === 'middle' ? 0.2 : 0.1;
            let result = Math.round(dt * conversionFactor);
            console.log('convertToHD result:', result);
            return result;
        } catch (error) {
            console.error('Error in convertToHD:', error);
            return 0;
        }
    }

    // Thumb impairment calculation functions
    function calculateThumbImpairment(value, dataArray, type) {
    console.log(`calculateThumbImpairment called with: value=${value}, type=${type}`);
    try {
        if (value === "" || isNaN(value)) {
            return 0;
        }
        value = parseFloat(value);
        let row;
        
        // Handle special cases
        if (dataArray === IPData) {
            if ((type === 'flexion' && value < -30) || (type === 'extension' && value < -80) || (type === 'ankylosis' && (value < -30 || value > 80))) {
                return 15;
            }
        } else if (dataArray === THUMBMPData) {
            if ((type === 'flexion' && value < -40) || (type === 'extension' && value < -60) || (type === 'ankylosis' && (value < -40 || value > 60))) {
                return 10;
            }
        } else if (dataArray === RADIALABDUCTIONData && type === 'ankylosis' && value > 50) {
            return 9;
        } else if (dataArray === ADDUCTIONData && value > 8) {
            return 20;
        } else if (dataArray === OPPOSITIONData && type === 'ankylosis' && value > 8) {
            return 29;
        }
        
        if (type === 'radialAbduction' || type === 'cm') {
            row = dataArray.find(r => r[type] === value) || 
                  dataArray.find(r => r[type] === `>${Math.abs(value)}`) ||
                  dataArray.find(r => r[type] === `<${Math.abs(value)}`);
        } else if (type === 'ankylosis' && (dataArray === RADIALABDUCTIONData || dataArray === ADDUCTIONData || dataArray === OPPOSITIONData)) {
            const lookupType = dataArray === RADIALABDUCTIONData ? 'radialAbduction' : 'cm';
            row = dataArray.find(r => r[lookupType] === value) || 
                  dataArray.find(r => r[lookupType] === `>${Math.abs(value)}`) ||
                  dataArray.find(r => r[lookupType] === `<${Math.abs(value)}`);
        } else {
            row = dataArray.find(r => r[type] === value);
        }
        
        let result = 0;
        if (row) {
            if (type === 'radialAbduction' || type === 'cm') {
                result = row.dtAbnormalMotion || 0;
            } else if (type === 'ankylosis') {
                result = row.dtAnkylosis || 0;
            } else {
                result = row[`dt${type.charAt(0).toUpperCase() + type.slice(1)}`] || 0;
            }
        }
        console.log('calculateThumbImpairment result:', result);
        return result;
    } catch (error) {
        console.error('Error in calculateThumbImpairment:', error);
        return 0;
    }
}

    function clearAllInputs() {
        console.log('clearAllInputs called');
        try {
            // Clear all input fields
            const allInputs = document.querySelectorAll('input[type="number"]');
            allInputs.forEach(input => {
                input.value = '';
            });

            // Reset all impairment displays
            const allImpairments = document.querySelectorAll('.DIPFlexionImpairment, .DIPExtensionImpairment, .DIPAnkylosisImpairment, .DIPTotalImpairment, .PIPFlexionImpairment, .PIPExtensionImpairment, .PIPAnkylosisImpairment, .PIPTotalImpairment, .MPFlexionImpairment, .MPExtensionImpairment, .MPAnkylosisImpairment, .MPTotalImpairment');
            allImpairments.forEach(imp => {
                imp.textContent = '0';
            });

            // Reset CVC results
            const cvcResults = document.querySelectorAll('.cvc-result');
            cvcResults.forEach(cvc => {
                cvc.textContent = 'CVC: 0 DT = 0 HD';
            });

            // Reset thumb impairments
            const thumbImpairments = document.querySelectorAll('#ip-flexion-imp, #ip-extension-imp, #ip-ankylosis-imp, #ip-imp, #mp-flexion-imp, #mp-extension-imp, #mp-ankylosis-imp, #mp-imp, #radial-abduction-motion-imp, #radial-abduction-ankylosis-imp, #radial-abduction-imp, #cmc-adduction-motion-imp, #cmc-adduction-ankylosis-imp, #cmc-adduction-imp, #opposition-motion-imp, #opposition-ankylosis-imp, #opposition-imp');
            thumbImpairments.forEach(imp => {
                imp.textContent = '0';
            });

            // Reset thumb ADD result
            document.getElementById('total-imp').textContent = 'ADD: 0 DT = 0 HD';

            // Reset total impairment results
            document.getElementById('total-hd-impairment').textContent = '0';
            document.getElementById('total-ue-impairment').textContent = '0';
            document.getElementById('total-wpi').textContent = '0';

            console.log('All inputs cleared');

            // Recalculate all impairments to update any derived values
            calculateAllImpairments();
        } catch (error) {
            console.error('Error in clearAllInputs:', error);
        }
    }

    // Main calculation function
    function calculateAllImpairments() {
        console.log('calculateAllImpairments called');
        try {
            let totalHDImpairment = 0;

            // Calculate finger impairments
            const fingerTypes = ['index', 'middle', 'ring', 'little'];

            fingerTypes.forEach(fingerType => {
                console.log(`Calculating impairment for ${fingerType} finger`);
                const form = document.getElementById(`${fingerType}Finger`);
                if (!form) {
                    console.error(`Form not found for ${fingerType} finger`);
                    return;
                }
                
                // DIP Joint
                const dipFlexion = form.querySelector('.DIPFlexion').value;
                const dipExtension = form.querySelector('.DIPExtension').value;
                const dipAnkylosis = form.querySelector('.DIPAnkylosis').value;

                const dipFlexionImp = dipFlexion ? lookupfingerDTImpairment(parseFloat(dipFlexion), 'DIP', 'flexion') : 0;
                const dipExtensionImp = dipExtension ? lookupfingerDTImpairment(parseFloat(dipExtension), 'DIP', 'extension') : 0;
                const dipAnkylosisImp = dipAnkylosis ? lookupfingerDTImpairment(parseFloat(dipAnkylosis), 'DIP', 'ankylosis') : 0;

                form.querySelector('.DIPFlexionImpairment').textContent = dipFlexionImp;
                form.querySelector('.DIPExtensionImpairment').textContent = dipExtensionImp;
                form.querySelector('.DIPAnkylosisImpairment').textContent = dipAnkylosisImp;

                const dipTotalImp = Math.max(dipFlexionImp + dipExtensionImp, dipAnkylosisImp);
                form.querySelector('.DIPTotalImpairment').textContent = dipTotalImp;

                // PIP Joint
                const pipFlexion = form.querySelector('.PIPFlexion').value;
                const pipExtension = form.querySelector('.PIPExtension').value;
                const pipAnkylosis = form.querySelector('.PIPAnkylosis').value;

                const pipFlexionImp = pipFlexion ? lookupfingerDTImpairment(parseFloat(pipFlexion), 'PIP', 'flexion') : 0;
                const pipExtensionImp = pipExtension ? lookupfingerDTImpairment(parseFloat(pipExtension), 'PIP', 'extension') : 0;
                const pipAnkylosisImp = pipAnkylosis ? lookupfingerDTImpairment(parseFloat(pipAnkylosis), 'PIP', 'ankylosis') : 0;

                form.querySelector('.PIPFlexionImpairment').textContent = pipFlexionImp;
                form.querySelector('.PIPExtensionImpairment').textContent = pipExtensionImp;
                form.querySelector('.PIPAnkylosisImpairment').textContent = pipAnkylosisImp;

                const pipTotalImp = Math.max(pipFlexionImp + pipExtensionImp, pipAnkylosisImp);
                form.querySelector('.PIPTotalImpairment').textContent = pipTotalImp;

                // MP Joint
                const mpFlexion = form.querySelector('.MPFlexion').value;
                const mpExtension = form.querySelector('.MPExtension').value;
                const mpAnkylosis = form.querySelector('.MPAnkylosis').value;

                const mpFlexionImp = mpFlexion ? lookupfingerDTImpairment(parseFloat(mpFlexion), 'MP', 'flexion') : 0;
                const mpExtensionImp = mpExtension ? lookupfingerDTImpairment(parseFloat(mpExtension), 'MP', 'extension') : 0;
                const mpAnkylosisImp = mpAnkylosis ? lookupfingerDTImpairment(parseFloat(mpAnkylosis), 'MP', 'ankylosis') : 0;

                form.querySelector('.MPFlexionImpairment').textContent = mpFlexionImp;
                form.querySelector('.MPExtensionImpairment').textContent = mpExtensionImp;
                form.querySelector('.MPAnkylosisImpairment').textContent = mpAnkylosisImp;

                const mpTotalImp = Math.max(mpFlexionImp + mpExtensionImp, mpAnkylosisImp);
                form.querySelector('.MPTotalImpairment').textContent = mpTotalImp;

                // Calculate total finger impairment
                const jointImpairments = [dipTotalImp, pipTotalImp, mpTotalImp].filter(imp => imp > 0);
                jointImpairments.sort((a, b) => b - a);

                console.log(`${fingerType} Finger Joint Impairments:`, jointImpairments);

                const { combined: totalImpairment, combinedSteps } = combinefingerImpairments(jointImpairments);

                const hdImpairment = convertToHD(totalImpairment, fingerType);
                totalHDImpairment += hdImpairment;

                console.log(`${fingerType} Finger Impairment Details:`, {
                    jointImpairments,
                    totalImpairment,
                    combinedSteps,
                    hdImpairment
                });

                let CVC;
                if (totalImpairment === 0) {
                    CVC = `CVC: 0 DT = 0 HD`;
                } else if (jointImpairments.length === 1) {
                    CVC = `CVC: ${totalImpairment} DT = ${hdImpairment} HD`;
                } else {
                    const combinedStepsText = combinedSteps.join(' C ');
                    CVC = `CVC: ${combinedStepsText} = ${totalImpairment} DT = ${hdImpairment} HD`;
                }

                form.querySelector('.cvc-result').textContent = CVC;

                console.log(`${fingerType} Finger CVC:`, CVC);
            });

            // Calculate thumb impairment
            console.log('Calculating thumb impairment');
            const ipFlexion = document.getElementById('ip-flexion').value;
            const ipExtension = document.getElementById('ip-extension').value;
            const ipAnkylosis = document.getElementById('ip-ankylosis').value;
            
            let ipFlexionImp = calculateThumbImpairment(ipFlexion, IPData, 'flexion');
            let ipExtensionImp = calculateThumbImpairment(ipExtension, IPData, 'extension');
            let ipAnkylosisImp = calculateThumbImpairment(ipAnkylosis, IPData, 'ankylosis');
            
            document.getElementById('ip-flexion-imp').textContent = ipFlexionImp;
            document.getElementById('ip-extension-imp').textContent = ipExtensionImp;
            document.getElementById('ip-ankylosis-imp').textContent = ipAnkylosisImp;
            let ipTotalImp = Math.max(ipFlexionImp + ipExtensionImp, ipAnkylosisImp);
            document.getElementById('ip-imp').textContent = ipTotalImp;

            const mpFlexion = document.getElementById('mp-flexion').value;
            const mpExtension = document.getElementById('mp-extension').value;
            const mpAnkylosis = document.getElementById('mp-ankylosis').value;
            
            let mpFlexionImp = calculateThumbImpairment(mpFlexion, THUMBMPData, 'flexion');
            let mpExtensionImp = calculateThumbImpairment(mpExtension, THUMBMPData, 'extension');
            let mpAnkylosisImp = calculateThumbImpairment(mpAnkylosis, THUMBMPData, 'ankylosis');
            
            document.getElementById('mp-flexion-imp').textContent = mpFlexionImp;
            document.getElementById('mp-extension-imp').textContent = mpExtensionImp;
            document.getElementById('mp-ankylosis-imp').textContent = mpAnkylosisImp;
            let mpTotalImp = Math.max(mpFlexionImp + mpExtensionImp, mpAnkylosisImp);
            document.getElementById('mp-imp').textContent = mpTotalImp;

            const radialAbduction = document.getElementById('radial-abduction').value;
            const radialAbductionAnkylosis = document.getElementById('radial-abduction-ankylosis').value;

            let radialAbductionImp = calculateThumbImpairment(radialAbduction, RADIALABDUCTIONData, 'radialAbduction');
            let radialAbductionAnkylosisImp = calculateThumbImpairment(radialAbductionAnkylosis, RADIALABDUCTIONData, 'ankylosis');

            document.getElementById('radial-abduction-motion-imp').textContent = radialAbductionImp;
            document.getElementById('radial-abduction-ankylosis-imp').textContent = radialAbductionAnkylosisImp;
            let radialAbductionTotalImp = Math.max(radialAbductionImp, radialAbductionAnkylosisImp);
            document.getElementById('radial-abduction-imp').textContent = radialAbductionTotalImp;

            const cmcAdduction = document.getElementById('cmc-adduction').value;
            const cmcAdductionAnkylosis = document.getElementById('cmc-adduction-ankylosis').value;

            let cmcAdductionImp = calculateThumbImpairment(cmcAdduction, ADDUCTIONData, 'cm');
            let cmcAdductionAnkylosisImp = calculateThumbImpairment(cmcAdductionAnkylosis, ADDUCTIONData, 'ankylosis');

            document.getElementById('cmc-adduction-motion-imp').textContent = cmcAdductionImp;
            document.getElementById('cmc-adduction-ankylosis-imp').textContent = cmcAdductionAnkylosisImp;
            let cmcAdductionTotalImp = Math.max(cmcAdductionImp, cmcAdductionAnkylosisImp);
            document.getElementById('cmc-adduction-imp').textContent = cmcAdductionTotalImp;

            const opposition = document.getElementById('opposition').value;
            const oppositionAnkylosis = document.getElementById('opposition-ankylosis').value;

            let oppositionImp = calculateThumbImpairment(opposition, OPPOSITIONData, 'cm');
            let oppositionAnkylosisImp = calculateThumbImpairment(oppositionAnkylosis, OPPOSITIONData, 'ankylosis');

            document.getElementById('opposition-motion-imp').textContent = oppositionImp;
            document.getElementById('opposition-ankylosis-imp').textContent = oppositionAnkylosisImp;
            let oppositionTotalImp = Math.max(oppositionImp, oppositionAnkylosisImp);
            document.getElementById('opposition-imp').textContent = oppositionTotalImp;

            const totalThumbDigitImp = ipTotalImp + mpTotalImp + radialAbductionTotalImp + cmcAdductionTotalImp + oppositionTotalImp;
            const thumbHandImp = Math.round(totalThumbDigitImp * 0.4);
            totalHDImpairment += thumbHandImp;

            let thumbImpairments = [
                { value: ipTotalImp, label: 'IP' },
                { value: mpTotalImp, label: 'MP' },
                { value: radialAbductionTotalImp, label: 'Radial Abduction' },
                { value: cmcAdductionTotalImp, label: 'CMC Adduction' },
                { value: oppositionTotalImp, label: 'Opposition' }
            ].filter(imp => imp.value > 0);

            thumbImpairments.sort((a, b) => b.value - a.value);

            let additionString = thumbImpairments.map(imp => imp.value).join(' + ');

            if (additionString) {
                document.getElementById('total-imp').textContent = 
                    `ADD: ${additionString} = ${totalThumbDigitImp} DT = ${thumbHandImp} HD`;
            } else {
                document.getElementById('total-imp').textContent = 
                    `ADD: 0 DT = 0 HD`;
            }
            
            // Calculate total hand impairment
            const totalUEImpairment = Math.round(totalHDImpairment * 0.9);
            const totalWPI = Math.round(totalUEImpairment * 0.6);

            document.getElementById('total-hd-impairment').textContent = totalHDImpairment;
            document.getElementById('total-ue-impairment').textContent = totalUEImpairment;
            document.getElementById('total-wpi').textContent = totalWPI;

            document.getElementById('total-hd-impairment').style.fontWeight = 'bold';
            document.getElementById('total-ue-impairment').style.fontWeight = 'bold';
            document.getElementById('total-wpi').style.fontWeight = 'bold';
            
            console.log('Final Impairment Results:', { totalHDImpairment, totalUEImpairment, totalWPI });
        } catch (error) {
            console.error('Error in calculateAllImpairments:', error);
        }
    }

    // Event listeners
    function initializeEventListeners() {
        console.log('Initializing event listeners');
        try {
            const inputFields = document.querySelectorAll('input[type="number"]');
            inputFields.forEach(input => {
                input.addEventListener('input', calculateAllImpairments);
            });

            const clearAllButton = document.getElementById('clearAllButton');
            if (clearAllButton) {
                clearAllButton.addEventListener('click', clearAllInputs);
            } else {
                console.warn('Clear All button not found');
            }

            console.log('Event listeners initialized');
        } catch (error) {
            console.error('Error initializing event listeners:', error);
        }
    }

    // Initialize the script
    document.addEventListener('DOMContentLoaded', function() {
        console.log('DOMContentLoaded event fired');
        initializeEventListeners();
        calculateAllImpairments();
    });

    console.log('Script initialization complete');
})();
