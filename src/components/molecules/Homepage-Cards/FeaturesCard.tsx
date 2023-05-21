import "./homepage.scss";
import Typography from "@atoms/Typography";

interface IFeaturesCardProps {
  cardStyles: string;
  headerText: string;
  bodyText: string;
}

const FeaturesCard = ({
  cardStyles,
  headerText,
  bodyText,
}: IFeaturesCardProps) => {
  return (
    <div className={`${cardStyles} text-light`}>
      <div>
        <span className="w-[15px] h-[15px] bg-light"></span>
        <Typography className="text-4xl font-bold" variant="h5">
          {headerText}
        </Typography>
        <span className="w-[15px] h-[15px] bg-light"></span>
      </div>
      <Typography className="text-2xl font-normal">
        {bodyText}
      </Typography>
    </div>
  );
};

export default FeaturesCard;
