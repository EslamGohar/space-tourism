import useWindowWidth from "../hooks/useWindowWidth";

export const SingleTechnology = ({
  name,
  images: { portrait, landscape },
  description,
}) => {
  const windowWidth = useWindowWidth();
  const tabletWidth = 768;

  return (
    <div className="technology">
      {/* the key attribute for rerendering, so they will animate every time state changes */}
      <div className="technology-info" key={Math.random()}>
        <p className="terminology-text">The terminology...</p>
        <h2>{name}</h2>
        <p className="technology-description">{description}</p>
      </div>
      <div className="technology-image">
        <img
          src={windowWidth > tabletWidth ? portrait : landscape}
          alt={name}
        />
      </div>
    </div>
  );
};
