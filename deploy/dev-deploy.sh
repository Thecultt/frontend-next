echo "Dev deploy starting..."

git pull origin develop

npm install || exit

BUILD_DIR=temp npm run build:dev || exit

if [ ! -d "temp" ]; then
  echo '\033[31m temp Directory not exists!\033[0m'
  exit 1;
fi

rm -rf .next

mv temp .next

pm2 reload cultt-next-dev --update-env

echo "Dev deploy done."