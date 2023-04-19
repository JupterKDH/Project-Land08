import {
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

export default function({ controls }) {
  lan.addEventListener("click", () => {
      controls.lanText()
    })

  mega.addEventListener("click", function() {
    controls.megaText()
  })

  mayl.addEventListener("click", function() {
    controls.maylText()
  })

  roll.addEventListener("click", function() {
    controls.rollText()
  })

  dex.addEventListener("click", function() {
    controls.dexText()
  })

  guts.addEventListener("click", function() {
    controls.gutsText()
  })

  yai.addEventListener("click", function() {
    controls.yaiText()
  })

  glide.addEventListener("click", function() {
    controls.glideText()
  })

  chaud.addEventListener("click", function() {
    controls.chaudText()
  })

  proto.addEventListener("click", function() {
    controls.protoText()
  })
}