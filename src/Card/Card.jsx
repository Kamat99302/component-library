import {FaCloud} from "react-icons/fa"
export default function Card({icon = <FaCloud />, title, description, iconColor, iconBgColor,  hoverable = false}){

    const iconStyle = {
        color: iconColor,
        backgroundColor: iconBgColor,
        padding: '16px',
        borderRadius: '8px',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
        return(
            <div className={`card ${hoverable? 'card-hoverable' : ''}`}>
                <span className="icon" style={iconStyle} >{icon}</span>
                <p className="card-title">{title}</p>
                <p className="card-text">{description}</p>
            </div>
        )
    }
    
