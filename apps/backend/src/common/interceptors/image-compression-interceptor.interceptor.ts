import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { unlink } from 'fs/promises';
import { Observable } from 'rxjs';
import sharp from 'sharp';

@Injectable()
export class ImageCompressionInterceptor implements NestInterceptor {
  async intercept(
    context: ExecutionContext,
    next: CallHandler
  ): Promise<Observable<void>> {
    const req = context.switchToHttp().getRequest();
    const multerFiles = req.files as Express.Multer.File[];

    for (const multerFile of multerFiles) {
      const data = await sharp(multerFile.path)
        .webp({ quality: 30 })
        .toBuffer();

      // push to the event loop
      unlink(multerFile.path);
      
      multerFile.path = multerFile.path.replace(/\.[^/.]+$/, '.webp');
      multerFile.filename = multerFile.filename.replace(/\.[^/.]+$/, '.webp');

      await sharp(data).toFile(multerFile.path);
    }

    return next.handle();
  }
}
