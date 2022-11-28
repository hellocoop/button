import React, {useState} from "react"
import { useEffect } from "react"
import "../../hello-btn.css"

const HelloButton = ({
    onClick = () => {},
    loading = false,
    tooltip = true,
    style = "",
    hoverStyle = "",
    language = "en",
    customTitle = ""
}) => {
    const [showTooltip, setShowTooltip] = useState(false)
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
                className={`hello-btn ${loading ? "hello-btn-loader" : ""} ${style || ""} ${hoverStyle || ""}`}
            >
                {customTitle || "ō   Continue with Hellō"}
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

export default HelloButton