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
            <article className="my-4 md:my-5">
                <div className="rounded-lg md:max-h-260px md:overflow-hidden lg:max-h-full lg:overflow-initial" >
                    <img src={props.photoPath} alt={props.descriptionAlt} className="md:transform md:-translate-y-1/2 lg:transform-none" />
                </div>
                <ArticleMeta {...others} />
            </article>
        </a>
    )
}
export { MainArticle }