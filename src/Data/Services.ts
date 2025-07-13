import { ImageType } from "@/Types/ImageType";
import tree from '@/../public/tree.svg';
import comsTower from '@/../public/comsTower.svg'
import eletricTower from '@/../public/eletricTower.svg'
import bulb from '@/../public/bulb.svg'
import hammer from '@/../public/hammer.svg';
import carabiner from '@/../public/carabiner.svg';



export const Data: ImageType[] = [
  {
    id: 1,
    url: tree,
    title: "Site Clearing",
    content: "Clearing of construction sites of land for new projects."
  },
  {
    id: 2,
    url: comsTower,
    title: "Communication Towers",
    content: "Cleaning, maintenance, and inspections of communication towers."
  },
  {
    id: 3,
    url: eletricTower,
    title: "High-Voltage Power",
    content: "Working on electrical transmission and high-limit voltage power towers."
  },
  {
    id: 4,
    url: bulb,
    title: "Aviation Lighting",
    content: "Replacement and maintenance of aviation warning lights."
  },
  {
    id: 5,
    url: carabiner,
    title: "Rope Access",
    content: "Installation of rigging points for rope access work."
  },
  {
    id: 6,
    url: hammer,
    title: "Small Repairs",
    content: "Welding, garage door installation, and sliding gate repair."
  },

];