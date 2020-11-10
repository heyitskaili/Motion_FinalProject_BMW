import { gsap } from "gsap";
import { DrawSVGPlugin} from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

export function FingerprintAnimation() {
    var fingerprinttl = gsap.timeline();

    fingerprinttl.from("#logo", {
        duration:0.3,
        alpha: -1
        
    });

    fingerprinttl.from("#outerline, #triangleright, #triangleleft", {
        duration: 1,
        drawSVG: "83% 83%"
        
    });


    return fingerprinttl;
}