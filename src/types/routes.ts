// Pre-Calculated Route Database
// All routes that cross the Aaron Halo with exit distances for each band

import { BANDS, type AaronHaloBand } from './bands';

export interface BandExit {
  bandId: number;
  distanceFromStanton: number;   // km - Stanton marker method
  distanceToDestination: number; // km - remaining distance to destination
  distanceFromStart: number;     // km - how far traveled from start
}

/**
 * BandExit with calculated exit width (margin for error)
 * Width is the gap between this band's exit and adjacent bands
 */
export interface BandExitWithWidth extends BandExit {
  exitWidth: number;             // km - margin for error when exiting at this band
  gapToPreviousBand?: number;    // km - gap to previous band (undefined for Band 1)
  gapToNextBand?: number;        // km - gap to next band (undefined for Band 10)
}

export interface PreCalculatedRoute {
  id: string;                    // 'arc-l1_to_hur-l5'
  startId: string;
  destinationId: string;
  crossesHalo: boolean;
  bandExits: BandExit[];
}

/**
 * Pre-Calculated Route Database
 *
 * Source: CaptSheppard's Aaron Halo Travel Routes (cstone.space)
 * Version: 3.19.1-LIVE
 *
 * Exit distances (distanceToDestination) are measured in-game values
 * representing the remaining distance to destination when exiting QT
 * at each band's peak density point.
 *
 * Note: distanceFromStanton values are the band's peak density distance.
 * distanceFromStart is a pre-calculated value for how far has been traveled from
 * the start; the implied total route distance at any band is
 * distanceFromStart + distanceToDestination.
 *
 * Only routes involving ARC-L1 or ARC-L2 are currently verified from source charts.
 */
