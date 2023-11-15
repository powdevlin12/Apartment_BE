import { NextFunction, Request, Response } from 'express'
import path from 'path'
import { UPLOAD_IMG_FOLDER } from '~/constants/dir'
import { MEDIA_MESSAGE } from '~/constants/messages'
import mediaService from '~/services/media.service'
export const uploadImageController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const url = await mediaService.handleUploadImage(req)

    return res.json({
      url,
      message: MEDIA_MESSAGE.UPLOAD_IMAGE_SUCCESSFULLY
    })
  } catch (error) {
    next(error)
  }
}

export const uploadVideoController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const url = await mediaService.handleUploadVideo(req)

    return res.json({
      url,
      message: MEDIA_MESSAGE.UPLOAD_IMAGE_SUCCESSFULLY
    })
  } catch (error) {
    next(error)
  }
}

export const serveImageController = async (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.params
  return res.sendFile(path.resolve(UPLOAD_IMG_FOLDER, name), (error) => {
    res.status((error as any).statusCode).send('Not Found')
  })
}
