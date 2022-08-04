import Lottie from 'react-lottie-player'
import lottieJson from '../../public/animation_2.json'

export default function Animation() {
    return(
        <Lottie
                loop
                animationData={lottieJson}
                play
        />
    )
};
