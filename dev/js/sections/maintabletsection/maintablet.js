import { gsap } from "gsap";
import { DrawSVGPlugin} from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);


export function MaintabletAnimation() {
    var maintablettl = gsap.timeline();

    maintablettl.from("#innerline", {
        duration: 1,
        drawSVG: "50% 50%"
        
    });

    maintablettl.from("#car", {
        duration: 1,
        drawSVG: "50% 50%"
        
    });


    return maintablettl;
}