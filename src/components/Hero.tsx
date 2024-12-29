'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { FileText, Truck, Home, Bed, Bath, Square } from 'lucide-react'

// Add this type definition at the top of the file, after the imports
type Property = {
  id: number
  area: string
  type: string
  transactionType: string[]
  rent: number | null
  buy: number | null
  size: number
  amenities: string[]
  bedrooms: number
  bathrooms: number
}

// Sample data for Pune areas and properties
const puneAreas = [
  "Baner", "Kothrud", "Hadapsar", "Viman Nagar", "Koregaon Park", "Hinjewadi", "Wakad", "Aundh", "Kalyani Nagar", "Magarpatta"
]

const propertiesData: Property[] = [
  { 
    id: 1, 
    area: "Baner", 
    type: "1BHK", 
    transactionType: ["rent", "buy"],
    rent: 15000, 
    buy: 4500000, 
    size: 550, 
    amenities: ["parking", "gym", "security"],
    bedrooms: 1,
    bathrooms: 1
  },
  { 
    id: 2, 
    area: "Kothrud", 
    type: "2BHK", 
    transactionType: ["rent"],
    rent: 20000, 
    buy: null, 
    size: 850, 
    amenities: ["parking", "pool", "gym", "security"],
    bedrooms: 2,
    bathrooms: 2
  },
  { 
    id: 3, 
    area: "Hadapsar", 
    type: "3BHK", 
    transactionType: ["buy"],
    rent: null, 
    buy: 9000000, 
    size: 1200, 
    amenities: ["parking", "gym", "security", "clubhouse"],
    bedrooms: 3,
    bathrooms: 2
  },
  { 
    id: 4, 
    area: "Viman Nagar", 
    type: "2BHK", 
    transactionType: ["rent", "buy"],
    rent: 22000, 
    buy: 7500000, 
    size: 900, 
    amenities: ["parking", "security"],
    bedrooms: 2,
    bathrooms: 2
  },
  { 
    id: 5, 
    area: "Koregaon Park", 
    type: "3BHK", 
    transactionType: ["rent", "buy"],
    rent: 35000, 
    buy: 12000000, 
    size: 1500, 
    amenities: ["parking", "pool", "gym", "security", "clubhouse"],
    bedrooms: 3,
    bathrooms: 3
  },
  { 
    id: 6, 
    area: "Hinjewadi", 
    type: "1BHK", 
    transactionType: ["rent"],
    rent: 13000, 
    buy: null, 
    size: 500, 
    amenities: ["parking", "security"],
    bedrooms: 1,
    bathrooms: 1
  },
  { 
    id: 7, 
    area: "Wakad", 
    type: "2BHK", 
    transactionType: ["buy"],
    rent: null, 
    buy: 6500000, 
    size: 800, 
    amenities: ["parking", "gym", "security"],
    bedrooms: 2,
    bathrooms: 2
  },
  { 
    id: 8, 
    area: "Aundh", 
    type: "3BHK", 
    transactionType: ["rent", "buy"],
    rent: 28000, 
    buy: 10000000, 
    size: 1300, 
    amenities: ["parking", "pool", "gym", "security", "clubhouse"],
    bedrooms: 3,
    bathrooms: 3
  },
  { 
    id: 9, 
    area: "Kalyani Nagar", 
    type: "2BHK", 
    transactionType: ["rent"],
    rent: 25000, 
    buy: null, 
    size: 950, 
    amenities: ["parking", "gym", "security"],
    bedrooms: 2,
    bathrooms: 2
  },
  { 
    id: 10, 
    area: "Magarpatta", 
    type: "3BHK", 
    transactionType: ["buy"],
    rent: null, 
    buy: 11000000, 
    size: 1400, 
    amenities: ["parking", "pool", "gym", "security", "clubhouse"],
    bedrooms: 3,
    bathrooms: 3
  },
]

