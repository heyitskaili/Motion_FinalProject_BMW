import {gsap} from "gsap";
import {DrawSVGPlugin} from "gsap/DrawSVGPlugin";
gsap.registerPlugin(DrawSVGPlugin, ScrambleTextPlugin);

import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";


gsap.set("#access-granted-bar",{transformOrigin: "center"});
gsap.set("#disappear",{transformOrigin: "center"});

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

    fingerprinttl.to("#demo-text", {
        
        scrambleText: {
            duration: 3,
            text: "ScrambleText allows you to animate the scrambling of text.",
            chars: "lowerCase",
            revealDelay: 0.5,
            tweenLength: true
        }
    })

    fingerprinttl.from("#access-granted-bar", {
        yoyo: true,
        duration: 0.5,
        alpha: -1,
        yPercent:20
        
    });


    fingerprinttl.from("#words", {

        duration: 0.3,
        alpha: -1

    });

    fingerprinttl.to("#disappear", {
        duration: 0.5,
        alpha: -1

    });


    return fingerprinttl;
}
