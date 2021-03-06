import React from "react";

interface IArticleMetaProps {
    heading: string,
    description: string,
    author: string,
    authorJob: string,
    authorAvatarPath: string,
}

const ArticleMeta = (props: IArticleMetaProps) => (
    <div>
        <h1 className="md:mb-1">
            {props.heading}
        </h1>
        <p className="text-xl text-mediumGray mb-2">
            {props.description}
        </p>
        <div className="flex">
            <img src={props.authorAvatarPath} className="rounded-full w-avatar h-avatar flex-initial" alt="Avatar" />
            <div className="flex-grow flex flex-col justify-center ml-2 font-semibold">
                <h2>
                    {props.author}
                </h2>
                <p className="text-mediumGray">
                    {props.authorJob}
                </p>
            </div>
        </div>
    </div>
)

export { ArticleMeta }