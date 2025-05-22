export type ScoreDto = {
    id: string
    year: number
    scoreType: string
    min: number
    max: number
    avg: number
}

export type UniversityData = {
    id: string
    name: string
}

export type FacultyData = {
    id: string
    name: string
    tagId: string
    university: UniversityData
}

export type FacultyDto = {
    id: string
    name: string
    logo: string
    roundSeats: number[]
    score: ScoreDto | null
    faculty: FacultyData
    updatedAt: string
    likes: number
}
