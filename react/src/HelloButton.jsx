import React, {useState} from "react"
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
    variant = "",
    hoverVariant = "",
    lang = "",
    customLabel = "",
    style = {},
    className = {},
    children,
    disabled = false
}) => {
    const [showTooltip, setShowTooltip] = useState(false)
    const [_lang, _setLang] = useState(lang)
    const buttonText = (lang && localeKeys[lang]) ? localeKeys[lang].hello_btn : en["hello_btn"]
    const aboutButtonText = (lang && localeKeys[lang]) ? localeKeys[lang].hello_about : en["hello_about"]
    const aboutBubbleText = (lang && localeKeys[lang]) ? localeKeys[lang].hello_about_bubble : en["hello_about_bubble"]
    useEffect(() => {
        document.addEventListener("click", (e) => {
            console.log(e)
        })

        if(!lang) {
            _setLang(window.navigator.language)
        }
        window.addEventListener("languagechange", () => {
            _setLang(window.navigator.language)
        })
    }, [])
    return (
        <div className="hello-container">
            <button
                onClick={onClick}
                disabled={disabled} 
                className={`hello-btn ${loading ? "hello-btn-loader" : ""} ${variant || ""} ${hoverVariant || ""} ${className || ""}`}
                style={style}
            >
                {customLabel || children || buttonText}
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
                            <span className="hello-about-bubble" style={{visibility: "visible", top: "46px"}}>
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