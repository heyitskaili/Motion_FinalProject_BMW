import { gsap } from "gsap";
import { DrawSVGPlugin} from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

gsap.set("#Everything",{transformOrigin: "center"});

export function LogoAnimation() {
    var logotl = gsap.timeline();
    logotl.from("#triangle1outline,#triangle2outline, #triangle3outline,#triangle4outline", {
        duration: 1,
        drawSVG: "50% 50%"
        
    });


    logotl.from("#triangle1inside, #triangle2inside, #triangle3inside, #triangle4inside", {
        duration: 0.3,
        alpha: -1
    });

    logotl.from("#circleoutline", {
        duration: 1,
        drawSVG: "75%, 75%"
    });

    logotl.from("#BMW", {
        duration: 0.3,
        y:-20,
        alpha:-1
    });

    logotl.to("#Everything", {
        duration: 0.5,
        y:90,
        alpha:-1
        
        
    });


    return logotl;
}