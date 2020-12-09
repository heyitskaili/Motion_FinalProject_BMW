import {gsap} from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
gsap.registerPlugin(GSDevTools);


import {LogoAnimation} from "./sections/logosection/logo.js"
import {FingerprintAnimation} from "./sections/fingerprintsection/fingerprint.js"
import {MaintabletAnimation} from "./sections/maintabletsection/maintablet.js"
import { speedCounter } from "./sections/maintabletsection/speedconuter.js";

console.log(speedCounter);


const mainTL = gsap.timeline();
mainTL.add(LogoAnimation());
mainTL.add(FingerprintAnimation());
mainTL.add(MaintabletAnimation());



GSDevTools.create();