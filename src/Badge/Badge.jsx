export default function Badge({children, variant, color}){
    //Utilise des template literals pour générer dynamiquement les classes CSS
    return(
            <span className={`badge badge-${variant} badge-${color}`}>{children}</span>
    )
} 