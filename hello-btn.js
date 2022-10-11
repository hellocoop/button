import {hello_container as en} from "./wallet-i18n/locale/en.json"
import {hello_container as hi} from "./wallet-i18n/locale/hi.json"
import {hello_container as ar} from "./wallet-i18n/locale/ar.json"
import {hello_container as de} from "./wallet-i18n/locale/de.json"
import {hello_container as fr} from "./wallet-i18n/locale/fr.json"
import {hello_container as es} from "./wallet-i18n/locale/es.json"
const localeKeys = {
  "en": en,
  "hi": hi,
  "ar": ar,
  "de": de,
  "fr": fr,
  "es": es
}
let DOMObserver;
const DOMObserverConfig = {
  subtree: true,  
  childList: true,
  attributes: true,
  attributeFilter: ["style", "lang", "class"]
}
window.addEventListener('load', ()=> {
  initHelloButtons()
  //Listen for language change
  window.addEventListener('languagechange', initHelloButtons)
  //Listen for DOM changes (SPA)
  DOMObserver = new MutationObserver(initHelloButtons)
  DOMObserver.observe(document.body, DOMObserverConfig)
  window.addEventListener('resize', () => {
    document.querySelectorAll('.hello-about-bubble').forEach(updateBubblePosition)
  })
})
function getLocale(node){
  const navigatorLang = window.navigator.language
  const supportedLocales = Object.keys(localeKeys)
  const langAttribute = node.lang
  const container = node.closest('.hello-container')
  const containerLangAttribute = container && container.getAttribute('lang')
  const localeByPriority = langAttribute || containerLangAttribute || navigatorLang
  let selectedLocale = "en"; //default language
  if(localeByPriority) {
    for(const locale of supportedLocales){
      if((localeByPriority).startsWith(locale)) {
        selectedLocale = locale
        break;
      }
    }
  }
  return selectedLocale
}
function initHelloButtons(){
  DOMObserver && DOMObserver.disconnect()
  document.querySelectorAll('.hello-btn').forEach(btn => {
    const locale = getLocale(btn)
    const customLabel = btn.getAttribute("data-label")
    if(customLabel) {
      btn.innerHTML = customLabel
    } else {
      btn.innerHTML = localeKeys[locale]["hello_btn"] || localeKeys.en["hello_btn"]
    }
  })
  document.querySelectorAll('.hello-about').forEach(about => {
    const locale = getLocale(about)
    let showAboutBubble = false
    const containerCreated = about.closest(".hello-about-container")
    if(!containerCreated){
      const textBubbleEle = document.createElement("span")
      textBubbleEle.classList.add("hello-about-bubble")
      const aboutContainer = document.createElement("div")
      aboutContainer.classList.add("hello-about-container")
      about.parentNode.replaceChild(aboutContainer, about)
      aboutContainer.appendChild(about)
      aboutContainer.appendChild(textBubbleEle)
    }
    const listenerAttached = about.getAttribute("data-listener-attached")
    if(!listenerAttached){
      const textBubbleEle = about.nextElementSibling
      function toggleAboutBubble() {
        if(showAboutBubble) {
          textBubbleEle.style.visibility = "hidden"
        } else {
          textBubbleEle.style.visibility = "visible"
        }
        showAboutBubble = !showAboutBubble
      }
      about.addEventListener("click", toggleAboutBubble)
      about.addEventListener("mouseenter", ()=>{
          textBubbleEle.style.visibility = "visible"
      })
      about.addEventListener("mouseleave", () => {
          if(!showAboutBubble){
              textBubbleEle.style.visibility = "hidden"
          }
      })
      //Handle click outside
      document.addEventListener('click', (e) => {
          if(showAboutBubble && !about.contains(e.target) && !textBubbleEle.contains(e.target)) {
              toggleAboutBubble()
          }
      })
      about.setAttribute("data-listener-attached", true)
    }
    const helloAboutBubbleRef = about.nextElementSibling
    about.innerHTML = localeKeys[locale]["hello_about"] || localeKeys.en["hello_about"]
    helloAboutBubbleRef.innerHTML = localeKeys[locale]["hello_about_bubble"] || localeKeys.en["hello_about_bubble"]
    updateBubblePosition(helloAboutBubbleRef)
    // if(!containerCreated){
    //   const left = helloAboutBubbleRef.getBoundingClientRect().left
    //   const right = helloAboutBubbleRef.getBoundingClientRect().right
    //   if(left <=0 || right >= window.innerWidth){
    //     helloAboutBubbleRef.classList.add("hello-about-bubble-width-full")
    //   }
    // } 
  })
  DOMObserver && DOMObserver.observe(document.body, DOMObserverConfig)
}

function updateBubblePosition(node){
  const abouBtnRefHeight = node.previousElementSibling.getBoundingClientRect().height
  node.style.top = (abouBtnRefHeight + 12 + 14 /* 12px bottom margin + 14px arrow height */) + "px"
}