export const ROUTES: PreCalculatedRoute[] = [
  // ==================== ARC-L1 Routes ====================
  // Source: ARC-L1_3.19.1-LIVE.png & Band Jump Distances.csv
  {
    id: 'arc-l1_to_cru-l4',
    startId: 'arc-l1',
    destinationId: 'cru-l4',
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 12_744_803, distanceFromStart: 8_256_962 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 13_157_847, distanceFromStart: 7_843_918 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 13_510_150, distanceFromStart: 7_491_615 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 13_934_165, distanceFromStart: 7_067_600 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 14_292_609, distanceFromStart: 6_709_156 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 14_637_246, distanceFromStart: 6_364_519 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 15_058_764, distanceFromStart: 5_943_001 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 15_524_706, distanceFromStart: 5_477_059 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 15_938_061, distanceFromStart: 5_063_704 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 16_188_952, distanceFromStart: 4_812_813 }
    ]
  },
  {
    id: 'arc-l1_to_crusader',
    startId: 'arc-l1',
    destinationId: 'crusader',
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 32_477_533, distanceFromStart: 9_173_467 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 32_661_536, distanceFromStart: 8_989_464 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 32_824_869, distanceFromStart: 8_826_131 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 33_028_998, distanceFromStart: 8_622_002 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 33_207_787, distanceFromStart: 8_443_213 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 33_384_898, distanceFromStart: 8_266_102 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 33_608_233, distanceFromStart: 8_042_767 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 33_863_390, distanceFromStart: 7_787_610 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 34_096_746, distanceFromStart: 7_554_254 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 34_241_481, distanceFromStart: 7_409_519 }
    ]
  },
  {
    id: 'arc-l1_to_cru-l5',
    startId: 'arc-l1',
    destinationId: 'cru-l5',
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 38_842_891, distanceFromStart: 6_325_109 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 38_997_920, distanceFromStart: 6_170_080 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 39_135_946, distanceFromStart: 6_032_054 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 39_308_978, distanceFromStart: 5_859_022 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 39_461_005, distanceFromStart: 5_706_995 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 39_612_032, distanceFromStart: 5_555_968 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 39_803_066, distanceFromStart: 5_364_934 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 40_022_104, distanceFromStart: 5_145_896 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 40_223_137, distanceFromStart: 4_944_863 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 40_348_158, distanceFromStart: 4_819_842 }
    ]
  },
  {
    id: 'arc-l1_to_hurston',
    startId: 'arc-l1',
    destinationId: 'hurston',
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 12_680_614, distanceFromStart: 7_630_386 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 12_881_847, distanceFromStart: 7_429_153 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 13_060_115, distanceFromStart: 7_250_885 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 13_282_453, distanceFromStart: 7_028_547 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 13_476_792, distanceFromStart: 6_834_208 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 13_668_952, distanceFromStart: 6_642_048 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 13_910_778, distanceFromStart: 6_400_222 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 14_186_429, distanceFromStart: 6_124_571 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 14_437_964, distanceFromStart: 5_873_036 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 14_593_715, distanceFromStart: 5_717_285 }
    ]
  },
  {
    id: 'arc-l1_to_cru-l3',
    startId: 'arc-l1',
    destinationId: 'cru-l3',
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 10_989_473, distanceFromStart: 11_722_527 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 11_446_936, distanceFromStart: 11_265_064 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 11_832_950, distanceFromStart: 10_879_050 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 12_293_296, distanceFromStart: 10_418_704 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 12_679_383, distanceFromStart: 10_032_617 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 13_048_324, distanceFromStart: 9_663_676 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 13_496_942, distanceFromStart: 9_215_058 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 13_989_945, distanceFromStart: 8_722_055 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 14_425_115, distanceFromStart: 8_286_885 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 14_688_359, distanceFromStart: 8_023_641 }
    ]
  },

  // ==================== ARC-L2 Routes ====================
  // Source: Band Jump Distances.csv
  {
    id: 'arc-l2_to_cru-l4',
    startId: 'arc-l2',
    destinationId: 'cru-l4',
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 8_282_791, distanceFromStart: 20_717_209 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 8_819_520, distanceFromStart: 20_180_480 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 9_261_296, distanceFromStart: 19_738_704 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 9_384_727, distanceFromStart: 19_615_273 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 10_213_088, distanceFromStart: 18_786_912 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 10_619_534, distanceFromStart: 18_380_466 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 11_108_954, distanceFromStart: 17_891_046 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 11_641_854, distanceFromStart: 17_358_146 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 12_109_387, distanceFromStart: 16_890_613 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 12_389_524, distanceFromStart: 16_610_476 }
    ]
  },
  {
    id: 'arc-l2_to_crusader',
    startId: 'arc-l2',
    destinationId: 'crusader',
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 29_835_087, distanceFromStart: 11_164_913 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 30_020_198, distanceFromStart: 10_979_802 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 30_183_988, distanceFromStart: 10_816_012 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 30_416_953, distanceFromStart: 10_583_047 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 32_090_899, distanceFromStart: 8_909_101 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 32_273_873, distanceFromStart: 8_726_127 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 32_503_681, distanceFromStart: 8_496_319 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 32_766_911, distanceFromStart: 8_233_089 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 33_005_926, distanceFromStart: 7_994_074 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 33_155_143, distanceFromStart: 7_844_857 }
    ]
  },
  {
    id: 'arc-l2_to_hur-l5',
    startId: 'arc-l2',
    destinationId: 'hur-l5',
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 7_043_371, distanceFromStart: 16_956_629 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 7_201_232, distanceFromStart: 16_798_768 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 7_341_201, distanceFromStart: 16_658_799 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 7_536_360, distanceFromStart: 16_463_640 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 7_671_815, distanceFromStart: 16_328_185 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 7_825_770, distanceFromStart: 16_174_230 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 8_019_481, distanceFromStart: 15_980_519 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 8_242_037, distanceFromStart: 15_757_963 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 8_446_266, distanceFromStart: 15_553_734 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 8_573_334, distanceFromStart: 15_426_666 }
    ]
  },
  {
    id: 'arc-l2_to_hurston',
    startId: 'arc-l2',
    destinationId: 'hurston',
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 11_591_569, distanceFromStart: 13_408_431 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 11_789_853, distanceFromStart: 13_210_147 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 11_964_198, distanceFromStart: 13_035_802 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 12_205_207, distanceFromStart: 12_794_793 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 12_373_993, distanceFromStart: 12_626_007 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 12_562_456, distanceFromStart: 12_437_544 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 12_801_159, distanceFromStart: 12_198_841 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 13_072_050, distanceFromStart: 11_927_950 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 13_320_467, distanceFromStart: 11_679_533 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 13_473_594, distanceFromStart: 11_526_406 }
    ]
  },

  // ==================== CRUSADER Routes (Verified) ====================
  // Source: Band Jump Distances.csv
  {
    id: 'crusader_to_arc-l1',
    startId: 'crusader',
    destinationId: 'arc-l1',
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 7_173_358, distanceFromStart: 34_477_642 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 6_989_355, distanceFromStart: 34_661_645 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 6_826_022, distanceFromStart: 34_824_978 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 6_621_894, distanceFromStart: 35_029_106 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 6_443_104, distanceFromStart: 35_207_896 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 6_265_993, distanceFromStart: 35_385_007 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 6_042_658, distanceFromStart: 35_608_342 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 5_787_501, distanceFromStart: 35_863_499 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 5_554_145, distanceFromStart: 36_096_855 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 5_409_410, distanceFromStart: 36_241_590 }
    ]
  },
  {
    id: 'crusader_to_arc-l2',
    startId: 'crusader',
    destinationId: 'arc-l2',
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 13_643_681, distanceFromStart: 27_356_319 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 13_458_570, distanceFromStart: 27_541_430 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 13_294_910, distanceFromStart: 27_705_090 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 13_061_778, distanceFromStart: 27_938_222 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 12_898_644, distanceFromStart: 28_101_356 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 12_715_670, distanceFromStart: 28_284_330 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 12_485_862, distanceFromStart: 28_514_138 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 12_222_632, distanceFromStart: 28_777_368 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 11_983_618, distanceFromStart: 29_016_382 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 11_834_401, distanceFromStart: 29_165_599 }
    ]
  },

  // ==================== CRU-L3 Routes ====================
  {
    id: 'cru-l3_to_arc-l1',
    startId: 'cru-l3',
    destinationId: 'arc-l1',
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 11_722_536, distanceFromStart: 10_989_464 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 11_265_073, distanceFromStart: 11_446_927 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 10_879_059, distanceFromStart: 11_832_941 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 10_418_713, distanceFromStart: 12_293_287 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 10_032_626, distanceFromStart: 12_679_374 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 9_663_684, distanceFromStart: 13_048_316 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 9_215_066, distanceFromStart: 13_496_934 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 8_722_063, distanceFromStart: 13_989_937 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 8_286_894, distanceFromStart: 14_425_106 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 8_023_649, distanceFromStart: 14_688_351 }
    ]
  },

  // ==================== CRU-L4 Routes ====================
  {
    id: 'cru-l4_to_arc-l1',
    startId: 'cru-l4',
    destinationId: 'arc-l1',
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 11_256_961, distanceFromStart: 9_743_039 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 10_843_917, distanceFromStart: 10_156_083 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 10_491_614, distanceFromStart: 10_508_386 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 10_067_599, distanceFromStart: 10_932_401 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 9_709_155, distanceFromStart: 11_290_845 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 9_364_518, distanceFromStart: 11_635_482 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 8_943_000, distanceFromStart: 12_057_000 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 8_477_058, distanceFromStart: 12_522_942 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 8_063_703, distanceFromStart: 12_936_297 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 7_812_812, distanceFromStart: 13_187_188 }
    ]
  },
  {
    id: 'cru-l4_to_arc-l2',
    startId: 'cru-l4',
    destinationId: 'arc-l2',
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 20_117_293, distanceFromStart: 8_882_707 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 19_581_064, distanceFromStart: 9_418_936 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 19_139_288, distanceFromStart: 9_860_712 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 18_565_856, distanceFromStart: 10_434_144 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 18_187_496, distanceFromStart: 10_812_504 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 17_781_049, distanceFromStart: 11_218_951 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 17_291_629, distanceFromStart: 11_708_371 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 16_758_730, distanceFromStart: 12_241_270 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 16_291_196, distanceFromStart: 12_708_804 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 16_011_059, distanceFromStart: 12_988_941 }
    ]
  },

  // ==================== CRU-L5 Routes ====================
  {
    id: 'cru-l5_to_arc-l1',
    startId: 'cru-l5',
    destinationId: 'arc-l1',
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 6_324_828, distanceFromStart: 38_843_172 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 6_169_798, distanceFromStart: 38_998_202 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 6_031_773, distanceFromStart: 39_136_227 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 5_858_741, distanceFromStart: 39_309_259 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 5_706_713, distanceFromStart: 39_461_287 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 5_555_686, distanceFromStart: 39_612_314 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 5_364_653, distanceFromStart: 39_803_347 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 5_145_615, distanceFromStart: 40_022_385 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 4_944_581, distanceFromStart: 40_223_419 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 4_819_561, distanceFromStart: 40_348_439 }
    ]
  },

  // ==================== HURSTON Routes ====================
  {
    id: 'hurston_to_arc-l1',
    startId: 'hurston',
    destinationId: 'arc-l1',
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 7_630_180, distanceFromStart: 12_680_820 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 7_428_947, distanceFromStart: 12_882_053 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 7_250_679, distanceFromStart: 13_060_321 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 7_028_341, distanceFromStart: 13_282_659 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 6_834_002, distanceFromStart: 13_476_998 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 6_641_842, distanceFromStart: 13_669_158 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 6_400_015, distanceFromStart: 13_910_985 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 6_124_364, distanceFromStart: 14_186_636 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 5_872_830, distanceFromStart: 14_438_170 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 5_717_079, distanceFromStart: 14_593_921 }
    ]
  },
  {
    id: 'hurston_to_arc-l2',
    startId: 'hurston',
    destinationId: 'arc-l2',
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 13_932_455, distanceFromStart: 11_067_545 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 13_734_171, distanceFromStart: 11_265_829 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 13_559_263, distanceFromStart: 11_440_737 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 13_318_817, distanceFromStart: 11_681_183 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 13_150_031, distanceFromStart: 11_849_969 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 12_961_568, distanceFromStart: 12_038_432 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 12_722_865, distanceFromStart: 12_277_135 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 12_451_974, distanceFromStart: 12_548_026 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 12_203_557, distanceFromStart: 12_796_443 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 12_050_430, distanceFromStart: 12_949_570 }
    ]
  },

  // ==================== HUR-L5 Routes ====================
  {
    id: 'hur-l5_to_arc-l2',
    startId: 'hur-l5',
    destinationId: 'arc-l2',
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 12_240_389, distanceFromStart: 11_759_611 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 12_082_529, distanceFromStart: 11_917_471 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 11_942_560, distanceFromStart: 12_057_440 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 11_747_400, distanceFromStart: 12_252_600 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 11_611_945, distanceFromStart: 12_388_055 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 11_457_990, distanceFromStart: 12_542_010 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 11_264_279, distanceFromStart: 12_735_721 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 11_041_724, distanceFromStart: 12_958_276 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 10_837_495, distanceFromStart: 13_162_505 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 10_710_426, distanceFromStart: 13_289_574 }
    ]
  },

  // ==================== ARCCORP Routes ====================
  // Source: Band Jump Distances.csv
  {
    id: 'arccorp_to_cru-l1',
    startId: 'arccorp',
    destinationId: 'cru-l1',
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 30_518_497, distanceFromStart: 10_241_527 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 30_700_511, distanceFromStart: 10_059_514 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 30_862_113, distanceFromStart: 9_897_911 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 31_064_125, distanceFromStart: 9_695_900 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 31_241_101, distanceFromStart: 9_518_924 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 31_416_452, distanceFromStart: 9_343_573 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 31_637_616, distanceFromStart: 9_122_408 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 31_890_358, distanceFromStart: 8_869_666 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 32_121_564, distanceFromStart: 8_638_461 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 32_264_993, distanceFromStart: 8_495_032 }
    ]
  },
  {
    id: 'arccorp_to_hur-l1',
    startId: 'arccorp',
    destinationId: 'hur-l1',
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 12_833_749, distanceFromStart: 10_404_569 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 13_020_439, distanceFromStart: 10_217_879 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 13_186_107, distanceFromStart: 10_052_211 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 13_393_090, distanceFromStart: 9_845_228 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 13_574_323, distanceFromStart: 9_663_995 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 13_753_805, distanceFromStart: 9_484_513 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 13_980_060, distanceFromStart: 9_258_258 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 14_238_463, distanceFromStart: 8_999_855 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 14_474_706, distanceFromStart: 8_763_612 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 14_621_194, distanceFromStart: 8_617_124 }
    ]
  },
  {
    id: 'arccorp_to_hur-l2',
    startId: 'arccorp',
    destinationId: 'hur-l2',
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 11_218_780, distanceFromStart: 11_376_112 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 11_436_018, distanceFromStart: 11_158_873 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 11_628_078, distanceFromStart: 10_966_813 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 11_867_129, distanceFromStart: 10_727_763 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 12_075_650, distanceFromStart: 10_519_241 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 12_281_461, distanceFromStart: 10_313_430 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 12_539_963, distanceFromStart: 10_054_928 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 12_833_970, distanceFromStart: 9_760_921 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 13_101_681, distanceFromStart: 9_493_210 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 13_267_186, distanceFromStart: 9_327_706 }
    ]
  },
  {
    id: 'arccorp_to_mic-l1',
    startId: 'arccorp',
    destinationId: 'mic-l1',
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 29_748_105, distanceFromStart: 25_894_701 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 29_085_573, distanceFromStart: 26_557_234 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 28_558_994, distanceFromStart: 27_083_813 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 27_958_511, distanceFromStart: 27_684_295 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 27_472_312, distanceFromStart: 28_170_495 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 27_019_309, distanceFromStart: 28_623_498 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 26_480_773, distanceFromStart: 29_162_034 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 25_901_518, distanceFromStart: 29_741_288 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 25_399_100, distanceFromStart: 30_243_707 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 25_098_595, distanceFromStart: 30_544_212 }
    ]
  },

  // ==================== ARC-L3 Routes ====================
  {
    id: 'arc-l3_to_cru-l1',
    startId: 'arc-l3',
    destinationId: 'cru-l1',
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 5_707_996, distanceFromStart: 12_941_643 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 5_987_223, distanceFromStart: 12_662_417 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 6_231_830, distanceFromStart: 12_417_809 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 6_533_538, distanceFromStart: 12_116_102 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 6_794_395, distanceFromStart: 11_855_245 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 7_049_884, distanceFromStart: 11_599_756 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 7_368_185, distanceFromStart: 11_281_455 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 7_726_945, distanceFromStart: 10_922_695 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 8_050_828, distanceFromStart: 10_598_811 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 8_249_818, distanceFromStart: 10_399_822 }
    ]
  },
  {
    id: 'arc-l3_to_hur-l1',
    startId: 'arc-l3',
    destinationId: 'hur-l1',
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 29_995_314, distanceFromStart: 9_365_409 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 30_154_018, distanceFromStart: 9_206_705 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 30_295_266, distanceFromStart: 9_065_457 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 30_472_273, distanceFromStart: 8_888_450 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 30_627_735, distanceFromStart: 8_732_988 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 30_782_121, distanceFromStart: 8_578_602 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 30_977_332, distanceFromStart: 8_383_391 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 31_201_062, distanceFromStart: 8_159_661 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 31_406_314, distanceFromStart: 7_954_410 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 31_533_916, distanceFromStart: 7_826_807 }
    ]
  },

  // ==================== ARC-L4 Routes ====================
  {
    id: 'arc-l4_to_crusader',
    startId: 'arc-l4',
    destinationId: 'crusader',
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 38_842_794, distanceFromStart: 9_216_394 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 38_997_077, distanceFromStart: 9_062_112 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 39_135_897, distanceFromStart: 8_923_294 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 39_326_105, distanceFromStart: 8_733_084 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 39_459_902, distanceFromStart: 8_599_287 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 39_611_749, distanceFromStart: 8_447_440 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 39_801_597, distanceFromStart: 8_257_591 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 40_021_636, distanceFromStart: 8_037_552 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 40_223_263, distanceFromStart: 7_835_926 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 40_347_579, distanceFromStart: 7_711_610 }
    ]
  },
  {
    id: 'arc-l4_to_hurston',
    startId: 'arc-l4',
    destinationId: 'hurston',
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 7_070_916, distanceFromStart: 9_343_914 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 7_230_273, distanceFromStart: 9_184_557 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 7_370_184, distanceFromStart: 9_044_646 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 7_564_946, distanceFromStart: 8_849_884 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 7_701_368, distanceFromStart: 8_713_462 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 7_856_128, distanceFromStart: 8_558_702 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 8_049_803, distanceFromStart: 8_365_027 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 8_272_616, distanceFromStart: 8_142_214 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 8_478_470, distanceFromStart: 7_936_360 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 8_605_879, distanceFromStart: 7_808_951 }
    ]
  },
  {
    id: 'arc-l4_to_hur-l1',
    startId: 'arc-l4',
    destinationId: 'hur-l1',
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 8_337_999, distanceFromStart: 9_304_651 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 8_495_192, distanceFromStart: 9_147_459 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 8_635_114, distanceFromStart: 9_007_536 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 8_810_486, distanceFromStart: 8_832_164 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 8_964_537, distanceFromStart: 8_678_114 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 9_117_543, distanceFromStart: 8_525_108 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 9_311_037, distanceFromStart: 8_331_613 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 9_532_840, distanceFromStart: 8_109_810 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 9_736_361, distanceFromStart: 7_906_290 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 9_862_904, distanceFromStart: 7_779_747 }
    ]
  },
  {
    id: 'arc-l4_to_hur-l2',
    startId: 'arc-l4',
    destinationId: 'hur-l2',
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 5_798_830, distanceFromStart: 9_397_645 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 5_958_342, distanceFromStart: 9_238_133 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 6_100_297, distanceFromStart: 9_096_178 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 6_278_176, distanceFromStart: 8_918_299 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 6_434_391, distanceFromStart: 8_762_084 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 6_589_514, distanceFromStart: 8_606_961 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 6_785_639, distanceFromStart: 8_410_836 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 7_010_396, distanceFromStart: 8_186_080 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 7_216_570, distanceFromStart: 7_979_906 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 7_344_736, distanceFromStart: 7_851_739 }
    ]
  },
  {
    id: 'arc-l4_to_hur-l4',
    startId: 'arc-l4',
    destinationId: 'hur-l4',
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 12_056_876, distanceFromStart: 10_826_300 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 12_256_149, distanceFromStart: 10_627_027 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 12_432_646, distanceFromStart: 10_450_530 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 12_675_639, distanceFromStart: 10_207_537 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 12_845_579, distanceFromStart: 10_037_597 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 13_037_482, distanceFromStart: 9_845_694 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 13_275_781, distanceFromStart: 9_607_395 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 13_594_098, distanceFromStart: 9_289_078 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 13_798_849, distanceFromStart: 9_084_327 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 13_953_751, distanceFromStart: 8_929_425 }
    ]
  },
  {
    id: 'arc-l4_to_hur-l5',
    startId: 'arc-l4',
    destinationId: 'hur-l5',
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 16_390_933, distanceFromStart: 10_943_539 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 16_593_118, distanceFromStart: 10_741_355 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 16_773_844, distanceFromStart: 10_560_629 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 17_020_906, distanceFromStart: 10_313_566 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 17_194_167, distanceFromStart: 10_140_306 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 17_386_750, distanceFromStart: 9_947_723 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 17_630_337, distanceFromStart: 9_704_136 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 17_909_463, distanceFromStart: 9_425_011 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 18_162_537, distanceFromStart: 9_171_936 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 18_319_385, distanceFromStart: 9_015_088 }
    ]
  },

  // ==================== ARC-L5 Routes ====================
  {
    id: 'arc-l5_to_cru-l1',
    startId: 'arc-l5',
    destinationId: 'cru-l1',
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 12_299_871, distanceFromStart: 13_493_581 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 12_606_171, distanceFromStart: 13_187_281 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 12_873_248, distanceFromStart: 12_920_204 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 13_201_198, distanceFromStart: 12_592_254 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 13_483_537, distanceFromStart: 12_309_915 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 13_759_066, distanceFromStart: 12_034_386 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 14_101_058, distanceFromStart: 11_692_394 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 14_484_963, distanceFromStart: 11_308_489 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 14_830_252, distanceFromStart: 10_963_200 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 15_041_829, distanceFromStart: 10_751_623 }
    ]
  },
  {
    id: 'arc-l5_to_hur-l1',
    startId: 'arc-l5',
    destinationId: 'hur-l1',
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 24_653_500, distanceFromStart: 9_969_678 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 24_827_955, distanceFromStart: 9_795_223 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 24_982_974, distanceFromStart: 9_640_204 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 25_176_918, distanceFromStart: 9_446_261 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 25_346_970, distanceFromStart: 9_276_208 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 25_515_590, distanceFromStart: 9_107_588 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 25_728_444, distanceFromStart: 8_894_734 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 25_971_923, distanceFromStart: 8_651_255 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 26_194_866, distanceFromStart: 8_428_312 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 26_333_268, distanceFromStart: 8_289_910 }
    ]
  },
  {
    id: 'arc-l5_to_hur-l2',
    startId: 'arc-l5',
    destinationId: 'hur-l2',
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 25_977_084, distanceFromStart: 10_294_899 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 26_160_603, distanceFromStart: 10_111_380 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 26_323_515, distanceFromStart: 9_948_468 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 26_527_129, distanceFromStart: 9_744_854 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 26_705_478, distanceFromStart: 9_566_505 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 26_882_161, distanceFromStart: 9_389_822 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 27_104_969, distanceFromStart: 9_167_014 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 27_359_539, distanceFromStart: 8_912_443 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 27_592_373, distanceFromStart: 8_679_610 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 27_736_791, distanceFromStart: 8_535_192 }
    ]
  },

  // ==================== CRU-L1 Routes ====================
  {
    id: 'cru-l1_to_arccorp',
    startId: 'cru-l1',
    destinationId: 'arccorp',
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 10_241_527, distanceFromStart: 30_518_497 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 10_059_514, distanceFromStart: 30_700_511 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 9_897_911, distanceFromStart: 30_862_113 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 9_695_900, distanceFromStart: 31_064_125 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 9_518_924, distanceFromStart: 31_241_101 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 9_343_573, distanceFromStart: 31_416_452 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 9_122_408, distanceFromStart: 31_637_616 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 8_869_666, distanceFromStart: 31_890_358 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 8_638_461, distanceFromStart: 32_121_564 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 8_495_032, distanceFromStart: 32_264_993 }
    ]
  },
  {
    id: 'cru-l1_to_arc-l3',
    startId: 'cru-l1',
    destinationId: 'arc-l3',
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 12_941_643, distanceFromStart: 5_707_996 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 12_662_417, distanceFromStart: 5_987_223 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 12_417_809, distanceFromStart: 6_231_830 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 12_116_102, distanceFromStart: 6_533_538 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 11_855_245, distanceFromStart: 6_794_395 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 11_599_756, distanceFromStart: 7_049_884 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 11_281_455, distanceFromStart: 7_368_185 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 10_922_695, distanceFromStart: 7_726_945 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 10_598_811, distanceFromStart: 8_050_828 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 10_399_822, distanceFromStart: 8_249_818 }
    ]
  },
  {
    id: 'cru-l1_to_arc-l5',
    startId: 'cru-l1',
    destinationId: 'arc-l5',
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 13_493_581, distanceFromStart: 12_299_871 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 13_187_281, distanceFromStart: 12_606_171 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 12_920_204, distanceFromStart: 12_873_248 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 12_592_254, distanceFromStart: 13_201_198 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 12_309_915, distanceFromStart: 13_483_537 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 12_034_386, distanceFromStart: 13_759_066 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 11_692_394, distanceFromStart: 14_101_058 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 11_308_489, distanceFromStart: 14_484_963 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 10_963_200, distanceFromStart: 14_830_252 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 10_751_623, distanceFromStart: 15_041_829 }
    ]
  },
  {
    id: 'cru-l1_to_microtech',
    startId: 'cru-l1',
    destinationId: 'microtech',
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 25_439_520, distanceFromStart: 30_501_170 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 25_257_422, distanceFromStart: 30_683_267 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 25_095_747, distanceFromStart: 30_844_943 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 24_893_646, distanceFromStart: 31_047_044 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 24_716_593, distanceFromStart: 31_224_096 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 24_541_168, distanceFromStart: 31_399_522 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 24_319_912, distanceFromStart: 31_620_778 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 24_067_067, distanceFromStart: 31_873_622 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 23_835_770, distanceFromStart: 32_104_919 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 23_692_286, distanceFromStart: 32_248_403 }
    ]
  },

  // ==================== CRU-L3 Routes ====================
  {
    id: 'cru-l3_to_mic-l2',
    startId: 'cru-l3',
    destinationId: 'mic-l2',
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 36_962_374, distanceFromStart: 1_707_251 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 36_542_665, distanceFromStart: 2_126_960 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 36_190_987, distanceFromStart: 2_478_638 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 35_718_708, distanceFromStart: 2_950_916 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 35_402_700, distanceFromStart: 3_266_924 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 35_058_121, distanceFromStart: 3_611_503 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 34_634_197, distanceFromStart: 4_035_427 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 34_166_118, distanceFromStart: 4_503_506 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 33_751_300, distanceFromStart: 4_918_324 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 33_500_178, distanceFromStart: 5_169_446 }
    ]
  },
  {
    id: 'cru-l3_to_mic-l5',
    startId: 'cru-l3',
    destinationId: 'mic-l5',
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 24_148_547, distanceFromStart: 575_826 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 23_987_426, distanceFromStart: 736_947 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 23_844_332, distanceFromStart: 880_040 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 23_646_116, distanceFromStart: 1_078_256 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 23_506_777, distanceFromStart: 1_217_595 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 23_350_276, distanceFromStart: 1_374_096 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 23_152_819, distanceFromStart: 1_571_552 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 22_925_923, distanceFromStart: 1_798_449 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 22_717_999, distanceFromStart: 2_006_372 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 22_589_682, distanceFromStart: 2_134_689 }
    ]
  },

  // ==================== CRU-L4 Routes ====================
  {
    id: 'cru-l4_to_mic-l5',
    startId: 'cru-l4',
    destinationId: 'mic-l5',
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 27_667_983, distanceFromStart: 25_688_478 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 27_439_247, distanceFromStart: 25_917_214 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 27_236_213, distanceFromStart: 26_120_249 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 26_959_015, distanceFromStart: 26_397_447 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 26_766_574, distanceFromStart: 26_589_888 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 26_551_248, distanceFromStart: 26_805_213 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 26_279_724, distanceFromStart: 27_076_738 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 25_972_148, distanceFromStart: 27_384_314 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 25_693_778, distanceFromStart: 27_662_684 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 25_521_120, distanceFromStart: 27_835_342 }
    ]
  },

  // ==================== CRU-L5 Routes ====================
  {
    id: 'cru-l5_to_mic-l1',
    startId: 'cru-l5',
    destinationId: 'mic-l1',
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 28_825_797, distanceFromStart: 8_080_212 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 28_282_439, distanceFromStart: 8_623_570 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 27_834_448, distanceFromStart: 9_071_561 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 27_309_997, distanceFromStart: 9_596_012 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 26_876_793, distanceFromStart: 10_029_216 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 26_467_492, distanceFromStart: 10_438_517 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 25_974_944, distanceFromStart: 10_931_065 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 25_439_107, distanceFromStart: 11_466_902 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 24_970_097, distanceFromStart: 11_935_912 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 24_687_944, distanceFromStart: 12_218_065 }
    ]
  },
  {
    id: 'cru-l5_to_mic-l2',
    startId: 'cru-l5',
    destinationId: 'mic-l2',
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 39_063_930, distanceFromStart: 5_641_278 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 38_456_289, distanceFromStart: 6_248_919 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 37_965_489, distanceFromStart: 6_739_719 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 37_339_184, distanceFromStart: 7_366_024 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 36_931_602, distanceFromStart: 7_773_605 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 36_497_529, distanceFromStart: 8_207_679 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 35_978_173, distanceFromStart: 8_727_035 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 35_415_212, distanceFromStart: 9_289_996 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 34_926_812, distanceFromStart: 9_778_396 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 34_633_322, distanceFromStart: 10_071_886 }
    ]
  },

  // ==================== CRUSADER Routes (Additional) ====================
  {
    id: 'crusader_to_arc-l4',
    startId: 'crusader',
    destinationId: 'arc-l4',
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 9_216_394, distanceFromStart: 38_842_794 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 9_062_112, distanceFromStart: 38_997_077 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 8_923_294, distanceFromStart: 39_135_897 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 8_733_084, distanceFromStart: 39_326_105 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 8_599_287, distanceFromStart: 39_459_902 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 8_447_440, distanceFromStart: 39_611_749 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 8_257_591, distanceFromStart: 39_801_597 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 8_037_552, distanceFromStart: 40_021_636 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 7_835_926, distanceFromStart: 40_223_263 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 7_711_610, distanceFromStart: 40_347_579 }
    ]
  },
  {
    id: 'crusader_to_mic-l1',
    startId: 'crusader',
    destinationId: 'mic-l1',
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 21_135_335, distanceFromStart: 32_160_432 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 20_949_611, distanceFromStart: 32_346_156 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 20_784_782, distanceFromStart: 32_510_986 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 20_578_824, distanceFromStart: 32_716_943 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 20_398_469, distanceFromStart: 32_897_299 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 20_219_838, distanceFromStart: 33_075_930 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 19_994_631, distanceFromStart: 33_301_137 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 19_737_393, distanceFromStart: 33_558_375 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 19_502_185, distanceFromStart: 33_793_582 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 19_356_326, distanceFromStart: 33_939_442 }
    ]
  },
  {
    id: 'crusader_to_mic-l2',
    startId: 'crusader',
    destinationId: 'mic-l2',
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 30_390_280, distanceFromStart: 31_298_581 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 30_199_296, distanceFromStart: 31_489_565 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 30_030_529, distanceFromStart: 31_658_332 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 29_797_637, distanceFromStart: 31_891_224 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 29_633_996, distanceFromStart: 32_054_865 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 29_451_195, distanceFromStart: 32_237_666 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 29_221_307, distanceFromStart: 32_467_554 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 28_958_617, distanceFromStart: 32_730_244 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 28_718_176, distanceFromStart: 32_970_685 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 28_569_022, distanceFromStart: 33_119_838 }
    ]
  },
  {
    id: 'crusader_to_mic-l5',
    startId: 'crusader',
    destinationId: 'mic-l5',
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 23_804_726, distanceFromStart: 38_619_004 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 23_648_752, distanceFromStart: 38_774_978 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 23_509_951, distanceFromStart: 38_913_779 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 23_317_648, distanceFromStart: 39_106_082 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 23_182_564, distanceFromStart: 39_241_166 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 23_030_595, distanceFromStart: 39_393_135 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 22_838_259, distanceFromStart: 39_585_471 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 22_617_802, distanceFromStart: 39_805_928 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 22_415_706, distanceFromStart: 40_008_024 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 22_290_332, distanceFromStart: 40_133_398 }
    ]
  },

  // ==================== HUR-L1 Routes ====================
  {
    id: 'hur-l1_to_arccorp',
    startId: 'hur-l1',
    destinationId: 'arccorp',
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 10_404_569, distanceFromStart: 12_833_749 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 10_217_879, distanceFromStart: 13_020_439 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 10_052_211, distanceFromStart: 13_186_107 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 9_845_228, distanceFromStart: 13_393_090 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 9_663_995, distanceFromStart: 13_574_323 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 9_484_513, distanceFromStart: 13_753_805 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 9_258_258, distanceFromStart: 13_980_060 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 8_999_855, distanceFromStart: 14_238_463 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 8_763_612, distanceFromStart: 14_474_706 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 8_617_124, distanceFromStart: 14_621_194 }
    ]
  },
  {
    id: 'hur-l1_to_arc-l3',
    startId: 'hur-l1',
    destinationId: 'arc-l3',
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 9_365_409, distanceFromStart: 29_995_314 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 9_206_705, distanceFromStart: 30_154_018 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 9_065_457, distanceFromStart: 30_295_266 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 8_888_450, distanceFromStart: 30_472_273 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 8_732_988, distanceFromStart: 30_627_735 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 8_578_602, distanceFromStart: 30_782_121 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 8_383_391, distanceFromStart: 30_977_332 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 8_159_661, distanceFromStart: 31_201_062 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 7_954_410, distanceFromStart: 31_406_314 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 7_826_807, distanceFromStart: 31_533_916 }
    ]
  },
  {
    id: 'hur-l1_to_arc-l4',
    startId: 'hur-l1',
    destinationId: 'arc-l4',
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 9_304_651, distanceFromStart: 8_337_999 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 9_147_459, distanceFromStart: 8_495_192 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 9_007_536, distanceFromStart: 8_635_114 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 8_832_164, distanceFromStart: 8_810_486 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 8_678_114, distanceFromStart: 8_964_537 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 8_525_108, distanceFromStart: 9_117_543 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 8_331_613, distanceFromStart: 9_311_037 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 8_109_810, distanceFromStart: 9_532_840 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 7_906_290, distanceFromStart: 9_736_361 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 7_779_747, distanceFromStart: 9_862_904 }
    ]
  },
  {
    id: 'hur-l1_to_arc-l5',
    startId: 'hur-l1',
    destinationId: 'arc-l5',
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 9_969_678, distanceFromStart: 24_653_500 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 9_795_223, distanceFromStart: 24_827_955 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 9_640_204, distanceFromStart: 24_982_974 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 9_446_261, distanceFromStart: 25_176_918 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 9_276_208, distanceFromStart: 25_346_970 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 9_107_588, distanceFromStart: 25_515_590 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 8_894_734, distanceFromStart: 25_728_444 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 8_651_255, distanceFromStart: 25_971_923 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 8_428_312, distanceFromStart: 26_194_866 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 8_289_910, distanceFromStart: 26_333_268 }
    ]
  },
  {
    id: 'hur-l1_to_microtech',
    startId: 'hur-l1',
    destinationId: 'microtech',
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 25_723_131, distanceFromStart: 13_026_148 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 25_535_872, distanceFromStart: 13_213_408 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 25_369_709, distanceFromStart: 13_379_570 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 25_162_122, distanceFromStart: 13_587_157 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 24_980_372, distanceFromStart: 13_768_907 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 24_800_389, distanceFromStart: 13_948_890 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 24_573_517, distanceFromStart: 14_175_762 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 24_314_430, distanceFromStart: 14_434_850 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 24_077_578, distanceFromStart: 14_671_702 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 23_930_720, distanceFromStart: 14_818_560 }
    ]
  },

  // ==================== HUR-L2 Routes ====================
  {
    id: 'hur-l2_to_arccorp',
    startId: 'hur-l2',
    destinationId: 'arccorp',
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 11_376_112, distanceFromStart: 11_218_780 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 11_158_873, distanceFromStart: 11_436_018 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 10_966_813, distanceFromStart: 11_628_078 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 10_727_763, distanceFromStart: 11_867_129 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 10_519_241, distanceFromStart: 12_075_650 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 10_313_430, distanceFromStart: 12_281_461 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 10_054_928, distanceFromStart: 12_539_963 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 9_760_921, distanceFromStart: 12_833_970 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 9_493_210, distanceFromStart: 13_101_681 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 9_327_706, distanceFromStart: 13_267_186 }
    ]
  },
  {
    id: 'hur-l2_to_arc-l4',
    startId: 'hur-l2',
    destinationId: 'arc-l4',
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 9_397_645, distanceFromStart: 5_798_830 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 9_238_133, distanceFromStart: 5_958_342 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 9_096_178, distanceFromStart: 6_100_297 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 8_918_299, distanceFromStart: 6_278_176 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 8_762_084, distanceFromStart: 6_434_391 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 8_606_961, distanceFromStart: 6_589_514 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 8_410_836, distanceFromStart: 6_785_639 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 8_186_080, distanceFromStart: 7_010_396 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 7_979_906, distanceFromStart: 7_216_570 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 7_851_739, distanceFromStart: 7_344_736 }
    ]
  },
  {
    id: 'hur-l2_to_arc-l5',
    startId: 'hur-l2',
    destinationId: 'arc-l5',
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 10_294_899, distanceFromStart: 25_977_084 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 10_111_380, distanceFromStart: 26_160_603 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 9_948_468, distanceFromStart: 26_323_515 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 9_744_854, distanceFromStart: 26_527_129 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 9_566_505, distanceFromStart: 26_705_478 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 9_389_822, distanceFromStart: 26_882_161 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 9_167_014, distanceFromStart: 27_104_969 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 8_912_443, distanceFromStart: 27_359_539 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 8_679_610, distanceFromStart: 27_592_373 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 8_535_192, distanceFromStart: 27_736_791 }
    ]
  },
  {
    id: 'hur-l2_to_microtech',
    startId: 'hur-l2',
    destinationId: 'microtech',
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 27_127_585, distanceFromStart: 10_978_865 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 26_911_312, distanceFromStart: 11_195_138 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 26_720_081, distanceFromStart: 11_386_368 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 26_482_033, distanceFromStart: 11_624_417 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 26_274_360, distanceFromStart: 11_832_090 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 26_069_363, distanceFromStart: 12_037_086 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 25_811_853, distanceFromStart: 12_294_597 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 25_518_934, distanceFromStart: 12_587_515 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 25_252_180, distanceFromStart: 12_854_270 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 25_087_250, distanceFromStart: 13_019_199 }
    ]
  },

  // ==================== HUR-L4 Routes ====================
  {
    id: 'hur-l4_to_arc-l4',
    startId: 'hur-l4',
    destinationId: 'arc-l4',
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 10_826_300, distanceFromStart: 12_056_876 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 10_627_027, distanceFromStart: 12_256_149 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 10_450_530, distanceFromStart: 12_432_646 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 10_207_537, distanceFromStart: 12_675_639 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 10_037_597, distanceFromStart: 12_845_579 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 9_845_694, distanceFromStart: 13_037_482 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 9_607_395, distanceFromStart: 13_275_781 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 9_289_078, distanceFromStart: 13_594_098 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 9_084_327, distanceFromStart: 13_798_849 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 8_929_425, distanceFromStart: 13_953_751 }
    ]
  },
  {
    id: 'hur-l4_to_mic-l1',
    startId: 'hur-l4',
    destinationId: 'mic-l1',
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 19_398_707, distanceFromStart: 6_853_484 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 19_243_678, distanceFromStart: 7_008_512 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 19_105_653, distanceFromStart: 7_146_537 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 18_932_622, distanceFromStart: 7_319_568 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 18_780_596, distanceFromStart: 7_471_595 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 18_629_570, distanceFromStart: 7_622_621 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 18_438_537, distanceFromStart: 7_813_653 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 18_219_501, distanceFromStart: 8_032_690 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 18_018_468, distanceFromStart: 8_233_722 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 17_893_448, distanceFromStart: 8_358_742 }
    ]
  },
  {
    id: 'hur-l4_to_mic-l2',
    startId: 'hur-l4',
    destinationId: 'mic-l2',
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 28_088_808, distanceFromStart: 6_852_896 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 27_933_647, distanceFromStart: 7_008_058 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 27_795_564, distanceFromStart: 7_146_140 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 27_604_297, distanceFromStart: 7_337_408 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 27_470_949, distanceFromStart: 7_470_755 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 27_319_768, distanceFromStart: 7_621_937 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 27_128_710, distanceFromStart: 7_812_994 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 26_909_713, distanceFromStart: 8_031_991 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 26_707_977, distanceFromStart: 8_233_727 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 26_583_753, distanceFromStart: 8_357_951 }
    ]
  },
  {
    id: 'hur-l4_to_mic-l5',
    startId: 'hur-l4',
    destinationId: 'mic-l5',
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 26_410_984, distanceFromStart: 12_489_712 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 26_210_116, distanceFromStart: 12_690_581 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 26_032_477, distanceFromStart: 12_868_220 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 25_787_499, distanceFromStart: 13_113_197 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 25_615_458, distanceFromStart: 13_285_238 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 25_424_870, distanceFromStart: 13_475_827 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 25_184_208, distanceFromStart: 13_716_489 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 24_908_948, distanceFromStart: 13_991_749 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 24_657_152, distanceFromStart: 14_243_544 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 24_502_232, distanceFromStart: 14_398_465 }
    ]
  },

  // ==================== HURSTON Routes (Additional) ====================
  {
    id: 'hurston_to_arc-l4',
    startId: 'hurston',
    destinationId: 'arc-l4',
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 9_343_914, distanceFromStart: 7_070_916 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 9_184_557, distanceFromStart: 7_230_273 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 9_044_646, distanceFromStart: 7_370_184 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 8_849_884, distanceFromStart: 7_564_946 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 8_713_462, distanceFromStart: 7_701_368 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 8_558_702, distanceFromStart: 7_856_128 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 8_365_027, distanceFromStart: 8_049_803 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 8_142_214, distanceFromStart: 8_272_616 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 7_936_360, distanceFromStart: 8_478_470 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 7_808_951, distanceFromStart: 8_605_879 }
    ]
  },
  {
    id: 'hurston_to_mic-l1',
    startId: 'hurston',
    destinationId: 'mic-l1',
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 21_842_365, distanceFromStart: 12_425_594 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 21_641_825, distanceFromStart: 12_626_134 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 21_464_155, distanceFromStart: 12_803_803 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 21_242_545, distanceFromStart: 13_025_414 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 21_048_826, distanceFromStart: 13_219_133 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 20_857_265, distanceFromStart: 13_410_694 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 20_616_171, distanceFromStart: 13_651_788 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 20_341_329, distanceFromStart: 13_926_629 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 20_090_510, distanceFromStart: 14_177_448 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 19_935_193, distanceFromStart: 14_332_766 }
    ]
  },
  {
    id: 'hurston_to_mic-l2',
    startId: 'hurston',
    destinationId: 'mic-l2',
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 30_811_326, distanceFromStart: 11_778_068 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 30_611_456, distanceFromStart: 11_977_938 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 30_436_968, distanceFromStart: 12_152_426 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 30_195_442, distanceFromStart: 12_393_952 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 30_025_591, distanceFromStart: 12_563_803 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 29_836_394, distanceFromStart: 12_752_999 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 29_597_652, distanceFromStart: 12_991_742 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 29_325_258, distanceFromStart: 13_264_136 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 29_076_433, distanceFromStart: 13_512_961 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 28_922_663, distanceFromStart: 13_666_730 }
    ]
  },
  {
    id: 'hurston_to_mic-l5',
    startId: 'hurston',
    destinationId: 'mic-l5',
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 23_743_591, distanceFromStart: 6_853_004 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 23_588_402, distanceFromStart: 7_008_192 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 23_450_057, distanceFromStart: 7_146_538 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 23_259_627, distanceFromStart: 7_336_968 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 23_124_541, distanceFromStart: 7_472_053 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 22_974_268, distanceFromStart: 7_622_327 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 22_782_945, distanceFromStart: 7_813_649 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 22_564_654, distanceFromStart: 8_031_940 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 22_363_024, distanceFromStart: 8_233_570 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 22_238_330, distanceFromStart: 8_358_265 }
    ]
  },

  // ==================== HUR-L5 Routes (Additional) ====================
  {
    id: 'hur-l5_to_arc-l4',
    startId: 'hur-l5',
    destinationId: 'arc-l4',
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 10_943_539, distanceFromStart: 16_390_933 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 10_741_355, distanceFromStart: 16_593_118 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 10_560_629, distanceFromStart: 16_773_844 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 10_313_566, distanceFromStart: 17_020_906 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 10_140_306, distanceFromStart: 17_194_167 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 9_947_723, distanceFromStart: 17_386_750 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 9_704_136, distanceFromStart: 17_630_337 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 9_425_011, distanceFromStart: 17_909_463 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 9_171_936, distanceFromStart: 18_162_537 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 9_015_088, distanceFromStart: 18_319_385 }
    ]
  },

  // ==================== MICROTECH Routes ====================
  {
    id: 'microtech_to_cru-l1',
    startId: 'microtech',
    destinationId: 'cru-l1',
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 30_501_170, distanceFromStart: 25_439_520 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 30_683_267, distanceFromStart: 25_257_422 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 30_844_943, distanceFromStart: 25_095_747 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 31_047_044, distanceFromStart: 24_893_646 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 31_224_096, distanceFromStart: 24_716_593 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 31_399_522, distanceFromStart: 24_541_168 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 31_620_778, distanceFromStart: 24_319_912 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 31_873_622, distanceFromStart: 24_067_067 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 32_104_919, distanceFromStart: 23_835_770 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 32_248_403, distanceFromStart: 23_692_286 }
    ]
  },
  {
    id: 'microtech_to_hur-l1',
    startId: 'microtech',
    destinationId: 'hur-l1',
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 13_026_148, distanceFromStart: 25_723_131 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 13_213_408, distanceFromStart: 25_535_872 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 13_379_570, distanceFromStart: 25_369_709 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 13_587_157, distanceFromStart: 25_162_122 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 13_768_907, distanceFromStart: 24_980_372 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 13_948_890, distanceFromStart: 24_800_389 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 14_175_762, distanceFromStart: 24_573_517 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 14_434_850, distanceFromStart: 24_314_430 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 14_671_702, distanceFromStart: 24_077_578 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 14_818_560, distanceFromStart: 23_930_720 }
    ]
  },
  {
    id: 'microtech_to_hur-l2',
    startId: 'microtech',
    destinationId: 'hur-l2',
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 10_978_865, distanceFromStart: 27_127_585 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 11_195_138, distanceFromStart: 26_911_312 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 11_386_368, distanceFromStart: 26_720_081 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 11_624_417, distanceFromStart: 26_482_033 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 11_832_090, distanceFromStart: 26_274_360 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 12_037_086, distanceFromStart: 26_069_363 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 12_294_597, distanceFromStart: 25_811_853 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 12_587_515, distanceFromStart: 25_518_934 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 12_854_270, distanceFromStart: 25_252_180 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 13_019_199, distanceFromStart: 25_087_250 }
    ]
  },

  // ==================== MIC-L1 Routes ====================
  {
    id: 'mic-l1_to_arccorp',
    startId: 'mic-l1',
    destinationId: 'arccorp',
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 25_894_701, distanceFromStart: 29_748_105 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 26_557_234, distanceFromStart: 29_085_573 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 27_083_813, distanceFromStart: 28_558_994 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 27_684_295, distanceFromStart: 27_958_511 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 28_170_495, distanceFromStart: 27_472_312 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 28_623_498, distanceFromStart: 27_019_309 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 29_162_034, distanceFromStart: 26_480_773 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 29_741_288, distanceFromStart: 25_901_518 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 30_243_707, distanceFromStart: 25_399_100 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 30_544_212, distanceFromStart: 25_098_595 }
    ]
  },
  {
    id: 'mic-l1_to_crusader',
    startId: 'mic-l1',
    destinationId: 'crusader',
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 32_160_432, distanceFromStart: 21_135_335 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 32_346_156, distanceFromStart: 20_949_611 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 32_510_986, distanceFromStart: 20_784_782 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 32_716_943, distanceFromStart: 20_578_824 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 32_897_299, distanceFromStart: 20_398_469 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 33_075_930, distanceFromStart: 20_219_838 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 33_301_137, distanceFromStart: 19_994_631 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 33_558_375, distanceFromStart: 19_737_393 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 33_793_582, distanceFromStart: 19_502_185 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 33_939_442, distanceFromStart: 19_356_326 }
    ]
  },
  {
    id: 'mic-l1_to_cru-l5',
    startId: 'mic-l1',
    destinationId: 'cru-l5',
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 8_080_212, distanceFromStart: 28_825_797 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 8_623_570, distanceFromStart: 28_282_439 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 9_071_561, distanceFromStart: 27_834_448 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 9_596_012, distanceFromStart: 27_309_997 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 10_029_216, distanceFromStart: 26_876_793 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 10_438_517, distanceFromStart: 26_467_492 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 10_931_065, distanceFromStart: 25_974_944 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 11_466_902, distanceFromStart: 25_439_107 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 11_935_912, distanceFromStart: 24_970_097 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 12_218_065, distanceFromStart: 24_687_944 }
    ]
  },
  {
    id: 'mic-l1_to_hurston',
    startId: 'mic-l1',
    destinationId: 'hurston',
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 12_425_594, distanceFromStart: 21_842_365 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 12_626_134, distanceFromStart: 21_641_825 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 12_803_803, distanceFromStart: 21_464_155 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 13_025_414, distanceFromStart: 21_242_545 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 13_219_133, distanceFromStart: 21_048_826 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 13_410_694, distanceFromStart: 20_857_265 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 13_651_788, distanceFromStart: 20_616_171 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 13_926_629, distanceFromStart: 20_341_329 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 14_177_448, distanceFromStart: 20_090_510 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 14_332_766, distanceFromStart: 19_935_193 }
    ]
  },
  {
    id: 'mic-l1_to_hur-l4',
    startId: 'mic-l1',
    destinationId: 'hur-l4',
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 6_853_484, distanceFromStart: 19_398_707 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 7_008_512, distanceFromStart: 19_243_678 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 7_146_537, distanceFromStart: 19_105_653 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 7_319_568, distanceFromStart: 18_932_622 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 7_471_595, distanceFromStart: 18_780_596 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 7_622_621, distanceFromStart: 18_629_570 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 7_813_653, distanceFromStart: 18_438_537 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 8_032_690, distanceFromStart: 18_219_501 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 8_233_722, distanceFromStart: 18_018_468 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 8_358_742, distanceFromStart: 17_893_448 }
    ]
  },

  // ==================== MIC-L2 Routes ====================
  {
    id: 'mic-l2_to_crusader',
    startId: 'mic-l2',
    destinationId: 'crusader',
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 31_298_581, distanceFromStart: 30_390_280 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 31_489_565, distanceFromStart: 30_199_296 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 31_658_332, distanceFromStart: 30_030_529 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 31_891_224, distanceFromStart: 29_797_637 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 32_054_865, distanceFromStart: 29_633_996 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 32_237_666, distanceFromStart: 29_451_195 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 32_467_554, distanceFromStart: 29_221_307 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 32_730_244, distanceFromStart: 28_958_617 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 32_970_685, distanceFromStart: 28_718_176 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 33_119_838, distanceFromStart: 28_569_022 }
    ]
  },
  {
    id: 'mic-l2_to_cru-l3',
    startId: 'mic-l2',
    destinationId: 'cru-l3',
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 1_707_251, distanceFromStart: 36_962_374 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 2_126_960, distanceFromStart: 36_542_665 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 2_478_638, distanceFromStart: 36_190_987 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 2_950_916, distanceFromStart: 35_718_708 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 3_266_924, distanceFromStart: 35_402_700 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 3_611_503, distanceFromStart: 35_058_121 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 4_035_427, distanceFromStart: 34_634_197 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 4_503_506, distanceFromStart: 34_166_118 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 4_918_324, distanceFromStart: 33_751_300 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 5_169_446, distanceFromStart: 33_500_178 }
    ]
  },
  {
    id: 'mic-l2_to_cru-l5',
    startId: 'mic-l2',
    destinationId: 'cru-l5',
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 5_641_278, distanceFromStart: 39_063_930 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 6_248_919, distanceFromStart: 38_456_289 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 6_739_719, distanceFromStart: 37_965_489 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 7_366_024, distanceFromStart: 37_339_184 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 7_773_605, distanceFromStart: 36_931_602 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 8_207_679, distanceFromStart: 36_497_529 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 8_727_035, distanceFromStart: 35_978_173 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 9_289_996, distanceFromStart: 35_415_212 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 9_778_396, distanceFromStart: 34_926_812 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 10_071_886, distanceFromStart: 34_633_322 }
    ]
  },
  {
    id: 'mic-l2_to_hurston',
    startId: 'mic-l2',
    destinationId: 'hurston',
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 11_778_068, distanceFromStart: 30_811_326 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 11_977_938, distanceFromStart: 30_611_456 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 12_152_426, distanceFromStart: 30_436_968 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 12_393_952, distanceFromStart: 30_195_442 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 12_563_803, distanceFromStart: 30_025_591 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 12_752_999, distanceFromStart: 29_836_394 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 12_991_742, distanceFromStart: 29_597_652 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 13_264_136, distanceFromStart: 29_325_258 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 13_512_961, distanceFromStart: 29_076_433 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 13_666_730, distanceFromStart: 28_922_663 }
    ]
  },
  {
    id: 'mic-l2_to_hur-l4',
    startId: 'mic-l2',
    destinationId: 'hur-l4',
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 6_852_896, distanceFromStart: 28_088_808 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 7_008_058, distanceFromStart: 27_933_647 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 7_146_140, distanceFromStart: 27_795_564 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 7_337_408, distanceFromStart: 27_604_297 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 7_470_755, distanceFromStart: 27_470_949 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 7_621_937, distanceFromStart: 27_319_768 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 7_812_994, distanceFromStart: 27_128_710 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 8_031_991, distanceFromStart: 26_909_713 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 8_233_727, distanceFromStart: 26_707_977 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 8_357_951, distanceFromStart: 26_583_753 }
    ]
  },

  // ==================== MIC-L5 Routes ====================
  {
    id: 'mic-l5_to_crusader',
    startId: 'mic-l5',
    destinationId: 'crusader',
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 38_619_004, distanceFromStart: 23_804_726 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 38_774_978, distanceFromStart: 23_648_752 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 38_913_779, distanceFromStart: 23_509_951 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 39_106_082, distanceFromStart: 23_317_648 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 39_241_166, distanceFromStart: 23_182_564 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 39_393_135, distanceFromStart: 23_030_595 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 39_585_471, distanceFromStart: 22_838_259 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 39_805_928, distanceFromStart: 22_617_802 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 40_008_024, distanceFromStart: 22_415_706 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 40_133_398, distanceFromStart: 22_290_332 }
    ]
  },
  {
    id: 'mic-l5_to_cru-l3',
    startId: 'mic-l5',
    destinationId: 'cru-l3',
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 575_826, distanceFromStart: 24_148_547 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 736_947, distanceFromStart: 23_987_426 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 880_040, distanceFromStart: 23_844_332 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 1_078_256, distanceFromStart: 23_646_116 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 1_217_595, distanceFromStart: 23_506_777 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 1_374_096, distanceFromStart: 23_350_276 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 1_571_552, distanceFromStart: 23_152_819 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 1_798_449, distanceFromStart: 22_925_923 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 2_006_372, distanceFromStart: 22_717_999 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 2_134_689, distanceFromStart: 22_589_682 }
    ]
  },
  {
    id: 'mic-l5_to_cru-l4',
    startId: 'mic-l5',
    destinationId: 'cru-l4',
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 25_688_478, distanceFromStart: 25_688_478 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 25_459_742, distanceFromStart: 25_917_214 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 25_256_707, distanceFromStart: 26_120_249 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 24_979_509, distanceFromStart: 26_397_447 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 24_787_068, distanceFromStart: 26_589_888 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 24_571_743, distanceFromStart: 26_805_213 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 24_300_218, distanceFromStart: 27_076_738 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 23_992_642, distanceFromStart: 27_384_314 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 23_714_272, distanceFromStart: 27_662_684 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 23_541_614, distanceFromStart: 27_835_342 }
    ]
  },
  {
    id: 'mic-l5_to_hurston',
    startId: 'mic-l5',
    destinationId: 'hurston',
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 6_853_004, distanceFromStart: 23_743_591 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 7_008_192, distanceFromStart: 23_588_402 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 7_146_538, distanceFromStart: 23_450_057 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 7_336_968, distanceFromStart: 23_259_627 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 7_472_053, distanceFromStart: 23_124_541 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 7_622_327, distanceFromStart: 22_974_268 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 7_813_649, distanceFromStart: 22_782_945 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 8_031_940, distanceFromStart: 22_564_654 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 8_233_570, distanceFromStart: 22_363_024 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 8_358_265, distanceFromStart: 22_238_330 }
    ]
  },
  {
    id: 'mic-l5_to_hur-l4',
    startId: 'mic-l5',
    destinationId: 'hur-l4',
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 12_489_712, distanceFromStart: 26_410_984 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 12_690_581, distanceFromStart: 26_210_116 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 12_868_220, distanceFromStart: 26_032_477 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 13_113_197, distanceFromStart: 25_787_499 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 13_285_238, distanceFromStart: 25_615_458 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 13_475_827, distanceFromStart: 25_424_870 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 13_716_489, distanceFromStart: 25_184_208 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 13_991_749, distanceFromStart: 24_908_948 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 14_243_544, distanceFromStart: 24_657_152 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 14_398_465, distanceFromStart: 24_502_232 }
    ]
  }
];

