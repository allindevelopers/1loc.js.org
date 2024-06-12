rm -rf 1loc
rm -rf src/content/lines
mkdir -p src/content/lines
git clone --depth 1 https://github.com/iamandrewluca/1loc.git 1loc
cp -r 1loc/contents/ src/content/lines/
rm -rf 1loc
ls -l src/content/lines