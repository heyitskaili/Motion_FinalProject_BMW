import { gsap } from "gsap";
import { DrawSVGPlugin} from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

export function FingerprintAnimation() {
    var fingerprinttl = gsap.timeline();


    return fingerprinttl;
}