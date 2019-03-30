# Name changer

Simple app, which rename all files with the given extetion, and the given name.


## How to use?

`node index.js --dir '<path-directory>' --ext '<file-extetion> --format '<name-of-file-with-$>''`

* dir => path of the directory
* ext => extention to find in the directory like `.png` or `.js`
- format => the way how to rename files, *important* use `$$` to get the results like: `my-file-01` `my-file-02` etc.
