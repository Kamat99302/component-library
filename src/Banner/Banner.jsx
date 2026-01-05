import { FaCheckCircle, FaExclamationTriangle, FaTimesCircle, FaInfoCircle } from 'react-icons/fa'

export default function Banner({children, status, variant="multiLine"}){

    //Utilisation d'un objet de configuration pour faciliter l'ajout de nouveaux variants
    const statusConfiguration = {
        success:{
            title:'Congratulations!',
            color: '#065F46',
            backgroundColor: '#ECFDF5',
            icon: <FaCheckCircle color='#34D399'/>
        },
        warning:{
            title:'Attention',
            color: '#92400E',
            backgroundColor: '#FFFBEB',
            icon: <FaExclamationTriangle color='#FBBF24'/>
        },
        error:{
            title:'There is a problem with your application',
            color: '#92400E',
            backgroundColor: '#FEF2F2',
            icon: <FaTimesCircle color='#F87171'/>
        },
        neutral:{
            title:'Update available',
            color: '#1E40AF',
            backgroundColor: '#EFF6FF',
            icon: <FaInfoCircle color='#60A5FA'/>
        }
    }

    const config = statusConfiguration[status]

    //Version ligne simple
    if (variant === "singleLine"){
        return(
            <div className="banner" style={{backgroundColor: config.backgroundColor}}>
            <div className="title" style={{color: config.color}}>
                <div className="banner-header">
                    <span className="icon">{config.icon}</span>
                    <strong>{config.title}</strong>
                </div>
            </div>
        </div>
        )
    }

    //Version ligne double (par défaut)
    return(
        <div className="banner" style={{backgroundColor: config.backgroundColor}}>
            <div className="title" style={{color: config.color}}>
                <div className="banner-header">
                    <span className="icon">{config.icon}</span>
                    <strong>{config.title}</strong>
                </div>
                <p>{children}</p>
            </div>
        </div>
    )
}