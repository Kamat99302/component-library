import guillemets from "../img/Icon.png"
export default function Testimonial({children, name, roleandLocation, testimonialBgColor, testimonialTxtColor, image}){

    const styles = {
        backgroundColor: testimonialBgColor,
        color : testimonialTxtColor
    }

    //Affiche un design différent selon la présence d'une image
    if(image){
        return(
            <div style={styles} className="testimonial">
                <img src={image} alt="name" className="testimonial-image"/>
    
                <div className="testimonial-content ">
                <img src={guillemets} alt="name" className="quote-icon"/>
                <blockquote className="testimonial-quote">
                    {children}
                </blockquote>
                <div className="testimonial-author"> 
                    <p className="author-name">{name}</p>
                    <p className="author-role">{roleandLocation}</p>
                    </div>
                </div>
            </div>
        )   
    }
    else{
        return(
            <div style={styles} className="testimonial">
                <div className="testimonial-content ">
                <img src={guillemets} alt="name" className="quote-icon"/>
                <blockquote className="testimonial-quote">
                    {children}
                </blockquote>
                <div className="testimonial-author"> 
                    <p className="author-name">{name}</p>
                    <p className="author-role">{roleandLocation}</p>
                    </div>
                </div>
            </div>
        )
    }
    
}