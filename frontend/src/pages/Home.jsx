import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

import { Paintbrush, Eye, Zap } from "lucide-react"
import { Link } from "react-router-dom"

const features = [
  {
    title: "Easy Design",
    description: "Create stunning social media posts with our intuitive design tools.",
    icon: Paintbrush,
  },
  {
    title: "Multi-Platform Preview",
    description: "See how your content will look on different social media platforms before posting.",
    icon: Eye,
  },
  {
    title: "Efficient Workflow",
    description: "Streamline your content creation process and save time.",
    icon: Zap,
  },
]

const platforms = [
  { name: "Instagram", logo: "/placeholder.svg?height=80&width=80" },
  { name: "Facebook", logo: "/placeholder.svg?height=80&width=80" },
  { name: "Twitter", logo: "/placeholder.svg?height=80&width=80" },
]

export default function Home() {
  const [isDarkTheme, setIsDarkTheme] = useState(false)


  // to hanlde the responsive design
  useEffect(() => {
    const handleResize = () => {
      setIsDarkTheme(window.innerWidth >= 1024)
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // to change the theme for mobile and laptop 
  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkTheme])


  return (
    <>
        <header className="bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-purple-600 dark:text-blue-400">Media Muse</span>
            </Link>
          </div>
          <div className="flex items-center">
            <Button variant="ghost" className="mr-2 dark:text-gray-300">
              Log in
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700 dark:bg-blue-600 dark:hover:bg-blue-700">
              Sign up
            </Button>
          </div>
        </div>
      </div>
    </header>
        <main
        className={`min-h-screen ${isDarkTheme ? "bg-gray-900 text-white" : "bg-gradient-to-b from-gray-50 to-white"}`}
        >
        <section className="py-20 px-4 text-center">
            <h1
            className={`text-4xl md:text-6xl font-bold mb-6 ${isDarkTheme ? "text-blue-400" : "bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"}`}
            >
            Welcome to Media Muse
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Create, customize, and preview your social media content effortlessly across Instagram, Facebook, and Twitter.
            </p>
            <Button
            size="lg"
            className={isDarkTheme ? "bg-blue-600 hover:bg-blue-700" : "bg-purple-600 hover:bg-purple-700"}
            >
            Get Started
            </Button>
        </section>

        <section className={`py-20 px-4 ${isDarkTheme ? "bg-gray-800" : "bg-gray-50"}`}>
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Media Muse?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
                <Card
                key={index}
                className={`transition-all hover:shadow-lg ${isDarkTheme ? "bg-gray-700 text-white" : ""}`}
                >
                <CardHeader>
                    <feature.icon className={`w-12 h-12 mb-4 ${isDarkTheme ? "text-blue-400" : "text-purple-600"}`} />
                    <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription className={isDarkTheme ? "text-gray-300" : ""}>{feature.description}</CardDescription>
                </CardContent>
                </Card>
            ))}
            </div>
        </section>

        <section className="py-20 px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Supported Platforms</h2>
            <div className="flex justify-center items-center space-x-12">
            {platforms.map((platform, index) => (
                <div key={index} className="text-center">
                <img
                    src={platform.logo || "/placeholder.svg"}
                    alt={`${platform.name} logo`}
                    width={80}
                    height={80}
                    className="mx-auto mb-4"
                />
                <p className="font-semibold">{platform.name}</p>
                </div>
            ))}
            </div>
        </section>

        <section className={`py-20 px-4 ${isDarkTheme ? "bg-blue-900" : "bg-purple-600"} text-white text-center`}>
            <h2 className="text-3xl font-bold mb-6">Ready to Elevate Your Social Media Game?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join Media Muse today and start creating captivating content for your social media platforms.
            </p>
            <Button
            size="lg"
            variant="secondary"
            className={
                isDarkTheme ? "bg-white text-blue-900 hover:bg-gray-100" : "bg-white text-purple-600 hover:bg-gray-100"
            }
            >
            Sign Up Now
            </Button>
        </section>
        </main>

        {/* footer */}

        <footer className="bg-gray-100 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-semibold text-purple-600 dark:text-blue-400">Media Muse</span>
          </div>
          <div className="flex space-x-6">
            <Link href="#" className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-blue-400">
              About
            </Link>
            <Link href="#" className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-blue-400">
              Privacy
            </Link>
            <Link href="#" className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-blue-400">
              Terms
            </Link>
            <Link href="#" className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-blue-400">
              Contact
            </Link>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Media Muse. All rights reserved.
        </div>
      </div>
    </footer>
    </>
  )
}

