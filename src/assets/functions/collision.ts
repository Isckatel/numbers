import {itemType, personType} from "../../redux/level1-reducer";

function collision (objA:itemType, objB:personType) : boolean  {
    if (objA.deltaPosition.x+objA.width  > objB.position.x
      && objA.deltaPosition.x < objB.position.x+objB.width
      && objA.deltaPosition.y+objA.height > objB.position.y
      && objA.deltaPosition.y < objB.position.y+objB.height) {
            return true;
    } else {return false;}
}

export default collision;