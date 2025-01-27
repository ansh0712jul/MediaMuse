import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Check } from "lucide-react"

const tiers = [
  {
    name: "Basic",
    monthlyPrice: "$9",
    yearlyPrice: "$90",
    description: "Essential features for small projects",
    features: ["Up to 5 projects", "1 GB storage", "Basic support", "1 user"],
    cta: "Start Basic",
    highlighted: false,
  },
  {
    name: "Pro",
    monthlyPrice: "$29",
    yearlyPrice: "$290",
    description: "Advanced features for growing teams",
    features: ["Unlimited projects", "10 GB storage", "Priority support", "5 users", "Advanced analytics"],
    cta: "Go Pro",
    highlighted: true,
  },
  {
    name: "Enterprise",
    monthlyPrice: "Custom",
    yearlyPrice: "Custom",
    description: "Tailored solutions for large organizations",
    features: [
      "Unlimited everything",
      "24/7 dedicated support",
      "Custom integrations",
      "Unlimited users",
      "Advanced security",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
]

function PricingPage() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <div className="bg-gray-900 text-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          
          <p className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">Choose the right plan for you</p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-muted text-gray-400">
          Choose a plan that works best for you and your team. All plans come with a 30-day money-back guarantee.
        </p>
        <div className="mt-8 flex justify-center">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium">Monthly</span>
            <Switch checked={isYearly} onCheckedChange={setIsYearly} />
            <span className="text-sm font-medium">Yearly (Save 20%)</span>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3 ">
          {tiers.map((tier, index) => (
            <Card
              key={tier.name}
              className={`flex flex-col justify-between ${tier.highlighted ? "border-primary" : ""} bg-black text-white`}
            >
              <CardHeader>
                <CardTitle className={`text-2xl font-bold ${tier.highlighted ? "text-primary" : ""}text-white`}>
                  {tier.name}
                </CardTitle>
                <CardDescription>{tier.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mt-6 flex items-baseline gap-x-1 text-white">
                  <span className="text-5xl font-bold tracking-tight text-white">
                    {isYearly ? tier.yearlyPrice : tier.monthlyPrice}
                  </span>
                  {tier.name !== "Enterprise" && (
                    <span className="text-sm font-semibold leading-6 text-muted-foreground text-white">
                      /{isYearly ? "year" : "month"}
                    </span>
                  )}
                </div>
                <ul role="list" className="mt-8 space-y-3 text-sm text-white">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="h-5 w-5 flex-shrink-0 text-green-500" aria-hidden="true" />
                      <span className="ml-3 text-muted-foreground text-white">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className={`w-full ${
                    tier.highlighted ? "bg-primary text-primary-foreground hover:bg-primary/90" : ""
                  }`}
                >
                  {tier.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PricingPage

