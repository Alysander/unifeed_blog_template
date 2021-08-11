import React from "react";
import { MainArticle } from './MainArticle';
import { Article } from './Article';
import avatar1 from '../assets/Avatar1.png';
import photo1 from '../assets/Article1.png';
import avatar2 from '../assets/Avatar2.png';
import photo2 from '../assets/Article2.png';
import avatar3 from '../assets/Avatar3.png';
import photo3 from '../assets/Article3.png';
import mainArticleImage from '../assets/MainArticleImage.png';
import userAvatar from "../assets/UserAvatar.png";

const ArticleList = () => (
    <div className="flex flex-col gap-4 md:gap-5 lg:grid lg:grid-cols-3">
        <MainArticle
            heading="Weekly Newsletter: Tweets for Higher Engagements"
            author="Jessica Andrews"
            authorJob="Content Manager"
            authorAvatarPath={userAvatar}
            photoPath={mainArticleImage}
            description="In this weekly newsletter, we will be covering ten types of engaging tweets.
      This is the guide if you're just starting out on Twitter."
            photoAlt="Twitter app on phone"
        />
        <Article
            heading="7 Tips for Organic Traffic"
            author="Spencer David"
            authorJob="SEO Specialist"
            authorAvatarPath={avatar1}
            photoPath={photo1}
            description="From SEO to integrating with Paid Advertising, this article covers it all."
            photoAlt="Google search screenshot"
        />
        <Article
            heading="How To Start Your Own Business"
            author="Sara Frey"
            authorJob="Business Leader"
            authorAvatarPath={avatar2}
            photoPath={photo2}
            description="Starting your own business in 2021 has never been easier"
            photoAlt="A laptop with a PowerPoint presentation open"
        />
        <Article
            heading="5 Tips for Better Branding"
            author="David Suns"
            authorJob="Brand Manager"
            authorAvatarPath={avatar3}
            photoPath={photo3}
            description="From SEO to integrating with Paid Advertising, this article covers it all"
            photoAlt="A table of assorted printed merchandise"
        />
    </div>
);

export { ArticleList };