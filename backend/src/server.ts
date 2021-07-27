import 'dotenv/config'
import 'reflect-metadata'

import express, { Request, Response, NextFunction } from 'express'
import "express-async-errors"
import cors from 'cors'

import { routes }  from './routes'

import './database'

const app = express()

app.use(express.json())

app.use(cors({
  origin:`http://localhost:${process.env.REACT_PORT}`
}))


app.use("/api/v1/", routes)

app.use((error:Error, request:Request, response:Response, next:NextFunction ) => {
  if(error instanceof Error){
    return response.status(400).json({
      error: error.message
    })
  }

  return response.status(500).json({
    message: "Internal Server Error"
  })
})

app.listen(process.env.API_PORT,
  () => console.log(`Server running on port ${process.env.API_PORT}`)
)
