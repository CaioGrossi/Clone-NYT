import universeImage from '../../assets/images/universe.png';
import planetImage from '../../assets/images/planet.png';
import observeImage from '../../assets/images/observe.png';
import coffeImage from '../../assets/images/coffe.png';
import timeImage from '../../assets/images/time.png';
import inflationImage from '../../assets/images/inflation.png';
import fluctuationImage from '../../assets/images/fluctuation.png';
import expansionImage from '../../assets/images/expansion.png';


const CONTENT = [
  {
    id: 0,
    title: "THE UNIVERSE",
    description: "is just under 14 billion years old. From our position in the Milky Way galaxy, we can observe a sphere that is now about 92 billion light-years across. But there's a mystery. Wherever we look, the universe has an even temperature.",
    image: universeImage
  },

  {
    id: 1,
    title: "NOT ENOUGH TIME",
    description: "The universe is not old enough for light to have traveled the vast distance from one side of the universe to the other, and there has not been enough time for scattered patches of hot and cold to mix into an even temperature.",
    image: planetImage
  },

  {
    id: 2,
    title: "DISTANT COFFEE",
    description: " At a smaller scale, imagine using a telescope to look a mile in one direction. You see a coffee cup, and from the amount of steam, you can estimate its temperature and how much it has cooled.",
    image: observeImage
  },

  {
    id: 3,
    title: "COFFEE EVERYWHERE",
    description: "Now turn around and look a mile in the other direction. You see a similar coffee cup, at exactly the same temperature. Coincidence? Maybe. But if you see a similar cup in every direction, you might want to look for another explanation.",
    image: coffeImage
  },

  {
    id: 4,
    title: "STILL NOT ENOUGH TIME",
    description: "There has not been enough time to carry coffee cups from place to place before they get cold. But if all the coffee cups were somehow filled from a single coffee pot, all at the same time, that might explain their even temperature.",
    image: timeImage
  },

  {
    id: 5,
    title: "INFLATION",
    description: "solves this problem. The theory proposes that, less than a trillionth of a second after the Big Bang, the universe expanded faster than the speed of light. Tiny ripples in the violently expanding energy field eventually grew into the large-scale structures of the universe.",
    image: inflationImage
  },

  {
    id: 6,
    title: "FLUCTUATION",
    description: "Astronomers have now detected evidence of these ancient fluctuations in swirls of polarized light in the cosmic background radiation, which is energy left over from the early universe. These are gravitational waves predicted by Einstein.",
    image: fluctuationImage
  },

  {
    id: 7,
    title: "EXPANSION ",
    description: "Returning to our coffee, imagine a single, central pot expanding faster than light and cooling to an even temperature as it expands. That is something like inflation. And the structure of the universe mirrors the froth and foam of the original pot.",
    image: expansionImage
  }
]

export default CONTENT;