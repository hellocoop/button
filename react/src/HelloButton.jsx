import React, {useState} from "react"

const HelloButton = ({
    onClick = () => {},
    loading = false,
    tooltip = true
}) => {
    const [showTooltip, setShowTooltip] = useState(false)
    return (
        <div>
            <button
                onClick={onClick}
                disabled={loading} 
                className="hello-btn"
            >
                ō&nbsp;&nbsp;&nbsp;Continue with Hellō
            </button>
            {tooltip && (
                <button
                    onClick={() => setShowTooltip(status => !status)}
                    className="hello-about"
                >
                    Hellō lets you control your identity
                </button>
            )}
        </div>
    )
}

export default HelloButton