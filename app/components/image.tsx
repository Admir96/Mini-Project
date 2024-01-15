import Image from "next/image";
import BdImage from "../image/image.png"

const image: React.FC = () => {
return (
    <>   
    <Image src  = {BdImage} 
    alt="this is a image" 
    width = {300}
    height = {300}>
    </Image> 

    </> );
};

export default image;