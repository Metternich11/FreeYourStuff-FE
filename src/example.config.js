export const CLOUDINARY_API = ''; // Your Cloudinary API key
export const CLOUDINARY_PRESET = ''; // Your upload preset name generated at https://cloudinary.com/console/settings/upload
export const CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/${CLOUDINARY_PRESET}/upload/`; // This should be the upload URL provided within your Cloudinary account
export const GOOGLE_API = ''; // Your Google Cloud API key for Cloud Vision API and Maps JavaScript API.
export const GOOGLE_VISION_URL = `https://vision.googleapis.com/v1/images:annotate?key=${GOOGLE_API}`; // No need to customise this one
export const HEROKU_APP_URL = 'https://fys-demo.herokuapp.com'; // Originally when we inherited this legacy project, the codebase contained several references to the app running at https://fys-demo.herokuapp.com
