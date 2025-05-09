"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, ChevronLeft, Filter, Search } from "lucide-react"

// Mock data for demonstration
const books = [
  {
    id: 1,
    title: "Introduction to Computer Science",
    author: "John Smith",
    subject: "Computer Science",
    year: 2022,
    available: true,
    format: "physical",
    coverImage: "/placeholder.svg?height=200&width=150",
    description:
      "A comprehensive introduction to the field of computer science covering algorithms, data structures, and programming concepts.",
  },
  {
    id: 2,
    title: "Advanced Mathematics for Engineers",
    author: "Emily Johnson",
    subject: "Mathematics",
    year: 2021,
    available: false,
    format: "physical",
    coverImage: "/placeholder.svg?height=200&width=150",
    description:
      "This book covers advanced mathematical concepts essential for engineering applications including differential equations and linear algebra.",
  },
  {
    id: 3,
    title: "Principles of Economics",
    author: "Robert Williams",
    subject: "Economics",
    year: 2020,
    available: true,
    format: "physical",
    coverImage: "/placeholder.svg?height=200&width=150",
    description:
      "An introduction to microeconomics and macroeconomics principles with real-world applications and case studies.",
  },
  {
    id: 4,
    title: "Modern Physics",
    author: "Sarah Brown",
    subject: "Physics",
    year: 2023,
    available: true,
    format: "ebook",
    coverImage: "/placeholder.svg?height=200&width=150",
    description:
      "Explores quantum mechanics, relativity, and other modern physics concepts with detailed explanations and examples.",
  },
  {
    id: 5,
    title: "Organic Chemistry",
    author: "Michael Davis",
    subject: "Chemistry",
    year: 2021,
    available: true,
    format: "ebook",
    coverImage: "/placeholder.svg?height=200&width=150",
    description:
      "A comprehensive guide to organic chemistry covering reactions, mechanisms, and laboratory techniques.",
  },
  {
    id: 6,
    title: "World History: Ancient Civilizations",
    author: "Jennifer Wilson",
    subject: "History",
    year: 2019,
    available: false,
    format: "physical",
    coverImage: "/placeholder.svg?height=200&width=150",
    description:
      "Explores the rise and fall of ancient civilizations including Egypt, Greece, Rome, and China with historical context.",
  },
]

