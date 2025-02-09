interface TextIntroProps {
    title: string
    content: string
}

const TextIntro: React.FC<TextIntroProps> = ({ title, content }) => {
    return(
        <section>
            <h1>{ title }</h1>
            { content }
        </section>
    )
}

export default TextIntro;