import Image from "next/image"

export function MobileAppPreview() {
  return (
    <div className="relative aspect-[320/680] w-[320px] overflow-hidden rounded-[40px] border-4 border-gray-900 bg-white">
      <div className="absolute inset-0 flex flex-col">
        <div className="flex h-12 items-center justify-center bg-gray-900">
          <div className="h-2 w-20 rounded-full bg-gray-800" />
        </div>
        <div className="flex flex-1 flex-col items-center justify-center space-y-6 p-6">
          <div className="w-56">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bl2xcMS2iwWmcbfMA2JGCyXGYLj7Be.png"
              alt="Expiri Logo"
              width={400}
              height={400}
              className="w-full h-auto"
            />
          </div>
          <div className="space-y-2 text-center">
            <h3 className="text-xl font-bold">Because Fresh Matters</h3>
            <div className="h-2 w-24 rounded-full bg-green-500 mx-auto" />
          </div>
        </div>
      </div>
    </div>
  )
}

