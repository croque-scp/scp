#!/usr/bin/env sh

set -e

rm -rf resized
mkdir -p resized

for image in *.jpg; do
  # Convert to PNG to enable transparency
  convert "$image" resized/temp.png

  convert -resize 1000x\> "$image" resized/temp.png
  # When a WEBP without transparency is loaded as an overlay to another image, it starts blanked out as the overlay starts to load - add 1% transparency to a pixel to prevent that
  mogrify -alpha on -channel A -fx 'j==h-1 && i==w-1 ? A*0.99 : A' resized/temp.png
  cwebp -q 80 resized/temp.png -o "resized/${image%%.jpg}-$(identify -format '%wx%h' resized/temp.png).webp"

  # Make small-size WEBP at 300px
  convert -resize 300x\> "$image" resized/temp.png
  cwebp -q 80 resized/temp.png -o "resized/${image%%.jpg}-$(identify -format '%wx%h' resized/temp.png).webp"

  # Clean up
  rm resized/temp.png
done
