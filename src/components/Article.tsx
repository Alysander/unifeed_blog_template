
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
        {
            /*
                As per spec:
                Small screens: Behave like a normal image
                Medium screens: set overflow-hidden, use a transforms to simulate background-cover
                Large screens: Behave like a normal image
            */
        }
        <div className="rounded-lg md:max-h-200px md:overflow-hidden lg:max-h-full lg:overflow-initial" >
            <img src={props.photoPath} alt={props.descriptionAlt} className="md:transform md:-translate-y-1/2 lg:transform-none" />
        </div>
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