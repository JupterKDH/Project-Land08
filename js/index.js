import { Router } from "/js/router.js"
import Controls from "./controls.js"
import Events from "./event.js"

import {
  lanText,
  megaText,
  maylText,
  rollText,
  dexText,
  gutsText,
  yaiText,
  glideText,
  chaudText,
  protoText,
  lan,
  mega,
  mayl,
  roll,
  dex,
  guts,
  yai,
  glide,
  chaud,
  proto
} from "./elements.js"

const router = new Router()
router.add('/', '/pages/home.html')
router.add("/characters", "/pages/characters.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()

const controls = Controls({
  lanText,
  megaText,
  maylText,
  rollText,
  dexText,
  gutsText,
  yaiText,
  glideText,
  chaudText,
  protoText,
})

const events = Events({ controls })