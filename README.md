# xiv-bestiary
A Bestiary website for FFXIV Online, built with Next.js and MongoDB.

If you want to use this project yourself, you'll need to update ./index.js with a functional mongodb url. You'll need to either:

- Connect to your own mLab account:
  - Create ./login.js which exports your own login info
  - Update the string in ./index.js to point to your mLab DB (can also update this string to contain your login info)
- Create a local MongoDB
