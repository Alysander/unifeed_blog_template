
interface IArticleProps {
    heading: string,
    description: string,
    descriptionAlt: string,
    photoPath: string,
    author: string,
    authorJob: string,
    authorAvatarPath: string,

}
const Article = (props: IArticleProps) => (

    <article className="my-4">
        <img src={props.photoPath} alt={props.descriptionAlt} className="rounded-sm" />
        <h1>
            {props.heading}
        </h1>
        <p className="text-xl text-mediumGray mb-2">
            {props.description}
        </p>
        <div className="flex">
            <img src={props.authorAvatarPath} className="rounded-full w-avatar h-avatar flex-initial" alt="Avatar" />
            <div className="flex-grow flex flex-col justify-center ml-2 font-semibold">
                <div>
                    {props.author}
                </div>
                <div className="text-mediumGray">
                    {props.authorJob}
                </div>
            </div>
        </div>
    </article>
)

export { Article }