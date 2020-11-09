import {gsap} from "gsap";
import {LogoAnimation} from "./sections/logosection/logo.js"



const mainTL = gsap.timeline();
mainTL.add(LogoAnimation());



