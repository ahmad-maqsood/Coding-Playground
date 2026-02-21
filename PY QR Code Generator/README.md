# QR Code Generator

A simple Python script to generate QR codes from any URL and save them as images.

## Features

- Generate QR codes from URLs.
- Save QR codes as PNG images.
- Simple and easy to use.

## Usage

- Run the script
- Enter the URL you want to convert into a QR code.
- Enter a name for the QR code image (without file extension).
- The QR code image will be saved in the Generated QR Codes folder as a PNG.

## Folder Structure:-

- Generated QR Codes/   # All generated QR code images are saved here
- qr_code_generator.py  # Main script

## Example:-
- Enter your URL : https://example.com
- Name of your QR-Code image(no extension) : facebook_profile_qr
- This will generate a QR code : facebook_profile_qr.png

## Requirements

- Python 3.x
- `qrcode` library with PIL support

Install the library using pip:

```bash
pip install qrcode[pil]
