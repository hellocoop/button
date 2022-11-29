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
    lang = "en",
    customLabel = "",
    style = {},
    className = {},
    children
}) => {
    const [showTooltip, setShowTooltip] = useState(false)
    const buttonText = lang ? localeKeys[lang].hello_btn : en["hello_btn"]
    useEffect(() => {
        document.addEventListener("click", (e) => {
            //hande click outside
        })
    }, [])
    return (
        <div className="hello-container">
            <button
                onClick={onClick}
                disabled={loading} 
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
                        Hellō lets you control your identity
                    </button>
                    {
                        showTooltip && (
                            <span className="hello-about-bubble" style={{visibility: "visible", top: "46px"}}>
                                Hellō is a personal identity wallet that lets you choose what you share, how you authenticate, and how you recover your wallet. Hellō remembers who you are and protects your privacy.
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