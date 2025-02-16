import { TextBlock } from "@/app/interfaces/page";

interface TextIntroProps {
    title: string
    content: TextBlock[]
}

const TextIntro: React.FC<TextIntroProps> = ({ title, content }) => {
    console.log(content);
    
    return(
        <section>
            <h1>{ title }</h1>
            {content.map((content, index) => (
                <p key={index}>{ content.children[0].text }</p>
            ))}
        </section>
    )
}

export default TextIntro;