/**
 * Get route by start and destination IDs
 */
export function getRoute(startId: string, destinationId: string): PreCalculatedRoute | null {
  return ROUTES.find(r =>
    r.startId === startId && r.destinationId === destinationId
  ) || null;
}

/**
 * Get all routes from a starting location
 */
export function getRoutesFromLocation(startId: string): PreCalculatedRoute[] {
  return ROUTES.filter(r => r.startId === startId);
}

/**
 * Get all routes to a destination
 */
export function getRoutesToLocation(destinationId: string): PreCalculatedRoute[] {
  return ROUTES.filter(r => r.destinationId === destinationId);
}

/**
 * Get band exit data for a specific route and band
 */
export function getBandExit(
  startId: string,
  destinationId: string,
  bandId: number
): BandExit | null {
  const route = getRoute(startId, destinationId);
  if (!route) return null;

  return route.bandExits.find(be => be.bandId === bandId) || null;
}

/**
 * Get all available start locations that have routes
 */
export function getAvailableStartLocations(): string[] {
  const startIds = new Set<string>();
  for (const route of ROUTES) {
    startIds.add(route.startId);
  }
  return Array.from(startIds);
}

/**
 * Get available destinations from a given start location
 */
export function getAvailableDestinations(startId: string): string[] {
  return getRoutesFromLocation(startId).map(r => r.destinationId);
}

