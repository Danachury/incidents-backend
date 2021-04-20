import { Request, Response } from 'express'

export class ResponseHttp<T> {

  constructor(public status: number,
              public message?: string,
              public path?: string,
              public data?: T) {}
}

/**
 * Default Internal Server Error handler
 * @param {e.Request} req
 * @param {e.Response} res
 * @returns {e.Response}
 */
export const internalServerError = (req: Request, res: Response) => {
  const response = new ResponseHttp(
    500,
    'There was an INTERNAL SERVER ERROR. Please contact with administrator. Or try again later.',
    req.originalUrl
  )
  return res.status(500).json(response)
}
