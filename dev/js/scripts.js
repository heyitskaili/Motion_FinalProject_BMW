import {gsap} from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
gsap.registerPlugin(GSDevTools);

// import { DrawSVGPlugin } from "./sections/logosection/logo.js";
// gsap.registerPlugin(DrawSVGPlugin);

import {LogoAnimation} from "./sections/logosection/logo.js"
import {FingerprintAnimation} from "./sections/fingerprintsection/fingerprint.js"



const mainTL = gsap.timeline();
mainTL.add(LogoAnimation());
mainTL.add(FingerprintAnimation());



GSDevTools.create();