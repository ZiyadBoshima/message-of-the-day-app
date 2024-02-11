import Motd from "./Motd" 

export default function Page() {
  const data = false

  return (
    <div className="w-full flex justify-center mt-44 text-center">
      <Motd data={data} />
    </div>
  )
}