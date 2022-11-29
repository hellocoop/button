import React, {useState, useRef} from "react"
import { useEffect } from "react"
import "../../hello-btn.css"
import {hello_container as en} from "../../wallet-i18n/locale/en.json"
import {hello_container as hi} from "../../wallet-i18n/locale/hi.json"
import {hello_container as ar} from "../../wallet-i18n/locale/ar.json"
import {hello_container as de} from "../../wallet-i18n/locale/de.json"
import {hello_container as fr} from "../../wallet-i18n/locale/fr.json"
import {hello_container as es} from "../../wallet-i18n/locale/es.json"

const localeKeys = {
    "en": en,
    "hi": hi,
    "ar": ar,
    "de": de,
    "fr": fr,
    "es": es
  }

const HelloButton = ({
    onClick = () => {},
    loading = false,
    tooltip = true,
    color = "",
    hover = "",
    lang = "",
    label = "",
    style = {},
    className = {},
    children,
    disabled = false
} = {}) => {
    const [showTooltip, setShowTooltip] = useState(false)
    const [_lang, _setLang] = useState(lang)
    const buttonText = (_lang && localeKeys[_lang]) ? localeKeys[_lang].hello_btn : en["hello_btn"]
    const aboutButtonText = (_lang && localeKeys[_lang]) ? localeKeys[_lang].hello_about : en["hello_about"]
    const aboutBubbleText = (_lang && localeKeys[_lang]) ? localeKeys[_lang].hello_about_bubble : en["hello_about_bubble"]
    
    useEffect(() => {
        const setLang = (code) => {
            for(const l of Object.keys(localeKeys)) {
                if(code.startsWith(l)) {
                    _setLang(l)
                }
            }
        }
        if(!lang) {
            setLang(window.navigator.language)
        }
        window.addEventListener("languagechange", () => {
            setLang(window.navigator.language)
        })
    }, [])
    
    const useOutsideClick = () => {
        const ref = useRef()
        React.useEffect(() => {
          const handleClick = (event) => {
            if (
                ref.current && !ref.current.contains(event.target) &&
                !document.querySelector(".hello-about").contains(event.target)
            ) {
                setShowTooltip(false)
            }
          }
          document.addEventListener('click', handleClick, true)
          return () => {
            document.removeEventListener('click', handleClick, true)
          }
        }, [ref])
        return ref
    }
    const ref = useOutsideClick()

    return (
        <div className="hello-container">
            <button
                onClick={onClick}
                dangerouslySetInnerHTML={{__html : label || children || buttonText}}
                disabled={disabled} 
                className={`hello-btn ${loading ? "hello-btn-loader" : ""} ${color || ""} ${hover || ""} ${className || ""}`}
                style={style}
            >
            </button>
            {tooltip && (
                <div className="hello-about-container">
                    <button
                        onClick={() => setShowTooltip(status => !status)}
                        className="hello-about"
                    >
                        {aboutButtonText}
                    </button>
                    {
                        showTooltip && (
                            <span ref={ref} className="hello-about-bubble" style={{visibility: "visible", top: "46px"}}>
                                {aboutBubbleText}
                            </span>
                        )
                    }
                </div>
            )}
        </div>
    )
}

export {
    HelloButton
}