import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

export interface GridImageProps {
  /** The location of the image */
  src: string

  /** The alternate text for the image */
  alt: string

  /** (optional) The caption for under the image */
  caption?: string

  /** (optional) The width portion of the Grid that the image takes (> xs size)*/
  gridWidth?: number
}

/**
 * An image to go inside of a Grid.
 * @param src The location of the image
 * @param alt The alternate text for the image
 * @param caption (optional) The caption for under the image
 * @param gridWidth (optional) The width portion of the Grid that the image takes (> xs size)
 */
export default function GridImage({
  src,
  alt,
  caption,
  gridWidth = 6,
}: GridImageProps) {
  return (
    <Grid size={{ xs: 12, md: gridWidth }}>
      <img
        src={src}
        alt={alt}
        style={{ maxWidth: '100%', maxHeight: 400, borderRadius: 16 }}
      />
      {caption && <Typography variant="caption">{caption}</Typography>}
    </Grid>
  )
}
