import { TextBlock } from "@/app/interfaces/page";

interface TextIntroProps {
    title: string
    content: TextBlock
}

const TextIntro: React.FC<TextIntroProps> = ({ title, content }) => {
    return(
        <section>
            <h2>{ title }</h2>
            { content.children.map((content) => (
                content.text
            )) }
        </section>
    )
}

export default TextIntro;