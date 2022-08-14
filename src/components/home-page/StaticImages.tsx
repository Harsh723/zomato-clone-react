import "./style.css";

const StaticImages = ({ orderOnline, outForAMeal, zomatoPro, nightLife }: any) => {
    const homePageImages = [orderOnline, outForAMeal, zomatoPro, nightLife];
    const homePageImagesText = ["Order Food Online", "Go out for a meal", "Zomato Pro", "Nightlife & Clubs"];

    return (
        <div className="imageContainer">
            {homePageImages.map((el, index) => (
                <div className="cardRoot" key={el}>
                    <img src={el} alt={`home-page${index}-pic`} height="85%" width="100%" />
                    <h3 className="imageTitles">{homePageImagesText[index]}</h3>
                </div>
            ))}
        </div>
    );
};

export default StaticImages;
