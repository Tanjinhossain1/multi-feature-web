// pages/api/upload-image.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const form = new formidable.IncomingForm();
    form.uploadDir = './public/uploads'; // Directory where uploaded images will be stored
    form.keepExtensions = true;

    form.parse(req, (err, fields, files) => {
      if (err) {
        console.error('Error parsing form:', err);
        res.status(500).json({ error: 'Error parsing form' });
        return;
      }
      console.error('filesfilesfiles  :', files);
      const filePath = files.image.path;
      const fileName = files.image.name;

      // You can now handle the uploaded image (e.g., save it to a database or storage service)

      res.status(200).json({ success: true, filePath, fileName });
    });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
