// Pre-Calculated Route Database
// All routes that cross the Aaron Halo with exit distances for each band

import { BANDS, type AaronHaloBand } from './bands';

export interface BandExit {
  bandId: number;
  distanceFromStanton: number;   // km - Stanton marker method
  distanceToDestination: number; // km - remaining distance to destination
  distanceFromStart: number;     // km - how far traveled from start
}

export interface PreCalculatedRoute {
  id: string;                    // 'arc-l1_to_hur-l5'
  startId: string;
  destinationId: string;
  totalDistance: number;         // km (approximate)
  crossesHalo: boolean;
  bandExits: BandExit[];
}

/**
 * Pre-Calculated Route Database
 *
 * Routes are calculated based on the geometry of the Stanton system:
 * - Quantum travel follows straight lines between locations
 * - The Aaron Halo is a ring at fixed distances from Stanton marker
 * - Exit distances are where the route line crosses each band
 *
 * Note: Some routes may not cross all bands depending on angle.
 * Routes that don't cross the halo at all have crossesHalo: false.
 *
 * Distance values are approximations. For maximum accuracy, verify
 * exit distances in-game and update this database.
 */
export const ROUTES: PreCalculatedRoute[] = [
  // ==================== ARC-L1 Routes ====================
  {
    id: 'arc-l1_to_cru-l4',
    startId: 'arc-l1',
    destinationId: 'cru-l4',
    totalDistance: 21_000_000,
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 8_257_000, distanceFromStart: 12_743_000 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 8_043_000, distanceFromStart: 12_957_000 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 7_907_000, distanceFromStart: 13_093_000 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 7_673_000, distanceFromStart: 13_327_000 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 7_493_000, distanceFromStart: 13_507_000 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 7_213_000, distanceFromStart: 13_787_000 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 6_946_000, distanceFromStart: 14_054_000 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 6_668_000, distanceFromStart: 14_332_000 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 6_549_000, distanceFromStart: 14_451_000 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 6_364_000, distanceFromStart: 14_636_000 }
    ]
  },
  {
    id: 'arc-l1_to_crusader',
    startId: 'arc-l1',
    destinationId: 'crusader',
    totalDistance: 41_000_000,
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 8_573_000, distanceFromStart: 32_427_000 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 8_339_000, distanceFromStart: 32_661_000 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 8_190_000, distanceFromStart: 32_810_000 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 7_938_000, distanceFromStart: 33_062_000 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 7_745_000, distanceFromStart: 33_255_000 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 7_443_000, distanceFromStart: 33_557_000 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 7_156_000, distanceFromStart: 33_844_000 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 6_858_000, distanceFromStart: 34_142_000 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 6_730_000, distanceFromStart: 34_270_000 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 6_531_000, distanceFromStart: 34_469_000 }
    ]
  },
  {
    id: 'arc-l1_to_cru-l5',
    startId: 'arc-l1',
    destinationId: 'cru-l5',
    totalDistance: 45_000_000,
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 6_324_000, distanceFromStart: 38_676_000 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 6_098_000, distanceFromStart: 38_902_000 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 5_958_000, distanceFromStart: 39_042_000 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 5_719_000, distanceFromStart: 39_281_000 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 5_536_000, distanceFromStart: 39_464_000 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 5_250_000, distanceFromStart: 39_750_000 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 4_977_000, distanceFromStart: 40_023_000 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 4_694_000, distanceFromStart: 40_306_000 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 4_572_000, distanceFromStart: 40_428_000 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 4_383_000, distanceFromStart: 40_617_000 }
    ]
  },
  {
    id: 'arc-l1_to_hurston',
    startId: 'arc-l1',
    destinationId: 'hurston',
    totalDistance: 27_000_000,
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 12_601_000, distanceFromStart: 14_399_000 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 12_384_000, distanceFromStart: 14_616_000 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 12_256_000, distanceFromStart: 14_744_000 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 12_039_000, distanceFromStart: 14_961_000 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 11_872_000, distanceFromStart: 15_128_000 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 11_612_000, distanceFromStart: 15_388_000 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 11_364_000, distanceFromStart: 15_636_000 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 11_107_000, distanceFromStart: 15_893_000 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 10_996_000, distanceFromStart: 16_004_000 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 10_824_000, distanceFromStart: 16_176_000 }
    ]
  },
  {
    id: 'arc-l1_to_cru-l3',
    startId: 'arc-l1',
    destinationId: 'cru-l3',
    totalDistance: 18_000_000,
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 9_723_000, distanceFromStart: 8_277_000 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 9_446_000, distanceFromStart: 8_554_000 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 9_265_000, distanceFromStart: 8_735_000 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 8_958_000, distanceFromStart: 9_042_000 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 8_723_000, distanceFromStart: 9_277_000 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 8_356_000, distanceFromStart: 9_644_000 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 8_006_000, distanceFromStart: 9_994_000 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 7_643_000, distanceFromStart: 10_357_000 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 7_486_000, distanceFromStart: 10_514_000 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 7_244_000, distanceFromStart: 10_756_000 }
    ]
  },

  // ==================== ARC-L2 Routes ====================
  {
    id: 'arc-l2_to_cru-l4',
    startId: 'arc-l2',
    destinationId: 'cru-l4',
    totalDistance: 29_000_000,
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 9_362_000, distanceFromStart: 19_638_000 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 9_140_000, distanceFromStart: 19_860_000 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 8_999_000, distanceFromStart: 20_001_000 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 8_754_000, distanceFromStart: 20_246_000 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 8_568_000, distanceFromStart: 20_432_000 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 8_278_000, distanceFromStart: 20_722_000 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 8_000_000, distanceFromStart: 21_000_000 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 7_713_000, distanceFromStart: 21_287_000 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 7_590_000, distanceFromStart: 21_410_000 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 7_399_000, distanceFromStart: 21_601_000 }
    ]
  },
  {
    id: 'arc-l2_to_crusader',
    startId: 'arc-l2',
    destinationId: 'crusader',
    totalDistance: 41_000_000,
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 17_644_000, distanceFromStart: 23_356_000 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 17_418_000, distanceFromStart: 23_582_000 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 17_286_000, distanceFromStart: 23_714_000 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 17_062_000, distanceFromStart: 23_938_000 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 16_890_000, distanceFromStart: 24_110_000 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 16_622_000, distanceFromStart: 24_378_000 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 16_366_000, distanceFromStart: 24_634_000 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 16_100_000, distanceFromStart: 24_900_000 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 15_985_000, distanceFromStart: 25_015_000 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 15_809_000, distanceFromStart: 25_191_000 }
    ]
  },
  {
    id: 'arc-l2_to_hur-l5',
    startId: 'arc-l2',
    destinationId: 'hur-l5',
    totalDistance: 24_000_000,
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 7_204_000, distanceFromStart: 16_796_000 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 6_991_000, distanceFromStart: 17_009_000 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 6_854_000, distanceFromStart: 17_146_000 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 6_621_000, distanceFromStart: 17_379_000 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 6_443_000, distanceFromStart: 17_557_000 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 6_166_000, distanceFromStart: 17_834_000 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 5_902_000, distanceFromStart: 18_098_000 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 5_627_000, distanceFromStart: 18_373_000 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 5_509_000, distanceFromStart: 18_491_000 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 5_327_000, distanceFromStart: 18_673_000 }
    ]
  },
  {
    id: 'arc-l2_to_hurston',
    startId: 'arc-l2',
    destinationId: 'hurston',
    totalDistance: 25_000_000,
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 11_933_000, distanceFromStart: 13_067_000 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 11_719_000, distanceFromStart: 13_281_000 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 11_595_000, distanceFromStart: 13_405_000 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 11_382_000, distanceFromStart: 13_618_000 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 11_219_000, distanceFromStart: 13_781_000 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 10_965_000, distanceFromStart: 14_035_000 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 10_722_000, distanceFromStart: 14_278_000 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 10_471_000, distanceFromStart: 14_529_000 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 10_362_000, distanceFromStart: 14_638_000 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 10_195_000, distanceFromStart: 14_805_000 }
    ]
  },

  // ==================== ARC-L4 Routes ====================
  {
    id: 'arc-l4_to_hur-l5',
    startId: 'arc-l4',
    destinationId: 'hur-l5',
    totalDistance: 27_000_000,
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 10_391_000, distanceFromStart: 16_609_000 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 10_183_000, distanceFromStart: 16_817_000 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 10_046_000, distanceFromStart: 16_954_000 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 9_823_000, distanceFromStart: 17_177_000 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 9_652_000, distanceFromStart: 17_348_000 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 9_385_000, distanceFromStart: 17_615_000 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 9_130_000, distanceFromStart: 17_870_000 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 8_866_000, distanceFromStart: 18_134_000 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 8_752_000, distanceFromStart: 18_248_000 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 8_576_000, distanceFromStart: 18_424_000 }
    ]
  },
  {
    id: 'arc-l4_to_hurston',
    startId: 'arc-l4',
    destinationId: 'hurston',
    totalDistance: 24_000_000,
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 7_070_000, distanceFromStart: 16_930_000 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 6_858_000, distanceFromStart: 17_142_000 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 6_722_000, distanceFromStart: 17_278_000 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 6_505_000, distanceFromStart: 17_495_000 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 6_339_000, distanceFromStart: 17_661_000 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 6_080_000, distanceFromStart: 17_920_000 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 5_833_000, distanceFromStart: 18_167_000 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 5_577_000, distanceFromStart: 18_423_000 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 5_466_000, distanceFromStart: 18_534_000 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 5_296_000, distanceFromStart: 18_704_000 }
    ]
  },
  {
    id: 'arc-l4_to_crusader',
    startId: 'arc-l4',
    destinationId: 'crusader',
    totalDistance: 48_000_000,
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 8_843_000, distanceFromStart: 39_157_000 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 8_607_000, distanceFromStart: 39_393_000 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 8_463_000, distanceFromStart: 39_537_000 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 8_219_000, distanceFromStart: 39_781_000 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 8_032_000, distanceFromStart: 39_968_000 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 7_740_000, distanceFromStart: 40_260_000 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 7_462_000, distanceFromStart: 40_538_000 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 7_173_000, distanceFromStart: 40_827_000 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 7_049_000, distanceFromStart: 40_951_000 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 6_857_000, distanceFromStart: 41_143_000 }
    ]
  },
  {
    id: 'arc-l4_to_hur-l4',
    startId: 'arc-l4',
    destinationId: 'hur-l4',
    totalDistance: 22_000_000,
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 12_057_000, distanceFromStart: 9_943_000 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 11_843_000, distanceFromStart: 10_157_000 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 11_712_000, distanceFromStart: 10_288_000 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 11_491_000, distanceFromStart: 10_509_000 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 11_322_000, distanceFromStart: 10_678_000 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 11_058_000, distanceFromStart: 10_942_000 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 10_806_000, distanceFromStart: 11_194_000 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 10_545_000, distanceFromStart: 11_455_000 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 10_432_000, distanceFromStart: 11_568_000 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 10_259_000, distanceFromStart: 11_741_000 }
    ]
  },

  // ==================== CRU-L1 Routes ====================
  {
    id: 'cru-l1_to_arc-l3',
    startId: 'cru-l1',
    destinationId: 'arc-l3',
    totalDistance: 15_000_000,
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 8_250_000, distanceFromStart: 6_750_000 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 8_051_000, distanceFromStart: 6_949_000 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 7_927_000, distanceFromStart: 7_073_000 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 7_706_000, distanceFromStart: 7_294_000 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 7_537_000, distanceFromStart: 7_463_000 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 7_274_000, distanceFromStart: 7_726_000 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 7_022_000, distanceFromStart: 7_978_000 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 6_761_000, distanceFromStart: 8_239_000 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 6_648_000, distanceFromStart: 8_352_000 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 6_474_000, distanceFromStart: 8_526_000 }
    ]
  },
  {
    id: 'cru-l1_to_microtech',
    startId: 'cru-l1',
    destinationId: 'microtech',
    totalDistance: 48_000_000,
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 23_693_000, distanceFromStart: 24_307_000 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 23_836_000, distanceFromStart: 24_164_000 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 23_953_000, distanceFromStart: 24_047_000 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 24_140_000, distanceFromStart: 23_860_000 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 24_294_000, distanceFromStart: 23_706_000 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 24_534_000, distanceFromStart: 23_466_000 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 24_764_000, distanceFromStart: 23_236_000 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 25_001_000, distanceFromStart: 22_999_000 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 25_104_000, distanceFromStart: 22_896_000 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 25_262_000, distanceFromStart: 22_738_000 }
    ]
  },
  {
    id: 'cru-l1_to_arccorp',
    startId: 'cru-l1',
    destinationId: 'arccorp',
    totalDistance: 21_000_000,
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 8_495_000, distanceFromStart: 12_505_000 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 8_269_000, distanceFromStart: 12_731_000 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 8_128_000, distanceFromStart: 12_872_000 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 7_892_000, distanceFromStart: 13_108_000 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 7_711_000, distanceFromStart: 13_289_000 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 7_429_000, distanceFromStart: 13_571_000 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 7_160_000, distanceFromStart: 13_840_000 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 6_881_000, distanceFromStart: 14_119_000 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 6_762_000, distanceFromStart: 14_238_000 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 6_576_000, distanceFromStart: 14_424_000 }
    ]
  },
  {
    id: 'cru-l1_to_arc-l5',
    startId: 'cru-l1',
    destinationId: 'arc-l5',
    totalDistance: 17_000_000,
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 10_794_000, distanceFromStart: 6_206_000 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 10_560_000, distanceFromStart: 6_440_000 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 10_424_000, distanceFromStart: 6_576_000 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 10_191_000, distanceFromStart: 6_809_000 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 10_013_000, distanceFromStart: 6_987_000 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 9_736_000, distanceFromStart: 7_264_000 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 9_472_000, distanceFromStart: 7_528_000 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 9_199_000, distanceFromStart: 7_801_000 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 9_081_000, distanceFromStart: 7_919_000 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 8_899_000, distanceFromStart: 8_101_000 }
    ]
  },

  // ==================== HUR-L1 Routes ====================
  {
    id: 'hur-l1_to_arc-l3',
    startId: 'hur-l1',
    destinationId: 'arc-l3',
    totalDistance: 17_000_000,
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 7_826_000, distanceFromStart: 9_174_000 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 7_604_000, distanceFromStart: 9_396_000 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 7_476_000, distanceFromStart: 9_524_000 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 7_257_000, distanceFromStart: 9_743_000 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 7_090_000, distanceFromStart: 9_910_000 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 6_829_000, distanceFromStart: 10_171_000 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 6_580_000, distanceFromStart: 10_420_000 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 6_322_000, distanceFromStart: 10_678_000 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 6_211_000, distanceFromStart: 10_789_000 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 6_039_000, distanceFromStart: 10_961_000 }
    ]
  },
  {
    id: 'hur-l1_to_microtech',
    startId: 'hur-l1',
    destinationId: 'microtech',
    totalDistance: 50_000_000,
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 23_901_000, distanceFromStart: 26_099_000 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 24_078_000, distanceFromStart: 25_922_000 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 24_181_000, distanceFromStart: 25_819_000 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 24_358_000, distanceFromStart: 25_642_000 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 24_493_000, distanceFromStart: 25_507_000 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 24_704_000, distanceFromStart: 25_296_000 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 24_906_000, distanceFromStart: 25_094_000 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 25_115_000, distanceFromStart: 24_885_000 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 25_206_000, distanceFromStart: 24_794_000 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 25_345_000, distanceFromStart: 24_655_000 }
    ]
  },
  {
    id: 'hur-l1_to_arc-l4',
    startId: 'hur-l1',
    destinationId: 'arc-l4',
    totalDistance: 18_000_000,
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 7_779_000, distanceFromStart: 10_221_000 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 7_555_000, distanceFromStart: 10_445_000 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 7_424_000, distanceFromStart: 10_576_000 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 7_202_000, distanceFromStart: 10_798_000 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 7_032_000, distanceFromStart: 10_968_000 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 6_767_000, distanceFromStart: 11_233_000 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 6_514_000, distanceFromStart: 11_486_000 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 6_252_000, distanceFromStart: 11_748_000 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 6_139_000, distanceFromStart: 11_861_000 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 5_964_000, distanceFromStart: 12_036_000 }
    ]
  },
  {
    id: 'hur-l1_to_arccorp',
    startId: 'hur-l1',
    destinationId: 'arccorp',
    totalDistance: 22_000_000,
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 8_697_000, distanceFromStart: 13_303_000 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 8_470_000, distanceFromStart: 13_530_000 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 8_338_000, distanceFromStart: 13_662_000 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 8_112_000, distanceFromStart: 13_888_000 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 7_939_000, distanceFromStart: 14_061_000 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 7_669_000, distanceFromStart: 14_331_000 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 7_411_000, distanceFromStart: 14_589_000 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 7_144_000, distanceFromStart: 14_856_000 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 7_028_000, distanceFromStart: 14_972_000 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 6_850_000, distanceFromStart: 15_150_000 }
    ]
  },
  {
    id: 'hur-l1_to_arc-l5',
    startId: 'hur-l1',
    destinationId: 'arc-l5',
    totalDistance: 33_000_000,
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 8_290_000, distanceFromStart: 24_710_000 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 8_473_000, distanceFromStart: 24_527_000 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 8_580_000, distanceFromStart: 24_420_000 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 8_762_000, distanceFromStart: 24_238_000 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 8_902_000, distanceFromStart: 24_098_000 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 9_120_000, distanceFromStart: 23_880_000 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 9_328_000, distanceFromStart: 23_672_000 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 9_544_000, distanceFromStart: 23_456_000 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 9_637_000, distanceFromStart: 23_363_000 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 9_781_000, distanceFromStart: 23_219_000 }
    ]
  },

  // ==================== HUR-L2 Routes ====================
  {
    id: 'hur-l2_to_microtech',
    startId: 'hur-l2',
    destinationId: 'microtech',
    totalDistance: 52_000_000,
    crossesHalo: true,
    bandExits: [
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 25_352_000, distanceFromStart: 26_648_000 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 25_210_000, distanceFromStart: 26_790_000 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 25_119_000, distanceFromStart: 26_881_000 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 24_907_000, distanceFromStart: 27_093_000 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 24_703_000, distanceFromStart: 27_297_000 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 24_490_000, distanceFromStart: 27_510_000 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 24_354_000, distanceFromStart: 27_646_000 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 24_175_000, distanceFromStart: 27_825_000 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 24_070_000, distanceFromStart: 27_930_000 },
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 23_891_000, distanceFromStart: 28_109_000 }
    ]
  },
  {
    id: 'hur-l2_to_arc-l4',
    startId: 'hur-l2',
    destinationId: 'arc-l4',
    totalDistance: 18_000_000,
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 7_344_000, distanceFromStart: 10_656_000 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 7_120_000, distanceFromStart: 10_880_000 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 6_988_000, distanceFromStart: 11_012_000 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 6_763_000, distanceFromStart: 11_237_000 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 6_590_000, distanceFromStart: 11_410_000 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 6_321_000, distanceFromStart: 11_679_000 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 6_064_000, distanceFromStart: 11_936_000 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 5_797_000, distanceFromStart: 12_203_000 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 5_682_000, distanceFromStart: 12_318_000 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 5_505_000, distanceFromStart: 12_495_000 }
    ]
  },
  {
    id: 'hur-l2_to_arccorp',
    startId: 'hur-l2',
    destinationId: 'arccorp',
    totalDistance: 20_000_000,
    crossesHalo: true,
    bandExits: [
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 9_327_000, distanceFromStart: 10_673_000 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 9_103_000, distanceFromStart: 10_897_000 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 8_972_000, distanceFromStart: 11_028_000 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 8_750_000, distanceFromStart: 11_250_000 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 8_579_000, distanceFromStart: 11_421_000 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 8_313_000, distanceFromStart: 11_687_000 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 8_059_000, distanceFromStart: 11_941_000 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 7_796_000, distanceFromStart: 12_204_000 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 7_682_000, distanceFromStart: 12_318_000 },
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 7_507_000, distanceFromStart: 12_493_000 }
    ]
  },
  {
    id: 'hur-l2_to_arc-l5',
    startId: 'hur-l2',
    destinationId: 'arc-l5',
    totalDistance: 35_000_000,
    crossesHalo: true,
    bandExits: [
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 8_679_000, distanceFromStart: 26_321_000 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 8_536_000, distanceFromStart: 26_464_000 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 8_443_000, distanceFromStart: 26_557_000 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 8_229_000, distanceFromStart: 26_771_000 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 8_023_000, distanceFromStart: 26_977_000 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 7_807_000, distanceFromStart: 27_193_000 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 7_669_000, distanceFromStart: 27_331_000 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 7_488_000, distanceFromStart: 27_512_000 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 7_382_000, distanceFromStart: 27_618_000 },
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 7_200_000, distanceFromStart: 27_800_000 }
    ]
  },

  // ==================== MIC-L1 Routes ====================
  {
    id: 'mic-l1_to_arccorp',
    startId: 'mic-l1',
    destinationId: 'arccorp',
    totalDistance: 56_000_000,
    crossesHalo: true,
    bandExits: [
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 25_895_000, distanceFromStart: 30_105_000 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 25_748_000, distanceFromStart: 30_252_000 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 25_652_000, distanceFromStart: 30_348_000 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 25_429_000, distanceFromStart: 30_571_000 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 25_214_000, distanceFromStart: 30_786_000 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 24_989_000, distanceFromStart: 31_011_000 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 24_845_000, distanceFromStart: 31_155_000 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 24_657_000, distanceFromStart: 31_343_000 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 24_547_000, distanceFromStart: 31_453_000 },
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 24_358_000, distanceFromStart: 31_642_000 }
    ]
  },
  {
    id: 'mic-l1_to_hurston',
    startId: 'mic-l1',
    destinationId: 'hurston',
    totalDistance: 26_000_000,
    crossesHalo: true,
    bandExits: [
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 12_426_000, distanceFromStart: 13_574_000 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 12_278_000, distanceFromStart: 13_722_000 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 12_183_000, distanceFromStart: 13_817_000 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 11_960_000, distanceFromStart: 14_040_000 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 11_745_000, distanceFromStart: 14_255_000 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 11_520_000, distanceFromStart: 14_480_000 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 11_376_000, distanceFromStart: 14_624_000 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 11_188_000, distanceFromStart: 14_812_000 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 11_078_000, distanceFromStart: 14_922_000 },
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 10_889_000, distanceFromStart: 15_111_000 }
    ]
  },
  {
    id: 'mic-l1_to_hur-l4',
    startId: 'mic-l1',
    destinationId: 'hur-l4',
    totalDistance: 27_000_000,
    crossesHalo: true,
    bandExits: [
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 6_854_000, distanceFromStart: 20_146_000 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 6_707_000, distanceFromStart: 20_293_000 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 6_611_000, distanceFromStart: 20_389_000 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 6_389_000, distanceFromStart: 20_611_000 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 6_175_000, distanceFromStart: 20_825_000 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 5_951_000, distanceFromStart: 21_049_000 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 5_807_000, distanceFromStart: 21_193_000 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 5_620_000, distanceFromStart: 21_380_000 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 5_510_000, distanceFromStart: 21_490_000 },
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 5_322_000, distanceFromStart: 21_678_000 }
    ]
  },
  {
    id: 'mic-l1_to_crusader',
    startId: 'mic-l1',
    destinationId: 'crusader',
    totalDistance: 42_000_000,
    crossesHalo: true,
    bandExits: [
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 19_356_000, distanceFromStart: 22_644_000 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 19_209_000, distanceFromStart: 22_791_000 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 19_114_000, distanceFromStart: 22_886_000 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 18_892_000, distanceFromStart: 23_108_000 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 18_678_000, distanceFromStart: 23_322_000 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 18_454_000, distanceFromStart: 23_546_000 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 18_310_000, distanceFromStart: 23_690_000 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 18_123_000, distanceFromStart: 23_877_000 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 18_013_000, distanceFromStart: 23_987_000 },
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 17_824_000, distanceFromStart: 24_176_000 }
    ]
  },
  {
    id: 'mic-l1_to_cru-l5',
    startId: 'mic-l1',
    destinationId: 'cru-l5',
    totalDistance: 50_000_000,
    crossesHalo: true,
    bandExits: [
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 24_971_000, distanceFromStart: 25_029_000 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 24_823_000, distanceFromStart: 25_177_000 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 24_727_000, distanceFromStart: 25_273_000 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 24_504_000, distanceFromStart: 25_496_000 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 24_289_000, distanceFromStart: 25_711_000 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 24_064_000, distanceFromStart: 25_936_000 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 23_920_000, distanceFromStart: 26_080_000 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 23_732_000, distanceFromStart: 26_268_000 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 23_621_000, distanceFromStart: 26_379_000 },
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 23_432_000, distanceFromStart: 26_568_000 }
    ]
  },

  // ==================== MIC-L2 Routes ====================
  {
    id: 'mic-l2_to_cru-l3',
    startId: 'mic-l2',
    destinationId: 'cru-l3',
    totalDistance: 38_000_000,
    crossesHalo: true,
    bandExits: [
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 1_767_000, distanceFromStart: 36_233_000 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 2_136_000, distanceFromStart: 35_864_000 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 2_479_000, distanceFromStart: 35_521_000 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 3_098_000, distanceFromStart: 34_902_000 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 3_666_000, distanceFromStart: 34_334_000 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 4_190_000, distanceFromStart: 33_810_000 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 4_525_000, distanceFromStart: 33_475_000 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 4_988_000, distanceFromStart: 33_012_000 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 5_260_000, distanceFromStart: 32_740_000 },
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 5_728_000, distanceFromStart: 32_272_000 }
    ]
  },
  {
    id: 'mic-l2_to_hurston',
    startId: 'mic-l2',
    destinationId: 'hurston',
    totalDistance: 53_000_000,
    crossesHalo: true,
    bandExits: [
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 36_963_000, distanceFromStart: 16_037_000 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 36_816_000, distanceFromStart: 16_184_000 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 36_721_000, distanceFromStart: 16_279_000 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 36_498_000, distanceFromStart: 16_502_000 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 36_283_000, distanceFromStart: 16_717_000 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 36_058_000, distanceFromStart: 16_942_000 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 35_914_000, distanceFromStart: 17_086_000 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 35_726_000, distanceFromStart: 17_274_000 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 35_615_000, distanceFromStart: 17_385_000 },
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 35_426_000, distanceFromStart: 17_574_000 }
    ]
  },
  {
    id: 'mic-l2_to_hur-l4',
    startId: 'mic-l2',
    destinationId: 'hur-l4',
    totalDistance: 56_000_000,
    crossesHalo: true,
    bandExits: [
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 28_089_000, distanceFromStart: 27_911_000 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 27_941_000, distanceFromStart: 28_059_000 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 27_846_000, distanceFromStart: 28_154_000 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 27_623_000, distanceFromStart: 28_377_000 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 27_408_000, distanceFromStart: 28_592_000 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 27_183_000, distanceFromStart: 28_817_000 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 27_039_000, distanceFromStart: 28_961_000 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 26_851_000, distanceFromStart: 29_149_000 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 26_740_000, distanceFromStart: 29_260_000 },
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 26_551_000, distanceFromStart: 29_449_000 }
    ]
  },
  {
    id: 'mic-l2_to_crusader',
    startId: 'mic-l2',
    destinationId: 'crusader',
    totalDistance: 60_000_000,
    crossesHalo: true,
    bandExits: [
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 32_298_000, distanceFromStart: 27_702_000 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 32_151_000, distanceFromStart: 27_849_000 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 32_056_000, distanceFromStart: 27_944_000 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 31_833_000, distanceFromStart: 28_167_000 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 31_618_000, distanceFromStart: 28_382_000 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 31_393_000, distanceFromStart: 28_607_000 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 31_249_000, distanceFromStart: 28_751_000 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 31_061_000, distanceFromStart: 28_939_000 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 30_950_000, distanceFromStart: 29_050_000 },
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 30_761_000, distanceFromStart: 29_239_000 }
    ]
  },
  {
    id: 'mic-l2_to_cru-l5',
    startId: 'mic-l2',
    destinationId: 'cru-l5',
    totalDistance: 42_000_000,
    crossesHalo: true,
    bandExits: [
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 5_641_000, distanceFromStart: 36_359_000 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 6_249_000, distanceFromStart: 35_751_000 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 6_739_000, distanceFromStart: 35_261_000 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 7_366_000, distanceFromStart: 34_634_000 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 8_207_000, distanceFromStart: 33_793_000 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 8_718_000, distanceFromStart: 33_282_000 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 9_046_000, distanceFromStart: 32_954_000 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 9_504_000, distanceFromStart: 32_496_000 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 9_773_000, distanceFromStart: 32_227_000 },
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 10_238_000, distanceFromStart: 31_762_000 }
    ]
  },

  // ==================== MIC-L5 Routes ====================
  {
    id: 'mic-l5_to_cru-l4',
    startId: 'mic-l5',
    destinationId: 'cru-l4',
    totalDistance: 52_000_000,
    crossesHalo: true,
    bandExits: [
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 25_688_000, distanceFromStart: 26_312_000 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 25_543_000, distanceFromStart: 26_457_000 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 25_450_000, distanceFromStart: 26_550_000 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 25_234_000, distanceFromStart: 26_766_000 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 25_026_000, distanceFromStart: 26_974_000 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 24_808_000, distanceFromStart: 27_192_000 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 24_669_000, distanceFromStart: 27_331_000 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 24_486_000, distanceFromStart: 27_514_000 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 24_379_000, distanceFromStart: 27_621_000 },
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 24_195_000, distanceFromStart: 27_805_000 }
    ]
  },
  {
    id: 'mic-l5_to_crusader',
    startId: 'mic-l5',
    destinationId: 'crusader',
    totalDistance: 50_000_000,
    crossesHalo: true,
    bandExits: [
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 23_905_000, distanceFromStart: 26_095_000 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 23_761_000, distanceFromStart: 26_239_000 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 23_668_000, distanceFromStart: 26_332_000 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 23_453_000, distanceFromStart: 26_547_000 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 23_246_000, distanceFromStart: 26_754_000 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 23_029_000, distanceFromStart: 26_971_000 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 22_890_000, distanceFromStart: 27_110_000 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 22_709_000, distanceFromStart: 27_291_000 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 22_602_000, distanceFromStart: 27_398_000 },
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 22_419_000, distanceFromStart: 27_581_000 }
    ]
  },
  {
    id: 'mic-l5_to_hurston',
    startId: 'mic-l5',
    destinationId: 'hurston',
    totalDistance: 27_000_000,
    crossesHalo: true,
    bandExits: [
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 12_490_000, distanceFromStart: 14_510_000 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 12_611_000, distanceFromStart: 14_389_000 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 12_690_000, distanceFromStart: 14_310_000 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 12_873_000, distanceFromStart: 14_127_000 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 13_049_000, distanceFromStart: 13_951_000 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 13_233_000, distanceFromStart: 13_767_000 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 13_351_000, distanceFromStart: 13_649_000 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 13_505_000, distanceFromStart: 13_495_000 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 13_596_000, distanceFromStart: 13_404_000 },
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 13_751_000, distanceFromStart: 13_249_000 }
    ]
  },
  {
    id: 'mic-l5_to_cru-l3',
    startId: 'mic-l5',
    destinationId: 'cru-l3',
    totalDistance: 24_000_000,
    crossesHalo: true,
    bandExits: [
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 575_000, distanceFromStart: 23_425_000 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 740_000, distanceFromStart: 23_260_000 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 850_000, distanceFromStart: 23_150_000 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 1_079_000, distanceFromStart: 22_921_000 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 1_299_000, distanceFromStart: 22_701_000 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 1_530_000, distanceFromStart: 22_470_000 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 1_678_000, distanceFromStart: 22_322_000 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 1_871_000, distanceFromStart: 22_129_000 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 1_984_000, distanceFromStart: 22_016_000 },
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 2_178_000, distanceFromStart: 21_822_000 }
    ]
  },
  {
    id: 'mic-l5_to_hur-l4',
    startId: 'mic-l5',
    destinationId: 'hur-l4',
    totalDistance: 40_000_000,
    crossesHalo: true,
    bandExits: [
      { bandId: 10, distanceFromStanton: 21_207_000, distanceToDestination: 26_401_000, distanceFromStart: 13_599_000 },
      { bandId: 9, distanceFromStanton: 21_062_000, distanceToDestination: 26_256_000, distanceFromStart: 13_744_000 },
      { bandId: 8, distanceFromStanton: 20_968_000, distanceToDestination: 26_163_000, distanceFromStart: 13_837_000 },
      { bandId: 7, distanceFromStanton: 20_750_000, distanceToDestination: 25_948_000, distanceFromStart: 14_052_000 },
      { bandId: 6, distanceFromStanton: 20_540_000, distanceToDestination: 25_740_000, distanceFromStart: 14_260_000 },
      { bandId: 5, distanceFromStanton: 20_320_000, distanceToDestination: 25_523_000, distanceFromStart: 14_477_000 },
      { bandId: 4, distanceFromStanton: 20_179_000, distanceToDestination: 25_384_000, distanceFromStart: 14_616_000 },
      { bandId: 3, distanceFromStanton: 19_995_000, distanceToDestination: 25_203_000, distanceFromStart: 14_797_000 },
      { bandId: 2, distanceFromStanton: 19_887_000, distanceToDestination: 25_096_000, distanceFromStart: 14_904_000 },
      { bandId: 1, distanceFromStanton: 19_702_000, distanceToDestination: 24_913_000, distanceFromStart: 15_087_000 }
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
