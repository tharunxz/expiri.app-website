import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { MobileAppPreview } from "./mobile-app-preview"

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 border-b bg-white/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link className="flex items-center gap-2" href="/">
            <Image 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-npq5FYghmQR8zl8mq8FGXmSUe3YwrL.png"
              alt="Expiri Logo"
              width={32}
              height={32}
              className="h-8 w-auto"
            />
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="outline" className="hidden md:flex">
                Download App
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="container relative mx-auto flex flex-col px-4 pt-32 md:px-6">
        <section className="mx-auto grid max-w-5xl gap-12 md:gap-16 lg:grid-cols-2 lg:gap-24">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-7xl">
                Our Solution
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Help consumers be more conscious of their food waste due to expiry.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="inline-flex items-center gap-2">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <MobileAppPreview />
          </div>
        </section>
        <section className="mx-auto mt-24 max-w-5xl space-y-12 md:mt-32">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Track Expiration Dates</h2>
              <p className="text-gray-500 md:text-lg/relaxed">
                Our team's solution to the food waste problem is to create an app that can track expiration dates and give
                consumers insight into the most optimal times to consume food in order to help prevent wastage.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Smart Barcode Scanning</h2>
              <p className="text-gray-500 md:text-lg/relaxed">
                Our product works with proprietary barcode scanners that contain expiry information about foods.
              </p>
            </div>
          </div>
        </section>
        <section className="mx-auto mt-24 max-w-5xl text-center md:mt-32">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Because Fresh Matters</h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-lg/relaxed">
              Join thousands of users who are already reducing food waste and saving money with our smart expiration
              tracking.
            </p>
          </div>
        </section>
      </main>
      <footer className="mt-24 border-t">
        <div className="container flex flex-col gap-4 px-4 py-12 text-center md:px-6">
          <div className="space-y-2">
            <p className="text-sm text-gray-500">© 2024 expiri. All rights reserved.</p>
            <nav className="flex justify-center gap-4 text-sm">
              <Link className="text-gray-500 hover:underline" href="#">
                Terms
              </Link>
              <Link className="text-gray-500 hover:underline" href="#">
                Privacy
              </Link>
              <Link className="text-gray-500 hover:underline" href="/contact">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}

