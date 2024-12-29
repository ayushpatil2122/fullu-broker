export default function StatisticsSection() {
    const statistics = [
      {
        value: "₹130 cr+",
        label: "Brokerage saved monthly"
      },
      {
        value: "30 Lakh+",
        label: "Customers Connected Monthly"
      },
      {
        value: "2 Lakh+",
        label: "New Listings Monthly"
      }
    ]
  
    return (
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-12 text-gray-700 relative">
            We Make A Difference
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-red-500" />
              <div className="w-24 h-px bg-gray-300" />
              <div className="w-2 h-2 rounded-full bg-red-500" />
            </div>
          </h2>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {statistics.map((stat, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="w-32 h-32 rounded-full border-2 border-red-500 flex items-center justify-center">
                    <span className="text-2xl font-medium text-red-500">
                      {stat.value}
                    </span>
                  </div>
                </div>
                <span className="text-lg text-gray-700">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
  