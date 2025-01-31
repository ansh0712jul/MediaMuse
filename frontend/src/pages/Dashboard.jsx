import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Clock, CloudLightningIcon as Lightning, Twitter } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Link } from "react-router-dom"

export default function Dashboard() {
  return (
    <>
      <header className="fixed w-full z-50 bg-gray-900/80 backdrop-blur-lg transition-all duration-300 h-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-full flex   ">
         
            <Link to="/" className="flex-shrink-0 flex items-center ">
              <span className="text-2xl font-bold text-purple-600 dark:text-blue-400">Media Muse</span>
            </Link>
            <div className="flex items-center space-x-10 ml-auto ">
                <div className="text-gray-300 hover:text-white cursor-pointer ">Features</div>
                <Link to="/pricing-page" className="text-gray-300 hover:text-white">
                    Pricing
                </Link>
                <Link to="/dashboard" className="text-gray-300 hover:text-white">
                    Docs
                </Link>
                <Link to="/dashboard" className="text-gray-300 hover:text-white">
                    Dashboard
                </Link>
                
                <img className="h-16 w-16 rounded-full " src="https://avatars.githubusercontent.com/u/122799261?v=4" alt="" />
              
            </div>
         
        </div>
      </header>
      <div className="grid grid-cols-1 lg:grid-cols-[350px,1fr] gap-8 p-8 pt-32 min-h-screen bg-[#0a0b0d] text-white">
        {/* History Section */}
        <div className="space-y-6 h-full">
          <div className="flex items-center gap-2 text-[#3b82f6] text-2xl">
            <h2>History</h2>
            <Clock className="w-6 h-6" />
          </div>

          <ScrollArea className="h-[calc(100vh-220px)]">
            <div className="space-y-4 pr-4">
              <div className="bg-[#1a1d21] rounded-lg p-5 cursor-pointer hover:bg-[#1a1d21]/80 transition-colors">
                <div className="flex items-center gap-2 text-[#3b82f6] mb-3">
                  <Twitter className="w-5 h-5" />
                  <span className="text-sm font-medium">twitter</span>
                </div>
                <p className="text-gray-300 mb-3 text-base">thread about space</p>
                <div className="text-gray-500 text-sm">04/10/2024, 12:17:01</div>
              </div>

              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="bg-[#1a1d21] rounded-lg p-5 cursor-pointer hover:bg-[#1a1d21]/80 transition-colors"
                >
                  <div className="flex items-center gap-2 text-[#3b82f6] mb-3">
                    <Twitter className="w-5 h-5" />
                    <span className="text-sm font-medium">twitter</span>
                  </div>
                  <p className="text-gray-300 mb-3 text-base">generate a thread on pizza</p>
                  <div className="text-gray-500 text-sm">04/10/2024, 11:34:10</div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Content Section */}
        <div className="space-y-8">
          {/* Points Section */}
          <div className="bg-[#1a1d21] rounded-lg p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Lightning className="w-8 h-8 text-yellow-400" />
              <div>
                <div className="text-gray-400 text-sm">Available Points</div>
                <div className="text-yellow-400 text-3xl font-bold">125</div>
              </div>
            </div>
            <Button className="bg-[#3b82f6] hover:bg-[#3b82f6]/90 text-white px-6 py-2 text-lg">Get More Points</Button>
          </div>

          {/* Content Type */}
          <div className="space-y-3">
            <label className="text-sm text-gray-400 font-medium">Content Type</label>
            <Select defaultValue="twitter">
              <SelectTrigger className="w-full bg-[#1a1d21] border-0 text-white p-4">
                <SelectValue>
                  <div className="flex items-center gap-3">
                    <Twitter className="w-5 h-5" />
                    Twitter Thread
                  </div>
                </SelectValue>
              </SelectTrigger>
              <SelectContent className="bg-[#1a1d21] border-[#2a2d31]">
                <SelectItem value="twitter">
                  <div className="flex items-center gap-3">
                    <Twitter className="w-5 h-5" />
                    Twitter Thread
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Prompt Section */}
          <div className="space-y-3">
            <label className="text-sm text-gray-400 font-medium">Prompt</label>
            <Textarea
              placeholder="Enter your prompt here..."
              className="min-h-[250px] bg-[#1a1d21] border-0 text-white placeholder:text-gray-500 resize-none p-4 text-base"
            />
          </div>
        </div>
      </div>
    </>
  )
}

