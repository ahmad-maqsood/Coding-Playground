# First, we have to install the library.
# Open terminal and type "pip install qrcode[pil]"
# "pil" provides additional functionalities 

import qrcode

url = input("Enter your URL : ")

qr_code = qrcode.QRCode()
qr_code.add_data(url)

#Generate Image:-
img = qr_code.make_image()
img_name = input("Name of your QR-Code image(no extension) : ")
img.save(f"Generated QR Codes\\{img_name}.png")