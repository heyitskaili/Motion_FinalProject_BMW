import { gsap} from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);
var maintablettl = gsap.timeline();

export function MaintabletAnimation() {
    

    maintablettl.from(".triangleoutliness", {
        duration: 1,
        drawSVG: "50% 50%"

    },"time1");

    maintablettl.from(".triangleoutliness2", {
        duration: 1,
        drawSVG: "50% 50%"

    },"time1");

    maintablettl.from("#lightdetail,#triangleright2, #triangleright9, #triangeleft2, #triangleleft9, #milesection2", {
        duration: 0.3,
        alpha: -1

    });

    maintablettl.from("#light, #triangleleft8,#triangleleft7,#triangleright8,#triangleright5, #milesection3, #milesection4, #polygon1, #polygon5", {
        duration: 0.3,
        alpha: -1

    });

    maintablettl.from("#cardetail, #triangleleft5, #triangleleft6, #triangleright4, #triangleright7, #milesection1, #milesection5, #polygon2, #polygon6", {
        duration: 0.3,
        alpha: -1

    });

    maintablettl.from("#carinside, #triangleleft3, #triangleleft4, #triangleright3, #triangleright6,#milesection6, #milesection7, #polygon3, #polygon7", {
        duration: 0.3,
        alpha: -1

    });

    maintablettl.from("#miles,#milenumber, #VoiceControlonpath, #VoiceControlon, #polygon4, #polygon8", {
        duration: 0.3,
        alpha: -1

    });

    maintablettl.from("#Voice", {
        duration: 0.8,
        drawSVG: "50% 50%"

    });

    maintablettl.from("#Rectangle01, #behind-speed", {
        duration: 0.2,
        alpha: -1
        

    });

    maintablettl.from(".speed", {
        scale:0.2,
        stagger:0.1,
        duration: 1,
        alpha:-1

        

    });

    maintablettl.from(".aspeed", {
        duration: 0.2,
        scale:0,
        stagger: 0.1,
        ease: "back.out(1.7)", x: 300
        

    });

    maintablettl.from("#ovel22", {
        duration: 0.2,
        alpha:-1
       
    });

    maintablettl.from("#path22", {
        duration: 0.4,
        drawSVG:"0"
       
    });

    maintablettl.from("#DETECTED", {
        duration: 0.2,
        alpha:-1
        
    });

    maintablettl.from("#orangerectangle", {
        duration: 0.4,
        drawSVG:"25% 25%"
       
    });

    maintablettl.from(".text", {
        duration: 0.4,
        scale:0,
        stagger: -0.1,
        ease: "back.out(1)", 
        x: 100
        
    });

    maintablettl.from("#Rectangleeee", {
        duration: 0.2,
        alpha:-1
        
    });

    maintablettl.from("#detectedtrianglegroup", {
        duration: 0.2,
        alpha:-1
        
    });

   





    return maintablettl;
}