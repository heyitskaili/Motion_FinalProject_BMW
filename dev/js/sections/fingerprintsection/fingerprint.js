import {gsap} from "gsap";
import {DrawSVGPlugin} from "gsap/DrawSVGPlugin";
gsap.registerPlugin(DrawSVGPlugin);

import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
gsap.registerPlugin(ScrambleTextPlugin);


export function FingerprintAnimation() {
    var fingerprinttl = gsap.timeline();

    fingerprinttl.from("#logo", {
        duration: 0.3,
        alpha: -1

    });

    fingerprinttl.from("#outerline, #triangleright, #triangleleft", {
        duration: 1,
        drawSVG: "83% 83%"

    });

    fingerprinttl.from("#line1, #line2, #line3, #line4, #line5, #line6", {
        duration: 1,
        drawSVG: "50% 50%",
        alpha: -1

    });

    fingerprinttl.from("#outersquare", {
        duration: 0.3,
        alpha: -1
    });

    fingerprinttl.from("#fingerprintscanning", {

        duration: 0.3,
        alpha: -1

    });

    // fingerprinttl.to("#fingerprintscanning", {
        
    //     scrambleText: {
    //         duration: 3,
    //         text: "ScrambleText allows you to animate the scrambling of text.",
    //         chars: "lowerCase",
    //         revealDelay: 0.5,
    //         tweenLength: true
    //     }
    // })


    return fingerprinttl;
}
