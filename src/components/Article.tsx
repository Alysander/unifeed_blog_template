import { ArticleMeta } from "./ArticleMeta";

interface IArticleProps {
    heading: string,
    description: string,
    descriptionAlt: string,
    photoPath: string,
    author: string,
    authorJob: string,
    authorAvatarPath: string,
}
const Article = (props: IArticleProps) => {

    const { photoPath, descriptionAlt, ...others } = props;

    return (
        <article className="my-4 md:my-5">
            {
                /*
                    As per spec:
                    Small screens: Behave like a normal image
                    Medium screens: set overflow-hidden, use a transforms to simulate background-cover
                    Large screens: Behave like a normal image
                */
            }
            <div className="rounded-lg md:max-h-200px md:overflow-hidden md:mb-3 lg:max-h-full lg:overflow-initial " >
                <img src={props.photoPath} alt={props.descriptionAlt} className="md:transform md:-translate-y-1/2 lg:transform-none" />
            </div>

            <ArticleMeta {...others} />
        </article>
    )
}

export { Article }