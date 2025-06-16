import type { HeaderContentProps } from "./types.ts";
//import myPicture from "../../assets/myPicture";

function HeaderContent({ socialMedia }: { socialMedia: HeaderContentProps }) {
    return(
        <div className="header-content">
            <img src="/" alt="A picture of Sergio Acuña" />
            <div className="my-description">
                <h1>Sergio Fabian Acuña Madrid</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, tempore explicabo magni cupiditate a fugit similique soluta exercitationem cumque corporis ut minus excepturi hic in ad delectus tempora maiores aspernatur.</p>
                <div className="social-media">
                    <ul>
                        {socialMedia.map((item, index) => (
                            <li key={ index }>
                                <a href={ item.link }>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" className={"bi bi-github"} viewBox="0 0 16 16">
                                        <path d={item.icon}/>
                                    </svg>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default HeaderContent;