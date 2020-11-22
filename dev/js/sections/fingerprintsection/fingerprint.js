import {gsap} from "gsap";
import {DrawSVGPlugin} from "gsap/DrawSVGPlugin";
gsap.registerPlugin(DrawSVGPlugin, ScrambleTextPlugin);

import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";


gsap.set("#access-granted-bar",{transformOrigin: "center"});
gsap.set("#disappear",{transformOrigin: "center"});
gsap.set("#outersquare",{transformOrigin: "center"});

export function FingerprintAnimation() {
    var fingerprinttl = gsap.timeline();

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
        duration: 2,
        scale:0.2,
        alpha: -1,
        ease: "elastic.out(1, 0.3)"
    },"fingerprinttime1");

    fingerprinttl.from(".fingerprintscanningletter", {
        stagger: 0.1,
        duration: 0.1,
        alpha: -1

    },"fingerprinttime1");


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
