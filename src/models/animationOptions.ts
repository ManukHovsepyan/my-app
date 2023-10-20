import { AnimationOptions, AnimationObject } from "./animationModel";

export const SidebarOptions: AnimationOptions = {
  duration: 300,
  fill: "forwards",
};

export const burgerOptions: AnimationObject = {
  
}

export const PortalAnimations: AnimationObject = {
  fadeIn: [
    { opacity: 1, visibility: "visible", left: '0' },
    { opacity: 0, visibility: "hidden", left: '-270px' },
  ],
  fadeOut: [
    { opacity: 0, visibility: "hidden", left: '-270px' },
    { opacity: 1, visibility: "visible", left: '0' },
  ],
  fromLeft: [
    {marginLeft: '270px'},
    {marginLeft: '0'},
  ],
  toRight: [
    {marginLeft: '0'},
    {marginLeft: '270px'},
  ],
};