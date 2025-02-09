interface TextProps {
    title: string
    content: string
}

const TextBlock: React.FC<TextProps> = ({ title, content }) => {
    return(
        <section>
            <h2>{title}</h2>
            {content}
        </section>
    )
}

export default TextBlock;