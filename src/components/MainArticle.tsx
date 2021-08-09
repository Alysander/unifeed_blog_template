/* eslint-disable jsx-a11y/anchor-is-valid */
import mainArticleImage from '../assets/MainArticleImage.png';
import userAvatar from "../assets/UserAvatar.png";

const MainArticle = () => (
    <a href="">
        <article className="my-4">
            <img src={mainArticleImage} alt="Twitter app on phone" className="rounded-sm" />
            <h1>
                Weekly Newsletter: Tweets for Higher Engagements
            </h1>
            <p className="text-xl text-mediumGray mb-2">
                In this weekly newsletter, we will be covering ten types of engaging tweets.
                This is the guide if you're just starting out on Twitter.
            </p>
            <div className="flex">
                <img src={userAvatar} className="rounded-full w-avatar h-avatar flex-initial" alt="Avatar" />
                <div className="flex-grow flex flex-col justify-center ml-2 font-semibold">
                    <div>
                        Jessica Andrews
                    </div>
                    <div className="text-mediumGray">
                        Content Manager
                    </div>
                </div>
            </div>
        </article>
    </a>
)
export { MainArticle }