import { getHomeInfo } from "@/libs/get-home"
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export const Hero= async ()=>{
const {title, description,image}= await getHomeInfo();

    return(
        <section>
            <h1>
                {title}
            </h1>
            <div>
                <BlocksRenderer content={description} />
            </div>
            <img src={image} alt="imagen" />
        </section>
    )
}