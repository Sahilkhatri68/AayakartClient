import {
  Box,
  Typography,
  makeStyles,
  Button,
  Divider,
} from "@material-ui/core";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Countdown from "react-countdown";
import { Link } from "react-router-dom";
import { BiRupee } from "react-icons/bi";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const useStyle = makeStyles((theme) => ({
  component: {
    marginTop: 12,
    background: "#FFFFFF",
  },
  timer: {
    color: "#7f7f7f",
    marginLeft: 10,
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  image: {
    width: "auto",
    height: 150,
  },
  text: {
    fontSize: 14,
    marginTop: 5,
  },
  deal: {
    display: "flex",
    padding: "15px 20px",
    justifyContent: "space-between",
  },
  dealText: {
    fontSize: 22,
    fontWeight: 600,
    lineHeight: "32px",
    marginRight: 25,
  },
  button: {
    marginLeft: "auto",
    backgroundColor: "#dddddd",
    borderRadius: 2,
    fontSize: 12,
    fontWeight: 500,
  },
  wrapper: {
    padding: "25px 15px",
  },
}));

const MultiSlide = ({ data, timer, title }) => {
  const classes = useStyle();
  const timerURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";

  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <span className={classes.timer}>
        {hours} : {minutes} : {seconds} Left
      </span>
    );
  };

  return (
    <Box className={classes.component}>
      <Box className={classes.deal}>
        <Typography className={classes.dealText}>{title}</Typography>
        {timer && (
          <Box className={classes.timer}>
            <img src={timerURL} style={{ width: 24 }} alt="time clock" />
            <Countdown date={Date.now() + 5.04e7} renderer={renderer} />
          </Box>
        )}
        <Link to="/viewall">
          <Button variant="outlined" color="black" className={classes.button}>
            View All
          </Button>
        </Link>
      </Box>
      <Divider />
      <Carousel
        swipeable={false}
        draggable={false}
        responsive={responsive}
        centerMode={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={10000}
        keyBoardControl={true}
        showDots={false}
        containerClass="carousel-container"
        // removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {data.map((temp) => (
          <Link to={`product/${temp.slug}`} style={{ textDecoration: "none" }}>
            <Box textAlign="center" className={classes.wrapper}>
              <img
                src={temp.featured_image}
                className={classes.image}
                alt="Featured image"
              />
              <Typography
                className={classes.text}
                style={{ fontWeight: 600, color: "#212121" }}
              >
                {temp.title.shortTitle}
              </Typography>
              <Typography className={classes.text} style={{ color: "black" }}>
                {temp.title}
              </Typography>
              <Typography className={classes.text} style={{ color: "black" }}>
                {temp.category}
              </Typography>
              <Typography
                className={classes.text}
                style={{ color: "red", opacity: ".8" }}
              >
                {Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "INR",
                }).format(temp.sale_price)}
              </Typography>
            </Box>
          </Link>
        ))}
      </Carousel>
    </Box>
  );
};

const Slide = (props) => {
  return <>{props.multi === true ? <MultiSlide {...props} /> : ""}</>;
};

export default Slide;
