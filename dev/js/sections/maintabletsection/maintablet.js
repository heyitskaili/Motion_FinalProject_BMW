import {
    gsap
} from "gsap";
import {
    DrawSVGPlugin
} from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);


export function MaintabletAnimation() {
    var maintablettl = gsap.timeline();

    maintablettl.from("#innerline, #triangleright2outline, #triangleright3outline, #triangleright4outline, #triangleright5outline, #triangleright6outline, #triangleright7outline, #triangleright8outline, #triangleright9outline,#triangleleft9outline,#triangleleft8outline,#triangleleft7outline, #triangleleft6outline, #triangleleft5outline, #triangleleft4outline, #triangleleft3outline, #triangeleft2outline", {
        duration: 2,
        drawSVG: "50% 50%"

    });

    maintablettl.from("#lightdetail,#triangleright2, #triangleright9, #triangeleft2, #triangleleft9", {
        duration: 0.4,
        alpha: -1

    });

    maintablettl.from("#light, #triangleleft8,#triangleleft7,#triangleright8,#triangleright5", {
        duration: 0.4,
        alpha: -1

    });

    maintablettl.from("#cardetail, #triangleleft5, #triangleleft6, #triangleright4, #triangleright7", {
        duration: 0.4,
        alpha: -1

    });

    maintablettl.from("#carinside, #triangleleft3, #triangleleft4, #triangleright3, #triangleright6", {
        duration: 0.4,
        alpha: -1

    });











    return maintablettl;
}