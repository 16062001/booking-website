import { useRecoilState } from "recoil";
import { selected } from "../atoms";
import TestPost from "./TestPost";
const Booking = () => {

    const [_selected, setSelected] = useRecoilState(selected);
    //console.log(selected.key)
    console.log(_selected.length)
    function getIndex(ob) {
        return _selected.findIndex(obj => obj.name === ob)
  
      }
      const resultPrintarray = _selected.map(
        (item, index) => {
          return <div>
    
            <TestPost totaldata={item}></TestPost>
          </div>
    
        }
      )
      
const resultBooking=()=>{
    if (_selected.length>0)
     {

      <h3>there is items selected {-selected.length()}</h3>
        // resultPrintarray
        // console.log(resultPrintarray)
// console.log("selected",resultPrintarray)
}
     
    else
    <h1>NO BOOKING</h1>
}
    return <div>
{/* <button type="button" class="btn btn-outline-primary" onClick={resultBooking} > Show my Booking</button> */}


   {/* <h1>NO BOOKING</h1> */}
    </div>

}
export default Booking;