export default function CatalogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSubject, setSelectedSubject] = useState("")
  const [selectedFormat, setSelectedFormat] = useState("")
  const [selectedAvailability, setSelectedAvailability] = useState("")
  const [showFilters, setShowFilters] = useState(false)

  // Filter books based on search and filters
  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.description.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesSubject = selectedSubject === "" || book.subject === selectedSubject
    const matchesFormat = selectedFormat === "" || book.format === selectedFormat
    const matchesAvailability =
      selectedAvailability === "" ||
      (selectedAvailability === "available" && book.available) ||
      (selectedAvailability === "unavailable" && !book.available)

    return matchesSearch && matchesSubject && matchesFormat && matchesAvailability
  })

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <BookOpen className="h-6 w-6" />
              <span className="text-xl font-bold">LibraryHub</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/catalog" className="text-sm font-medium underline underline-offset-4">
              Catalog
            </Link>
            <Link href="/e-resources" className="text-sm font-medium hover:underline underline-offset-4">
              E-Resources
            </Link>
            <Link href="/dashboard" className="text-sm font-medium hover:underline underline-offset-4">
              My Account
            </Link>
            <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline" size="sm">
                Log in
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm">Sign up</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1 container py-8">
        <div className="flex items-center mb-6">
          <Link href="/" className="flex items-center text-sm text-muted-foreground hover:text-foreground mr-4">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold">Book Catalog</h1>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters for larger screens */}
          <div className="hidden md:block w-64 space-y-6">
            <div className="space-y-4">
              <h3 className="font-medium">Filters</h3>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Subjects" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Subjects</SelectItem>
                    <SelectItem value="Computer Science">Computer Science</SelectItem>
                    <SelectItem value="Mathematics">Mathematics</SelectItem>
                    <SelectItem value="Economics">Economics</SelectItem>
                    <SelectItem value="Physics">Physics</SelectItem>
                    <SelectItem value="Chemistry">Chemistry</SelectItem>
                    <SelectItem value="History">History</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="format">Format</Label>
                <Select value={selectedFormat} onValueChange={setSelectedFormat}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Formats" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Formats</SelectItem>
                    <SelectItem value="physical">Physical Book</SelectItem>
                    <SelectItem value="ebook">E-Book</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="availability">Availability</Label>
                <Select value={selectedAvailability} onValueChange={setSelectedAvailability}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Books" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Books</SelectItem>
                    <SelectItem value="available">Available Now</SelectItem>
                    <SelectItem value="unavailable">Currently Unavailable</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => {
                  setSelectedSubject("all")
                  setSelectedFormat("all")
                  setSelectedAvailability("all")
                }}
              >
                Clear Filters
              </Button>
            </div>
          </div>

          <div className="flex-1 space-y-6">
            {/* Search and mobile filter button */}
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search by title, author, or keywords..."
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button variant="outline" size="icon" className="md:hidden" onClick={() => setShowFilters(!showFilters)}>
                <Filter className="h-4 w-4" />
              </Button>
            </div>

            {/* Mobile filters */}
            {showFilters && (
              <div className="md:hidden space-y-4 p-4 border rounded-lg">
                <h3 className="font-medium">Filters</h3>
                <div className="space-y-2">
                  <Label htmlFor="subject-mobile">Subject</Label>
                  <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Subjects" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">All Subjects</SelectItem>
                      <SelectItem value="Computer Science">Computer Science</SelectItem>
                      <SelectItem value="Mathematics">Mathematics</SelectItem>
                      <SelectItem value="Economics">Economics</SelectItem>
                      <SelectItem value="Physics">Physics</SelectItem>
                      <SelectItem value="Chemistry">Chemistry</SelectItem>
                      <SelectItem value="History">History</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="format-mobile">Format</Label>
                  <Select value={selectedFormat} onValueChange={setSelectedFormat}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Formats" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Formats</SelectItem>
                      <SelectItem value="physical">Physical Book</SelectItem>
                      <SelectItem value="ebook">E-Book</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="availability-mobile">Availability</Label>
                  <Select value={selectedAvailability} onValueChange={setSelectedAvailability}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Books" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Books</SelectItem>
                      <SelectItem value="available">Available Now</SelectItem>
                      <SelectItem value="unavailable">Currently Unavailable</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    setSelectedSubject("")
                    setSelectedFormat("")
                    setSelectedAvailability("")
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}

            {/* Results count */}
            <div className="text-sm text-muted-foreground">
              Showing {filteredBooks.length} of {books.length} books
            </div>

            {/* Book grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBooks.map((book) => (
                <Card key={book.id} className="overflow-hidden">
                  <div className="aspect-[3/4] relative">
                    <img
                      src={book.coverImage || "/placeholder.svg"}
                      alt={`Cover of ${book.title}`}
                      className="object-cover w-full h-full"
                    />
                    {book.format === "ebook" && <Badge className="absolute top-2 right-2">E-Book</Badge>}
                  </div>
                  <CardHeader className="p-4">
                    <CardTitle className="line-clamp-1">{book.title}</CardTitle>
                    <CardDescription>
                      by {book.author} ({book.year})
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="text-sm text-muted-foreground line-clamp-3">{book.description}</p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 flex justify-between">
                    <Badge variant={book.available ? "default" : "outline"}>
                      {book.available ? "Available" : "Unavailable"}
                    </Badge>
                    <Button size="sm">
                      {book.format === "ebook" ? "Read Online" : book.available ? "Reserve" : "Join Waitlist"}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {filteredBooks.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium">No books found</h3>
                <p className="text-muted-foreground">Try adjusting your search or filters</p>
              </div>
            )}
          </div>
        </div>
      </main>
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            <span className="text-lg font-semibold">LibraryHub</span>
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            © {new Date().getFullYear()} LibraryHub. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
