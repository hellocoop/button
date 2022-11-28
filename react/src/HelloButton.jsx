import React, {useState} from "react"

const HelloButton = ({
    onClick = () => {},
    loading = false,
    tooltip = true
}) => {
    const [showTooltip, setShowTooltip] = useState(false)
    return (
        <div className="hello-container">
            <button
                onClick={onClick}
                disabled={loading} 
                className="hello-btn"
            >
                ō&nbsp;&nbsp;&nbsp;Continue with Hellō
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
                            <span className="hello-about-bubble" style={{visibility: "visible"}}>
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