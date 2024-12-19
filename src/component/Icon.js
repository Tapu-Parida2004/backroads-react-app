const Icon = ({href,icon}) => {
    return(
        <li className="nav-link">
            <a href={href} className="nav-icon"><i className={icon}></i></a>
        </li>
    )
};
export default Icon;
