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
        <article className="flex flex-col my-4 md:my-5">

            <img src={props.photoPath}
                alt={props.descriptionAlt}
                className="rounded-lg md:h-200px md:mb-3 md:object-cover md:object-center"
            />

            <ArticleMeta {...others} />
        </article>
    )
}

export { Article }