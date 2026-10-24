import colors from "./colors.json"

export default function randomColor() {
    const listOfColors = Object.values(colors);
    return listOfColors[Math.floor(Math.random() * listOfColors.length)]    
}