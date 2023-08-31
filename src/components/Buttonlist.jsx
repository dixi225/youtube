import Button from "./Buttons"
const items=["All","Mixes","Gaming","Music","Call Of Duty","Batman","Discipline","Dragons"]
const Buttonlist=()=>
{
    return<div>
        {
        items.map((item)=><Button name={item}></Button>)
        }
    </div>
}
export default Buttonlist