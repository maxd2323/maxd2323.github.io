// const DropdownInputOld = () => {
//   return (
//     <input
//               className="Text-Input"
//               type="text"
//               id={"textbox"}
//               onChange={(e) => {
//                 const { value } = e.target;
//                 if (e.code === "Enter" || e.code === "NumpadEnter") {
//                   onInputEnter(value);
//                 }
//                 else {
//                   onInputChange(value);
//                 }
//               }}
//               onKeyDown={(e)=>{
//                 if (e.key === "Enter" || e.key === "NumpadEnter") {
//                   onInputEnter();
//                 }
//               }}
//               value={current}
//             />
//   )
// }