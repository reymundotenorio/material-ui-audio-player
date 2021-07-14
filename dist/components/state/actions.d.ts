declare const PLAYER_STATUS_PLAY = "PLAYER_STATUS_PLAY";
declare const PLAYER_STATUS_PAUSE = "PLAYER_STATUS_PAUSE";
declare const PLAYER_VOLUME_STATUS_UNMUTE = "PLAYER_VOLUME_STATUS_UNMUTE";
declare const PLAYER_VOLUME_STATUS_MUTE = "PLAYER_VOLUME_STATUS_MUTE";
declare const PLAYER_VOLUME_CHANGE = "PLAYER_VOLUME_CHANGE";
declare const PLAYER_SET_DURATION = "PLAYER_SET_DURATION";
declare const PLAYER_SET_TIME = "PLAYER_SET_TIME";
declare const PLAYER_SLIDER_MOVED = "PLAYER_SLIDER_MOVED";
declare const PLAYER_AUDIO_ENDED = "PLAYER_AUDIO_ENDED";
declare const PLAYER_REPLAY = "PLAYER_REPLAY";
declare const PLAYER_AUTOPLAY = "PLAYER_AUTOPLAY";
declare const PLAYER_LOOP = "PLAYER_LOOP";
declare function changeAudioVolume(dispatch: any, player: any): (value: number) => void;
declare function loopAudio(dispatch: any, player: any): (loop: boolean) => void;
declare const actionCreators: (typeof changeAudioVolume | typeof loopAudio)[];
export { actionCreators, PLAYER_VOLUME_STATUS_UNMUTE, PLAYER_VOLUME_STATUS_MUTE, PLAYER_STATUS_PLAY, PLAYER_STATUS_PAUSE, PLAYER_VOLUME_CHANGE, PLAYER_SET_DURATION, PLAYER_SET_TIME, PLAYER_SLIDER_MOVED, PLAYER_AUDIO_ENDED, PLAYER_REPLAY, PLAYER_AUTOPLAY, PLAYER_LOOP, };
