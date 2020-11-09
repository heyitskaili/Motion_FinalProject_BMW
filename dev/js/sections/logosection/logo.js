import {gsap} from "gsap";

// gsap.set("#logo",{transformOrigin: "center"});

export function LogoAnimation(){
    var tl = gsap.timeline();
    tl.from("#triangle1",{duration:0.5,alpha:-1});
    tl.from("#triangle2",{duration:0.5,rotate:90,alpha:-1});
    tl.from("#triangle3",{duration:0.5,alpha:-1});
    tl.from("#triangle4",{duration:0.5,rotate:260,alpha:-1});
    tl.from("#BMW",{duration:1,scaleY:30,alpha:-1});
    tl.from("#oval1",{duration:1,scale:30,alpha:-1});



    return tl;
}