import { Howl, SoundSpriteDefinitions } from "howler";

const SPRITE_PATH_MP3 = "sfx/effects.mp3";
const SPRITE_PATH_WEBM = "sfx/effects.webm";

const SOUND_SPRITE = {
    reveal_empty: [11000, 769.6145124716552],
    reveal_number: [13000, 75.14739229024947],
    flag_place: [0, 48.79818594104309],
    flag_remove: [2000, 46.575963718821],
    game_over: [4000, 1492.9931972789116],
    game_win: [7000, 2173.4240362811797],
} as SoundSpriteDefinitions;

const soundEffects = new Howl({
    src: [SPRITE_PATH_MP3, SPRITE_PATH_WEBM],
    sprite: SOUND_SPRITE,
});

export const playEmptyRevealSound = () => soundEffects.play("reveal_empty");
export const playNumberRevealSound = () => soundEffects.play("reveal_number");
export const playFlagPlaceSound = () => soundEffects.play("flag_place");
export const playFlagRemoveSound = () => soundEffects.play("flag_remove");
export const playGameOverSound = () => soundEffects.play("game_over");
export const playGameWinSound = () => soundEffects.play("game_win");
export const stopPlaying = () => soundEffects.stop();
export const mutePlaying = () => soundEffects.mute();
