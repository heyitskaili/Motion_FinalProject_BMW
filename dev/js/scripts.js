import {gsap} from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);

import {LogoAnimation} from "./sections/logosection/logo.js"



const mainTL = gsap.timeline();
mainTL.add(LogoAnimation());



GSDevTools.create();