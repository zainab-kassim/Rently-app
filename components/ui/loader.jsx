import { Loader2 } from "lucide-react"



export default function Loader() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="loader text-xl text-zinc-500 font-medium ">
        Loading <Loader2 className="h-4 inline-block w-4 animate-spin" />
      </div>
    </div>
  )
}

