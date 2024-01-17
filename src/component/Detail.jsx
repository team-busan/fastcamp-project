import Information from "./Information";
import Map from "./Map";
import Title from "./Title";
export default function Detail() {
  return (
    <div className = "flex flex-row center w-screen justify-evenly bg-lightGray">
      <Map/>
      <main>
        <Title/>
        <Information/>
        <></>
        <></>
        <></>
      </main>
    </div>
  )
}