/**
 * Check if a route exists between two locations
 */
export function routeExists(startId: string, destinationId: string): boolean {
  return getRoute(startId, destinationId) !== null;
}

/**
 * Get band information with exit data for display
 */
export function getRouteWithBandInfo(
  startId: string,
  destinationId: string
): {
  route: PreCalculatedRoute;
  bandDetails: Array<{
    band: AaronHaloBand;
    exit: BandExit;
  }>;
} | null {
  const route = getRoute(startId, destinationId);
  if (!route) return null;

  const bandDetails = route.bandExits.map(exit => {
    const band = BANDS.find(b => b.id === exit.bandId);
    if (!band) throw new Error(`Band ${exit.bandId} not found`);
    return { band, exit };
  });

  return { route, bandDetails };
}

/**
 * Calculate exit widths for all bands on a route
 * Width = gap between this band's exit distance and adjacent bands
 * A wider gap means more margin for error when exiting QT
 */
export function calculateExitWidths(bandExits: BandExit[]): BandExitWithWidth[] {
  // Sort by band ID to ensure correct order
  const sorted = [...bandExits].sort((a, b) => a.bandId - b.bandId);

  return sorted.map((exit, index) => {
    const prevExit = sorted[index - 1];
    const nextExit = sorted[index + 1];

    // Calculate gaps using distanceToDestination (what pilot sees)
    const gapToPrevious = prevExit
      ? Math.abs(exit.distanceToDestination - prevExit.distanceToDestination)
      : undefined;
    const gapToNext = nextExit
      ? Math.abs(nextExit.distanceToDestination - exit.distanceToDestination)
      : undefined;

    // Exit width is the minimum gap (limiting factor for stopping accuracy)
    // For edge bands (1 and 10), use the only available gap
    let exitWidth: number;
    if (gapToPrevious !== undefined && gapToNext !== undefined) {
      exitWidth = Math.min(gapToPrevious, gapToNext);
    } else {
      exitWidth = gapToPrevious ?? gapToNext ?? 0;
    }

    return {
      ...exit,
      gapToPreviousBand: gapToPrevious,
      gapToNextBand: gapToNext,
      exitWidth
    };
  });
}

