import { ReactNode } from "react"

export interface IExperience {
    id?: string
    image?: string
    icon?: ReactNode
    company?: string
    position?: string
    description?: string
    startDate?: string
    endDate?: string
}