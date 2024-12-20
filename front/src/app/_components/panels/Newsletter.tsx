import React from "react"

const Newsletter: React.FC = () => {
    return (
        <form>
            <label htmlFor="news_input">S&apos;inscrire à la newsletter</label>
            <input type="email" name="news_input" id="news_input" />
            <div className="rgpd">
                <input type="checkbox" name="news_rgpd" id="news_rgpd" />
                <label htmlFor="news_rgpd">RGPD Label</label>
            </div>
        </form>
    )
}

export default Newsletter;