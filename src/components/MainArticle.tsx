/* eslint-disable jsx-a11y/anchor-is-valid */

import { ArticleMeta } from './ArticleMeta';

interface IArticleProps {
    heading: string,
    description: string,
    descriptionAlt: string,
    photoPath: string,
    author: string,
    authorJob: string,
    authorAvatarPath: string,
}


const MainArticle = (props: IArticleProps) => {
    const { photoPath, descriptionAlt, ...others } = props;

    return (
        <a href="">
            <article className="flex flex-col my-4 md:my-5">
                <img
                    src={props.photoPath}
                    alt={props.descriptionAlt}
                    className="rounded-lg md:h-260px md:object-cover md:object-center"
                />
                <ArticleMeta {...others} />
            </article>
        </a>
    )
}
export { MainArticle }