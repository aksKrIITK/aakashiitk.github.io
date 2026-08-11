# Public Assets Folder

Place your personal images and assets in this folder.

## Images to Add

### Profile Image
- **File**: `aakash.jpg` (or `aakash.png`)
- **Size**: 800x800px or larger (square aspect ratio recommended)
- **Usage**: Hero section profile picture
- **Location**: `/public/aakash.jpg`

### Project Images
- **Format**: JPG or PNG
- **Size**: 600x400px recommended
- **Naming**: `project-1.jpg`, `project-2.jpg`, etc.
- **Usage**: Project card thumbnails

## Notes

- All files in this folder are served at the root URL (e.g., `/aakash.jpg`)
- Keep file sizes optimized for web (compress images)
- Use descriptive filenames
- Supported formats: JPG, PNG, SVG, WebP

## Example Usage in Code

```tsx
// Profile image
<img src="/aakash.jpg" alt="Aakash Kumar" />

// Project images
<img src="/project-1.jpg" alt="Project Title" />
```

## Getting Started

1. Place your `aakash.jpg` profile photo in this folder
2. Update project images as needed
3. Run `npm run build` to bundle for production
