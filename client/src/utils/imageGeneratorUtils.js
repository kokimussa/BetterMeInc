import bgImg1 from '../media/images/backgrounds/boardwalk.jpeg';
import bgImg2 from '../media/images/backgrounds/boat-on-lake.jpeg';
import bgImg3 from '../media/images/backgrounds/brocolli.jpeg';
import bgImg4 from '../media/images/backgrounds/carrots.jpeg';
import bgImg5 from '../media/images/backgrounds/color-cloud.jpeg';
import bgImg6 from '../media/images/backgrounds/couple-jumping.jpeg';
import bgImg7 from '../media/images/backgrounds/female-laugh.jpeg';
import bgImg8 from '../media/images/backgrounds/flower.jpeg';
import bgImg9 from '../media/images/backgrounds/fruit-yogurt.jpeg';
import bgImg10 from '../media/images/backgrounds/grapefruit.jpeg';
import bgImg11 from '../media/images/backgrounds/greentomatoes.jpeg';
import bgImg12 from '../media/images/backgrounds/health-drink-shots.jpeg';
import bgImg13 from '../media/images/backgrounds/lady-closed-eyes.jpeg';
import bgImg14 from '../media/images/backgrounds/lady-dancer.jpeg';
import bgImg15 from '../media/images/backgrounds/lady-hammock.jpeg';
import bgImg16 from '../media/images/backgrounds/lady-longhair.jpeg';
import bgImg17 from '../media/images/backgrounds/lady-shoe-weight.jpeg';
import bgImg18 from '../media/images/backgrounds/lady-skateboard.jpeg';
import bgImg19 from '../media/images/backgrounds/lady-water.jpeg';
import bgImg20 from '../media/images/backgrounds/lemons.jpeg';
import bgImg21 from '../media/images/backgrounds/man-bball.jpeg';
import bgImg22 from '../media/images/backgrounds/man-form.jpeg';
import bgImg23 from '../media/images/backgrounds/man-in-forest.jpeg';
import bgImg24 from '../media/images/backgrounds/man-on-mountain.jpeg';
import bgImg25 from '../media/images/backgrounds/man-on-track.jpeg';
import bgImg26 from '../media/images/backgrounds/man-surf.jpeg';
import bgImg27 from '../media/images/backgrounds/man-surfboard.jpeg';
import bgImg28 from '../media/images/backgrounds/men-on-track.jpeg';
import bgImg29 from '../media/images/backgrounds/pho.jpeg';
import bgImg30 from '../media/images/backgrounds/pineapple.jpeg';
import bgImg31 from '../media/images/backgrounds/pose-athletic-female.jpeg';
import bgImg32 from '../media/images/backgrounds/rocks.jpeg';
import bgImg33 from '../media/images/backgrounds/sand-mountain.jpeg';
import bgImg34 from '../media/images/backgrounds/shoes-by-lake.jpeg';
import bgImg35 from '../media/images/backgrounds/smoothies.jpeg';
import bgImg36 from '../media/images/backgrounds/vegetables.jpeg';
import bgImg37 from '../media/images/backgrounds/waterfall-male.jpeg';

const bgImages = [
    bgImg1,
    bgImg2,
    bgImg3,
    bgImg4,
    bgImg5,
    bgImg6,
    bgImg7,
    bgImg8,
    bgImg9,
    bgImg10,
    bgImg11,
    bgImg12,
    bgImg13,
    bgImg14,
    bgImg15,
    bgImg16,
    bgImg17,
    bgImg18,
    bgImg19,
    bgImg20,
    bgImg21,
    bgImg22,
    bgImg23,
    bgImg24,
    bgImg25,
    bgImg26,
    bgImg27,
    bgImg28,
    bgImg29,
    bgImg30,
    bgImg31,
    bgImg32,
    bgImg33,
    bgImg34,
    bgImg35,
    bgImg36,
    bgImg37,
];

const getRandomImg = () => {
    const randomNum = Math.floor(Math.random() * (bgImages.length - 0)) + 0;

    return bgImages[randomNum];
};

export default getRandomImg;
