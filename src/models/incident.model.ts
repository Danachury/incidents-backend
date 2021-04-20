import mongoose, { Document, Model } from 'mongoose'
import { IncidentSchema } from './schemas/incident.schema'

export interface Incident extends Document {}

export const IncidentsModel: Model<Incident> = mongoose.model('incidents', IncidentSchema)
