const Tour = ({ id, image, date, title, info, location, duration, cost }) => {
  return (
    <article className="tour-card" key={id}>
      <div className="tour-img-container">
        <img src={image} className="tour-img" />
        <div className="tour-date">{date}</div>
      </div>
      <div className="tour-info">
        <h4 className="tour-title">{title}</h4>
        <p className="tour-title">{info}</p>
        <div className="tour-footer">
        <p><span><i className="fas fa-map"></i></span>{location}</p>
        <p>From ${cost}</p>
        <p>{duration} Days</p>
        </div>
      </div>
    </article>
  );
};
export default Tour;
