from PIL import Image

"""
    Load image from source file and create image object
"""


def loadImage(image):
    output = Image.open(image)
    return output


"""
    Get the file format of the image. Typical values are “JPEG”, “PNG”.
"""


def getFormat(image):
    output = image.format
    return output


"""
    Get the pixel format used by the image. Typical values are “1”, “L”, “RGB”, or “CMYK.”
"""


def getMode(image):
    output = image.mode
    return output


"""
    Image size, in pixels. The size is given as a 2-tuple (width, height).
"""


def getSize(image):
    output = image.size
    return output


# Changing Image Type & renaming image
image.save('new_image.png')

# Resizing Images
new_image = image.resize((180, 180))
new_image.save('image_120.jpg')
print(image.size)  # Output: (259, 194)
print(new_image.size)  # Output: (120, 120)

# Cropping Images
box = (150, 200, 600, 600)
cropped_image = image.crop(box)
cropped_image.save('cropped_image.jpg')

# Rotating Images
image_rot_90 = image.rotate(90)
image_rot_90.save('image_rot_90.jpg')
image_rot_180 = image.rotate(180)
image_rot_180.save('image_rot_180.jpg')


"""
    Flipping images
"""


def getFlip(image):
    output = image.transpose(Image.FLIP_LEFT_RIGHT)
    return output


# Color Transforms
greyscale_image = image.convert('L')
greyscale_image.save('greyscale_image.jpg')
