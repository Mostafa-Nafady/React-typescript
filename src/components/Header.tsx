import { type ReactNode, type PropsWithChildren } from "react";

type imageDetails = {
    children: ReactNode;
    image: {
        imgSrc:string,imgAlt:string
    }
}
    
    
const Header = ({image,children}:imageDetails) => {
    return (
        <header>
          
            <img src={image.imgSrc} alt={image.imgAlt} />
              {children}
        </header>
    );
};

export default Header;