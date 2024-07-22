echo "Prod deploy starting..."

git pull origin master

npm install || exit

BUILD_DIR=temp npm run build:prod || exit

if [ ! -d "temp" ]; then
  echo '\033[31m temp Directory not exists!\033[0m'
  exit 1;
fi

rm -rf .next

mv temp .next

pm2 reload cultt-next-prod --update-env

echo "Prod deploy done."