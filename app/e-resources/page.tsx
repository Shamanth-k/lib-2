"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BookOpen, ChevronLeft, Download, Filter, Search } from "lucide-react"

// Mock data for demonstration
const eBooks = [
  {
    id: 1,
    title: "Introduction to Machine Learning",
    author: "David Lee",
    subject: "Computer Science",
    year: 2022,
    format: "PDF",
    size: "15 MB",
    description: "A comprehensive introduction to machine learning algorithms and techniques with practical examples.",
    coverImage: "/placeholder.svg?height=200&width=150",
  },
  {
    id: 2,
    title: "Database Systems: Concepts and Design",
    author: "Maria Rodriguez",
    subject: "Computer Science",
    year: 2021,
    format: "EPUB",
    size: "8 MB",
    description: "Covers database design principles, SQL, and modern database management systems.",
    coverImage: "/placeholder.svg?height=200&width=150",
  },
  {
    id: 3,
    title: "Artificial Intelligence: A Modern Approach",
    author: "Stuart Russell & Peter Norvig",
    subject: "Computer Science",
    year: 2020,
    format: "PDF",
    size: "22 MB",
    description:
      "The definitive textbook on artificial intelligence, covering search, knowledge representation, planning, and machine learning.",
    coverImage: "/placeholder.svg?height=200&width=150",
  },
  {
    id: 4,
    title: "Calculus: Early Transcendentals",
    author: "James Stewart",
    subject: "Mathematics",
    year: 2023,
    format: "PDF",
    size: "18 MB",
    description:
      "A comprehensive calculus textbook covering limits, derivatives, integrals, and series with applications.",
    coverImage: "/placeholder.svg?height=200&width=150",
  },
  {
    id: 5,
    title: "Principles of Microeconomics",
    author: "N. Gregory Mankiw",
    subject: "Economics",
    year: 2021,
    format: "EPUB",
    size: "10 MB",
    description: "An introduction to microeconomic principles with real-world applications and case studies.",
    coverImage: "/placeholder.svg?height=200&width=150",
  },
]

const academicPapers = [
  {
    id: 1,
    title: "Advances in Neural Network Architectures",
    authors: "Zhang, L., Johnson, R., & Williams, T.",
    journal: "Journal of Machine Learning Research",
    year: 2022,
    format: "PDF",
    size: "2.5 MB",
    abstract:
      "This paper presents novel neural network architectures that improve performance on image recognition tasks.",
  },
  {
    id: 2,
    title: "Climate Change Impact on Agricultural Productivity",
    authors: "Brown, S., Davis, M., & Wilson, J.",
    journal: "Environmental Science & Technology",
    year: 2023,
    format: "PDF",
    size: "3.2 MB",
    abstract: "A study on how climate change affects crop yields and agricultural sustainability in different regions.",
  },
  {
    id: 3,
    title: "Quantum Computing: Recent Breakthroughs",
    authors: "Anderson, P., Martinez, E., & Lee, K.",
    journal: "Quantum Information Processing",
    year: 2022,
    format: "PDF",
    size: "4.1 MB",
    abstract: "This paper reviews recent advances in quantum computing hardware and algorithms.",
  },
]

const syllabi = [
  {
    id: 1,
    title: "CS101: Introduction to Computer Science",
    department: "Computer Science",
    instructor: "Prof. John Smith",
    year: "2023-2024",
    format: "PDF",
    size: "1.2 MB",
  },
  {
    id: 2,
    title: "MATH201: Linear Algebra",
    department: "Mathematics",
    instructor: "Prof. Emily Johnson",
    year: "2023-2024",
    format: "PDF",
    size: "0.8 MB",
  },
  {
    id: 3,
    title: "PHYS301: Quantum Mechanics",
    department: "Physics",
    instructor: "Prof. Robert Williams",
    year: "2023-2024",
    format: "PDF",
    size: "1.5 MB",
  },
  {
    id: 4,
    title: "ECON202: Macroeconomics",
    department: "Economics",
    instructor: "Prof. Sarah Brown",
    year: "2023-2024",
    format: "PDF",
    size: "1.1 MB",
  },
]

