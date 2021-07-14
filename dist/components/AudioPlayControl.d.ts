import * as React from 'react';
import { IAudioPlayerColors, Icons } from './AudioPlayer';
export declare const useComponentStyles: (props: any) => Record<"icon", string>;
interface IAudioPlayControlProps {
    playerStatus: string;
    playerColors: IAudioPlayerColors;
    pauseAudio: () => void;
    playAudio: () => void;
    replayAudio: () => void;
    icons?: Icons;
    classNames?: any;
}
declare const _default: React.NamedExoticComponent<IAudioPlayControlProps>;
export default _default;
