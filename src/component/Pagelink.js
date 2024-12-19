const Pagelink = ({ href, text,whiteColor }) => {
  return (
    <li className="nav-link" >
      <a href={href}style={whiteColor} className="nav-link">
        {text}
      </a>
    </li>
  );
};
export default Pagelink;
