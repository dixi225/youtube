import Button from "./Buttons"
const items=["All","Mixes","Gaming","Music","Call Of Duty",,"SRK","Batman","Discipline","Dragons","Dogs","House Of Dragons"]
const Buttonlist=()=>
{
    return<div className="mb-4 flex justify-center">
        {
        items.map((item)=><Button name={item}></Button>)
        }
    </div>
}
export default Buttonlist