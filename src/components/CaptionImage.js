import "./CaptionImage.css";

/* const CaptionImage = (props) => {
  return (
    <div className="caption">
      <img src={props.imgUrl} alt={props.caption} />
      <p>이건 트럭입니다</p>
    </div>
  );
}; */
const CaptionImage = ({ imgUrl, caption }) => {
  return (
    <div className="caption">
      <img src={imgUrl} alt={caption} />
      <p>{caption}</p>
    </div>
  );
};
export { CaptionImage };
export default CaptionImage;
