
export default function Controls({
  lanText,
  megaText,
  maylText,
  rollText,
  dexText,
  gutsText,
  yaiText,
  glideText,
  chaudText,
  protoText
}) {
  function lanText() {
    lanText.classList.remove("hide")
    megaText.classList.add("hide")
    maylText.classList.add("hide")
    rollText.classList.add("hide")
    dexText.classList.add("hide")
    gutsText.classList.add("hide")
    yaiText.classList.add("hide")
    glideText.classList.add("hide")
    chaudText.classList.add("hide")
    protoText.classList.add("hide")
  }

  function megaText() {
    lanText.classList.add("hide")
    megaText.classList.remove("hide")
    maylText.classList.add("hide")
    rollText.classList.add("hide")
    dexText.classList.add("hide")
    gutsText.classList.add("hide")
    yaiText.classList.add("hide")
    glideText.classList.add("hide")
    chaudText.classList.add("hide")
    protoText.classList.add("hide")
  }

  function maylText() {
    lanText.classList.add("hide")
    megaText.classList.add("hide")
    maylText.classList.remove("hide")
    rollText.classList.add("hide")
    dexText.classList.add("hide")
    gutsText.classList.add("hide")
    yaiText.classList.add("hide")
    glideText.classList.add("hide")
    chaudText.classList.add("hide")
    protoText.classList.add("hide")
  }

  function rollText() {
    lanText.classList.add("hide")
    megaText.classList.add("hide")
    maylText.classList.add("hide")
    rollText.classList.remove("hide")
    dexText.classList.add("hide")
    gutsText.classList.add("hide")
    yaiText.classList.add("hide")
    glideText.classList.add("hide")
    chaudText.classList.add("hide")
    protoText.classList.add("hide")
  }

  function dexText() {
    lanText.classList.add("hide")
    megaText.classList.add("hide")
    maylText.classList.add("hide")
    rollText.classList.add("hide")
    dexText.classList.remove("hide")
    gutsText.classList.add("hide")
    yaiText.classList.add("hide")
    glideText.classList.add("hide")
    chaudText.classList.add("hide")
    protoText.classList.add("hide")
  }

  function gutsText() {
    lanText.classList.add("hide")
    megaText.classList.add("hide")
    maylText.classList.add("hide")
    rollText.classList.add("hide")
    dexText.classList.add("hide")
    gutsText.classList.remove("hide")
    yaiText.classList.add("hide")
    glideText.classList.add("hide")
    chaudText.classList.add("hide")
    protoText.classList.add("hide")
  }

  function yaiText() {
    lanText.classList.add("hide")
    megaText.classList.add("hide")
    maylText.classList.add("hide")
    rollText.classList.add("hide")
    dexText.classList.add("hide")
    gutsText.classList.add("hide")
    yaiText.classList.remove("hide")
    glideText.classList.add("hide")
    chaudText.classList.add("hide")
    protoText.classList.add("hide")
  }

  function glideText() {
    lanText.classList.add("hide")
    megaText.classList.add("hide")
    maylText.classList.add("hide")
    rollText.classList.add("hide")
    dexText.classList.add("hide")
    gutsText.classList.add("hide")
    yaiText.classList.add("hide")
    glideText.classList.remove("hide")
    chaudText.classList.add("hide")
    protoText.classList.add("hide")
  }

  function chaudText() {
    lanText.classList.add("hide")
    megaText.classList.add("hide")
    maylText.classList.add("hide")
    rollText.classList.add("hide")
    dexText.classList.add("hide")
    gutsText.classList.add("hide")
    yaiText.classList.add("hide")
    glideText.classList.add("hide")
    chaudText.classList.remove("hide")
    protoText.classList.add("hide")
  }

  function protoText() {
    lanText.classList.add("hide")
    megaText.classList.add("hide")
    maylText.classList.add("hide")
    rollText.classList.add("hide")
    dexText.classList.add("hide")
    gutsText.classList.add("hide")
    yaiText.classList.add("hide")
    glideText.classList.add("hide")
    chaudText.classList.add("hide")
    protoText.classList.remove("hide")
  }

  return {
    lanText,
    megaText,
    maylText,
    rollText,
    dexText,
    gutsText,
    yaiText,
    glideText,
    chaudText,
    protoText
  }
}