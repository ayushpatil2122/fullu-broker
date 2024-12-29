import { Button } from "@/components/ui/button"
import { CircleDollarSign } from 'lucide-react'

export default function LoanNotificationBanner() {
  return (
    <div className="w-full bg-[#374B67] py-2.5">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-4 px-4">
        <div className="flex items-center gap-2">
          <CircleDollarSign className="w-5 h-5 text-white" />
          <p className="text-sm text-white">
            Do you know how much <span className="font-medium">loan</span> you can get? Get maximum with <span className="font-medium">NoBroker</span>
          </p>
        </div>
        <Button 
          variant="secondary" 
          size="sm" 
          className="bg-white hover:bg-gray-100 text-sm font-medium"
        >
          Check Eligibility
        </Button>
      </div>
    </div>
  )
}