/**
 * Get exit width for a specific band on a route
 */
export function getExitWidth(
  startId: string,
  destinationId: string,
  bandId: number
): number | null {
  const route = getRoute(startId, destinationId);
  if (!route) return null;

  const withWidths = calculateExitWidths(route.bandExits);
  const bandExit = withWidths.find(be => be.bandId === bandId);

  return bandExit?.exitWidth ?? null;
}

/**
 * Get available destinations from a start location, sorted by exit width for a specific band
 * Returns destinations with widest exit margin first (easiest to stop at)
 */
export function getDestinationsByBandWidth(
  startId: string,
  bandId: number
): Array<{
  destinationId: string;
  exitDistance: number;
  exitWidth: number;
  gapToPreviousBand?: number;
  gapToNextBand?: number;
}> {
  const routes = getRoutesFromLocation(startId);

  const results = routes
    .map(route => {
      const withWidths = calculateExitWidths(route.bandExits);
      const bandExit = withWidths.find(be => be.bandId === bandId);

      if (!bandExit) return null;

      return {
        destinationId: route.destinationId,
        exitDistance: bandExit.distanceToDestination,
        exitWidth: bandExit.exitWidth,
        gapToPreviousBand: bandExit.gapToPreviousBand,
        gapToNextBand: bandExit.gapToNextBand
      };
    })
    .filter((r): r is NonNullable<typeof r> => r !== null);

  // Sort by exit width descending (widest first = easiest)
  return results.sort((a, b) => b.exitWidth - a.exitWidth);
}