export default function EResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSubject, setSelectedSubject] = useState("")
  const [selectedFormat, setSelectedFormat] = useState("")
  const [showFilters, setShowFilters] = useState(false)

  // Filter e-books based on search and filters
  const filteredEBooks = eBooks.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.description.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesSubject = selectedSubject === "" || book.subject === selectedSubject
    const matchesFormat = selectedFormat === "" || book.format === selectedFormat

    return matchesSearch && matchesSubject && matchesFormat
  })

  // Filter academic papers based on search
  const filteredPapers = academicPapers.filter(
    (paper) =>
      paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.abstract.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  // Filter syllabi based on search
  const filteredSyllabi = syllabi.filter(
    (syllabus) =>
      syllabus.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      syllabus.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      syllabus.instructor.toLowerCase().includes(searchQuery.toLowerCase()),
  )

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
            <Link href="/catalog" className="text-sm font-medium hover:underline underline-offset-4">
              Catalog
            </Link>
            <Link href="/e-resources" className="text-sm font-medium underline underline-offset-4">
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
          <h1 className="text-3xl font-bold">E-Resources</h1>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters for larger screens */}
          <div className="hidden md:block w-64 space-y-6">
            <div className="space-y-4">
              <h3 className="font-medium">Filters</h3>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
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
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label htmlFor="format" className="text-sm font-medium">
                  Format
                </label>
                <Select value={selectedFormat} onValueChange={setSelectedFormat}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Formats" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Formats</SelectItem>
                    <SelectItem value="PDF">PDF</SelectItem>
                    <SelectItem value="EPUB">EPUB</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => {
                  setSelectedSubject("")
                  setSelectedFormat("")
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
                  placeholder="Search e-resources..."
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
                  <label htmlFor="subject-mobile" className="text-sm font-medium">
                    Subject
                  </label>
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
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="format-mobile" className="text-sm font-medium">
                    Format
                  </label>
                  <Select value={selectedFormat} onValueChange={setSelectedFormat}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Formats" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">All Formats</SelectItem>
                      <SelectItem value="PDF">PDF</SelectItem>
                      <SelectItem value="EPUB">EPUB</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    setSelectedSubject("")
                    setSelectedFormat("")
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}

            <Tabs defaultValue="ebooks" className="space-y-4">
              <TabsList>
                <TabsTrigger value="ebooks">E-Books</TabsTrigger>
                <TabsTrigger value="papers">Academic Papers</TabsTrigger>
                <TabsTrigger value="syllabi">Course Syllabi</TabsTrigger>
              </TabsList>

              <TabsContent value="ebooks" className="space-y-4">
                <div className="text-sm text-muted-foreground">
                  Showing {filteredEBooks.length} of {eBooks.length} e-books
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredEBooks.map((book) => (
                    <Card key={book.id} className="overflow-hidden">
                      <div className="aspect-[3/4] relative">
                        <img
                          src={book.coverImage || "/placeholder.svg"}
                          alt={`Cover of ${book.title}`}
                          className="object-cover w-full h-full"
                        />
                        <Badge className="absolute top-2 right-2">{book.format}</Badge>
                      </div>
                      <CardHeader className="p-4">
                        <CardTitle className="line-clamp-1">{book.title}</CardTitle>
                        <CardDescription>
                          by {book.author} ({book.year})
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <p className="text-sm text-muted-foreground line-clamp-3">{book.description}</p>
                        <p className="text-sm mt-2">Size: {book.size}</p>
                      </CardContent>
                      <CardFooter className="p-4 pt-0 flex justify-between">
                        <Button size="sm">Read Online</Button>
                        <Button variant="outline" size="icon">
                          <Download className="h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>

                {filteredEBooks.length === 0 && (
                  <div className="text-center py-12">
                    <h3 className="text-lg font-medium">No e-books found</h3>
                    <p className="text-muted-foreground">Try adjusting your search or filters</p>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="papers" className="space-y-4">
                <div className="text-sm text-muted-foreground">
                  Showing {filteredPapers.length} of {academicPapers.length} academic papers
                </div>

                <div className="space-y-4">
                  {filteredPapers.map((paper) => (
                    <Card key={paper.id}>
                      <CardHeader>
                        <CardTitle>{paper.title}</CardTitle>
                        <CardDescription>{paper.authors}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2 mb-2">
                          <Badge variant="outline">{paper.journal}</Badge>
                          <Badge variant="outline">{paper.year}</Badge>
                          <Badge variant="outline">{paper.format}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{paper.abstract}</p>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <div className="text-sm">Size: {paper.size}</div>
                        <div className="flex gap-2">
                          <Button size="sm">Read</Button>
                          <Button variant="outline" size="icon">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  ))}
                </div>

                {filteredPapers.length === 0 && (
                  <div className="text-center py-12">
                    <h3 className="text-lg font-medium">No academic papers found</h3>
                    <p className="text-muted-foreground">Try adjusting your search</p>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="syllabi" className="space-y-4">
                <div className="text-sm text-muted-foreground">
                  Showing {filteredSyllabi.length} of {syllabi.length} course syllabi
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredSyllabi.map((syllabus) => (
                    <Card key={syllabus.id}>
                      <CardHeader>
                        <CardTitle>{syllabus.title}</CardTitle>
                        <CardDescription>{syllabus.instructor}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline">{syllabus.department}</Badge>
                          <Badge variant="outline">{syllabus.year}</Badge>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <div className="text-sm">Size: {syllabus.size}</div>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>

                {filteredSyllabi.length === 0 && (
                  <div className="text-center py-12">
                    <h3 className="text-lg font-medium">No syllabi found</h3>
                    <p className="text-muted-foreground">Try adjusting your search</p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
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
