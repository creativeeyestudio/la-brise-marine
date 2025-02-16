import { TextBlock } from "@/app/interfaces/page";
import { JSX } from "react";

interface TextIntroProps {
    title: string;
    content: TextBlock[];
}

const TextIntro: React.FC<TextIntroProps> = ({ title, content }) => {
    console.log(content);
    
    return (
        <section>
            <h2>{title}</h2>
            {content.map((paragraph, index) => (
                <p key={index}>
                    {paragraph.children.map((child, childIndex) => {
                        let textElement: JSX.Element = <>{child.text}</>;

                        if (child.bold && child.italic) {
                            textElement = <strong key={childIndex}><em>{child.text}</em></strong>;
                        } else if (child.bold) {
                            textElement = <strong key={childIndex}>{child.text}</strong>;
                        } else if (child.italic) {
                            textElement = <em key={childIndex}>{child.text}</em>;
                        }

                        return textElement;
                    })}
                </p>
            ))}
        </section>
    );
};

export default TextIntro;