export default function Hero() {
  const [searchTerm, setSearchTerm] = useState("")
  const [propertyType, setPropertyType] = useState("All")
  const [transactionType, setTransactionType] = useState<string>("rent")
  const [priceRange, setPriceRange] = useState([0, transactionType === "rent" ? 50000 : 15000000])
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([])
  const [searchResults, setSearchResults] = useState(propertiesData)

  useEffect(() => {
    // Reset price range when transaction type changes
    setPriceRange([0, transactionType === "rent" ? 50000 : 15000000])
  }, [transactionType])

  const handleSearch = () => {
    const results = propertiesData.filter(property => 
      (searchTerm === "" || property.area.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (propertyType === "All" || property.type === propertyType) &&
      property.transactionType.includes(transactionType) &&
      (property[transactionType as keyof Pick<Property, 'rent' | 'buy'>] !== null) &&
      (property[transactionType as keyof Pick<Property, 'rent' | 'buy'>]! >= priceRange[0] && 
       property[transactionType as keyof Pick<Property, 'rent' | 'buy'>]! <= priceRange[1]) &&
      (selectedAmenities.length === 0 || selectedAmenities.every(amenity => property.amenities.includes(amenity)))
    )
    setSearchResults(results)
  }

  const handleAmenityChange = (amenity: string) => {
    setSelectedAmenities(prev => 
      prev.includes(amenity) 
        ? prev.filter(a => a !== amenity)
        : [...prev, amenity]
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleSearch()
  }

  return (
    <div className="flex flex-col items-center py-12 px-4">
      <h1 className="text-3xl md:text-4xl text-gray-600 font-medium text-center mb-6">
        Find Your Perfect Home in Pune
      </h1>

      {/* Banner */}
      <div className="bg-[#FFF3E3] rounded-lg px-6 py-3 mb-8 flex items-center gap-6">
        <div className="flex items-center gap-2">
          <FileText className="h-5 w-5 text-gray-600" />
          <span className="text-gray-600">Rental Agreement</span>
        </div>
        <div className="h-6 w-px bg-gray-300" />
        <div className="flex items-center gap-2">
          <Truck className="h-5 w-5 text-gray-600" />
          <span className="text-gray-600">Next Day Delivery</span>
        </div>
      </div>

      {/* Search Section */}
      <div className="w-full max-w-4xl">
        {/* Search Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input 
            placeholder="Search Pune areas..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="transaction-type">Transaction Type</Label>
              <RadioGroup 
                id="transaction-type"
                defaultValue={transactionType} 
                onValueChange={setTransactionType}
                className="flex gap-4 mt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="rent" id="rent" />
                  <label htmlFor="rent">Rent</label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="buy" id="buy" />
                  <label htmlFor="buy">Buy</label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label htmlFor="property-type">Property Type</Label>
              <Select onValueChange={setPropertyType} defaultValue={propertyType}>
                <SelectTrigger id="property-type" className="mt-2">
                  <SelectValue placeholder="Select Property Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All Types</SelectItem>
                  <SelectItem value="1BHK">1 BHK</SelectItem>
                  <SelectItem value="2BHK">2 BHK</SelectItem>
                  <SelectItem value="3BHK">3 BHK</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label>Price Range ({transactionType === 'rent' ? 'Monthly Rent' : 'Purchase Price'})</Label>
            <Slider
              min={0}
              max={transactionType === 'rent' ? 50000 : 15000000}
              step={transactionType === 'rent' ? 1000 : 100000}
              value={priceRange}
              onValueChange={setPriceRange}
              className="mt-2"
            />
            <div className="flex justify-between mt-2">
              <span>₹{priceRange[0].toLocaleString()}</span>
              <span>₹{priceRange[1].toLocaleString()}</span>
            </div>
          </div>

          <div>
            <Label className="mb-2 block">Amenities</Label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {['parking', 'gym', 'pool', 'security', 'clubhouse'].map((amenity) => (
                <div key={amenity} className="flex items-center space-x-2">
                  <Checkbox 
                    id={amenity} 
                    checked={selectedAmenities.includes(amenity)}
                    onCheckedChange={() => handleAmenityChange(amenity)}
                  />
                  <label htmlFor={amenity} className="capitalize">{amenity}</label>
                </div>
              ))}
            </div>
          </div>
          <Button type="submit" className="w-full md:w-auto md:self-end bg-red-500 hover:bg-red-600">
            Search
          </Button>
        </form>
      </div>

      {/* Search Results */}
      <div className="mt-8 w-full max-w-4xl">
        <h2 className="text-2xl font-semibold mb-4">Search Results ({searchResults.length})</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {searchResults.map(property => (
            <div key={property.id} className="border rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image
                  src={`/placeholder.svg?height=300&width=400&text=${property.area}`}
                  alt={`Property in ${property.area}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{property.area} - {property.type}</h3>
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <Bed className="h-4 w-4" />
                    <span>{property.bedrooms} Bed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath className="h-4 w-4" />
                    <span>{property.bathrooms} Bath</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Square className="h-4 w-4" />
                    <span>{property.size} sq.ft</span>
                  </div>
                </div>
                {property.rent !== null && (
                  <p className="mb-1">
                    <span className="font-medium">Rent:</span> ₹{property.rent.toLocaleString()}/month
                  </p>
                )}
                {property.buy !== null && (
                  <p className="mb-2">
                    <span className="font-medium">Buy:</span> ₹{property.buy.toLocaleString()}
                  </p>
                )}
                <div className="mt-2">
                  <p className="font-medium mb-1">Amenities:</p>
                  <div className="flex flex-wrap gap-2">
                    {property.amenities.map(amenity => (
                      <span key={amenity} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs">
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Property Owner CTA */}
      <div className="mt-12 text-center">
        <p className="text-gray-600 mb-4">Are you a Property Owner in Pune?</p>
        <Button className="bg-teal-500 hover:bg-teal-600">
          Post Free Property Ad
        </Button>
      </div>
    </div>
  )
}

